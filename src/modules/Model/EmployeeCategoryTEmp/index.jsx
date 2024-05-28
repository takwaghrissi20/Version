import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectCategoryTEmp from './SelectCategoryTEmp';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isCategoryEmployee,
  handleAddContactClose,
  getsId,
  category,
  contractType,
  contractCategory,
  primeProductivity,
  arName,
  passportnumber,
  passportSubmitdate,
  arDestination,
  companyType ,
  traveldate ,
  endTravelDate ,
  arResidenceAdress,
  arPosition ,
  salary ,
  dailyRate ,       
  duration ,
  finishDate,
   joinDate ,
  cin ,
  cinDate ,
   id ,
   name

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isCategoryEmployee}
      onOk={isCategoryEmployee}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 'auto' }}
    >
      <SelectCategoryTEmp
        handleAddContactClose={handleAddContactClose}
        getsId={getsId}
        category={category}
        contractType={contractType}
        contractCategory={contractCategory}
        primeProductivity={primeProductivity}
        arName={arName}
        passportnumber={passportnumber}
        passportSubmitdate={passportSubmitdate}
        arDestination={arDestination}
        companyType={companyType}
        traveldate={traveldate}
        endTravelDate={endTravelDate}
        arResidenceAdress={arResidenceAdress}
        arPosition={arPosition}
        salary={salary}
        dailyRate={dailyRate}
        duration={duration}
        finishDate={finishDate}
        joinDate={joinDate}
        cin={cin}
        cinDate={cinDate}
        id={id}
        name={name}


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
