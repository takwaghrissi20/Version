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


const StatsTotalRecruitement = ({lastRecruitement}) => {


  return (
    <AppCard className='card-hover no-card-space'>
        <StyledGeneralStats>
       <StyledGeneralStatsAvatar style={{ backgroundColor:"#49BD65",marginLeft:15}}>
       < FcReading  color='#9E49E6' className='icon' />
        </StyledGeneralStatsAvatar>
      <StyledFlexWrapper>
      <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>Last Requestor:{lastRecruitement?.requestName}</Typography.Title>
            <Row>
            <StyledTitleWrapperRecruitement>JobCode:{lastRecruitement?.jobCode}</StyledTitleWrapperRecruitement>
            <StyledTitleWrapperRecruitement>TotalNumber:{lastRecruitement?.totalNumber}</StyledTitleWrapperRecruitement>
            <StyledTitleWrapperRecruitement>Date:{lastRecruitement?.recruttrequestDate}</StyledTitleWrapperRecruitement>
            </Row>

          </div>
    
      </StyledFlexWrapper>
      </StyledGeneralStats>
    </AppCard>
  );
};

export default StatsTotalRecruitement ;


