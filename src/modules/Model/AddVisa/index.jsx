import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisaEmp from './EditVisa';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isVisa,
  handleAddContactClose,

 

}) => {



  return (

    <StyledContactModal
     width={1050}
      open={isVisa}
      onOk={isVisa}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height:"auto" }}
    >
      <VisaEmp 
        handleAddContactClose={handleAddContactClose}
       
     

      />
    </StyledContactModal>
  );
};

export default ModalView;


