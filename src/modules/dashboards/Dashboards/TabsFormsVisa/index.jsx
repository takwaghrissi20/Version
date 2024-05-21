import React from 'react';

import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import { Input } from 'antd';

import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';

import {
  StyledOrderFooterPagination,
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderRight,
  StyledOrderHeaderPagination,
} from '../../../../styles/index.styled';
import OrderTable from '../../../../../src/modules/dashboards/Dashboards/DahbordsTable';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import { useIntl } from 'react-intl';

const TabsFormsVisa= () => {
  const onChange = (page) => {
    setPage(page);
  };
  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };
  const { messages } = useIntl();
 
  return (
 
      <>
      <p>Visa Expired</p>
      <AppsContainer
       
        type='bottom'
        fullView>
        <AppsHeader>
          <StyledOrderHeader>
            <StyledOrderHeaderInputView>
              {/* <Input
                id='user-name'
                placeholder='Search'
                type='search'
                onChange={onSearchOrder}
              /> */}
            </StyledOrderHeaderInputView>
            
          </StyledOrderHeader>
        </AppsHeader>

      
    
       
       
      </AppsContainer>
      </>
 
  );
};

export default TabsFormsVisa;
