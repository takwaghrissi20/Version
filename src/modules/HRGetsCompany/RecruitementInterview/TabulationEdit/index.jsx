import React, { useState, useEffect } from 'react';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, } from 'antd';
import { MdEdit } from 'react-icons/md';

import { StyledBuyCellCard, StyledTabs } from '../../../../styles/index.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import dayjs from 'dayjs';
import InterviewSheet from './EditInterviewConstructionTeam';
import AssignementConstruction from './TabsAssignementConstruction';


const InterviewSheetById = () => {
  const location = useLocation();
  const DesiredDate = location.state ? location.state.DesiredDate : null;
  const JobCode = location.state ? location.state.JobCode : null;
  const totalNumber = location.state ? location.state.totalNumber : null;
  const level = location.state ? location.state.level : null;
  const projectName = location.state ? location.state.projectName : null;
  const position = location.state ? location.state.position : null;
  const experienceRequired = location.state ? location.state.experience : null;
  const interviewCode = location.state ? location.state.interviewCode : null;
  const validatesFor = location.state ? location.state.validatesFor : null;
  const goTotest2 = location.state ? location.state.goTotest2 : null;
  const psy_Person = location.state ? location.state.psy_Person : null;
  const psy_HumQuality = location.state ? location.state.psy_HumQuality : null;
  const psy_motivation = location.state ? location.state.psy_motivation : null;
  const psy_Intellig = location.state ? location.state.psy_Intellig : null;
  const [activeTabKey, setActiveTabKey] = useState('1');
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const roles = localStorage.getItem("role");
  const storedrole = window.localStorage.getItem("role");
  const inputInterview = location.state ? location.state.inputInterview : null
  const goToTest3 = location.state ? location.state.goToTest3 : null;
  const techEnglishSkills = location.state ? location.state.techEnglishSkills : null;
  const techDate = location.state ? location.state.techDate : null;
  const techEvaluation = location.state ? location.state.techEvaluation : null;
  const idNumb = location.state ? location.state.idNumb : null;
  const meetDesision = location.state ? location.state.meetDesision : null;
  const evalDesision = location.state ? location.state.evalDesision : null;
  const techcommentaire = location.state ? location.state.techcommentaire : null;
  const hseCertif = location.state ? location.state.hseCertif : null;
  const siteHazCont = location.state ? location.state.siteHazCont : null;
  const properUse = location.state ? location.state.properUse : null;
  const hzardousMater = location.state ? location.state.hzardousMater : null;
  const emergency = location.state ? location.state.emergency : null;
  const ptw = location.state ? location.state.ptw : null;
  const hsePolicies = location.state ? location.state.hsePolicies : null;
  const others = location.state ? location.state.others : null;
  const educAndTrain = location.state ? location.state.educAndTrain : null;
  const workExp = location.state ? location.state.workExp : null;
  const DiversityTal = location.state ? location.state.DiversityTal : null;
  const intellCap = location.state ? location.state.intellCap : null;
  const emotIntellij = location.state ? location.state.emotIntellij : null;
  const selfConf = location.state ? location.state.selfConf : null;
  const comunicSkills = location.state ? location.state.comunicSkills : null;
  const passion = location.state ? location.state.passion : null;
  const creativity = location.state ? location.state.creativity : null;
  const physicPres = location.state ? location.state.physicPres : null;
  const leadership = location.state ? location.state.leadership : null;
  const hseDecision = location.state ? location.state.hseDecision : null;
  const hseComment = location.state ? location.state.hseComment : null;
  const [idViewConstruction, setIdViewConstruction] = useState([]);
  const findIdInterviewConstruction = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/findId?code=${interviewCode}`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setIdViewConstruction(responseData)
      console.log("responseDataConstruction View11111", responseData)

    } catch (error) {
      console.error("Erreur lors de la récupération du Interview Code:", error);
    }
  };
  useEffect(() => {
    findIdInterviewConstruction()
  }, []);
  const items = [
    {
      label: 'INTERVIEW SHEET CONSTRUCTION TEAM ',
      key: '1',
      children: 
      <InterviewSheet JobCode={JobCode}
        idViewConstruction={idViewConstruction}

        // isSaveDisabled={activeTabKey !== '1'}
        totalNumber={totalNumber} level={level} projectName={projectName} position={position}
        isSaveDisabled={isSaveDisabled}
        interviewCode={interviewCode}
        siteHazCont={siteHazCont}
        properUse={properUse}
        hzardousMater={hzardousMater}
        emergency={emergency}
        ptw={ptw}
        hsePolicies={hsePolicies}
        others={others}
        educAndTrain={educAndTrain}
        workExp={workExp}
        DiversityTal={DiversityTal}
        intellCap={intellCap}
        emotIntellij={emotIntellij}
        selfConf={selfConf}
        comunicSkills={comunicSkills}
        passion={passion}
        creativity={creativity}
        physicPres={physicPres}
        leadership={leadership}
        hseDecision={hseDecision}
        hseComment={hseComment}
        hseCertif={hseCertif}

        roles={roles} ></InterviewSheet>,
    },

    // {
    //   label: 'INTERVIEW ASSESMENT SHEET ',
    //   key: '2',
    //   children: <AssignementConstruction isSaveDisabled={true}
    //   JobCode={JobCode}
    //     // isSaveDisabled={activeTabKey !== '1'}
    //     totalNumber={totalNumber} level={level} projectName={projectName} position={position}
    //     roles={roles}

    //   ></AssignementConstruction>,
    // }

    ...(roles.includes('HSE') || roles === "Human Ressource Manager" || roles.includes('bod') ? [{
      label: 'INTERVIEW ASSESMENT SHEET',
      key: '2',
      children: (
        <AssignementConstruction
          idViewConstruction={idViewConstruction}
          inputInterview={inputInterview}
          interviewCode={interviewCode}
          isSaveDisabled={true}
          JobCode={JobCode}
          totalNumber={totalNumber}
          level={level}
          projectName={projectName}
          position={position}
          roles={roles}
          validatesFor={validatesFor}
          goTotest2={goTotest2}
          psy_Person={psy_Person}
          psy_HumQuality={psy_HumQuality}
          psy_motivation={psy_motivation}
          psy_Intellig={psy_Intellig}
          goToTest3={goToTest3}
          techEnglishSkills={techEnglishSkills}
          techDate={techDate}
          techEvaluation={techEvaluation}
          idNumb={idNumb}
          meetDesision={meetDesision}
          evalDesision={evalDesision}
          techcommentaire={techcommentaire}
          hseCertif={hseCertif}
          siteHazCont={siteHazCont}
          properUse={properUse}
          hzardousMater={hzardousMater}
          emergency={emergency}
          ptw={ptw}
          hsePolicies={hsePolicies}
          others={others}
          educAndTrain={educAndTrain}
          workExp={workExp}
          DiversityTal={DiversityTal}
          intellCap={intellCap}
          emotIntellij={emotIntellij}
          selfConf={selfConf}
          comunicSkills={comunicSkills}
          passion={passion}
          creativity={creativity}
          physicPres={physicPres}
          leadership={leadership}
          hseDecision={hseDecision}
          hseComment={hseComment}
        />
      ),
    }] : [])


  ];
  useEffect(() => {
    if (activeTabKey === '2') {
      setIsSaveDisabled(true)
    }
    // setIsSaveDisabled(activeTabKey === '2'); 

  }, [activeTabKey]);




  return (
    <>

      <StyledBuyCellCard style={{ paddingLeft: "10px" }} heightFull>
        <StyledTabs
          onChange={(key) => setActiveTabKey(key)}
          defaultActiveKey='1'
          items={items}
        />
      </StyledBuyCellCard>

    </>
  );
};


export default InterviewSheetById;
