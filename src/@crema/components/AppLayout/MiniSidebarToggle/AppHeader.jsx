import React, {  useEffect } from 'react';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import AppLogo from '../components/AppLogo';
import { useIntl } from 'react-intl';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import AppNotifications from '../../AppNotifications';
import { FiMoreVertical } from 'react-icons/fi';
import {
  StyledHeaderMiniSecDesktop,
  StyledHeaderMiniSecMobile,
  StyledHeaderMiniSidebar,
  StyledHeaderSearchMinibar,
  StyledCrUserDesignation,
  StyledCrUserInfoAvatar,
  StyledCrUserInfoContent,
  StyledCrUserInfoInner,
  StyledUserArrow,
  StyledUsername,
  StyledUsernameInfo,

} from './index.styled';
import { StyledDropdownWrapper } from '../index.styled';
import { allowMultiLanguage } from '../../../constants/AppConst';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Dropdown,Image } from 'antd';
import { FaChevronDown } from 'react-icons/fa';
import { useThemeContext } from '../../../../@crema/context/AppContextProvider/ThemeContextProvider';
import { useAuthMethod, useAuthUser } from '../../../../@crema/hooks/AuthHooks';
import { useSidebarContext } from '../../../../@crema/context/AppContextProvider/SidebarContextProvider';
import PropTypes from 'prop-types';
import { AiOutlineMenu } from 'react-icons/ai';
const items = [
  { key: 2, label: <AppNotifications /> },
  { key: 3, label: <AppLanguageSwitcher /> },
];

const AppHeader = ({ isCollapsed, onToggleSidebar }) => {
  const { messages } = useIntl();
  const { themeMode } = useThemeContext();
  const { logout } = useAuthMethod();
  const { user } = useAuthUser();
  console.log("userrrrrrr",user)
  const roles = localStorage.getItem("role");
  console.log("rolessss",roles?.charAt(0).toUpperCase())
  const navigate = useNavigate();
  const { sidebarColorSet } = useSidebarContext();
  const { allowSidebarBgImage } = useSidebarContext();
  const getUserAvatar = () => {
    if (user.displayName) {
      return user.displayName.charAt(0).toUpperCase();
    }
    if (user.email) {
      return user.email.charAt(0).toUpperCase();
    }
  };
  useEffect(() => {
    getUserAvatar()
  }, [roles]);
  const items = [
    {
      key: 1,
      label: (
        <p style={{ textAlign: 'center', margin: 0,fontFamily:"cursive" }}>
          Welcome <span style={{fontWeight:"bold"}}> {roles}</span>
        </p>
      ), // Display user's name or email
    },
    {
      key: 2,
      label: <div onClick={() => navigate('/my-profile')}>My Profile</div>,
    },
    {
      key: 3,
      label: <div onClick={() => logout()}>Logout</div>,
    },
  ];

  return (
  
    <StyledHeaderMiniSidebar className='app-header-mini-sidebar'>
      {React.createElement(
        isCollapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
        {
          className: 'trigger',
          style: {
            display: "flex",
            justifyContent: "flex-end"
          },
          onClick: onToggleSidebar,
        }
      )}
       <div className='bottomRight'>
       <StyledHeaderMiniSecDesktop style={{marginRight:"0.5rem"}}>
        {allowMultiLanguage && <AppLanguageSwitcher />}
        <AppNotifications />
      </StyledHeaderMiniSecDesktop>
      <Dropdown
        menu={{ items }}
        trigger={['click']}
        placement='bottomRight'
        overlayStyle={{
          zIndex: 1052,
          minWidth: 150,
        }}
      >
        <StyledCrUserInfoInner className='ant-dropdown-link'>
          {user.photoURL ? (
            <StyledCrUserInfoAvatar src={user.photoURL} />
          ) : (
            <StyledCrUserInfoAvatar>
              {roles?.charAt(0).toUpperCase()}
            </StyledCrUserInfoAvatar>
          )}
          <StyledCrUserInfoContent className='cr-user-info-content'>
            {/* User information goes here */}
          </StyledCrUserInfoContent>
        </StyledCrUserInfoInner>
      </Dropdown>
      
   
      </div>
      
      <StyledHeaderMiniSecMobile>
        <StyledDropdownWrapper>
          <Dropdown
            menu={{ items }}
            overlayClassName='dropdown-wrapper'
            getPopupContainer={(triggerNode) => triggerNode}
            trigger={['click']}
          >
            <a
              className='ant-dropdown-link-mobile'
              onClick={(e) => e.preventDefault()}
            >
              <FiMoreVertical />
            </a>
          </Dropdown>
        </StyledDropdownWrapper>
      </StyledHeaderMiniSecMobile>
    </StyledHeaderMiniSidebar>

  
  );
};

export default AppHeader;

AppHeader.propTypes = {
  isCollapsed: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};
