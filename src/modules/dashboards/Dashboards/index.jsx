"use client";
import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Col } from 'antd';
import { useGetDataApi } from '../../../@crema/hooks/APIHooks';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { useIntl } from 'react-intl';
import AppsContainer from "../../../@crema/components/AppsContainer"
import StatsDirCard from '../CommonComponents/StatsDirCard';
import TabsForms from './TabsForms';
import TabsFormsVisa from './TabsFormsVisa';
import TabsFormsPassport from './TabsFormsPassport';
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';

const Dashboards = () => {
  const [page, setPage] = useState(0);
  const [{ apiData: metricsData }] = useGetDataApi('/dashboard/metrics');
  const [{ apiData: crmData }] = useGetDataApi('/dashboard/crm');
  const { messages } = useIntl();
  const [datarecruitement, setDatarecruitement] = useState([]);
 
  const fetchData = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/listBypage?page=${page}&size=10&sortBy=recruttrequestDate`, {
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
      console.log("testtttt",data)
      setDatarecruitement(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [page]);


  const items = [
    {
      label: 'Recruitement',
      key: '1',
      children: <TabsForms datarecruitement={datarecruitement} page={page} />,
    },
    {
      label: 'Visa Expired',
      key: '2',
      children: <TabsFormsVisa />,
    },
    {
      label: 'Passport Expired',
      key: '3',
      children: < TabsFormsPassport />,
    },
  ];

   
  
  return (
    <AppsContainer
      title={messages['sidebar.app.dashboards']}
      cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      fullView
    >
      {/*Layout of dahbords*/}
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
        style={{boxShadow: "none",
        overflow: 'auto ',
        overflowY: 'auto', 
        marginBottom:20  
      }}
        title={messages['dashboard.dashbord.RequireAttention']}
        type='bottom'
        fullView
        >
       <StyledBuyCellCard   style={{ paddingLeft: "10px",boxShadow: "none" }} heightFull>
      <StyledTabs style={{boxShadow:"none"}} defaultActiveKey='1' items={items} />
    </StyledBuyCellCard>
    </AppsContainer>   
      <AppInfoView />
    </AppsContainer>
  );
};

export default Dashboards;
