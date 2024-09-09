import React from 'react';

import {
  StyledCoinStatsAvatar,
  StyledCoinStatsCard,
  StyledCoinStatsContent,
  StyledCoinStatsContentAvatar,
  StyledCoinStatsRow,
} from './index.styled';
import CountUp from 'react-countup';
const NumberPassportExpired = (props) => {
  const { icon, bgColor,  heading,PassportExpired } = props;


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

          <CountUp end={PassportExpired} />
           
           
          </StyledCoinStatsContentAvatar>
    
        </StyledCoinStatsContent>
      </StyledCoinStatsRow>
    </StyledCoinStatsCard>
  );
};

export default NumberPassportExpired;

