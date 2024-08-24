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


const StatsLastStaffInterview = ({lastStaffInterview,lastConstructionInterview}) => {


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
      <div style={{ marginRight: 2, overflow: 'hidden' }}>
            <Typography.Title level={5} style={{fontSize:"11.5px"}}>Last Interview Code Of Staff Management :<span style={{color:"#2997ff"}}>{lastStaffInterview?.interviewCode}</span></Typography.Title>
            <Typography.Title level={5}style={{fontSize:"11.5px"}}>Last Interview Code Of Construction :<span style={{color:"#2997ff"}}>{lastConstructionInterview?.interviewCode}</span></Typography.Title>
            <Row>
            {/* <StyledTitleWrapperRecruitement>Interview Code:{lastStaffInterview?.interviewCode}</StyledTitleWrapperRecruitement> */}
            {/* <StyledTitleWrapperRecruitement>job Code of Interview:{lastStaffInterview?.jobCode}</StyledTitleWrapperRecruitement>
            <StyledTitleWrapperRecruitement>Date:{lastStaffInterview?.interviwDate }</StyledTitleWrapperRecruitement> */}
            </Row>

          </div>
    
      </StyledFlexWrapper>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default StatsLastStaffInterview  ;


