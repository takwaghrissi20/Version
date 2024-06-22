import React from 'react';
import { Typography, Button } from 'antd';
import PropTypes from 'prop-types';
import { Fonts } from '../../../@crema/constants/AppEnums';
import AppCard from '../../../@crema/components/AppCard';
import { AiOutlineEye } from 'react-icons/ai';
import CountUp from 'react-countup';

import {
  StyledDurationWrapper,
  StyledFlexContainer,
  StyledFlexSuccessContainer,
  StyledFlexWrapper,
  StyledIconWrapper,
  StyledTitleWrapper,
  StyledToggleContainer,
  StyledViewer,
} from '../../../styles/index.styled';

const StatsDirCard = ({ latestDeMobilization }) => {
  console.log("latestDeMobilization", latestDeMobilization);
  return (
    <AppCard className='card-hover no-card-space'>
      <StyledFlexWrapper>
        <StyledFlexContainer>
          <StyledIconWrapper
            style={{
              color: "#0A8FDC",
              backgroundColor: latestDeMobilization?.color + '22',
            }}
          >
            {/* <img src="../" alt='image-user' /> */}
          </StyledIconWrapper>
          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>
              Last Demobilization
            </Typography.Title>
            <StyledTitleWrapper>
              <p>{latestDeMobilization?.name}:{latestDeMobilization?.getsId}</p>
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
            <StyledViewer>
              <Button
                type='primary'
                shape='circle'
                className='icon-btn icon-btn-eye'
                style={{ color: "#9AC8EB" }}
                icon={<AiOutlineEye />}
              />
            </StyledViewer>
          </StyledDurationWrapper>
        </StyledToggleContainer>
      </StyledFlexWrapper>
      <div style={{ textAlign: 'right', marginTop: '1rem',padding:"0.5rem",color:"red",fontFamily:"revert",fontWeight:"bold"}}>
        <Typography.Text style={{ color:"#2DA8E0"}} >{latestDeMobilization  ?.dateDemob}</Typography.Text>
      </div>
    </AppCard>
  );
};

StatsDirCard.propTypes = {
  latestDeMobilization: PropTypes.object.isRequired,
};

export default StatsDirCard;
