import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecuitementForm from './RecruitementForm';
import { StyledContactModal } from '../../../styles/index.styled';




const   ModalView = ({
  isViewRecruitement,
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
   certif,
   nbExperience,
   Numbervacancies

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isViewRecruitement}
      onOk={isViewRecruitement}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 500 }}
    >
      <RecuitementForm
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
