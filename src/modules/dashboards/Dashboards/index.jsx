import React, { useEffect, useState,useRef } from 'react';
import AppsContainer from '../../../@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Input, List, Col } from 'antd';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import Pagination from '../../../@crema/components/AppsPagination';
import RecruitementTable from './RecruitementTable';
import PassportExpired  from './PassportExpired';
import VisaExpired from './VisaExpired';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import StatsDirCard from '../CommonComponents/StatsDirCard';

import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import {
  StyledCustomerHeader,
  StyledCustomerHeaderRight,
  StyledCustomerInputView,

} from './index.styled';
import { useGetDataApi } from '../../../@crema/hooks/APIHooks';
const Dashboards = () => {
  const dropdownRef = useRef(null);
  const { messages } = useIntl();
 
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [countOffice, setCountOffice] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);
  ///////
  const [datarecruitement, setDatarecruitement] = useState([]);
  const [datarecruitementFiltrer, setDatarecruitementFiltrer] = useState([]);
  const [count, setCount] = useState(0);
  const [{ apiData: metricsData }] = useGetDataApi('/dashboard/metrics');
  const [{ apiData: crmData }] = useGetDataApi('/dashboard/crm');
  const [passportExpered, setPassportExpered] = useState([]);
  const [visaExpered, setVisaExpered] = useState([]);
  const handlePageChangeOffice = (page) => {
    setCurrentPage(page);
  };
  const handlePositionFilterChange = (event) => {
    const filterValue = event.target.value.trim();
    setNameFilter(filterValue);
   
    if (filterValue !== '') {
      clearTimeout(typingTimeout);
      const timeoutId = setTimeout(() => {
        fetchFilteredRecruitement(filterValue);
        setIsDropdownOpen(true);
      }, 300); // Wait 300 ms after typing to trigger the search
      setTypingTimeout(timeoutId);
    } else {
      setIsDropdownOpen(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const fetchFilteredRecruitement = async (filterValue) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/filterByPosition?position=${filterValue}`);
      if (!response.ok) {
        throw new Error('Failed to filter employees');
      }
      const data = await response.json();
      setDatarecruitement(data)
      setIsDropdownOpen(true);
    } catch (error) {
      console.error('Error filtering employees:', error);
    }
  };

  const handleListItemClick = (item) => {
   
    setNameFilter(item.position);
    setDatarecruitementFiltrer([]);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    fetchEmployeesByType();
    fetchCountRecruitement()
  }, [currentPage, pageSize]);

  const fetchCountRecruitement = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué Recruitement ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();

     setCount(data.length)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const fetchEmployeesByType = async (type) => {

    try {
     
      
      const endPoint = process.env.NODE_ENV === 'development' ? 'https://dev-gateway.gets-company.com' : '';
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/listBypage?page=${currentPage}&size=${pageSize}&sortBy=recruttrequestDate`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      setDatarecruitement(data);
      return data;
    
    }
    catch (error) {
      console.error(`Error fetching ${type} employees:`, error);
      return [];
    }

  };
  //Passport Expired
  const fetchExpiredVisa = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list`);

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      // Récupérer la date actuelle
      const data = await response.json();
      const currentDate = new Date();
      // Filtrer les données pour ne conserver que celles dont la date de visa est expirée
      const expiredVisaData = data.filter(employee => {
        if (employee.finishDateVisa) {
          const visaDate = new Date(employee.finishDateVisa);
          return visaDate < currentDate;
        } else {
          return false;
        }
      });
      /////Passport Finist Date
      const passportfinishdate = data.filter(employee => {
        // Vérifier si la date de fin de visa est définie et non vide
        if (employee.passport_finish_date) {
          const PassportDate = new Date(employee.passport_finish_date);
          return PassportDate < currentDate;
        } else {
          // Si la date de fin de visa n'est pas définie ou vide, exclure l'employé
          return false;
        }
      });
      setPassportExpered(passportfinishdate)
      setVisaExpered(expiredVisaData)
      console.log("Données des visas expirés :", expiredVisaData);



    } catch (error) {
      console.error('Error fetching employees:', error);
    }

  }




  //End Passourt Expired

  




  const user = localStorage.getItem("role");
  const items = [
    {
      label: 'Recruitment',
      key: '1',
      children: (
        <>
          <>
            <AppsHeader key={'wrap'}>
              <StyledCustomerHeader>
              <StyledCustomerInputView>
                  <Input.Search
                    placeholder="Search by position"
                    value={nameFilter}
                    onChange={handlePositionFilterChange}
                  />
                  {isDropdownOpen && datarecruitementFiltrer.length > 0 && (
                    <div ref={dropdownRef} style={{ position: 'absolute', zIndex: 1000, background: '#fff', width: '100%', border: '1px solid #ddd' }}>
                      <List
                        dataSource={datarecruitementFiltrer}
                        renderItem={item => (
                          <List.Item onClick={() => handleListItemClick(item)}>
                            {item.position}
                          </List.Item>
                        )}
                      />
                    </div>
                  )}
                </StyledCustomerInputView>
              </StyledCustomerHeader>
            </AppsHeader>
            <RecruitementTable
              loading={loading}
              AllRecruitement={datarecruitement}
            />
            <div className='Pagination' >
              <StyledCustomerHeaderRight>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(count / pageSize)}
                  handlePageChange={handlePageChangeOffice}
                />
              </StyledCustomerHeaderRight>
            </div>
          </>


        </>
      ),
    },
    ...(!user.includes('Manager') ? [{
      label: 'Passport Expired',
      key: '2',
      children:    
       <>
      <AppsHeader key={'wrap'}>
   
      </AppsHeader>
      <PassportExpired loading={loading} passportExpered={passportExpered} />

    </>,
    }] : []),
    ...(!user.includes('Manager') ? [{
      label: 'Visa Expired',
      key: '3',
      children:    
       <>
      <AppsHeader key={'wrap'}>
   
      </AppsHeader>
      <VisaExpired loading={loading} VisaExpired={visaExpered} />

    </>,
    }] : []),
   

  ];


  return (
    <>
      <AppPageMeta title='Dashboards' />
      {metricsData ? (
        <AppRowContainer ease={'easeInSine'}>
          {crmData?.stateData?.map((data) => (
            <Col key={data.id} xs={24} sm={12} lg={6}>
              <StatsDirCard data={data} />
            </Col>
          ))}
        </AppRowContainer>
      ) : null}
      <AppsContainer
        title={messages['dashboard.dashbord.RequireAttention']}
        fullView
        type='bottom'
      >

        <StyledBuyCellCard style={{ paddingLeft: '10px' }} heightFull>
          <StyledTabs defaultActiveKey='1' items={items} />
        </StyledBuyCellCard>

      </AppsContainer>

      <AppInfoView />
    </>
  );
};

export default Dashboards;
