import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContratForm from './ContratForm';
import { StyledContactModal } from '../../../styles/index.styled';


const ModalView = ({
  isEditContrat,
  handleAddContactClose,
  id,
  name,
  position,
  destination,
  traveldate,
  companyType,
  contractCategory,
  familyStatus,
  contratctCopy,
  visaReady,
  departement,
  idVisa,arName,
  arPosition,
  arDestination,
  nbchildren,
  actStatus,
  phoneNumber,
  email,
  joinDate,
  finishDate,
  nationality,
  passport_finish_date,
  residance_finish_date,
  exitRentry_finish_date,
  desertPass_finish_date,
  exrentry_date,
  birthDate,
  nbExperience,
  passportnumber,
  phoneEmergency,
  cnss,
  contractType,
  contractNumb,
  getsEmail,
  desert_pass,
  visa_Nb,
  type_Emp,
  toApplyForVisa,
  requestSendVisa,
  dateVisa,
  vCableReceive,
  vCabledate,
  passportSubmit,
  passportSubmitdate,
  endTravelDate,
  finalVisaReceive,
  finalVisaReceiveDate,
  finishDateVisa,
  idJoys,
  exitRentryType,
  cin,gender,residenceAdress,
  arResidenceAdress,salary,
  duration,
  emergencyName,
  emergencyRelation,


}) => {



  return (
    
    <StyledContactModal
      width={1050}
      open={isEditContrat}
      onOk={isEditContrat}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 600 }}
    >
      <ContratForm
        handleAddContactClose={handleAddContactClose}
        id={id}
        name={name}
        position={position}
        destination={destination}
        traveldate={traveldate}
        companyType={ companyType}
        contractCategory={contractCategory}
        familyStatus={familyStatus}
        contratctCopy={contratctCopy}
        visaReady={visaReady}
        departement={departement}
        idVisa={idVisa}
        arName={arName}
        arPosition={arPosition}
        arDestination={arDestination}
        nbchildren={nbchildren}
        actStatus={actStatus}
        phoneNumber={phoneNumber}
        email={email}
        joinDate={joinDate}
        finishDate={finishDate}
        nationality={nationality}
        passport_finish_date={passport_finish_date}
        residance_finish_date={residance_finish_date}
        exitRentry_finish_date={exitRentry_finish_date}
        desertPass_finish_date={desertPass_finish_date}
        exrentry_date={exrentry_date}
        birthDate={birthDate}
        nbExperience={nbExperience}
        cnss={cnss}
        passportnumber={passportnumber}
        phoneEmergency={phoneEmergency}
        contractType={contractType}
        contractNumb={contractNumb}
        getsEmail={getsEmail}
        desert_pass={desert_pass}
        visa_Nb={visa_Nb}
        type_Emp={type_Emp}
        toApplyForVisa={toApplyForVisa}
        requestSendVisa={requestSendVisa}
        dateVisa={dateVisa}
        vCableReceive={vCableReceive}
        vCabledate={vCabledate}
        passportSubmit={passportSubmit}
        passportSubmitdate={passportSubmitdate}
        endTravelDate={endTravelDate}
        finalVisaReceive={finalVisaReceive}
        finalVisaReceiveDate={finalVisaReceiveDate}
        finishDateVisa={finishDateVisa}
        idJoys={idJoys}
        exitRentryType={exitRentryType}
        cin={cin}
        gender={gender}
        residenceAdress={residenceAdress}
        arResidenceAdress={arResidenceAdress}
        salary={salary}
        duration={duration}
        emergencyName={ emergencyName}
        emergencyRelation={emergencyRelation}
      
      />
    </StyledContactModal>
  );
};

export default ModalView;


