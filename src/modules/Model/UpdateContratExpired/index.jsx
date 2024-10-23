import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpdateContart from './UpdateContart';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isContartExpired,
  handleAddContactClose,
  contratExpired,
  dateemp,
  token

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isContartExpired}
      onOk={isContartExpired}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 'auto' }}
    >
      <UpdateContart
        isContartExpired={isContartExpired}
        handleAddContactClose={handleAddContactClose}
        contratExpired={contratExpired}
        dateemp={dateemp}
        token={token}



      />
    </StyledContactModal>
  );
};

export default ModalView;


