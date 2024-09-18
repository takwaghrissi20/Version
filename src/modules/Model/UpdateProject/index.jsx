import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpdateProject from './ProjectForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isIdproject,
  handleProjetClose,
  findIdData,
  projName

}) => {


  return (

    <StyledContactModal
    width={1050}
    open={isIdproject}
    onOk={  isIdproject}
    footer={false}
    onCancel={handleProjetClose}
    bodyStyle={{ height:"auto" }}
    >
      <UpdateProject
        handleProjetClose={handleProjetClose}
        findIdData={findIdData}
        projName={projName}
       
 

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
