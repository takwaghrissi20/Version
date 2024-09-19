import React, { useEffect, useState, useRef, useCallback } from 'react';
import AppsContainer from '../../../@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Input, List, Col } from 'antd';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import Pagination from '../../../@crema/components/AppsPagination';
import RecruitementTable from './RecruitementTable';
import TrainingTable from './TrainingTable';
import PassportExpired from './PassportExpired';
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
  const [notificationPermission, setNotificationPermission] = useState(null);
  const requestNotificationPermission = () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        setNotificationPermission(permission);
      });
    } else {
      alert('Your browser does not support desktop notifications.');
    }
  };

  const showNotification = () => {
    if (notificationPermission === 'granted') {
      new Notification('Afficher Recrutement');
    } else if (notificationPermission !== 'denied') {
      requestNotificationPermission();
    }
  };

  const dropdownRef = useRef(null);
  const { messages } = useIntl();

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [countOffice, setCountOffice] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(0);
  const [profile, setProfile] = useState("")
  const [dep, setDep] = useState("")
  ///////
  const [datarecruitement, setDatarecruitement] = useState([]);
  const [datarecruitementFiltrer, setDatarecruitementFiltrer] = useState([]);
  const [count, setCount] = useState(0);
  const [countId, setCountId] = useState(0);
  const [{ apiData: metricsData }] = useGetDataApi('/dashboard/metrics');
  const [{ apiData: crmData }] = useGetDataApi('/dashboard/crm');
  const [passportExpered, setPassportExpered] = useState([]);
  const [passportExperedProjet, setPassportExperedProjet] = useState([]);
  const [visaExpered, setVisaExpered] = useState([]);
  const [visaExperedProjet, setVisaExperedProjet] = useState([]);
  const [idRec, setIdRec] = useState("");
  const [listRecruitementId, setListRecruitementId] = useState([]);
  const [listRecruitementPMO, setListRecruitementPMO] = useState([]);
  const user = localStorage.getItem("role");
  const [project, setProject] = useState([]);
  const userEmail = localStorage.getItem("email");
  const token = localStorage.getItem("token");
  // Project By email

  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        const ProjectName = data.map(project => project.projName);
        console.log("projet profile", ProjectName)
        setProject(ProjectName);
      } else {
        console.error("Erreur lors de la récupération du email Projet :", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email Projet:", error);
    }
  };
  {/*Get Profile*/ }

  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}&token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      console.log("data profile", data)
      setDep(data?.departement)
      setProfile(data)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  {/*End Get Prole */ }
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
    GetProfileEmployess()
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [listRecruitementId, idRec]);

  const fetchFilteredRecruitement = async (filterValue) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/filterByPosition?position=${filterValue}&token=${token}`);
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


  const fetchCountRecruitement = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/list?token=${token}`, {
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
      //////Filter les count de Data de idem
      const dataRecruitement = data.filter(p => p.idemp === idRec);
      const dataRecruitementPMO = data.filter(p => p.notif === 4);
      setListRecruitementPMO(dataRecruitementPMO)
      setCountId(dataRecruitement)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const fetchRecruitementByType = async () => {
    try {

      const url = `https://dev-gateway.gets-company.com/api/v1/re/listBypage?page=${currentPage}&sortBy=recruttrequestDate&size=${pageSize}&token=${token}`;
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Failed to fetch Recruitement');
      }
      const data = await response.json();
      setDatarecruitement(data);
    } catch (error) {
      console.error(`Error fetching ${type} Recruitement:`, error);


    }



  };

  // Project By email
  const fetchEmployeesEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("data?.getsId", data?.getsId)
        setIdRec(data?.getsId)
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };
  const fetchEmployeesByEmployees = async () => {
    try {

      const endPoint = process.env.NODE_ENV === 'development' ? 'https://dev-gateway.gets-company.com' : '';
      ///const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/list`,
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/getRecByGetsId?id=${idRec}&page=${currentPage}&size=${pageSize}`,

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
      setListRecruitementId(data)
      return data;

    }
    catch (error) {
      console.error(`Error fetching Recruitement:`, error);
      return [];
    }

  };
  useEffect(() => {
    if (user.includes('PMO')) {
      fetchCountRecruitement();
      fetchRecruitementByType();
    } else if ((user.includes("Leader"))) {
      fetchEmployeesEmail();
      fetchEmployeesByEmployees();
      fetchExpiredVisa();
      fetchProjectEmail();

    }
    else if (user.includes("admin") || user.includes("bod") || !user.includes("Cordinator")
      || user.includes("Administrator")) {
      fetchCountRecruitement();
      fetchRecruitementByType();
      fetchEmployeesEmail();
      fetchEmployeesByEmployees();
      fetchExpiredVisa();
      fetchProjectEmail();


    }
  }, [user, currentPage, pageSize, idRec]);

  //Passport Expired
  const fetchExpiredVisa = async () => {

    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);

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

      const ProjexpiredVisaData = expiredVisaData.filter(employee =>
        project.includes(employee.projName)
      );
      setVisaExperedProjet(ProjexpiredVisaData)
      /////Passport Finist Date
      const passportfinishdate = data.filter(employee => {
        // Vérifier si la date de fin de visa est définie et non vide
        if (employee.passport_finish_date) {
          const PassportDate = new Date(employee.passport_finish_date);
          return PassportDate < currentDate;
        } else {
          return false;
        }
      });


      // Filtrer les employés dont le projet est inclus dans le tableau project
      const Projpassportfinishdate = passportfinishdate.filter(employee =>
        project.includes(employee.projName)
      );

      setPassportExperedProjet(Projpassportfinishdate)
      setPassportExpered(passportfinishdate)
      setVisaExpered(expiredVisaData)




    } catch (error) {
      console.error('Error fetching employees:', error);
    }

  }

  //End Passourt Expired
  const items = [
    ...(!user?.toUpperCase().includes("RELATION AND TRAINING") ? [{
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
              listRecruitementPMO={listRecruitementPMO}
              listRecruitementId={listRecruitementId}
              user={user}
            />

            {(user.includes('admin') || user.includes('bod') || user.includes('Cordinator') || !user?.includes('Construction')
              || !user.includes('PMO') || user?.includes('Administrator') || !user?.toUpperCase().includes("RELATION AND TRAINING"))

              && (
                <div className='Pagination' >
                  <StyledCustomerHeaderRight>
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(count / pageSize)}
                      handlePageChange={handlePageChangeOffice}
                    />
                  </StyledCustomerHeaderRight>
                </div>

              )}
            {!user.includes('admin') || !user.includes('Cordinator') || !user.includes('PMO') && (

              <div className='Pagination' >
                <StyledCustomerHeaderRight>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(count / pageSize)}
                    handlePageChange={handlePageChangeOffice}
                  />
                </StyledCustomerHeaderRight>
              </div>


            )}
          </>


        </>
      ),
    }] : []),
    ...(user?.toUpperCase().includes("RELATION AND TRAINING") || user?.includes("admin")
      || user?.includes("bod") ? [{
        label: 'Training',
        key: '2',
        children: (          
            <>
            
              <TrainingTable
                loading={loading}
                user={user}
              />

          


          </>
        ),
      }] : []),





    // ...(((!(user?.includes('Manager') || user?.includes('PMO') ||
    //   user?.includes('Construction') )) || user?.includes('Human Ressource') ||
    //   user?.includes('bod') || user?.includes('admin')
    //   || user?.includes('Administrator')) ? [{
    //     label: 'Passport Expired',
    //     key: '2',
    //     children: (
    //       <>
    //         <AppsHeader key={'wrap'}>

    //         </AppsHeader>
    //         <PassportExpired
    //           passportExperedProjet={passportExperedProjet}
    //           loading={loading}
    //           passportExpered={passportExpered}
    //           user={user}


    //         />
    //       </>
    //     ),
    //   }] : []),
    /////////////////////Passport Expired
    ...((user?.includes('PMO') || user?.includes('Construction') || user?.includes('Human Ressource') ||
      user?.includes('bod') || user?.includes('admin')
      || (user?.includes('Administrator') && !user?.includes('Cordinator'))) ? [{
        label: 'Passport Expired',
        key: '3',
        children: (
          <>
            <AppsHeader key={'wrap'}>

            </AppsHeader>
            <PassportExpired
              passportExperedProjet={passportExperedProjet}
              loading={loading}
              passportExpered={passportExpered}
              user={user}


            />
          </>
        ),
      }] : []),
    /////////////////////End Passport Expired
    ...((user?.includes('PMO') || user?.includes('Construction') || user?.includes('Human Ressource') ||
      user?.includes('bod') || user?.includes('admin')
      || (user?.includes('Administrator') && !user?.includes('Cordinator'))

    ) ? [{
      label: 'Visa Expired',
      key: '4',
      children:
        <>
          <AppsHeader key={'wrap'}>

          </AppsHeader>
          <VisaExpired
            visaExperedProjet={visaExperedProjet}
            loading={loading}
            VisaExpired={visaExpered}
            user={user}
          />

        </>,
    }] : []),



  ];
  /////////////////

  useEffect(() => {
    if (!("Notification" in window)) {
      console.log("Browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }, []);

  // Define the showNotification function
  const showNotification2 = useCallback(() => {
    new Notification('Hello World');
  }, []);

  // const showNotification = () => {
  //   if (notificationPermission === 'granted') {
  //     new Notification('Afficher Recrutement');
  //   } else if (notificationPermission !== 'denied') {
  //     requestNotificationPermission();
  //   }
  // };

  return (
    <>
      <AppPageMeta title='Dashboards' />
      <div>
        {/*     
      <div>
      <button onClick={showNotification2}>Show notification</button>
    </div> */}

      </div>
      <>
        {(user.includes("admin") || user.includes("bod")) && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateData?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )}

        {user.includes("Manager") && !user?.includes('Construction') && !user?.includes('Operation') && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateDataManager?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )}
        {/**Leader */}
        {user.includes("PMO") && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateDataManager?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )}
        {user.includes("Leader") || user.includes("Operation") && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateDataManagerOpearation?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )}
        {/*End Project*/}
        {/* //hrAdministrator */}
        {user.includes("Cordinator") && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateDataHRCordinator?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )
        }
        {(user.includes("Administrator") && !user.includes("Cordinator")) && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateDataHRAdministartor?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )
        }
        {(user.toUpperCase().includes("RELATION AND TRAINING")) && metricsData && (
          <AppRowContainer ease={'easeInSine'}>
            {crmData?.stateDataHREmplyees?.map((data) => (
              <Col key={data.id} xs={24} sm={12} lg={6}>
                <StatsDirCard data={data} />
              </Col>
            ))}
          </AppRowContainer>
        )
        }
      </>
      {user?.includes('Construction') || user?.includes('Site Klerk') ||
        user.includes("QC") || user.includes("ASSET AND LOGISTIC ")

        ?
        <></>

        :
        <AppsContainer
          title={messages['dashboard.dashbord.RequireAttention']}
          fullView
          type='bottom'
        >
          <StyledBuyCellCard style={{ paddingLeft: '10px' }} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>

        </AppsContainer>}

      <AppInfoView />
    </>
  );
};

export default Dashboards;
