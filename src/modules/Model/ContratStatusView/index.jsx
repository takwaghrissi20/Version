import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ContratForm from './ContratForm';
import { StyledContactModal } from '../../../styles/index.styled';
const ModalView = ({
  isViewContrat,
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
  findIdData

}) => {



  return (
    
    <StyledContactModal
    width={1050}
      open={isViewContrat}
      onOk={isViewContrat}
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
       
      
      />
    </StyledContactModal>
  );
};

export default ModalView;


