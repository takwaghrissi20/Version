import React from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';

const TabsForms = ({ demobilization }) => {

  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={demobilization} />
    </AppsContainer>
  );
};

export default TabsForms;
