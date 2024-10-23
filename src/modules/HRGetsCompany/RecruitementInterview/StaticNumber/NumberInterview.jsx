import React from 'react';

import {
  StyledCoinStatsAvatar,
  StyledCoinStatsCard,
  StyledCoinStatsContent,
  StyledCoinStatsContentAvatar,
  StyledCoinStatsRow,
} from './index.styled';
import CountUp from 'react-countup';
const NumberInterview = (props) => {
  const { icon, bgColor,  heading,totalNumberInterview } = props;


  return (
    <StyledCoinStatsCard className='card-hover'>
      <StyledCoinStatsRow>
        <StyledCoinStatsAvatar
          src={icon}
          style={{ backgroundColor: bgColor }}
        />

        <StyledCoinStatsContent>
        <p style={{fontWeight:"bold",fontFamily:"popins"}}>{heading}</p>
          

          <StyledCoinStatsContentAvatar>

          <CountUp end={totalNumberInterview} />
           
           
          </StyledCoinStatsContentAvatar>
    
        </StyledCoinStatsContent>
      </StyledCoinStatsRow>
    </StyledCoinStatsCard>
  );
};

export default NumberInterview;

