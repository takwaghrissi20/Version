import React from 'react';

import { Typography } from 'antd';
import AppCard from '@crema/components/AppCard';
import CountUp from 'react-countup';
import {
  StyledGeneralStats,
  StyledGeneralStatsAvatar,
  StyledFlexWrapper,
  StyledTitleWrapper

} from '../../../../styles/index.styled';

import { FcReading } from 'react-icons/fc';
import { Image } from 'antd';

const StatsTotalRecruitement = ({ totalNumber }) => {

  return (
    <AppCard className='card-hover no-card-space'>
      <StyledGeneralStats>
        <StyledGeneralStatsAvatar
          style={{
            marginLeft: 15,
            color: "#0A8FDC",
            backgroundColor: '#e6f0ff',


          }} >
      
      <Image
      width={20}
      src='/assets/images/TotalRecruitement.png'
     alt="Total Recruitement"
     />
       {/* < FcReading  color='#9E49E6' className='icon' />  */}
        </StyledGeneralStatsAvatar>
        <StyledFlexWrapper>
          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>Total Recruitement</Typography.Title>
            <StyledTitleWrapper><CountUp end={totalNumber} /></StyledTitleWrapper>
          </div>

        </StyledFlexWrapper>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default StatsTotalRecruitement;


