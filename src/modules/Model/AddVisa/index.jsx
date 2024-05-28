import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddVisa from './AddVisa';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isAddVisa,
  handleAddContactClose,

 

}) => {



  return (

    <StyledContactModal
     width={1050}
      open={isAddVisa}
      onOk={isAddVisa}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height:"auto" }}
    >
      <AddVisa
        handleAddContactClose={handleAddContactClose}
       
     
     

      />
    </StyledContactModal>
  );
};

export default ModalView;

ModalView.defaultProps = {

};

ModalView.propTypes = {
  isEditEmployee: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
};
