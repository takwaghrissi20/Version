import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecuitementEditForm from './RecruitementForm';
import { StyledContactModal } from '../../../styles/index.styled';



const ModalView = ({
  isEditRecruitement,
  handleAddContactClose,
  JobCode,
  idemp,
  dep,
  requestName,
  position,
   DesiredDate,
   projectName,
   projRef,
   type,
   affectedTo,
   requestedDicipline,
   Level,
   exDep,
   Numbervacancies,
   certif,
   nbExperience

}) => {



  return (

    <StyledContactModal
    width={1050}
      open={ isEditRecruitement}
      onOk={ isEditRecruitement}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 600 }}
    >
      <RecuitementEditForm 
        handleAddContactClose={handleAddContactClose}
        JobCode={JobCode}
        idemp={idemp}
        dep={dep}
        requestName={requestName}
        position={position}
        DesiredDate={DesiredDate}
       projectName={projectName}
       projRef={projRef}
       type={type}
       affectedTo={affectedTo}
      requestedDicipline={requestedDicipline}
      Level={Level}
       exDep={exDep}
       Numbervacancies={Numbervacancies}
       certif={certif}
       nbExperience={nbExperience}

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
