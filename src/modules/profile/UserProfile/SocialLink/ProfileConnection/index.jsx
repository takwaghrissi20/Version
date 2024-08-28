import React from 'react';
import { Col } from 'antd';
import AppRowContainer from '@crema/components/AppRowContainer';
import Member from './Member';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import {
  StyledMemberItem,
  StyledProfileConnection,
  StyledProfileConnectionTitle,
} from './index.styled';

const ProfileConnection = ({ profileConnection }) => {
  return (
    <StyledProfileConnection>
      <StyledProfileConnectionTitle>
        <IntlMessages id='userProfile.profileConnections' />
      </StyledProfileConnectionTitle>
    
    </StyledProfileConnection>
  );
};

export default ProfileConnection;

ProfileConnection.propTypes = {
  profileConnection: PropTypes.array,
};
