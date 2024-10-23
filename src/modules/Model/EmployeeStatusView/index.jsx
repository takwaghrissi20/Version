import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ViewSammaryForm from './ViewSammaryForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isViewEmployee,
  handleAddContactClose,
  getsId,
  nationality,
  birthDate,
  familyStatus,
  phoneNumber,
  joinDate,
  companyType,
  finishDate,
  actStatus,
  position,
  getsEmail,
  name,
  passportnumber,
  cnss,
  contractNumb,
  cvCopy,
  passportCopy,
  traveldate,
  projName,
  destination,
 

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
      <ViewSammaryForm
        handleAddContactClose={handleAddContactClose}
        getsId={getsId}
        nationality={nationality}
        birthDate={ birthDate}
        familyStatus={ familyStatus}
        phoneNumber={phoneNumber}
        joinDate={joinDate}
        companyType={companyType}
        finishDate={ finishDate}
        actStatus={actStatus}
        position={ position}
        getsEmail={getsEmail}
        name={name}
        passportnumber={passportnumber}
        cnss={cnss}
        contractNumb={contractNumb}
        cvCopy={cvCopy}
        passportCopy={ passportCopy}
        traveldate={traveldate}
        projName={projName}
        destination={destination}
     
     

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
