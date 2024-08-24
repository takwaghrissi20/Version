import React,{useEffect,useState} from 'react';

import { Typography } from 'antd';
import AppCard from '../../../../@crema/components/AppCard';
import { Row } from 'antd';

import {
  
  StyledFlexWrapper,
  StyledGeneralStatsAvatar,
  StyledGeneralStats,
  StyledTitleWrapperRecruitement
 
} from '../../../../styles/index.styled';

import {  FcReading } from 'react-icons/fc';


const StatsLastStaffInterview = ({lastStaffInterview}) => {


  return (
    <AppCard className='card-hover no-card-space'>
        <StyledGeneralStats>
       <StyledGeneralStatsAvatar style={{
        color: "#0A8FDC",
        backgroundColor:'#e6f0ff',
         marginLeft:15}}>
       < FcReading  color='#9E49E6' className='icon' />
        </StyledGeneralStatsAvatar>
      <StyledFlexWrapper>
      <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>Last Interview Staff Management:{lastStaffInterview?.evalName}</Typography.Title>
            <Row>
            <StyledTitleWrapperRecruitement>Interview Code:{lastStaffInterview?.interviewCode}</StyledTitleWrapperRecruitement>
            <StyledTitleWrapperRecruitement>job Code of Interview:{lastStaffInterview?.jobCode}</StyledTitleWrapperRecruitement>
            <StyledTitleWrapperRecruitement>Date:{lastStaffInterview?.interviwDate }</StyledTitleWrapperRecruitement>
            </Row>

          </div>
    
      </StyledFlexWrapper>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default StatsLastStaffInterview  ;


