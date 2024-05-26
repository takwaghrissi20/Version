import React from 'react';

import { Typography } from 'antd';
import PropTypes from 'prop-types';
import AppCard from '../../../../../../@crema/components/AppCard';
import {
  StyledFlexContainer,
  StyledFlexWrapper,
  StyledTitleWrapper,
  
} from '../../../../../../styles/index.styled';
import { useIntl } from 'react-intl';
import CountUp from 'react-countup';

const StatsDirCardStatics = ({ data }) => {
  const { messages } = useIntl();
  return (
    <>

    <AppCard 
    className='card-hover no-card-space'>
      <StyledFlexWrapper>
        <StyledFlexContainer>
        
          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>{data.title}</Typography.Title>
            <StyledTitleWrapper>
            <CountUp end= {data.number}></CountUp>
           </StyledTitleWrapper>
            <p style={{paddingTop:"5px",fontSize:"8px",color:"#EEE6D8"}}>{data.subtitle}</p>
          </div>
        </StyledFlexContainer>
      
      </StyledFlexWrapper>
    </AppCard>
    </>
  );
};

export default StatsDirCardStatics;

StatsDirCardStatics.propTypes = {
  data: PropTypes.object,
};
