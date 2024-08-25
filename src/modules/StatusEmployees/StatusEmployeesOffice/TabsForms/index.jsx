import React from 'react';
import AppsContainer from "../../../../@crema/components/AppsContainer";
import OrderTable from './OfficeTable';

const TabsForms = ({ dataemployees,positionCount,departmentCount,total }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={dataemployees}
      positionCount={positionCount}
      departmentCount={departmentCount}
      total={total}
      />
    </AppsContainer>
  );
};

export default TabsForms;
