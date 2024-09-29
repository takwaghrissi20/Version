import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { useIntl } from 'react-intl';
import { Col } from 'antd';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import AppsContainer from "../../../../../@crema/components/AppsContainer"

import StatsDirCardStatics from './StatsDirCardStatics';

const VisaStatic = ({ listVIsa }) => {


  const { messages } = useIntl();


  return (
    <>
   
      
      <AppRowContainer ease={'easeInSine'}>
         {listVIsa?.map((data) => (
          
          <Col key={data.id} xs={24} sm={24} lg={10}
      
          
          >
            <StatsDirCardStatics
            data={data} />
          </Col>
        ))}


      </AppRowContainer>

  
    </>
  );

};

export default VisaStatic ;
