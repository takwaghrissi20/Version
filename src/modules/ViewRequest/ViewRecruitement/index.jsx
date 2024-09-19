import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, InputNumber } from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,

} from './index.styled';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const ViewRecruitementAbove = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [ischecked1, setIschecked1] = useState(false);
  const [ischecked2, setIschecked2] = useState(false);
  const [isNochecked, setIsNochecked] = useState(false);
  const [isNochecked2, setIsNochecked2] = useState(false);

  const id = location.state ? location.state.id : null;
  const dep = location.state ? location.state.dep : null;
  const idemp = location.state ? location.state.idemp : null;
  const requestName = location.state ? location.state.requestName : null;
  const position = location.state ? location.state.position : null;
  const DesiredDate = location.state ? location.state.DesiredDate : null;
  const projectName = location.state ? location.state.projectName : null;
  const recruttrequestDate = location.state ? location.state.recruttrequestDate : null
  const projCode = location.state ? location.state.projCode : null
  const Level = location.state ? location.state.Level : null
  const type = location.state ? location.state.type : null
  const exDep = location.state ? location.state.exDep : null
  const oDep = location.state ? location.state.oDep : null
  const nbExperience = location.state ? location.state.nbExperience : null
  const Numbervacancies = location.state ? location.state.Numbervacancies : null
  const certif = location.state ? location.state.certif : null
  const comentPlaner = location.state ? location.state.comentPlaner : null
  const signatureHod = location.state ? location.state.signatureHod : null
  const signatureBod = location.state ? location.state.signatureBod : null
  const requestedDicipline = location.state ? location.state.requestedDicipline : null
  const affectedTo = location.state ? location.state.affectedTo : null
  const notif1 = location.state ? location.state.notif1 : null
  const notif = location.state ? location.state.notif : null

  const Back = () => {
    navigate(-1)
  };
  function Validatebod(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIschecked1(e.target.checked)
    if (e.target.checked) {
      setIsNochecked(false)
      setIschecked2(false)
      setIsNochecked2(false)

    }

  }

  function ValidateNobod(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsNochecked(e.target.checked)
    if (e.target.checked) {
      setIschecked2(false)
      setIsNochecked2(false)
      setIschecked1(false)

    }

  }
  function Validatebod2(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIschecked2(e.target.checked)
    if (e.target.checked) {
      setIsNochecked2(false)
      setIsNochecked(false)
      setIschecked1(false)

    }
  }
  function ValidateNobod2(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsNochecked2(e.target.checked)
    if (e.target.checked) {
      setIsNochecked(false)
      setIsNochecked(false)
      setIschecked1(false)


    }
  }



  const userRoles = localStorage.getItem("role");

  return (
    <AppsHeader key={'wrap'}>
      <Form
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
            <Typography.Title level={4}>RECRUITMENT REQUEST FORM</Typography.Title>

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
                  <Form.Item
                    label='Job Code' name='JobCode'>
                    <Input
                      className='StyleInput'
                      placeholder={"RRS-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Recruitement Date' name='DateRecruitement'
                    rules={[
                      { required: true, message: 'Please input your Recruitement Date!' },
                    ]}


                  >{/*Date et temp de Interview bu Hr*/}
                    <DatePicker
                      className='StyleInputDate'
                      //defaultValue={new Date()} 
                      defaultValue=""

                      readOnly

                    />

                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Requestor </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='ID Number ' name='id'>
                    <Input
                      className='StyleInput'
                      placeholder={idemp}

                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Full Name' name='name'>
                    <Input
                      className='StyleInput'
                      placeholder={requestName}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>




                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='position'>
                    <Input
                      className='StyleInput'
                      placeholder={requestedDicipline}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Requestor Date' name='DateRequestor'

                  >
                    <Input
                      className='StyleInput'
                      placeholder={recruttrequestDate}
                      readOnly={true}
                    />


                  </Form.Item>
                </Col>





              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Required Profile</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Project Name'


                  >
                    <Input
                      className='StyleInput'
                      placeholder={projectName}
                      readOnly={true} />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item

                    label='Project Code'
                    name='ProjectCode'

                  >
                    <Input
                      className='StyleInput'
                      placeholder={projCode}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>





              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> {type} Recruitement </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Desired Date of Recruitment' name='DateDesiredRecruitement'


                  >{/*Date et temp de Interview bu Hr*/}
                    <Input
                      className='StyleInput'
                      placeholder={DesiredDate}
                      readOnly={true} />

                  </Form.Item>
                </Col>
                {type === "Above Foreman" ?

                  <Col xs={24} md={12}>
                    <Form.Item label='Recruitement For' name='Recruitement For'>
                      <Input
                        className='StyleInput'
                        placeholder={affectedTo}
                        readOnly={true} />
                    </Form.Item>
                  </Col>




                  : null}



                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='Position'>
                    <Input
                      className='StyleInput'
                      placeholder={position}
                      readOnly={true} />




                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Required Level' name='RequiredLevel'


                  >
                    <Input
                      className='StyleInput'
                      placeholder={Level}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired years of experience'
                    name='Desiredyearsexperience'

                  >

                    <Input
                      className='StyleInput'
                      placeholder={nbExperience}
                      readOnly={true} />

                  </Form.Item>
                </Col>
                <Col style={{marginTop:"1.2rem"}} xs={24} md={12}>
                  <Form.Item
                    label='Number of vacancies '
                    name='Numbervacancies'

                  >
                    <Input
                      className='StyleInput'
                      placeholder={Numbervacancies}
                      type="number"

                    />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Academic Certificates /Comments (otherrequired Knowledge /Recruitment objective)'
                    name='certif'

                  >
                    <Input
                      className='StyleInput'
                      value="certif"
                      placeholder={certif} />


                  </Form.Item>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>


        {dep === "operation" ?
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>PMO Controlling </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='As per : '
                      name='Asper'

                    >
                      <Checkbox checked={exDep !== null}>
                        Extra Deployment Schedule
                      </Checkbox>



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='As per : '
                      name='Asper'

                    >
                      <Checkbox checked={oDep !== null}>
                        Original Deployment Schedule
                      </Checkbox>



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}

                  >
                    <Form.Item
                      label='PMO Comments'
                      name='PlannerComments'


                    >
                      <Input
                        style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
                        placeholder={comentPlaner}
                        value="commentplanner" />


                    </Form.Item>
                  </Col>



                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>




          : null}
        {/* <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> Head of Department Inputs</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18}>
                  <StyledInput>
                    <Form.Item
                      label='Head Of Departement Decision'
                      name='HeadInputs'>
                      <Checkbox checked={signatureHod !== null}>
                        Yes
                      </Checkbox>

                      <Checkbox checked={signatureHod == null}>
                        No
                      </Checkbox>

                    </Form.Item>
                  </StyledInput>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer> */}


        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        {userRoles.includes("admin") ?
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>Decision BOD</Typography.Title>


            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={18}>
                    <StyledInput>
                      <Form.Item
                        label='Executive Directors Approval BOD'
                        name='DirectorsApproval'>
                        <Checkbox checked={ischecked1} onChange={Validatebod}></Checkbox>

                        Yes

                        <Checkbox style={{ marginLeft: "2rem" }} checked={isNochecked} onChange={ValidateNobod}>
                          No
                        </Checkbox>

                      </Form.Item>
                    </StyledInput>
                  </Col>
                  <Col xs={24} md={18}>
                    <StyledInput>
                      <Form.Item
                        label='Executive Directors Approval BOD2'
                        name='DirectorsApproval'>
                        <Checkbox checked={ischecked2} onChange={Validatebod2}></Checkbox>

                        Yes

                        <Checkbox style={{ marginLeft: "2rem" }} checked={isNochecked2} onChange={ValidateNobod2}>
                          No
                        </Checkbox>

                      </Form.Item>
                    </StyledInput>
                  </Col>


                </AppRowContainer>
              </StyledShadowWrapper>


            </Col>

          </AppRowContainer> : null}




        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={Back}>Cancel</Button>
          {/* <Button
            disabled={!ischecked1 || isNochecked}
             onClick={Update}

          >Validate</Button> */}

        </Space>





      </Form>



    </AppsHeader>

  );
};


export default ViewRecruitementAbove;
