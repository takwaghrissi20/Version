import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpdatePassport from './UpdatePassport';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isPassportExpired,
  handleAddContactClose,
  passportExpired,
  dateemp,
  token

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isPassportExpired}
      onOk={isPassportExpired}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 'auto' }}
    >
      <UpdatePassport
       isPassportExpired={ isPassportExpired}
        handleAddContactClose={handleAddContactClose}
        passportExpired={passportExpired}
        dateemp={dateemp}
        token={token}
     


      />
    </StyledContactModal>
  );
};

export default ModalView;


