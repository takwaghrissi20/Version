import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import OrderTable from './DataPassportExpired';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
  StyledCustomerHeaderRight,
} from '../../../../styles/index.styled';

import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import { useNavigate } from "react-router-dom";
const PassportExpired  = ({ passportExpired, roles, token }) => {
  const navigate = useNavigate();

  return (
    <AppsContainer type='bottom' fullView>
      <AppsContent
        style={{
          paddingTop: 10,
          paddingBottom: 10,

        }}>

        <OrderTable
         passportExpired={passportExpired}
          roles={roles}
          token={token}

        />

      </AppsContent>
    </AppsContainer>

  );
};

export default PassportExpired ;
