import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, InputNumber } from 'antd';
import {
  StyledShadowWrapper,
  StyledSecondaryText1,

} from '../index.styled';

import IntlMessages from '../../../../../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../../../@crema/components/AppConfirmationModal';
import { useLocation } from 'react-router-dom';
const ViewInterviewConstructionTeam = ({ interviewCode,idViewConstruction}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [form] = Form.useForm();


  const goBack = () => {
    navigate(-1)
  }
 


  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>

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
            <Typography.Title level={4}>Construction STAFF INTERVIEW SHEET</Typography.Title>

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
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.inputInterview}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Interview Date' name='InterviewDate'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.interviwDate}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Interview Time' name='InterviewTime'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.time}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='JOB CODE:' name='JOB CODE'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.jobCode}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Number Required Position' name='Total Number Required Position'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.totalInterv}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Interviewed' name='TotalInterviewed'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.totalRequiredGrade}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Accepted' name='Total Accepted'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.totalAccept}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label=' Required Grade' name=' Required Grade'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.requiredGrade}
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
                      placeholder={idViewConstruction?.projname}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position to be Filled' name='positionToBeFilled	'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.positionToBeFilled}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Department ' name='department '>
                    <Input
                      className='Input'

                      placeholder={idViewConstruction?.department}
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Requested Qualification' name='requiredQualification'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.requiredQualification}
                      readOnly={true}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Requested Experience' name='requiredExperinece'>
                    <Input
                      className='Input'

                      placeholder={idViewConstruction?.requiredExperinece}
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
                  <Form.Item label='Full Name' name='fullname'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.fullName}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Contact Email' name='Contact Email'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.contactPhone}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Contact Full Number' name='ContactFullNumber'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.contactEmail}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date of Birth' name='Date of Birth'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.birthayDate}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label=' Family Situation' name=' Family Situation'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.familySituation}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Diploma /Speciality' name='diploma'



                  >
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.diploma}
                      readOnly={true}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Educational level' name='educationLevel'>
                    <Input

                      className='Input'
                      placeholder={idViewConstruction?.educationLevel}
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Experience' name='experience'>
                    <Input
                      className='Input'
                      placeholder={idViewConstruction?.experience}
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
                    placeholder={idViewConstruction?.validatesFor}
                    readOnly={true}

                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  style={{ marginTop: "10px" }}
                  label='Go to test 2 :'
                  name='Gototest2' >

                  <Checkbox checked={idViewConstruction?.goTotest2}
                    readOnly

                  >

                    <IntlMessages id='validation.test' />
                  </Checkbox>
                  <Checkbox checked={!idViewConstruction?.goTotest2}
                    readOnly
                  >
                    <IntlMessages id='Refuse.test' />
                  </Checkbox>

                </Form.Item>

              </Col>

            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Psychotechnical Test */}
        {idViewConstruction?.goTotest2 &&
          <>
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
                          placeholder={idViewConstruction?.psy_Person}
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
                          placeholder={idViewConstruction?.psy_HumQuality}
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
                          placeholder={idViewConstruction?.psy_motivation}
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
                          placeholder={idViewConstruction?.psy_Intellig}
                          readOnly={true}

                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>

                      <Form.Item
                        label='Go to test 3 :'
                        name='Gototest3' >
                        <Checkbox checked={idViewConstruction.goToTest3}
                          readOnly
                        >

                          <IntlMessages

                            id='validation.test' />
                        </Checkbox>
                        <Checkbox
                          checked={!idViewConstruction.goToTest3}
                          readOnly

                        >
                          <IntlMessages id='Refuse.test' />
                        </Checkbox>
                      </Form.Item>

                    </Col>

                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>
          </>


        }
        {idViewConstruction.goToTest3 &&
          <>
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
                          placeholder={idViewConstruction.comunicSkills}
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
                          placeholder={idViewConstruction.techDate}

                          readOnly={true}

                        />

                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label='Evaluator' name='Evaluator'>
                        <Input
                          placeholder={idViewConstruction.techEvaluation}
                          className='Input'
                          readOnly={true}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item label='ID Number' name='ID Number'
                      >
                        <Input
                          placeholder={idViewConstruction.idNumb}
                          className='Input'
                          readOnly={true}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>

                      <Form.Item
                        label='The present profile meets the requirements of 
                           the requested position :'
                        name='Present profile' >
                        <Checkbox
                          checked={idViewConstruction.meetDesision}
                          readOnly

                        >

                          <IntlMessages id='validation.test' />
                        </Checkbox>
                        <Checkbox
                          checked={!idViewConstruction.meetDesision}
                          readOnly
                        >
                          <IntlMessages id='Refuse.test' />
                        </Checkbox>
                      </Form.Item>

                    </Col>


                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>

          </>

        }

        {idViewConstruction.meetDesision &&
          <>
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
                        <Checkbox
                          checked={idViewConstruction.evalDesision}
                          readOnly

                        >

                          <IntlMessages id='validation.test' />
                        </Checkbox>
                        <Checkbox
                          checked={!idViewConstruction.evalDesision}
                          readOnly

                        >
                          <IntlMessages id='Refuse.test' />
                        </Checkbox>
                      </Form.Item>

                    </Col>
                    <Col xs={24} md={24}>
                      <Form.Item label='Comments' name='Comments' >
                        <Input
                          className='InputComment'
                          placeholder={idViewConstruction.techcommentaire}
                          readOnly
                        />
                      </Form.Item>
                    </Col>


                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>

          </>

        }
        {idViewConstruction.evalDesision &&
          <>
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
                        <Checkbox
                          checked={idViewConstruction.headOfDepAprouv}
                          readOnly

                        >

                          <IntlMessages id='validation.test' />
                        </Checkbox>
                        <Checkbox
                        checked={!idViewConstruction.headOfDepAprouv}
                        readOnly

                        >
                          <IntlMessages id='Refuse.test' />
                        </Checkbox>
                      </Form.Item>

                    </Col>



                  </AppRowContainer>
                </StyledShadowWrapper>
              </Col>
            </AppRowContainer>




          </>


        }

{idViewConstruction.headOfDepAprouv && 
<>
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
                    placeholder={idViewConstruction.hr_Person}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Humain quality'
                    name='Humain quality'
                  >
                    <Input
                    placeholder={idViewConstruction.hr_HumQuality}
                    readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Motivation/Ambition'
                    name='Motivation/Ambition'
                  

                  >
                    <Input
                     placeholder={idViewConstruction.hr_motivation}
                     readOnly
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Intelligence'
                    name='Intelligence'

                  >
                    <Input
                       placeholder={idViewConstruction.hr_Intellig}
                       readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Level'
                    name='Level'

                  >
                    <Input
                     placeholder={idViewConstruction.level}
                     readOnly

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Expected Join Date' name='Expected Join Date'>
                    <Input
                   placeholder={idViewConstruction.expectedJoinDate}
                   readOnly
                    />

                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item label='Proposed Office Salary' name='Proposed Salary'


                  >
                    <Input
                   placeholder={idViewConstruction.propsedsalary}
                   readOnly
                    />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Proposed Site Daily Rate' name='Proposed Daily Rate'
                  >
                    <Input
                       placeholder={idViewConstruction.dailyRate}
                       readOnly
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>

                  <Form.Item
                    label='HR Decision:'
                    name='HR Evaluation' >
                    <Checkbox  
                     checked={idViewConstruction.hrDesion}
                     readOnly
                    
                    >

                      <IntlMessages id='validation.test' />
                    </Checkbox>
                    <Checkbox
                     checked={!idViewConstruction.hrDesion}
                     readOnly
                    
                    >
                      <IntlMessages id='Refuse.test' />
                    </Checkbox>
                  </Form.Item>

                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='Comments' name='Comments'



                  >
                    <Input
                      className='InputComment'
                      placeholder={idViewConstruction.hrComentaire}
                      readOnly
                    />
                  </Form.Item>
                </Col>




              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>

</>
}

        


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


export default ViewInterviewConstructionTeam;
