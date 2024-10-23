import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VisaEmp from './EditVisa';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isEditVisa,
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
  idVisa,
  dateVisa,
  toApplyForVisa,
  projects
 

}) => {



  return (

    <StyledContactModal
     width={1050}
      open={isEditVisa}
      onOk={isEditVisa}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height:"auto" }}
    >
      <VisaEmp 
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
        idVisa={idVisa}
        dateVisa={dateVisa}
        toApplyForVisa={toApplyForVisa}
        projects={projects}
     

      />
    </StyledContactModal>
  );
};

export default ModalView;


