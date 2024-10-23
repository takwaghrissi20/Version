import React from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';

const TabsForms = ({ mobilization }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={mobilization} />
    </AppsContainer>
  );
};

export default TabsForms;
