import React from 'react';
import AppsContainer from "../../../../@crema/components/AppsContainer";
import OrderTable from '../../../../../src/modules/TripTrackRecord/DemobPermissionSite/DahbordsTable';
const TabsForms = ({ mob }) => {
  return (
    <AppsContainer type='bottom' fullView>
      <OrderTable orderData={mob} />
    </AppsContainer>
  );
};

export default TabsForms;
