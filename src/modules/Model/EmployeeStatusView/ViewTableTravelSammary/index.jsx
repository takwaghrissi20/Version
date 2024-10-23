import React from 'react';
import PropTypes from 'prop-types';
import {
  
  StyledTravelTable,
} from '../index.styled';


const columns = [
  {
    title: 'Date Of Travel',
    dataIndex: 'dateOfTravel',//Table Travel
    key: 'dateOfTravel',
    align: 'center',
   
  },
  {
    title: 'From /To ',
    dataIndex: 'travelFromTo',
    key: 'travelFromTo',
    align: 'center',
  
  },
  {
    title: 'Project Work',
    dataIndex: 'projName',
    key: 'projName',
    align: 'center',
  
  },
];

const TravelTable = ({ findIdDataTravel }) => {
  console.log("findIdDataTravel",findIdDataTravel)
  return (
    <StyledTravelTable
      hoverColor
      data={findIdDataTravel}
      scroll={{ x: 'auto', y: 285 }}
      columns={columns}
    />
  );
};

export default TravelTable;

TravelTable.propTypes = {
  data: PropTypes.array,
};
