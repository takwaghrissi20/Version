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
import FinancialData from './FinancialData';
import OrderContratStaff from './OrderContratStatusStaffManagement';
import Pagination from '../../../../@crema/components/AppsPagination';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import AppInfoView from '../../../../@crema/components/AppInfoView';
import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import CashDeduction from './Cash Deduction';
import { useIntl } from "react-intl";
const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [employee, setEmployees] = useState([]);
  const [temployeeStaff, setTemployeesStaff] = useState([]);
  const [count, setCount] = useState(0);

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
const handlePageChange = (page) => {
  setCurrentPage(page);
};
const fetchCountEmployees = async () => {
  try {
    const countEmployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/countAll`);
 
    if (!countEmployees.ok) {
      throw new Error('Failed to fetch employees');
    }
    if (countEmployees.ok) {
      const datacount = await countEmployees.json();
      setCount(datacount);
    
    }
  
  } catch (error) {
    console.error('Error fetching employees:', error);
  }
};

const fetchListEmployee = async () => {
  try {
    const endPoint =
      process.env.NODE_ENV === "development"
        ? "https://dev-gateway.gets-company.com"
        : "";
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/listBypage?page=${currentPage}&size=${pageSize}`);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      setEmployees(data);


    if (!response.ok) {
      throw new Error('La requête a échoué avec le code ' + response.status);
    }
    
    const contentType = response.headers.get('content-type');
 
  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
  }
};
useEffect(() => {
  fetchListEmployee();
  fetchCountEmployees()
}, [ currentPage, pageSize,]);

const items = [
  {
    label: 'Financial Data',
    key: '1',
    children:   
    <div >
     <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
  <StyledOrderHeaderRight style={{ flex: 1 }}>
    <div style={{ display: "flex", flexDirection: 'column', height: '100%' }}>
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
      <div style={{ flex: 1 }}>
      <FinancialData employee={employee} />
        
   
      </div>
      <div style={{ marginTop: "auto", marginBottom: "10px", display: "flex", justifyContent: "flex-end" }}>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(count / pageSize)}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  </StyledOrderHeaderRight>
</div>

  </div>
  
  }, // remember to pass the key prop
  {
    label: 'Cash Deduction ',
    key: '2',
    children:
    <>
    <CashDeduction></CashDeduction>,
    

    
    </>
    

  },
  {
    label: 'Salary Payment ',
    key: '3',
    children:<OrderContratStaff temployee={temployeeStaff}></OrderContratStaff>,
  },
  {
    label: 'Salaries Increase Request',
    key: '4',
    children:<OrderContratStaff temployee={temployeeStaff}></OrderContratStaff>,
  },


    
];


  return (
    <div >
    <AppPageMeta title='Payroll' />
    <h2 className="Title">Staries Tracker </h2>

      <div style={{marginBottom:"20px"}} >
          <StyledBuyCellCard style={{ paddingLeft: "10px"}} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>

        <AppInfoView />

    

</div >
 

      {/* <AppsContainer
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
    </AppsContainer> */}


    

      

    <AppInfoView />
  </div>
  
  );
};

export default Table;


