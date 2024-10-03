import React, { useEffect, useState } from "react";
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import { Typography} from 'antd';
import PendingRequestPayment from "./AllRequestPaymentTab";
import ListApprovedRequestPayment from "./AllRequestPaymentTab/ListApprovedRequestPayment";
import ListRejectedPaymentRequest from "./AllRequestPaymentTab/ListRejectedRequestPayment";


const AllRequestPament = () => {
  const user = localStorage.getItem("role");
  const items = [
    {
      label: 'Pending Request Payment',
      key: '1',
      children: <PendingRequestPayment user={user}/>,
    }, // remember to pass the key prop
    {
      label: 'Approved Request Payment',
      key: '2',
      children: <ListApprovedRequestPayment user={user} /> ,
    },
    {
      label: 'Rjected Request Payment',
      key: '3',
      children: <ListRejectedPaymentRequest user={user}/> ,
    },

  ];

  return (
    <>
    
  <div style={{marginBottom:"20px"}} >
  <Typography.Title level={4}>All Request Payment Applications</Typography.Title>
          <StyledBuyCellCard style={{ paddingLeft: "10px"}} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>

        

    

</div >
    </>
  );

}
export default AllRequestPament ;
