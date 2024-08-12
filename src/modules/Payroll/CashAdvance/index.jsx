import React from 'react';
import CashAdvance from './CashAdvance';
import AppAnimate from '../../../@crema/components/AppAnimate';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { StyledCol1, StyledCol2 } from './index.styled';
import PropTypes from 'prop-types';

const CashAdvanceDeduction = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppRowContainer>    
        <StyledCol2 xs={24} md={16} lg={16} xl={24}>    
          <CashAdvance />         
        </StyledCol2>     
      </AppRowContainer>
    </AppAnimate>
  );
};

export default CashAdvanceDeduction;

