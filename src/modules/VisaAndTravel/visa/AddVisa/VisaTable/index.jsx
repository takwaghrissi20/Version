import React, { useState, useEffect } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import PropTypes from 'prop-types';
import { StyledAnChar, StyledOrderTable, StyledScrumBoardDatePicker } from '../../../../../styles/index.styled';
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
       
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

EditableCell.propTypes = {
  editing: PropTypes.bool,
  dataIndex: PropTypes.string,
  title: PropTypes.string,
  inputType: PropTypes.string,
  children: PropTypes.node,
};

const EditableTable = ({ dataemployeesVisa }) => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataemployeesVisa && dataemployeesVisa.length > 0) {
      setData(dataemployeesVisa);
    }
  }, [dataemployeesVisa]);

  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [

        {
          title: 'APP #',
          dataIndex: 'idVisa',
          key: 'idVisa',
          width: 150,
          render: (text) => <StyledAnChar>V-{text}</StyledAnChar>,
        },
        {
          title: 'name',
          dataIndex: 'name',
          width: '15%',
          
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
          width: '15%',
         
        },
        {
          title: 'PASSPORT',
          dataIndex: 'passportnumber',
          key: 'passportnumber',
          width: '15%',
          
        },
        {
          title: 'COUNTRY',
          dataIndex: 'destination',
          key: 'destination',
          width: '15%',
        
        },
        {
          title: 'Project Name',
          dataIndex: 'projName',
          key: 'projName',
          width: '15%',
          editable: true,
        
        },
   
  
    {
     
    
          title: 'Send',
          dataIndex: 'requestSendVisa',
          key: 'requestSendVisa',
          width: '15%',
          editable: true,
        
        },
        {
          title: 'Date',
          dataIndex: 'dateVisa',
          key: 'dateVisa',
          width: '15%',
          editable: true,
        
        },

       
     
        {
          title: 'Date',
          dataIndex: 'dateVisa',
          key: 'dateVisa',
          width: '15%',
          editable: true,
        
          
        },
        {
          title: 'Date Passport Submit',
          dataIndex: 'passportSubmitdate',
          key: 'passportSubmitdate',
          width: '15%',
          editable: true,
         
          
        },
    
      
        {
          title: 'Visa Ready',
          dataIndex: 'visaReady',
          key: 'visaReady',
          width: '15%',
          editable: true,
     
       
        },
        {
          title: 'FINISH DATE',
          dataIndex: 'finishDateVisa',
          key: 'finishDateVisa',
          width: '15%',
          editable: true,
        
        },
    
  
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title='Sure to cancel?' onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ''}
            onClick={() => edit(record)}
          >
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName='editable-row'
        
      />
    </Form>
  );
};

const EdiTableRow = ({ dataemployeesVisa }) => {
  return <EditableTable dataemployeesVisa={dataemployeesVisa} />;
};

export default EdiTableRow;
