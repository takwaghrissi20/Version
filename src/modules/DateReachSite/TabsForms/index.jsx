import React from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';

const TabsForms = ({ demobilization,fetchDemobilization }) => {
 
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={demobilization}
      fetchDemobilization={fetchDemobilization}
      
      />
    </AppsContainer>
  );
};

export default TabsForms;
