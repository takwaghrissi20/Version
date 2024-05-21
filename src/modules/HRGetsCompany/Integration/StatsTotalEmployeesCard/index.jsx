import React from 'react';
import { Typography } from 'antd';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '../../../../@crema/components/AppCard';

import {
  StyledDurationWrapper,
  StyledFlexContainer,
  StyledFlexSuccessContainer,
  StyledFlexWrapper,
  StyledIconWrapper,
  StyledTitleWrapper,
  StyledToggleContainer,
  StyledViewer,
} from '../../../../styles/index.styled';
import { AiOutlineEye } from 'react-icons/ai';
import { Button } from 'antd';
import CountUp from 'react-countup';


const StatsTotalEmployeesCard = ({ numberIntegration }) => {
 
  return (
    <AppCard className='card-hover no-card-space'>
      <StyledFlexWrapper>
        <StyledFlexContainer>
          <StyledIconWrapper
            style={{
              color: "#0A8FDC",
              backgroundColor: numberIntegration?.color + '22',
            }}
          >
{/*             
              <img src="../" alt='image-user' /> */}
           
          </StyledIconWrapper>

          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>Employees Number</Typography.Title>
            <StyledTitleWrapper>
              
            <CountUp end= {458}></CountUp>
              </StyledTitleWrapper>
          </div>
        </StyledFlexContainer>
        <StyledToggleContainer>
          <StyledFlexSuccessContainer>
           
            <span
              style={{
                marginLeft: 1,
                fontSize: 14,
                fontWeight: Fonts.BOLD,
     
              }}
            >
      
           
            </span>
          </StyledFlexSuccessContainer>
          <StyledDurationWrapper>
          <StyledViewer >
          <Button
            type='primary'
            shape='circle'
            className='icon-btn icon-btn-eye'
            style={{color:"#9AC8EB"}}
            icon={<AiOutlineEye />}
          />
          </StyledViewer>
          </StyledDurationWrapper>
        </StyledToggleContainer>
      </StyledFlexWrapper>
    </AppCard>
  );
};

export default StatsTotalEmployeesCard;

