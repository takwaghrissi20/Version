import React, { useEffect, useState } from 'react';
import AppsContainer from '../../../../@crema/components/AppsContainer';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { Input } from 'antd';
import AppPageMeta from '../../../../@crema/components/AppPageMeta';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderPagination,
  StyledOrderHeaderRight,

} from './index.styled';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import OrderIntegration from './OrderIntegration';



const DataIntegration = ({int}) => {

  
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const pageSize = 10;

  const [{ loading }, { setQueryParams }] = useGetDataApi(
   int,
    {},
    {},
    false,
  );
  const onPageChange = (page) => {
    setPage(page);
  };

  
  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(1); 
  };
 
 // Filtrer les données en fonction de la recherche
 const filteredData = int.filter(item =>
  item.fullname.toLowerCase().includes(search.toLowerCase())
  // Ajoutez d'autres conditions de filtrage au besoin
);
const startIndex = (page - 1) * pageSize;
const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);



  return (
    <>
      <AppPageMeta title='Orders' />
      <AppsContainer
        title={messages['hr.dataIntegration']}
        type='bottom'
        fullView
      >
        <AppsHeader>
          <StyledOrderHeader>
            <StyledOrderHeaderInputView>
              <Input
                id='user-name'
                placeholder='Search'
                type='search'
                onChange={onSearchOrder}
              />
            </StyledOrderHeaderInputView>
            <StyledOrderHeaderRight>
             

              <StyledOrderHeaderPagination
                  pageSize={pageSize}
                  orderData={paginatedData}
                  page={page}
                  onChange={onPageChange}
              />
            </StyledOrderHeaderRight>
          </StyledOrderHeader>
        </AppsHeader>
  



        <AppsContent
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <OrderIntegration loading={loading} orderIntegration={paginatedData} /> 
        </AppsContent>

        
      </AppsContainer>
      <AppInfoView />
    </>
  );
};

export default DataIntegration;
