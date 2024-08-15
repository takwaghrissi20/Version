import React from 'react';
import ContractStatus from './ContractStatus';
import AppAnimate from '../../../@crema/components/AppAnimate';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { StyledCol1, StyledCol2 } from './index.styled';
import PropTypes from 'prop-types';

const ContratStatus = () => {
  const user = localStorage.getItem("role");
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppRowContainer>
      
        <StyledCol2 xs={24} md={16} lg={16} xl={24}>    
          <ContractStatus user={user}/>
         
        </StyledCol2>     
      </AppRowContainer>
    </AppAnimate>
  );
};

export default ContratStatus;

