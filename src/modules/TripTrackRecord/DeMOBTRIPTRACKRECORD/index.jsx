import React, { useEffect, useState } from 'react';
import AppsContainer from '../../../@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../@crema/components/AppsContainer/AppsContent';
import AppInfoView from '../../../@crema/components/AppInfoView';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import Pagination from '../../../@crema/components/AppsPagination';
import CustomerTableSite from './TripTrakRecord';

import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import {

  StyledCustomerHeader,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,

} from './index.styled';

const DemobTripTrack = () => {
  const { messages } = useIntl();
  const [employeessite, setEmployeessite] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [demopTrips, setDemopTrips] = useState([]);


  const handlePageChangeSite = (page) => {
    setCurrentPage(page);
  };



  useEffect(() => {
    fetchTravel()
  }, [currentPage, pageSize]);
 
  const fetchTravel = async () => {
    try {
      let url = `https://dev-gateway.gets-company.com/api/v1/mobDemob/list?page=${currentPage}&size=${pageSize}`;



      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch Demob Trips');
      }

      const data = await response.json(); 
      setDemopTrips(data);
      setCount(data.length); 
    } catch (error) {
      console.error('Error fetching Demob Trips:', error);
    }
  };
  



  const items = [
    {
      label: 'Demobilization Trip Track Record',
      key: '1',
      children: (
        <>
          <AppsHeader key={'wrap'}>
          <StyledCustomerHeader>
          <StyledCustomerInputView>
          
            </StyledCustomerInputView>
            <StyledCustomerHeaderRight>
         
          <Pagination
            currentPage={currentPage}
            //totalPages={Math.ceil(countOffice / pageSize)}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChangeSite}
          />
  
          </StyledCustomerHeaderRight>
         </StyledCustomerHeader>
         </AppsHeader>
          <CustomerTableSite loading={loading} orderData ={demopTrips} />
        
        </>
      ),
    },
   
  ];
  return (
    <>
      <AppPageMeta title='Demobilization Trip Track Record' />
      <AppsContainer
        title={messages['sidebar.hr.DemobTripTrack']}
        fullView
        type='bottom'
      >
        <AppsContent
          key={'wrap1'}
          style={{
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <StyledBuyCellCard style={{ paddingLeft: '10px' }} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>
        </AppsContent>
      </AppsContainer>

      <AppInfoView />
    </>
  );
};


export default DemobTripTrack  ;
