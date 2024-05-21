import React from 'react';
import { useLayoutContext } from '@crema/context/AppContextProvider/LayoutContextProvider';
import {
  StyledFooterBtn,
  StyledFooterBtnView,
  StyledMainFooter,
} from './AppFooter.styled';

const AppFooter = () => {
  const { footer } = useLayoutContext();


    return (
      <StyledMainFooter>
        <p>ERP  @GetsCompany 2024</p>
        <StyledFooterBtnView>
          <StyledFooterBtn type='link' color='primary'>
           
          </StyledFooterBtn>
        </StyledFooterBtnView>
      </StyledMainFooter>
    );

  return null;
};

export default AppFooter;
