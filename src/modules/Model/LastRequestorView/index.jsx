import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ViewRequestor from './ViewRequestor';
import { StyledContactModal } from '../../../styles/index.styled';


const ModalView = ({
  isviewLastRequestor,
  handleAddContactClose,
  jobCode,
  requestName,
  idemp,
  position,
  projectName,
  projRef,
  desiredDate,
  nbExperience

 

}) => {
  return (

    <StyledContactModal
      width={700}
      open={isviewLastRequestor}
      onOk={isviewLastRequestor}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 510 }}
    >
      <ViewRequestor
        handleAddContactClose={handleAddContactClose}
        jobCode={jobCode}
        requestName={ requestName}
        idemp={idemp}
        position={position}
        projectName={projectName}
        projRef={projRef}
        desiredDate={desiredDate}
        nbExperience={ nbExperience}
        

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
