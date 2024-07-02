import React from 'react';
import AppsContainer from "../../../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';
const TabsForms = ({ datamission }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={datamission} />
    </AppsContainer>
  );
};

export default TabsForms;
