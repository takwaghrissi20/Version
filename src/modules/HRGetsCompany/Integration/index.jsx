import React, { useEffect, useState } from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Col, Select, Button } from 'antd';
import { useIntl } from 'react-intl';
import AppPageMeta from '../../../@crema/components/AppPageMeta'
import {
  StyledCoinsWrapper
} from '../../../styles/index.styled';
import StatsIntegrationCard from './StatsIntegrationCard';
import StatsTotalEmployeesCard from './StatsTotalEmployeesCard';
import StatsTotalNewEmployeesCard from './StatsTotalNewEmployeesCard';
import DataIntegration from "./DataIntegration";
import {
  Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis,
  Area,
  AreaChart,
} from 'recharts';
import AppCard from '../../../@crema/components/AppCard';
import { useThemeContext } from '../../../@crema/context/AppContextProvider/ThemeContextProvider';
import { useNavigate } from "react-router-dom";
import { MdAutoGraph } from 'react-icons/md';
const Integration = () => {
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { messages } = useIntl();
  const [page, setPage] = useState(1);
  const [search, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [QueryParams, setQueryParams] = useState(false);
  const [int, setInt] = useState([]);
  const [numberIntegration, setNumberIntegration] = useState(0);
  const [numberTotalEmployees, setNumberTotalEmployees] = useState(0);
  const [numberNewEmployees, setNumberNewEmployees] = useState(0);
  const [last14DaysIntegration, setLast14DaysIntegration] = useState([]);
  const [getsId, setGetsId] = useState("");
  const token = localStorage.getItem("token");
  //Add Integration
  const   AddIntegration= () => { 
    navigate(`/Hr/Integration/Add`, {
});
  };



  //End Add Integration 

  const fetchDataIntegration = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/integration/list?token=${token}`, {
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
      console.log("test Integration", data)
      setInt(data);
      const numberintegration = data.length.toString();
      setNumberIntegration(numberintegration)
      //Set les Data of 14 days of Integrations 
      const today = new Date();
      const last14Days = new Date(today.getTime() - (14 * 24 * 60 * 60 * 1000));
      const last14DaysIntegration = data.filter(integration => new Date(integration.toD) > last14Days);
      setLast14DaysIntegration(last14DaysIntegration);
      /////Total New Employees    
      const responsenewemployees = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/new`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },

      });
      const responseDatanew = await responsenewemployees.json();

      setNumberNewEmployees(responseDatanew)
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  useEffect(() => {
    fetchDataIntegration();
  }, []);

  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };
  const [selectedMonth, setSelectedMonth] = useState(' Last 14 days Integration');
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  //Last 14 days of Integration
  // Fonction pour compter le nombre d'intégrations pour chaque jour

  const countIntegrationByDay = () => {
    const integrationCountByDay = {};
    last14DaysIntegration.forEach(integration => {
      const date = new Date(integration.integrationDate).toLocaleDateString();
      integrationCountByDay[date] = (integrationCountByDay[date] || 0) + 1;

    });

    return integrationCountByDay;
  };
  const integrationCountByDay = countIntegrationByDay();


  return (
    <Col xs={24} sm={24} lg={24}>
      <AppPageMeta title='Integration' />
      <Col xs={24} sm={24} lg={24}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    
      <Button
        style={{      
          backgroundColor: "#2997ff", color: "white", paddingTop: "5px", 
          TextAlign: "center", fontsize: "30px"
        }}
        onClick={AddIntegration }>
        Add Integration
      </Button>
      </div>
      <AppRowContainer  ease={'easeInSine'}>
       
        <Col style={{marginTop:"2rem"}} xs={24} sm={12} lg={8}>
      
          <StatsIntegrationCard numberIntegration={numberIntegration}></StatsIntegrationCard>

        </Col>
        <Col style={{marginTop:"2rem"}} xs={24} sm={12} lg={8}>
          <StatsTotalEmployeesCard numberIntegration={numberIntegration}></StatsTotalEmployeesCard>
        </Col>
        <Col style={{marginTop:"2rem"}} xs={24} sm={12} lg={8}>
          <StatsTotalNewEmployeesCard numberNewEmployees={numberNewEmployees}></StatsTotalNewEmployeesCard>
        </Col>

      </AppRowContainer>
      {/*Last 14 jours Integration*/}
      <Col xs={24} md={16} lg={24} xl={24} style={{ marginTop: "3rem" }}>

        {/*Trainf Style*/}
        <AppCard title={
          <StyledCoinsWrapper>
            <Select value={selectedMonth} onChange={handleMonthChange} >

            </Select>
            <ResponsiveContainer
              title={messages['sidebar.app.Integration']}

              width='100%' height={200} style={{ marginTop: '100px' }}>
              <AreaChart
                data={Object.entries(integrationCountByDay).map(([date, count]) => ({
                  date, // Clé correspondant à l'axe X
                  uv: count // Clé correspondant aux données de l'AreaChart
                }))}
                margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
              >
                <XAxis dataKey='date' /> {/* Utilisation de 'date' comme clé pour l'axe X */}
                <YAxis />
                <CartesianGrid strokeDasharray='3 3' />
                <Tooltip />
                <Area type='monotone' dataKey='uv' fill={theme.palette.primary.main} />
              </AreaChart>


              {/* <BarChart
  title={messages['sidebar.app.InterviewStatistics']}
  data={Object.entries(integrationCountByDay).map(([date, count]) => ({
    date, // Clé correspondant à l'axe X
    'total Integration': count // Clé correspondant aux données de la barre
  }))}>
                  <XAxis
          
                    dataKey='interviwDate' />
                  <YAxis />
                  <CartesianGrid strokeDasharray='3 3' />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='total Integration' fill='#8884d8' />
                </BarChart> */}
            </ResponsiveContainer>
          </StyledCoinsWrapper>


        } className='no-card-space-ltr-rtl'>


        </AppCard>
        <AppsContainer
          title={messages['hr.dataIntegration']}
          type='bottom'
          fullView>
          <Col xs={24} style={{ marginTop: "3rem" }}>
            <DataIntegration title="Integration" int={int}></DataIntegration>

          </Col>
        </AppsContainer>


      </Col>
      </Col>


      {/*Last 14 jours Integration*/}

      {/* </AppsContainer> */}


      {/* <AppPageMeta title='Orders' />
      <AppsContainer
        title={messages['eCommerce.recentOrders']}
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
              <StyledLinkBtn
                type='primary'
                onClick={() => {
                  navigate('/Hr/Recruitement&Interview');
                }}
              >
                Continue Shopping
              </StyledLinkBtn>

              <StyledOrderHeaderPagination
                pageSize={10}
                count={apiData?.count}
                page={page}
                onChange={onChange}
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
          <OrderTable loading={loading} orderData={apiData?.data || []} />
        </AppsContent>

        <StyledOrderFooterPagination
          pageSize={10}
          count={apiData?.count}
          page={page}
          onChange={onChange}
        />
      </AppsContainer>
      <AppInfoView /> */}
    </Col>

  );
};

export default Integration;
