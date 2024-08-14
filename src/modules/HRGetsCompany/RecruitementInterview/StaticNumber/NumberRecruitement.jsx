import React from 'react';
import PropTypes from 'prop-types';
import { green, red } from '@ant-design/colors';
import {
  StyledCoinStatsAvatar,
  StyledCoinStatsCard,
  StyledCoinStatsContent,
  StyledCoinStatsContentAvatar,
  StyledCoinStatsRow,
} from './index.styled';
import CountUp from 'react-countup';


const CoinStats = (props) => {
  const { icon, bgColor,  heading,totalNumber } = props;
console.log("datttaaaeee",totalNumber)

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
          <CountUp end={totalNumber} />
          
           
           
          </StyledCoinStatsContentAvatar>
    
        </StyledCoinStatsContent>
      </StyledCoinStatsRow>
    </StyledCoinStatsCard>
  );
};

export default CoinStats;

