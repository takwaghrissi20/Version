import React, { useEffect, useState } from 'react';
import AppsContainer from "../../../@crema/components/AppsContainer";
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Col, Select, Button } from 'antd';
import { useIntl } from 'react-intl';
import AppPageMeta from '../../../@crema/components/AppPageMeta'
import {
  StyledCoinsWrapper
} from '../../../styles/index.styled';
import DataEmp from "./DataEmp";
import AppCard from '../../../@crema/components/AppCard';
import { useThemeContext } from '../../../@crema/context/AppContextProvider/ThemeContextProvider';
import { useNavigate } from "react-router-dom";
const FINANCESITTLEMETOFFICE = () => {
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

  const [allemp, setAllemp] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    fetchLastEmployees();
  }, []);
  
  const fetchLastEmployees = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
          
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
  
      const data = await response.json();
      const activeEmployees = data.filter(employee => employee.actStatus === 'Active');
      setAllemp(data);
      console.log('dattttttt actice', data);
    } catch (error) {
      console.error('Error fetching All employees:', error);
    }
  };
  


  useEffect(() => {
    setQueryParams({ search, page });
  }, [search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };


  return (
    <Col xs={24} sm={24} lg={24}>
      <AppPageMeta title='FINANCESITTLEMETOFFICE' />
      <Col xs={24} sm={24} lg={24}>
    
      <Col xs={24} md={16} lg={24} xl={24} >    
        <AppsContainer
          title={messages['payroll.FINANCESITTLEMETOFFICE']}
          type='bottom'
          fullView>
          <Col xs={24} >
            <DataEmp title="FINANCE SITTLEMET OFFICE " 
            allemp={allemp}>
              
            </DataEmp>

          </Col>
        </AppsContainer>
      </Col>
      </Col>

    </Col>

  );
};

export default FINANCESITTLEMETOFFICE;
