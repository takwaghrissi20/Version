import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, InputNumber } from 'antd';
import {
  StyledShadowWrapper,
  StyledInput,
  StyledSecondaryText1,

} from '../index.styled';

import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useLocation } from 'react-router-dom';
const ViewInterviewStaff = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const interviewCode = location.state ? location.state.interviewCode : null;
  const jobCode = location.state ? location.state.jobCode : null;
  const interviwDate = location.state ? location.state.interviwDate : null;
  const totalAccept = location.state ? location.state.totalAccept : null;
  const totalInterv = location.state ? location.state.totalInterv : null;
  const totalReqPos = location.state ? location.state.totalReqPos : null;
  const totalRequiredGrade = location.state ? location.state.totalRequiredGrade : null;
  const idNumb = location.state ? location.state.idNumb : null
  const department = location.state ? location.state.department : null
  const projname = location.state ? location.state.projname : null
  const requiredGrade = location.state ? location.state.requiredGrade : null
  const requiredQualification = location.state ? location.state.requiredQualification : null
  const positionToBeFilled = location.state ? location.state.positionToBeFilled : null
  const fullName = location.state ? location.state.fullName : null
  const birthayDate = location.state ? location.state.birthayDate : null
  const familySituation = location.state ? location.state.familySituation : null
  const experience = location.state ? location.state.experience : null
  const educationLevel = location.state ? location.state.educationLevel : null
  const diploma = location.state ? location.state.diploma : null
  const telCondidate = location.state ? location.state.telCondidate : null
  const urlCv = location.state ? location.state.urlCv : null
  const validatesFor = location.state ? location.state.validatesFor : null
  const goTotest2 = location.state ? location.state.goTotest2 : null
  const psy_Person = location.state ? location.state.psy_Person : null
  const psy_HumQuality = location.state ? location.state.psy_HumQuality : null
  const psy_motivation = location.state ? location.state.psy_motivation : null
  const psy_Intellig = location.state ? location.state.psy_Intellig : null
  const goToTest3 = location.state ? location.state.goToTest3 : null
  const techEnglishSkills = location.state ? location.state.techEnglishSkills : null
  const evalDesision = location.state ? location.state.evalDesision : null
  const techcommentaire = location.state ? location.state.techcommentaire : null
  const techDate = location.state ? location.state.techDate : null
  const hr_Person = location.state ? location.state.hr_Person : null
  const hr_HumQuality = location.state ? location.state.hr_HumQuality : null
  const hr_motivation = location.state ? location.state.hr_motivation : null
  const headOfDepAprouv = location.state ? location.state.headOfDepAprouv : null
  const hr_Intellig = location.state ? location.state.hr_Intellig : null
  const level = location.state ? location.state.level : null
  const expectedJoinDate = location.state ? location.state.expectedJoinDate : null
  const propsedsalary = location.state ? location.state.propsedsalary : null
  const dailyRate = location.state ? location.state.dailyRate : null
  const hrDesion = location.state ? location.state.hrDesion : null
  const   hrComentaire = location.state ? location.state.  hrComentaire : null
  const   finaldesision = location.state ? location.state. finaldesision : null
  

  console.log("goTotest2", goTotest2)

  const goBack = () => {
    navigate(-1)
  }


  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
      {/**All Fied not empty */}


      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSubmit={e => { e.preventDefault() }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
          }
        }}

      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>MANAGEMENT STAFF INTERVIEW SHEET</Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Recruitement Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference' name='Reference'>
                    <Input
                      className='Input'

                      placeholder={interviewCode}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Interview Date' name='Interview Date'>
                    <Input
                      className='Input'
                      placeholder={interviwDate}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='JOB CODE:' name='JOB CODE'>
                    <Input
                      className='Input'
                      placeholder={jobCode}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Number Required Position' name='Total Number Required Position'>
                    <Input
                      className='Input'
                      placeholder={totalReqPos}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Interviewed' name='Total Interviewed'>
                    <Input
                      className='Input'
                      placeholder={totalInterv}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Accepted' name='Total Accepted'>
                    <Input
                      className='Input'
                      placeholder={totalAccept}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label=' Required Grade' name=' Required Grade'>
                    <Input
                      className='Input'
                      placeholder={requiredGrade}
                      classNames="ViewInput"
                      readOnly={true} />
                  </Form.Item>
                </Col>



              </AppRowContainer>

            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/**/}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Required Position Information </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Project Name' name='projname'>
                    <Input
                      className='Input'
                      placeholder={projname}
                      classNames="ViewInput"
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position to be Filled' name='positionToBeFilled	'>
                    <Input
                      className='Input'
                      placeholder={positionToBeFilled}
                      classNames="ViewInput"
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Department ' name='department '>
                    <Input
                      className='Input'
                      placeholder={department}
                      classNames="ViewInput"
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Requested Qualification' name='requiredQualification'>
                    <Input
                      className='Input'
                      placeholder={requiredQualification}
                      classNames="ViewInput"
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Requested Experience' name='requiredExperinece'>
                    <Input
                      className='Input'
                      placeholder={requiredGrade}
                      classNames="ViewInput"
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Candidate Information*/}
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Candidate Experience & Education </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Diploma /Speciality' name='diploma'
                    rules={[
                      { required: true, message: 'Please input your Diploma /Speciality!' },

                    ]}


                  >
                    <Input
                      className='Input'
                      placeholder={diploma}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Educational level' name='educationLevel'


                  >
                    <Input

                      className='Input'
                      placeholder={educationLevel}
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Experience' name='experience'




                  >
                    <Input
                      className='Input'
                      placeholder={experience}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Preliminary study of the application </Typography.Title>
            <StyledSecondaryText1>
              Go to test 2
            </StyledSecondaryText1>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <Col xs={24} md={12}>
                <Form.Item label='Validation' name='Validation'

                >
                  <Input
                    className='Input'
                    placeholder={validatesFor}
                    readOnly={true}

                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  style={{ marginTop: "10px" }}
                  label='Go to test 2 :'
                  name='Gototest2' >

                  <Checkbox checked={goTotest2}>

                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={!goTotest2}>
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>

                </Form.Item>

              </Col>

            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Psychotechnical Test */}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Psychotechnical Test </Typography.Title>
            <StyledSecondaryText1>
              Go to test 3
            </StyledSecondaryText1>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Personnality'
                    name='Personnality'
                  >
                    <Input
                      className='Input'
                      placeholder={psy_Person}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Humain quality'
                    name='Humain quality'>
                    <Input
                      className='Input'
                      placeholder={psy_HumQuality}
                      readOnly={true}

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Motivation/Ambition'
                    name='Motivation/Ambition'

                  >
                    <Input
                      className='Input'
                      placeholder={psy_motivation}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Intelligence'
                    name='Intelligence'

                  >
                    <Input
                      className='Input'
                      placeholder={psy_Intellig}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>

                  <Form.Item
                    label='Go to test 3 :'
                    name='Gototest3' >
                    <Checkbox checked={goToTest3}>

                      <IntlMessages id='validation.test' />
                    </Checkbox>
                    <Checkbox checked={!goToTest3}>
                      <IntlMessages id='Refuse.test' />
                    </Checkbox>
                  </Form.Item>

                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Technical Evaluation</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='English Skills '
                    name='English Skills '>
                    <Input
                      className='Input'
                      placeholder={techEnglishSkills}
                      readOnly={true}

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Date'
                    name='Date'>

                    <Input
                      className='Input'
                      placeholder={techDate}
                      readOnly={true}

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Evaluator' name='Evaluator'>
                    <Input
                      // value={evaluator}
                      className='Input'
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='ID Number' name='ID Number'
                  >
                    <Input
                      value={idNumb}
                      placeholder='ID Number' />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>

                  <Form.Item
                    label='The present profile meets the requirements of 
                  the requested position :'
                    name='Present profile' >
                    <Checkbox >

                      <IntlMessages id='validation.test' />
                    </Checkbox>
                    <Checkbox >
                      <IntlMessages id='Refuse.test' />
                    </Checkbox>
                  </Form.Item>

                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Evaluator Decision</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={24}>

                  <Form.Item
                    label='Evaluator Decision :'
                    name=' EvaluatorDecision' >
                    <Checkbox checked={evalDesision} >

                      <IntlMessages id='validation.test' />
                    </Checkbox>
                    <Checkbox checked={!evalDesision} >
                      <IntlMessages id='Refuse.test' />
                    </Checkbox>
                  </Form.Item>

                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='Comments' name='Comments' >
                    <Input
                      className='InputComment'
                      placeholder={techcommentaire} />
                  </Form.Item>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>  Head of Department ApprovaL</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>

                  <Form.Item
                    label='Head of Department Approval :'
                    name='Head of Department Approval' >
                    <Checkbox checked={headOfDepAprouv}  >

                      <IntlMessages id='validation.test' />
                    </Checkbox>
                    <Checkbox checked={!headOfDepAprouv}>
                      <IntlMessages id='Refuse.test' />
                    </Checkbox>
                  </Form.Item>

                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>HR Evaluation &&  Decision</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Personnality'
                    name='Personnality' >
                    <Input
                      readOnly
                      placeholder={hr_Person} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Humain quality'
                    name='Humain quality'
                  >
                    <Input
                    readOnly
                      placeholder={hr_HumQuality} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Motivation/Ambition'
                    name='Motivation/Ambition'
                    onChange={(value) => setSelectedMotivationHR(value)}

                  >
                    <Input
                     readOnly
                      placeholder={hr_motivation} />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Intelligence'
                    name='Intelligence'

                  >
                    <Input
                      readOnly
                      placeholder={hr_Intellig} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Level'
                    name='Level'

                  >
                    <Input
                    
                      placeholder={level} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Expected Join Date' name='Expected Join Date'>
                    <Input
                      readOnly
                      placeholder={expectedJoinDate} />

                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item label='Proposed Office Salary' name='Proposed Salary'


                  >
                    <Input
                     readOnly
                      placeholder={propsedsalary} />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate'



                  >
                    <Input
                      readOnly
                      placeholder={dailyRate} />

                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                 
                    <Form.Item
                      label='HR Decision:'
                      name='HR Evaluation' >
                      <Checkbox checked={ hrDesion} >

                        <IntlMessages id='validation.test' />
                      </Checkbox>
                      <Checkbox checked={ !hrDesion} >
                        <IntlMessages id='Refuse.test' />
                      </Checkbox>
                    </Form.Item>
              
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='Comments' name='Comments'



                  >
                    <Input
                      className='InputComment'
                      readOnly
                     placeholder={hrComentaire} />
                  </Form.Item>
                </Col>




              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
         <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
         <Col xs={24} md={6}>
           <Typography.Title level={5}>Board of directors Decision</Typography.Title>
          
         </Col>
         <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
            <Col xs={24} md={12}>
                <Form.Item
                  label='Final Descision:'
                  name='Final Descision: '
                
                  
                >
                      <Input
                   
                     placeholder={finaldesision} 
                     readOnly/>
                 
                 
                </Form.Item>
              </Col>
        
              
            
           
          
             
              </AppRowContainer>
              </StyledShadowWrapper>
              </Col>
       </AppRowContainer>


        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button
          onClick={goBack}
          >Cancel</Button>

        </Space>

      </Form>




    </div>

  );
};


export default ViewInterviewStaff;
