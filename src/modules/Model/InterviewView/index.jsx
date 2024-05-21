import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InterviewForm from './InterviewForm';
import { StyledContactModal } from '../../../styles/index.styled';




const ModalView = ({
  isViewInterviewStaff,
  handleAddContactClose,
  interviewCode,
  jobCode,
  interviwDate,
  totalAccept,
  totalInterv,
  totalReqPos,
  totalRequiredGrade,
  idNumb,
  department,
  projname,
  requiredGrade,
  requiredQualification,
  positionToBeFilled,
  fullName,
  birthayDate,
  familySituation,
  experience,
  educationLevel,
  diploma,
  telCondidate,
  urlCv,
  validatesFor,
  goTotest2,
  psy_Person,
  psy_HumQuality,
  psy_motivation,
  psy_Intellig,
  goToTest3,
  techEnglishSkills,
  evalDesision,
  techcommentaire,
  techDate,
  hr_Person,
  hr_HumQuality,
  hr_motivation,
  hr_Intellig,
  level,
  headOfDepAprouv,
  agreedJoinedDate,
  expectedJoinDate,
  dailyRate,
  hrDesion,
  feedback,
  propsedsalary,
  finaldesision,
  time,

}) => {



  return (

    <StyledContactModal
      width={1050}
      open={isViewInterviewStaff}
      onOk={isViewInterviewStaff}
      footer={false}
      onCancel={handleAddContactClose}
      bodyStyle={{ height: 600 }}
    >
      <InterviewForm
        handleAddContactClose={handleAddContactClose}
        interviewCode={interviewCode}
       jobCode={jobCode}
       interviwDate={ interviwDate}
      totalAccept={ totalAccept}
      totalInterv={ totalInterv}
      totalReqPos={ totalReqPos}
      totalRequiredGrade={totalRequiredGrade}
      idNumb={ idNumb}
      department={department}
      projname={ projname}
      requiredGrade={requiredGrade}
      requiredQualification={requiredQualification}
      positionToBeFilled={positionToBeFilled}
      fullName={fullName}
      birthayDate={birthayDate}
      familySituation={familySituation}
      experience={experience}
      educationLevel={educationLevel}
      diploma={diploma}
      telCondidate={telCondidate}
      urlCv={urlCv}
      validatesFor={validatesFor}
      goTotest2={goTotest2}
      psy_Person={psy_Person}
      psy_HumQuality={psy_HumQuality}
      psy_motivation={ psy_motivation}
      psy_Intellig={psy_Intellig}
      goToTest3={goToTest3}
      techEnglishSkills={techEnglishSkills}
      evalDesision={evalDesision}
      techcommentaire={techcommentaire}
      techDate={techDate}
      hr_Person={hr_Person}
      hr_HumQuality={hr_HumQuality}
      hr_motivation={hr_motivation}
      hr_Intellig={hr_Intellig}
      level={ level}
      headOfDepAprouv={headOfDepAprouv}
      agreedJoinedDate={agreedJoinedDate}
      expectedJoinDate={expectedJoinDate}
      dailyRate={dailyRate}
      hrDesion={hrDesion}
      feedback={feedback}
      propsedsalary={propsedsalary}
      finaldesision={finaldesision}
      time={time}
 

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
