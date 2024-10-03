import React from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable } from '../../../styles/index.styled';
import { Input } from 'antd';

const OrderTable = ({ dateemp,setDescriptions,descriptions }) => {
  const dataSource = Array.isArray(dateemp) ? dateemp : [dateemp];
console.log("dataSource 222",dataSource)
  const handleDescriptionChange = (id, value) => {
    setDescriptions(prev => ({ ...prev, [id]: value }));
  };

  const columns = [
    { title: 'GetsId', dataIndex: 'getsId', key: 'getsId' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Position', dataIndex: 'position', key: 'position' },
    {
      title: 'Other Description(Adress)',
      dataIndex: 'getsId',
      render: (id) => (
        <Input
          value={descriptions[id] || ''}
          onChange={(e) => handleDescriptionChange(id, e.target.value)}
          placeholder="Enter description"
        />
      ),
    },
    { title: 'MONTH OF', dataIndex: 'monthOfSetelment', key: 'monthOfSetelment' }, 
    { title: 'AMOUNT Setelment', dataIndex: 'paidSetelment', key: 'paidSetelment', render: (text) => text },
  ];

  return (
    <>
      <StyledOrderTable
        hoverColor
        dataSource={dataSource} // Pass the ensured array here
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}
      />
    </>
  );
};

OrderTable.propTypes = {
  dateemp: PropTypes.array, // Expecting dateemp to be an array
};

export default OrderTable;
