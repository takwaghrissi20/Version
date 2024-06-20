import React from 'react';
import AppsContainer from "../../../../../@crema/components/AppsContainer";
import OrderTable from './TravelTable';

const TabsForms = ({ dataemployees }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={dataemployees} />
    </AppsContainer>
  );
};

export default TabsForms;
