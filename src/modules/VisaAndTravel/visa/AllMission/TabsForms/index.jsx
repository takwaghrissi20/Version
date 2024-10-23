import React from 'react';
import AppsContainer from "../../../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';
const TabsForms = ({ datamission ,user}) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={datamission} user={user} />
    </AppsContainer>
  );
};

export default TabsForms;
