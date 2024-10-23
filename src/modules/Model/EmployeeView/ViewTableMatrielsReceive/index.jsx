import React from 'react';
import PropTypes from 'prop-types';
import {

  StyledTravelTable,
} from '../index.styled';


const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
    render: (text) => text === null || text === undefined ? 'null' : text
    // render: (_, record) => (
    //   <StyledFlex>
    //     <Avatar
    //       style={{ border: '0 none !important', height: 30 }}
    //       alt={record.name}
    //       src={record.icon}
    //     />
    //     <Typography.Title
    //       level={5}
    //       style={{
    //         fontSize: 14,
    //         marginLeft: 12,
    //       }}
    //     >
    //       {record.description}
    //     </Typography.Title>
    //   </StyledFlex>
    // ),
  },
  {
    title: ' Date Receiving ',
    dataIndex: 'dateRecipeEmp',
    key: 'dateRecipeEmp',
    align: 'center',
    render: (text) => text === null || text === undefined ? 'null' : text
    // render: (_, record) => (
    //   <StyledFlex2
    //     style={{
    //       color: record.type === 'looser' ? '#EA3943' : '#16C784',
    //     }}
    //   >
      
     
    //   </StyledFlex2>
    // ),
  },
  {
    title: 'Date Handover',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (text) => text === null || text === undefined ? 'null' : text
  },
  {
    title: 'Details',
    dataIndex: 'comments',
    key: 'comments',
    align: 'center',
    render: (text) => text === null || text === undefined ? 'null' : text
  },
  {
    title: 'Handover By',
    dataIndex: 'handoverByDep',
    key: 'handoverByDep',
    align: 'center',
    render: (text) => text === null || text === undefined ? 'null' : text
  },
  {
    title: 'Doc Scan',
    dataIndex: 'scanDoc',
    key: 'scanDoc',
    align: 'center',
    render: (text) => text === null || text === undefined ? 'null' : text
  }
];

const MatrielTable = ({ findIdDataMatriel }) => {

  return (
    <StyledTravelTable
      hoverColor
      data={findIdDataMatriel}
      scroll={{ x: 'auto', y: 285 }}
      columns={columns}
    />
  );
};

export default MatrielTable;

MatrielTable.propTypes = {
  data: PropTypes.array,
};
