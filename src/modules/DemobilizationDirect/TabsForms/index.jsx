import React from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';

const TabsForms = ({ demobilization }) => {
  
  console.log("jjkllllll",demobilization)
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={demobilization} />
    </AppsContainer>
  );
};

export default TabsForms;
