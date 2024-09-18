import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Feedback from './FedbackForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isFeedbackEmployee,
  handleFeedbackContactClose,
  findIdData

}) => {


  return (

    <StyledContactModal
      width={500}
      open={isFeedbackEmployee}
      onOk={isFeedbackEmployee}
      footer={false}
      onCancel={handleFeedbackContactClose}
      bodyStyle={{ height:300 }}
    >
      <Feedback
        handleFeedbackContactClose={handleFeedbackContactClose}
        findIdData={findIdData}
       
 

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
