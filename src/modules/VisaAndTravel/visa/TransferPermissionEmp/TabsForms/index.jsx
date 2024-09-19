import React from 'react';
import AppsContainer from "../../../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';
const TabsForms = ({ transferEmp ,user}) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={transferEmp} user={user} />
    </AppsContainer>
  );
};

export default TabsForms;
