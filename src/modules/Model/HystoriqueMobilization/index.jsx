import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ViewHystoriqueForm from './ViewHystoriqueForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isViewEmployee,
  handleAddContactClose,
  findIdData
 

}) => {



  return (

    <StyledContactModal
     width={1050}
      open={isViewEmployee}
      onOk={ isViewEmployee}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height:"auto" }}
    >
      <ViewHystoriqueForm 
        handleAddContactClose={handleAddContactClose}
        findIdData={findIdData}
        
     

      />
    </StyledContactModal>
  );
};

export default ModalView;

ModalView.defaultProps = {

};

ModalView.propTypes = {
  isViewEmployee: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
};
