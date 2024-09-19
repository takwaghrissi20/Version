import React from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';
const TabsForms = ({  salary ,user}) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={ salary} user={user} />
    </AppsContainer>
  );
};

export default TabsForms;
