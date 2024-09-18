import React from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import OrderTable from '../DahbordsTable';
const TabsForms = ({ allproj,user,project }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable
       orderData={allproj}
       project={project}
      user={user} />
    </AppsContainer>
  );
};

export default TabsForms;
