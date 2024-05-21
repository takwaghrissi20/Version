import React,{useState,useEffect} from 'react';

import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import { Input } from 'antd';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';

import {
  StyledOrderFooterPagination,
  StyledOrderHeader,
  StyledOrderHeaderRight,
  StyledOrderHeaderPagination,

} from '../../../../styles/index.styled';
import OrderTable from '../../../../../src/modules/dashboards/Dashboards/DahbordsTable';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import { useIntl } from 'react-intl';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';

const TabsForms = ({ datarecruitement }) => {
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const pageSize = 10;
  const [{ loading }, { setQueryParams }] = useGetDataApi(
    datarecruitement,
     {},
     {},
     false,
   );

  const onChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);
  
  const { messages } = useIntl();
 
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
 const filteredData = datarecruitement?.filter(item =>
  item?.requestedDicipline?.toLowerCase().includes(search.toLowerCase())
  // Ajoutez d'autres conditions de filtrage au besoin
);
const startIndex = (page - 1) * pageSize;
const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);

  return (
    <div style={{boxShadow: "none !important"}}>
      <AppsContainer
        type='bottom'
        fullView>
       
        <AppsHeader>
          <StyledOrderHeader>
  
            <div style={{ marginRight: 20 ,boxShadow: "none !important"}}>
            
              <Input.Search
                iconPosition='right'
                id='user-name'
                onChange={onSearchOrder}
                placeholder={messages['common.searchHere']}/>
              
              </div>

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
            boxShadow: "none",
            overflow: 'auto ',
            overflowY: 'auto', // Assurez-vous que le contenu est scrollable
        
          }}
        >
          <OrderTable 
           loading={loading} orderData={paginatedData}

          />
       
        </AppsContent>

        <StyledOrderFooterPagination
          pageSize={10}
          count={datarecruitement?.count}
          page={page}
          onChange={onChange}
        />

      </AppsContainer>
    </div>

  );
};

export default TabsForms;
