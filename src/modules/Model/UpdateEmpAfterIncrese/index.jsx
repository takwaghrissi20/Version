import React, { useState } from 'react';
import PropTypes from 'prop-types';
import UpdateEmp from './UpdateForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isUpdateEmp,
  handleUpdateEmployeesClose,
  findIdData,
  saveIncrease

}) => {


  return (

    <StyledContactModal
      width={800}
      open={isUpdateEmp}
      onOk={isUpdateEmp}
      footer={false}
      onCancel={ handleUpdateEmployeesClose}
      bodyStyle={{ height:220 }}
    >
      <UpdateEmp
        handleUpdateEmployeesClose={ handleUpdateEmployeesClose}
        findIdData={findIdData}
        saveIncrease={saveIncrease}
       
 

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
