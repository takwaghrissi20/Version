import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpdateVisa from './UpdateVisa';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isVisaExpired,
  handleAddContactClose,
  visaExpired,
  dateemp,
  token

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isVisaExpired}
      onOk={isVisaExpired}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 'auto' }}
    >
      <UpdateVisa
       isVisaExpired={ isVisaExpired}
        handleAddContactClose={handleAddContactClose}
        visaExpired={ visaExpired}
        dateemp={dateemp}
        token={token}
     


      />
    </StyledContactModal>
  );
};

export default ModalView;


