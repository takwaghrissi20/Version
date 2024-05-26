import React, { useState,useEffect } from 'react';
import AppsContainer from '../../../../@crema/components/AppsContainer';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppPageMeta from '../../../../@crema/components/AppPageMeta';
import { Input } from 'antd';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderRight,

} from './index.styled';
import OrderContrat from './OrderContratStatus';
import OrderContratStaff from './OrderContratStatusStaffManagement';

import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import { useIntl } from "react-intl";
const Table = () => {
  const { messages } = useIntl();
  

  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const pageSize = 10;
  const [temployee, setTemployees] = useState([]);
  const [temployeeStaff, setTemployeesStaff] = useState([]);

  const [{ loading }, { setQueryParams }] = useGetDataApi(
   //int,
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
 
//  // Filtrer les données en fonction de la recherche
//  const filteredData = int.filter(item =>
//   item.fullname.toLowerCase().includes(search.toLowerCase())
//   // Ajoutez d'autres conditions de filtrage au besoin
// );
// const startIndex = (page - 1) * pageSize;
// const paginatedData = filteredData.slice(startIndex, startIndex + pageSize);
const fetchListEmployee = async () => {
  try {
    const endPoint =
      process.env.NODE_ENV === "development"
        ? "https://dev-gateway.gets-company.com"
        : "";

    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('La requête a échoué avec le code ' + response.status);
    }
    
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json(); // Utilisez response.json() pour récupérer les données JSON
      const filteredData = data.filter(employee =>  
        
        employee.contractCategory=== 'CAT-B2' ||
        employee.contractCategory === 'CAT-B3' ||
        employee.contractCategory === 'CAT-C'  ||
        employee.contractCategory === 'CAT-D'
        
        
      );
      const filteredDataStaff = data.filter(employee => 
        employee.contractCategory=== 'CAT-A1' ||
        employee.contractCategory=== 'CAT-A2' ||
        employee.contractCategory === 'CAT-A3' ||
        employee.contractCategory === 'CAT-B1' || 
        employee.contractCategory === 'CAT-E1'   ||
        employee.contractCategory === 'CAT-E2'   ||
        employee.contractCategory === 'SERVICE1-E3' ||
        employee.contractCategory === 'SERVICE2-E3'
        
        
      );
  
      setTemployees(filteredData)
      setTemployeesStaff(filteredDataStaff)
    
    } 
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
};
useEffect(() => {
  fetchListEmployee();
}, [ ]);
const items = [
  {
    label: 'Employees Construction Team',
    key: '1',
    children:  <OrderContrat temployee={temployee || []}/> ,
  }, // remember to pass the key prop
  {
    label: 'Employees Staff Management',
    key: '2',
    children:<OrderContratStaff temployee={temployeeStaff}></OrderContratStaff>,
  },

    
];


  
  return (
    <>
    <AppPageMeta title='Orders' />
    <AppsContainer
     title={messages['sidebar.app.contract Status']}
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
           

            {/* <StyledOrderHeaderPagination
                pageSize={pageSize}
                orderData={paginatedData}
                page={page}
                onChange={onPageChange}
            /> */}
          </StyledOrderHeaderRight>
        </StyledOrderHeader>
      </AppsHeader>
 

      <AppsContainer
       contentStyle={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
        style={{paddingRight:"20px"}}   
        type='bottom'
        fullView>
       <StyledBuyCellCard   style={{ paddingLeft: "10px" }} heightFull>
      <StyledTabs defaultActiveKey='1' items={items} />
    </StyledBuyCellCard>
    </AppsContainer>


    

      
    </AppsContainer>
    <AppInfoView />
  </>
  
  );
};

export default Table;


