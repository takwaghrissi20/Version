import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Select, Table ,Row,Col} from 'antd';
import AppAnimate from '../../../../../@crema/components/AppAnimate';
import { StyledAnChar, StyledOrderTable, StyledAction,StyledScrumBoardDatePicker} from '../../../../../styles/index.styled';
import { AiFillEdit } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { FaRegSave } from "react-icons/fa";
import { CiSaveUp1 } from "react-icons/ci";

const OrderTable = ({ dataemployeesVisa }) => {
 
  const [editingPasportRow, setEditingPassportRow] = useState(null);

  const [editingRow, setEditingRow] = useState(null);
  const [findIdData, setFindIdData] = useState(null);
  const [editingData, setEditingData] = useState({});

  const { Option } = Select;
 //Find By Id
 const findId = async (code) => {
  try {
    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/getByIdv?id=${code}`, {
      method: 'Get',
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    if (response.ok) {
      const responseData = await response.text();
      // navigate('/Hr/VisaHealth/UpdateVisa');
    console.log("responseeeeeee",responseData )
    
      setFindIdData(responseData); 
      // const projects = responseData?.projects?.flatMap(employee => employee.projName);     
      // setProjects(projects)
      // setId(responseData?.id)
    
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du id eMPLOYEE:", error);
  }
};

;
const startEdit = (record) => {
  findId(record.id);
  setEditingRow(record.id);
  setEditingData({ ...record });
};

const cancelEdit = () => {
  setEditingRow(null);
  setEditingData({});
};
console.log("editingData",editingData)
  const saveEdit = async (id) => {
    console.log("editingData",editingData)
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/update?id=${id}`, {
         
          method: 'PUT',
          headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
          },
     
          body: JSON.stringify(editingData)
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        if (response.ok) {
  
          const responseData = await response.json();
          alert("Success Update Visa " + responseData.idVisa);
         setEditingRow(null);
         setEditingData({});
         alert("Succes Update Visa ")
         
          //handleAddContactClose(true)
        }
  
        // Handle responseData if needed
      } catch (error) {
        console.error("Erreur lors de la récupération du Id :", error);
      }



    // Here you should handle saving the data, for example, sending it to a server
    console.log("Saving data: ", editingData);
    setEditingRow(null);
    setEditingData({});
  };
  const handleChange = (key, value) => {
    setEditingData({ ...editingData, [key]: value });
  };


  const VisaRequest= [
    { type: 'SENT' },
    { type: 'Not SENT' },

  ];
  const vCableReceive = [
    { type: 'RECEIVED' },
    { type: 'Not RECEIVED' },
  
  ];
  const PASSPORTSUBMITTED = [
    { type: 'SUBMITTED' },
    { type: 'Not SUBMITTED' },
  
  ];
  const  visaReady = [
    { type: 'ready' },
    { type: 'Not ready' },
  
  ];
 
  const  finalVisaReceive= [
    { type: 'FINAL RECEIVED' },
    { type: 'Not FINAL RECEIVED' },
  
  ];
  
  const columns = [
    {
      title: 'APPLICATION NUMBER',
      dataIndex: 'idVisa',
      key: 'idVisa',
      render: (text) => <StyledAnChar>V-{text}</StyledAnChar>,
    },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
   
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
      // render: (text, record) => (
      //   editingRow === record.id ? 
      //     <Input
      //      value={editingData.position} 
      //      readOnly/> : 
      //     text
      // ),
    },
    {
      title: 'PASSPORT NUMBER',
      dataIndex: 'passportnumber',
      key: 'passportnumber',
      render: (text, record) => (
        editingRow === record.id ? 
          <Input value={editingData.passportnumber}
                 onChange={(e) => handleChange('passportnumber', e.target.value)} /> : 
          text
      ),
    },
    {
      title: 'To Apply For visa',
      dataIndex: 'toApplyForVisa',
      key: 'toApplyForVisa',
      render: (text, record) => (
        editingRow === record.id ? 
          <Input value={editingData.toApplyForVisa}
                 placeholder='TO APPLY FOR VISA' 
                 onChange={(e) => handleChange('toApplyForVisa', e.target.value)} /> : 
          text
      ),
    },
    {
      title: 'COUNTRY',
      dataIndex: 'destination',
      key: 'destination',
      render: (text, record) => (
        editingRow === record.id ? 
          <Input value={editingData.destination} 
                 onChange={(e) => handleChange('destination', e.target.value)} /> : 
          text
      ),
    },
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
      // render: (text, record) => (
      //   editingRow === record.id ? 
      //     <Input value={editingData.projName} onChange={(e) => handleChange('projName', e.target.value)} /> : 
      //     text
      // ),
    },
    {
      title: 'Request For Visa  Send ',
      dataIndex: 'requestSendVisa',
      key: 'requestSendVisa',
      render: (text, record) => (
        editingRow === record.id ? 
          <Select placeholder="Select Request For Visa Send"
                  value={editingData.requestSendVisa}
                  onChange={(value) => handleChange('requestSendVisa', value)} >
            {VisaRequest.map(p => (
              <Option key={p.type} value={p.type}>
                {p.type}
              </Option>
            ))}
          </Select> : 
          text
      ),
    },
    {
      title: 'Date Request For Visa  Send ',
      dataIndex: 'dateVisa',
      key: 'dateVisa',
      render: (text, record) => (
        editingRow === record.id ? 
        <Input value={editingData.dateVisa} onChange={(date, dateString) => handleChange('dateVisa', dateString)} />:
          // <StyledScrumBoardDatePicker
          //   placeholder='Date Request For Visa  Send'
          //   value={editingData.dateVisa}
          //   onChange={(date, dateString) => handleChange('dateVisa', dateString)}
          // /> : 
          text
      ),
    },
    {
      title: 'Visa Cable ',
      dataIndex: 'vCableReceive',
      key: 'vCableReceive',
      render: (text, record) => (
        editingRow === record.id ? 
          <Select placeholder="Select Request For Visa Cable"
                  value={editingData.vCableReceive}
                  onChange={(value) => handleChange('vCableReceive', value)} >
            {vCableReceive.map(p => (
              <Option key={p.type} value={p.type}>
                {p.type}
              </Option>
            ))}
          </Select> : 
          text
      ),
    },
    {
      title: 'Date Visa Cable',
      dataIndex: 'vCabledate',
      key: 'vCabledate',
      render: (text, record) => (
        editingRow === record.id ? 
        <Input value={editingData.vCabledate} onChange={(date, dateString) => handleChange('vCabledate', dateString)} />:
          // <StyledScrumBoardDatePicker
          //   placeholder='Date Visa Cable'
          //   value={editingData.vCabledate}
          //   onChange={(date, dateString) => handleChange('vCabledate', dateString)}
          // /> : 
          text
      ),
    },
    {
      title: 'Passport Submit To Embassy',
      dataIndex: 'passportSubmit',
      key: 'passportSubmit',
      render: (text, record) => (
        editingRow === record.id ? 
          <Select placeholder="Select Passport Submit To Embassy"
                  value={editingData.passportSubmit}
                  onChange={(value) => handleChange('passportSubmit', value)} >
            {PASSPORTSUBMITTED.map(p => (
              <Option key={p.type} value={p.type}>
                {p.type}
              </Option>
            ))}
          </Select> : 
          text
      ),
    },
    {
      title: 'Date Passport Submit To Embassy',
      dataIndex: 'passportSubmitdate',
      key: 'passportSubmitdate',
      render: (text, record) => (
        editingRow === record.id ? 
        <Input value={editingData.passportSubmitdat} onChange={(date, dateString) => handleChange('vCabledate', dateString)} />:
          // <StyledScrumBoardDatePicker
          //   placeholder='Date Passport Submit To Embassy'
          //   value={editingData.passportSubmitdate}
          //   onChange={(date, dateString) => handleChange('passportSubmitdate', dateString)}
          // /> : 
          text
      ),
    },
    {
      title: 'Visa Ready',
      dataIndex: 'visaReady',
      key: 'visaReady',
      render: (text, record) => (
        editingRow === record.id ? 
          <Select placeholder="visaReady"
                  value={editingData.visaReady}
                  onChange={(value) => handleChange('visaReady', value)} >
            {visaReady.map(p => (
              <Option key={p.type} value={p.type}>
                {p.type}
              </Option>
            ))}
          </Select> : 
          text
      ),
    },
    {
      title: 'FINISH DATE',
      dataIndex: 'finishDateVisa',
      key: 'finishDateVisa',
      render: (text, record) => (
        editingRow === record.id ? 
          <Select placeholder="FINISH DATE"
                  value={editingData.finishDateVisa}
                  onChange={(value) => handleChange('finishDateVisa', value)} >
            {finalVisaReceive.map(p => (
              <Option key={p.type} value={p.type}>
                {p.type}
              </Option>
            ))}
          </Select> : 
          text
      ),
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) => (
        editingRow === record.id ? (
          <Row gutter={16}>
          <Col xs={24} sm={12}>
          < CiSaveUp1  className="iconeEditSave" onClick={() =>saveEdit(record.idVisa)}>Save</CiSaveUp1 >
            </Col>
            <Col xs={24} sm={12}>
            <MdCancel className="iconeEdit"
            onClick={cancelEdit} >Cancel</MdCancel >
              </Col>
            </Row>
          // <Row>
          //   <Button onClick={() =>saveEdit(record.id)}>Save</Button>
          //   <Button onClick={cancelEdit}>Cancel</Button>
          // </Row>
        ) : (
          <AiFillEdit onClick={() => startEdit(record)} className='iconeEdit' />
        )
      ),
    },
  ];

  const [tableHeight, setTableHeight] = useState('auto');

  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.7;
      setTableHeight(tableHeight);
    };

    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);

  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <StyledOrderTable
        hoverColor
        data={dataemployeesVisa}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
        className='order-table'
        rowKey='id'
      />
    </AppAnimate>
  );
};

OrderTable.defaultProps = {
  dataemployeesVisa: [],
};

OrderTable.propTypes = {
  dataemployeesVisa: PropTypes.array,
};

export default OrderTable;
