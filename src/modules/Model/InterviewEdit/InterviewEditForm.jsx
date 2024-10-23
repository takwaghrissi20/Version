import React, { useState, useRef } from 'react';

import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Row, TimePicker, Button } from 'antd';
import { useDropzone } from 'react-dropzone';
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
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';





const InterviewForm = (props) => {
  const {
    setUserImage,
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
    time

  } = props;


  const token = localStorage.getItem("token");
  const { messages } = useIntl();
  const [newinterviewCode, setNewinterviewCode] = useState(interviewCode);
  const [newinterviwDate, setNewinterviwDate] = useState(dayjs(interviwDate));
  //const [newinterviwDate, setNewinterviwDate] = useState(interviwDate);
  const [newrequiredGrade, setNewrequiredGrade] = useState(requiredGrade);
  const [interviewTime, setInterviewTime] = useState(moment(time, 'HH:mm:ss.SS'));

  const Update = async (newinterviewCode, newinterviwDate, interviewTime) => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          interviewCode: newinterviewCode,
          jobCode,
          interviwDate: newinterviwDate,

          totalAccept,
          totalInterv,
          totalReqPos,
          totalRequiredGrade,
          idNumb,
          department,
          projname,
          requiredGrade: newrequiredGrade,
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

        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();

        setDataEdit(responseData)
        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleTimeChange = (time) => {
    setInterviewTime(time);
  };




  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}

              <p className='TitleModal'>MANAGEMENT STAFF INTERVIEW SHEET</p>
            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>


      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> InterView Information</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>


              <Form.Item className='form-field'>
                <FloatLabel name="Reference">
                  <span className='modallabel'> Reference :</span>
                  <Input
                    className='Input'
                    placeholder="Reference"
                    value={newinterviewCode}
                    classNames="ViewInput"
                    onChange={(e) => setNewinterviewCode(e.target.value)}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="Interview Date">
                  <span className='modallabel'> Interview Date :</span>
                  <DatePicker
                    className='Input'
                    onChange={(value) => setNewinterviwDate(dayjs(value))}
                    value={newinterviwDate}
                    classNames="ViewInput"


                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Interview Time">
                  <span className='modallabel'> Interview Time :</span>
                  <TimePicker
                    className='Input'
                   value={interviewTime}
                   onChange={handleTimeChange}
                   format="HH:mm:ss.SS"
                   
                    classNames="ViewInput"
                 
                  />
                </FloatLabel>
              </Form.Item>



              <Form.Item className='form-field'>
                <FloatLabel name="JOB CODE:">
                  <span className='modallabel'> JOB CODE: :</span>
                  <Input
                    className='Input'
                    placeholder="JOB CODE:"
                    value={jobCode}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Total Interviewed">
                  <span className='modallabel'> Total Interviewed :</span>
                  <Input
                    className='Input'
                    placeholder="Total Interviewed"
                    value={totalInterv}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Total Accepted">
                  <span className='modallabel'> Total Accepted :</span>
                  <Input
                    className='Input'
                    placeholder="Total Accepted"
                    value={totalAccept}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Required Grade">
                  <span className='modallabel'>Required Grade :</span>
                  <Input
                    className='Input'
                    placeholder="Required Grade"
                    value={newrequiredGrade}
                    onChange={(e) => setNewrequiredGrade(e.target.value)}
                    classNames="ViewInput"

                  />
                </FloatLabel>
              </Form.Item>


            </StyledContactFormContentField>



          </StyledContactFormContentItem>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Candidate Personal Information</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Project Name">
                  <span className='modallabel'> Project Name :</span>
                  <Input
                    className='Input'
                    placeholder="Project Name"
                    value={projname}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Descpline">
                  <span className='modallabel'> Descpline:</span>
                  <Input
                    className='Input'
                    placeholder="Descpline"
                    value={positionToBeFilled}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Department">
                  <span className='modallabel'> Department :</span>
                  <Input
                    className='Input'
                    placeholder="Department"
                    value={department}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Qualification">
                  <span className='modallabel'> Requested Qualification :</span>
                  <Input
                    className='Input'
                    placeholder="Requested Qualification"
                    value={requiredQualification}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Experience">
                  <span className='modallabel'> Requested Qualification:</span>
                  <Input
                    className='Input'
                    placeholder="Requested Qualification"
                    value={requiredGrade}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Experience">
                  <span className='modallabel'>Requested Experience :</span>
                  <Input
                    className='Input'
                    placeholder="Requested Experience"
                    value={experience}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

            </StyledContactFormContentField>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Diploma /Speciality">
                  <span className='modallabel'> Diploma /Speciality :</span>
                  <Input
                    className='Input'
                    placeholder="Diploma /Speciality"
                    value={diploma}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Educational level">
                  <span className='modallabel'> Educational level</span>
                  <Input
                    className='Input'
                    placeholder="Educational level"
                    value={educationLevel}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="feedback">
                  <span className='modallabel'>Feedback :</span>
                  <Input
                    className='Input'
                    placeholder="feedback"
                    value={feedback}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="feedback">
                  <span className='modallabel'>Feedback :</span>
                  <Input
                    className='Input'
                    placeholder="feedback"
                    value={feedback}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="urlCv">
                  <span className='modallabel'>Url Cv  :</span>
                  <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <Button 
                    style={{margin:"10px"}}
                    
                    type='primary'  onClick={open}>
                      Select Cv Candidate
                    </Button>
                  </div>
                  <aside>


                    <ul>{files}</ul>
                  </aside>

                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="agreedJoinedDate">
                  <span className='modallabel'>Agreed Joined Date:</span>
                  <Input
                    className='Input'
                    placeholder="agreedJoinedDate"
                    value={agreedJoinedDate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="telCondidate">
                  <span className='modallabel'> Tel Condidate :</span>
                  <Input
                    className='Input'
                    placeholder="Tel Condidate"
                    value={telCondidate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Birthay Date">
                  <span className='modallabel'> Birthay Date :</span>
                  <Input
                    className='Input'
                    placeholder="Birthay Date "
                    value={birthayDate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>


            </StyledContactFormContentField>



          </StyledContactFormContentItem>
          {/*Test2*/}
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Preliminary study of the application:Go to test 2</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Validation">
                  <span className='modallabel'> Validation :</span>
                  <Input
                    className='Input'
                    placeholder="Validation"
                    value={validatesFor}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Go to test 2">
                  <span className='modallabel'> Go to test 2</span>
                  <Input
                    className='Input'
                    placeholder="Go to test 2"
                    value={goTotest2}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

            </StyledContactFormContentField>




          </StyledContactFormContentItem>
          {/*Psychotechnical TestGo to test 3*/}
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Psychotechnical Test:Go to test 3</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Personnality">
                  <span className='modallabel'> Personnality:</span>
                  <Input
                    className='Input'
                    placeholder="Personnality"
                    value={psy_Person}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Humain quality">
                  <span className='modallabel'> Humain quality</span>
                  <Input
                    className='Input'
                    placeholder="Humain quality"
                    value={psy_HumQuality}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="Motivation/Ambition">
                  <span className='modallabel'> Motivation/Ambition</span>
                  <Input
                    className='Input'
                    placeholder="Motivation/Ambition"
                    value={psy_motivation}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Intelligence">
                  <span className='modallabel'> Intelligence</span>
                  <Input
                    className='Input'
                    placeholder="Intelligence"
                    value={psy_Intellig}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="  Go to test 3">
                  <span className='modallabel'> Go to test 3</span>
                  <Input
                    className='Input'
                    placeholder="Go to test 3"
                    value={goToTest3}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>




            </StyledContactFormContentField>


          </StyledContactFormContentItem>
          {/*Technical Evaluation
Technical Evaluation*/ }
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Technical Evaluation Technical Evaluation</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="English Skills">
                  <span className='modallabel'> English Skills:</span>
                  <Input
                    className='Input'
                    placeholder="English Skills"
                    value={techEnglishSkills}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Date">
                  <span className='modallabel'> Date</span>
                  <Input
                    className='Input'
                    placeholder="Date"
                    value={techDate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Evaluator">
                  <span className='modallabel'> Evaluator</span>
                  <Input
                    className='Input'
                    placeholder="Evaluator"
                    value="Evaluator"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel name="ID Number">
                  <span className='modallabel'>ID Number</span>
                  <Input
                    className='Input'
                    placeholder="ID Number"
                    value="ID Number"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="The present profile meets the requirements of the requested position">
                  <span className='modallabel'>The present profile meets the requirements of the requested position :</span>
                  <Input
                    className='Input'
                    placeholder="The present profile meets the requirements of the requested position"
                    value="The present profile meets the requirements of the requested position"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              {/*Evaluator Decision*/}





            </StyledContactFormContentField>


          </StyledContactFormContentItem>
          {/*Technical Evaluation
Technical Evaluation*/ }
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Evaluator Decision</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Evaluator Decision ">
                  <span className='modallabel'>Evaluator Decision :</span>
                  <Input
                    className='Input'
                    placeholder="Evaluator Decision"
                    value={evalDesision}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Comments">
                  <span className='modallabel'> Comments</span>
                  <Input
                    className='Input'
                    placeholder="Comments"
                    value={techcommentaire}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              {/*Evaluator Decision*/}





            </StyledContactFormContentField>


          </StyledContactFormContentItem>
          {/*Technical Evaluation
Technical Evaluation*/ }
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'> Head of Department ApprovaL</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Head of Department Approval">
                  <span className='modallabel'>Head of Department Approval:</span>
                  <Input
                    className='Input'
                    placeholder="Head of Department Approval"
                    value={headOfDepAprouv}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>


              {/*Evaluator Decision*/}

            </StyledContactFormContentField>

          </StyledContactFormContentItem>
          {/*Technical Evaluation
Technical Evaluation*/ }
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'>HR Evaluation And Decision</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Personnality">
                  <span className='modallabel'>Personnality:</span>
                  <Input
                    className='Input'
                    placeholder="Personnality"
                    value={hr_Person}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Humain quality">
                  <span className='modallabel'>Humain quality:</span>
                  <Input
                    className='Input'
                    placeholder="Humain quality"
                    value={hr_HumQuality}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Motivation/Ambition">
                  <span className='modallabel'>Motivation/Ambition:</span>
                  <Input
                    className='Input'
                    placeholder="Motivation/Ambition"
                    value={hr_motivation}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Intelligence">
                  <span className='modallabel'>Intelligence:</span>
                  <Input
                    className='Input'
                    placeholder="Intelligence"
                    value={hr_Intellig}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Level">
                  <span className='modallabel'>Level :</span>
                  <Input
                    className='Input'
                    placeholder="Level"
                    value={hr_Intellig}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="HR Decision:">
                  <span className='modallabel'>HR Decision :</span>
                  <Input
                    className='Input'
                    placeholder="HR Decision:"
                    value={hrDesion}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Expected Join Date:">
                  <span className='modallabel'> Expected Join Date:</span>
                  <Input
                    className='Input'
                    placeholder="Expected Join Date:"
                    value={expectedJoinDate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Proposed Salary:">
                  <span className='modallabel'> Proposed Salary:</span>
                  <Input
                    className='Input'
                    placeholder="Proposed Salary:"
                    value={propsedsalary}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Proposed Daily Rate:">
                  <span className='modallabel'> Proposed Daily Rate:</span>
                  <Input
                    className='Input'
                    placeholder="Proposed Daily Rate:"
                    value={dailyRate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>


              {/*Evaluator Decision*/}

            </StyledContactFormContentField>

          </StyledContactFormContentItem>
          {/*BOD */}
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'>Board of directors Decisionn</p>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Form.Item className='form-field'>
                <FloatLabel name="Final Descision:">
                  <span className='modallabel'>Final Descision: </span>
                  <Input
                    className='Input'
                    placeholder="Final Descision:"
                    value={finaldesision}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>


              {/*Evaluator Decision*/}

            </StyledContactFormContentField>

          </StyledContactFormContentItem>

        </StyledContactFormContent>



        <StyledContactFormFooter>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            {/* <IntlMessages id='common.cancel' /> */}
            <p style={{ textAlign: "center", paddingTop: "9px" }}>Cancel </p>
          </StyledContactFormBtn>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={() => Update(newinterviewCode, newinterviwDate, interviewTime)} // Pass newName as an argument
          >
            <IntlMessages id='common.Edit' />
          </StyledContactFormBtn>

        </StyledContactFormFooter>


      </StyledContactModalScrollbar>

    </StyledContactForm>
  );
};

export default InterviewForm;

