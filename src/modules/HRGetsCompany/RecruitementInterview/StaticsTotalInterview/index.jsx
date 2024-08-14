import React, { useEffect, useState } from 'react';

import { Typography } from 'antd';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import CountUp from 'react-countup';
import {

  StyledFlexWrapper,
  StyledTitleWrapper,
  StyledGeneralStatsAvatar,
  StyledGeneralStats

} from '../../../../styles/index.styled';


import { FcReading } from 'react-icons/fc';


const StatsTotalInterview = ({ totalNumberInterview }) => {

  return (
    <AppCard className='card-hover no-card-space'>
      <StyledGeneralStats>
        <StyledGeneralStatsAvatar style={{
          color: "#0A8FDC",
          backgroundColor: '#e6f0ff',
          marginLeft: 15
        }}>
          < FcReading color='#9E49E6' className='icon' />
        </StyledGeneralStatsAvatar>
        <StyledFlexWrapper>
          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>Total Interview</Typography.Title>
            <StyledTitleWrapper>    <CountUp end={totalNumberInterview} /></StyledTitleWrapper>
          </div>

        </StyledFlexWrapper>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default StatsTotalInterview;


