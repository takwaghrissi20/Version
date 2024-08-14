import React from 'react';
import PropTypes from 'prop-types';
import AppAnimateGroup from '@crema/components/AppAnimateGroup';
import AppInfoView from '@crema/components/AppInfoView';

import AppLogo from '@crema/components/AppLayout/components/AppLogo';
import {
  StyledAuthCard,
  StyledAuthCardHeader,
  StyledAuthMainContent,
  StyledAuthWelContent,
  StyledAuthWellAction,
  StyledAuthWrap,
} from './AuthWrapper.styled';

const AuthWrapper = ({ children }) => {
  return (
    <AppAnimateGroup
      type='scale'
      animateStyle={{ flex: 1 }}
      delay={0}
      interval={10}
      duration={200}
    >
      <StyledAuthWrap key={'wrap'}>
        <StyledAuthCard>
          <StyledAuthMainContent>
            <StyledAuthCardHeader>
              <AppLogo />
            </StyledAuthCardHeader>
            {children}
          </StyledAuthMainContent>
          <StyledAuthWellAction>
            <StyledAuthWelContent>
              <h2>Welcome to Gets Comapny!</h2>
              <p>
              
              </p>
            </StyledAuthWelContent>
          </StyledAuthWellAction>
        </StyledAuthCard>
      </StyledAuthWrap>
      <AppInfoView />
    </AppAnimateGroup>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
