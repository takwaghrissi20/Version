import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select } from 'antd';
import moment from 'moment';
import {
  StyledContactForm,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { DatePicker,Space } from 'antd';
import TabsRequestor from './TabsRequestor/RecruitementForm'
import TabsInformationRecruitement from './TabsInformationRecruitement/RecruitementForm'
import RequiredProfile from './Required Profile/RecruitementForm'
import PlannerInputs from './Planner Inputs/RecruitementForm'
import HeadDepartment from './HeadDepartment/RecruitementForm'
import DecisionBOD from './DecisionBOD/RecruitementForm'
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';



const RecruitementForm = (props) => {
  const {

    setUserImage,
    isViewInfo,
    handleAddContactClose,
    JobCode,
    DateRecruitement,
    id,
    name,
    position,
    DateRequestor,
    projname,
    projCode,
    DateDesiredRecruitement,
    positionRecruitement,
    level,
    desiredExperience,
    vacancie,
    asper,
    commentplanner,
    isOkHead,
    isOkBod,
    dep
  } = props;

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      '.pdf': [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });


  
  const { RangePicker } = DatePicker;

  const items = [
    {
      label: 'Recruitement Information',
      key: '1',
      children: <TabsInformationRecruitement JobCode={JobCode} DateRecruitement={DateRecruitement} 
      id={id} name={name} position={position}
      DateRequestor={DateRequestor}
      projname={projname}
      projCode={projCode}
      DateDesiredRecruitement={DateDesiredRecruitement}
      positionRecruitement={positionRecruitement}
      level={level}
      desiredExperience={desiredExperience}
      vacancie={vacancie}
      asper={ asper}
      commentplanner={ commentplanner}
      isOkHead={isOkHead}
      isOkBod={isOkBod}
      dep={dep}
      handleAddContactClose={handleAddContactClose}
      
      
      
      ></TabsInformationRecruitement>,
    }, // remember to pass the key prop
    {
      label: 'Requestor',
      key: '2',
      children: <TabsRequestor 
      JobCode={JobCode} DateRecruitement={DateRecruitement} 
      id={id} name={name} position={position}
      DateRequestor={DateRequestor}
      projname={projname}
      projCode={projCode}
      DateDesiredRecruitement={DateDesiredRecruitement}
      positionRecruitement={positionRecruitement}
      level={level}
      desiredExperience={desiredExperience}
      vacancie={vacancie}
      asper={ asper}
      commentplanner={ commentplanner}
      isOkHead={isOkHead}
      isOkBod={isOkBod}
      dep={dep}
      
      
      ></TabsRequestor>,
    },
    {
      label: 'Required Profile',
      key: '3',
      children: <RequiredProfile
      
      JobCode={JobCode} DateRecruitement={DateRecruitement} 
      id={id} name={name} position={position}
      DateRequestor={DateRequestor}
      projname={projname}
      projCode={projCode}
      DateDesiredRecruitement={DateDesiredRecruitement}
      positionRecruitement={positionRecruitement}
      level={level}
      desiredExperience={desiredExperience}
      vacancie={vacancie}
      asper={ asper}
      commentplanner={ commentplanner}
      isOkHead={isOkHead}
      isOkBod={isOkBod}
      dep={dep}
      
      
      ></RequiredProfile>,
    },
    // {
    //   label: 'Planner Inputs',
    //   key: '4',
    //   children: <PlannerInputs 
    //   JobCode={JobCode} DateRecruitement={DateRecruitement} 
    //   id={id} name={name} position={position}
    //   DateRequestor={DateRequestor}
    //   projname={projname}
    //   projCode={projCode}
    //   DateDesiredRecruitement={DateDesiredRecruitement}
    //   positionRecruitement={positionRecruitement}
    //   level={level}
    //   desiredExperience={desiredExperience}
    //   vacancie={vacancie}
    //   asper={ asper}
    //   commentplanner={ commentplanner}
    //   isOkHead={isOkHead}
    //   isOkBod={isOkBod}
    //   dep={dep}
      
      
      
    //   ></PlannerInputs>,
    // },
    {
      label: 'Head of Department Inputs',
      key: '5',
      children: <HeadDepartment
      JobCode={JobCode} DateRecruitement={DateRecruitement} 
      id={id} name={name} position={position}
      DateRequestor={DateRequestor}
      projname={projname}
      projCode={projCode}
      DateDesiredRecruitement={DateDesiredRecruitement}
      positionRecruitement={positionRecruitement}
      level={level}
      desiredExperience={desiredExperience}
      vacancie={vacancie}
      asper={ asper}
      commentplanner={ commentplanner}
      isOkHead={isOkHead}
      isOkBod={isOkBod}
      dep={dep}
      
      
      
      
      ></HeadDepartment>,
    },
    {
      label: 'Decision BOD',
      key: '6',
      children: <DecisionBOD 
      JobCode={JobCode} DateRecruitement={DateRecruitement} 
      id={id} name={name} position={position}
      DateRequestor={DateRequestor}
      projname={projname}
      projCode={projCode}
      DateDesiredRecruitement={DateDesiredRecruitement}
      positionRecruitement={positionRecruitement}
      level={level}
      desiredExperience={desiredExperience}
      vacancie={vacancie}
      asper={ asper}
      commentplanner={ commentplanner}
      isOkHead={isOkHead}
      isOkBod={isOkBod}
      dep={dep}
      
      
      
      
      ></DecisionBOD>,
    },


  ];
  if (dep === 'operation') {
    items.splice(3, 0, {
      label: 'Planner Inputs',
      key: '4',
      children: (
        <PlannerInputs
          JobCode={JobCode}
          DateRecruitement={DateRecruitement}
          id={id}
          name={name}
          position={position}
          DateRequestor={DateRequestor}
          projname={projname}
          projCode={projCode}
          DateDesiredRecruitement={DateDesiredRecruitement}
          positionRecruitement={positionRecruitement}
          level={level}
          desiredExperience={desiredExperience}
          vacancie={vacancie}
          asper={asper}
          commentplanner={commentplanner}
          isOkHead={isOkHead}
          isOkBod={isOkBod}
          dep={dep}
        />
      ),
    });
  }
  
  return (
   
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
      
              <p className='TitleModal'>Add Recruitement.Request</p>
            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>

        <StyledBuyCellCard style={{ paddingLeft: "10px"}} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>
      </StyledContactFormHeader>

    
    </StyledContactForm>
  );
};

export default RecruitementForm;

