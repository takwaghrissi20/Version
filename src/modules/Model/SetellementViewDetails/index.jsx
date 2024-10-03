import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Setement from './SetementForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isViewDetails,
  handleCloseView,
  salaryData

}) => {
  return (

    <StyledContactModal
      width={800}
      open={isViewDetails}
      onOk={isViewDetails}
      footer={false}
      onCancel={ handleCloseView}
      bodyStyle={{ height:400 }}
    >
      <Setement
         handleCloseView={handleCloseView}
         salaryData={salaryData}
        
    
      />
    </StyledContactModal>
  );
};

export default ModalView;

ModalView.defaultProps = {

};

ModalView.propTypes = {
  isViewRecruitement: PropTypes.bool.isRequired,
  handleAddContactClose: PropTypes.func.isRequired,
  reCallAPI: PropTypes.func,
};
