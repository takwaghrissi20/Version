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
      <StyledMainFooter style={{marginTop:"2rem"}}>
        <p>

        Copyright© 2024 — ERP GETS COMPANY. All rights reserved-
        Version 1.0.8
        </p>
        <StyledFooterBtnView>
          <StyledFooterBtn type='link' color='primary'>
           
          </StyledFooterBtn>
        </StyledFooterBtnView>
      </StyledMainFooter>
    );

  return null;
};

export default AppFooter;
