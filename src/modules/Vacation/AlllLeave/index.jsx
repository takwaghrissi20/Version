import React, { useEffect, useState } from "react";
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import { Typography} from 'antd';
import AllLeaveTab from "./AllLeaveTab";
import ListApprovedLeave from "./AllLeaveTab/ListApprovedLeave";
import ListRejectedLeave from "./AllLeaveTab/ListRejectedLeave";


const AllLeave = () => {
  
  const items = [
    {
      label: 'Pending Leave ',
      key: '1',
      children: <AllLeaveTab/>,
    }, // remember to pass the key prop
    {
      label: 'Approved Leave',
      key: '2',
      children: <ListApprovedLeave /> ,
    },
    {
      label: 'Rjected Leave',
      key: '3',
      children: <ListRejectedLeave/> ,
    },

  ];

  return (
    <>
    
  <div style={{marginBottom:"20px"}} >
  <Typography.Title level={4}>All Leave Applications</Typography.Title>
          <StyledBuyCellCard style={{ paddingLeft: "10px"}} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>

        

    

</div >
    </>
  );

}
export default AllLeave;