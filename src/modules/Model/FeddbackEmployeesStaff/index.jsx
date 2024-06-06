import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Feedback from './FedbackForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isFeedbackEmployee,
  handleFeedbackContactClose,
 

}) => {



  return (

    <StyledContactModal
      width={350}
      open={isFeedbackEmployee}
      onOk={isFeedbackEmployee}
      footer={false}
      onCancel={handleFeedbackContactClose}
      bodyStyle={{ height:"auto" }}
    >
      <Feedback
        handleFeedbackContactClose={handleFeedbackContactClose}
       
 

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
