import React, { useEffect, useState } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import AppAnimate from '../../../../@crema/components/AppAnimate';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import AppLoader from '../../../../@crema/components/AppLoader';
import TotalVisitor from './TotalVisitor';
import { Col } from 'antd';
import { padding } from 'polished';


const TotalLocation = ({totalVisitors,totalTravels}) => {

  const [{ apiData: crmData, loading }] = useGetDataApi('/dashboard/crm');



  useEffect(() => {

  }, []);

  return loading ? (
    <AppLoader />
  ) : (
    <AppAnimate animation='transition.slideUpIn' delay={200} >
      <AppRowContainer delay={150}>
        <Col lg={24} xl={24} style={{padding:"2rem"}}>
          <TotalVisitor totalVisitors={totalVisitors} totalTravels={totalTravels} />
        </Col>
       
      </AppRowContainer>
      <Col md={24} lg={8}>
              <AppRowContainer>
             
           
              </AppRowContainer>
            </Col>
    </AppAnimate>
  );
};

export default TotalLocation;
