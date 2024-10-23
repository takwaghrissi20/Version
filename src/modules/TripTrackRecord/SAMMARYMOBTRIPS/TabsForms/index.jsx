import React from 'react';
import AppsContainer from "../../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';
const TabsForms = ({ demopTrips }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={demopTrips} />
    </AppsContainer>
  );
};

export default TabsForms;
