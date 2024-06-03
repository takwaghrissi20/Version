import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecuitementForm from './RecruitementForm';
import { StyledContactModal } from '../../../styles/index.styled';




const   ModalView = ({
  isViewInfo,
  handleAddContactClose,
  JobCode,
  DateRecruitement,
  id,
  name,
  position,
  DateRequestor,
  projname,
  projCode,
  DateDesiredRecruitement,
  positionRecruitement,
  level,
  desiredExperience,
  vacancie,
  asper,
  commentplanner,
  isOkHead,
  isOkBod,
  dep

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isViewInfo}
      onOk={isViewInfo}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 100 }}
    >
      <RecuitementForm
        handleAddContactClose={handleAddContactClose}
        JobCode={JobCode}
        DateRecruitement={DateRecruitement}
        id={id}
        name={name}
        position={position}
        DateRequestor={DateRequestor}
        projname={projname}
        projCode={ projCode}
        DateDesiredRecruitement={DateDesiredRecruitement}
        positionRecruitement={positionRecruitement}
        level={level}
        desiredExperience={desiredExperience}
        vacancie={vacancie}
        asper={asper}
        commentplanner={commentplanner}
        isOkHead={isOkHead}
        isOkBod={isOkBod}
        dep={ dep}
        
 

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
