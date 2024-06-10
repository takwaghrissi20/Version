import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useIntl } from 'react-intl';
import { Col,Row } from 'antd';
import AppsContainer from "../../../../../../../@crema/components/AppsContainer"
import {
  StyledCoinsWrapper,

} from "../../../../../../../styles/index.styled";
import { Select } from "antd";
import AppCard from '../../../../../../../@crema/components/AppCard';
import StatsDirCardStatics from './StatsDirCardStatics';
import AppsContent from '../../../../../../../@crema/components/AppsContainer/AppsContent';
import OrderTable from './DataTableHealth';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
} from '../../../../../../../styles/index.styled';
import AppRowContainer from '@crema/components/AppRowContainer';
const HealthInformation = ({HeatlStatics}) => {
  const { messages } = useIntl();

  return (
  <>

<AppsContainer
      title={messages['sidebar.app.Health']}
      cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
      fullView
      >

      
      <AppRowContainer ease={'easeInSine'}>
      {HeatlStatics?.map((data) => (
          <Col key={data.id} xs={24} sm={12} lg={6}>
            <StatsDirCardStatics
            data={data} />
          </Col>
        ))}
  
        <Col xs={24} md={16} lg={24} xl={24} style={{marginTop:"3rem"}}>
          
          {/*Trainf Style*/}
          <AppCard title={
            <StyledCoinsWrapper>
              <AppCard
               style={{
                paddingTop: 10,
                paddingBottom: 10,
              }}
              className='no-card-space-ltr-rtl'
              title={messages['dashboard.Health']}
            >

              <OrderTable  />
            </AppCard>
      
            </StyledCoinsWrapper>


          } className='no-card-space-ltr-rtl'>


          </AppCard>


        </Col>

      </AppRowContainer>

    </AppsContainer>





</>
  );

};

export default HealthInformation ;
