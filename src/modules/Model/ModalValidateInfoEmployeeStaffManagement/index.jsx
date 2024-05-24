import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InformationVieForm from './ViewInformationForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isViewInfo,
  handleAddContactClose,
  name,
  arName,
  CIN,
  nationality,
  birthDate,
  gender,phoneNumber,
  familyStatus,
  residenceAdress,
  arResidenceAdress,
  passportnumber,
  passportSubmitdate,
  passport_finish_date,
  position,
  arPosition,
  departement,
  type_Emp,
  projname,
  email,
  joinDate,
  finishDate,
  companyType,
  traveldate,
  endTravelDate,
  destination,
  arDestination,
  salary,
  contractType,
  emergencyName,
  emergencyRelation,
  phoneEmergency,
  contractCategory,
  projName,
  duration,
  dailyRate,
  cinDate


}) => {


  return (
    
    <StyledContactModal
      width={1050}
      open={isViewInfo}
      onOk={isViewInfo}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 700 }}
    >
      <InformationVieForm
        handleAddContactClose={handleAddContactClose}
        name={name}
        arName={arName}
        CIN={CIN}
        nationality={nationality}
        birthDate={birthDate}
        gender={ gender}
        phoneNumber={phoneNumber}
        familyStatus={ familyStatus}
        residenceAdress={residenceAdress}
        arResidenceAdress={arResidenceAdress}
        passportnumber={ passportnumber}
        passportSubmitdate={ passportSubmitdate}
        passport_finish_date={ passport_finish_date}
        position={ position}
        arPosition={arPosition}
        departement={departement}
        type_Emp={type_Emp}
        projname={projname}
        email={email}
        joinDate={joinDate}
        finishDate={finishDate}
        companyType={ companyType}
        traveldate={traveldate}
        endTravelDate={endTravelDate}
        destination={ destination}
        arDestination={ arDestination}
        salary={salary}
        contractType={contractType}
        emergencyName={emergencyName}
        emergencyRelation={ emergencyRelation}
        phoneEmergency={phoneEmergency}
        contractCategory={contractCategory}
        projName={projName}
        duration={duration}
        dailyRate={dailyRate}
        cinDate={cinDate}
      
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
