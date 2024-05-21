import React from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';
import AppCard from '../../../../@crema/components/AppCard';

import {

  StyledFlexContainer,
  StyledFlexWrapper,
  StyledIconWrapper,
  StyledTitleWrapper,
  
} from '../../../../styles/index.styled';
import { getAssetsUrl } from '@crema/helpers/UrlHelper';
import { Anchor, Space } from 'antd';
const { Link } = Anchor;

const StatsDirCard = ({ data }) => {
  return (
  
  
    <AppCard className='card-hover no-card-space'>
      <StyledFlexWrapper>
        <StyledFlexContainer>
          <StyledIconWrapper
            style={{
              color: data.color,
              backgroundColor: data.color + '22',
            }}
          >
            {data?.icon ? (
              data.icon
            ) : (
              <img src={getAssetsUrl(data.iconImg)} alt='' />
            )}
          </StyledIconWrapper>

          <div style={{ marginRight: 8, overflow: 'hidden' }}>
            <Typography.Title level={5}>{data.value}</Typography.Title>
            <StyledTitleWrapper>{data.name}</StyledTitleWrapper>
          </div>
        </StyledFlexContainer>

      </StyledFlexWrapper>
    </AppCard>
  
  );
};

export default StatsDirCard;

StatsDirCard.propTypes = {
  data: PropTypes.object,
};
