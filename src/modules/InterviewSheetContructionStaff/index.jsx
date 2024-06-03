import React, { useState, useEffect } from 'react';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox,  DatePicker, } from 'antd';
import { MdEdit } from 'react-icons/md';

import { StyledBuyCellCard, StyledTabs } from '../../styles/index.styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import dayjs from 'dayjs';

import InterviewSheet from './TabsInterviewConstruction';
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

  const [activeTabKey, setActiveTabKey] = useState('1');
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const items = [
    {
      label: 'INTERVIEW SHEET CONSTRUCTION TEAM ',
      key: '1',
      children: <InterviewSheet JobCode={JobCode} 

      // isSaveDisabled={activeTabKey !== '1'}
      totalNumber={totalNumber} level={level} projectName={projectName}  position={position}
      isSaveDisabled={isSaveDisabled}
    
      ></InterviewSheet>,
    }, // remember to pass the key prop
    {
      label: 'INTERVIEW ASSESMENT SHEET ',
      key: '2',
      children: <AssignementConstruction isSaveDisabled={true}></AssignementConstruction>,
    },
  
      
  ];
  useEffect(() => {
    if(activeTabKey === '2'){
      setIsSaveDisabled(true)
    }
    // setIsSaveDisabled(activeTabKey === '2'); 
    
  }, [activeTabKey]);
console.log("activeTabKey",activeTabKey)
console.log("[isSaveDisabled",isSaveDisabled)



  return (
    <>
     <StyledBuyCellCard   style={{ paddingLeft: "10px" }} heightFull>
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
