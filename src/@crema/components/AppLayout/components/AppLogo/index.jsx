import React from 'react';
import PropTypes from 'prop-types';
import { useSidebarContext } from '@crema/context/AppContextProvider/SidebarContextProvider';
import { StyledAppLogo } from './index.styled';

const AppLogo = ({ hasSidebarColor }) => {
  const { sidebarColorSet } = useSidebarContext();
  return (
    <StyledAppLogo>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <img src='/assets/images/logo-white-with-name.png' alt='Gets Company' />
      ) : (
        <p></p>
        // <img src='/assets/images/logo-with-name.png' alt='Gets Company' />
      )}
    </StyledAppLogo>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
