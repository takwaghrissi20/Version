import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography,
  Select, Alert, Checkbox, DatePicker, InputNumber,notification
} from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,
  StyledScrumBoardDatePicker

} from './index.styled';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const EditRecruitement = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  const token = localStorage.getItem("token");
  const userRoles = localStorage.getItem("role");
  const Back = () => {
    navigate(-1)

  };
  //Succes Update 
  const openNotification = () => {
    notification.open({
      description:
        'Update Recruitement Success',
        style: {
          backgroundColor: '#f6ffed',  
          border: '1px solid #f6ffed', 
          borderRadius:"1rem" ,
          color: '#FFFFF',  
        },
        placement: 'bottomRight',
    });
  };
  const [newdesiredDate, setNewDesiredDate] = useState(DesiredDate);
  const [newdep, setNewdep] = useState(dep);
  const [newidemp, setNewidemp] = useState(idemp);
  const [newrequestName, setNewrequestName] = useState(requestName);
  const [newposition, setNewposition] = useState(position);
  const [newprojectName, setNewprojectName] = useState(projectName);
  const [newprojRef, setNewprojRef] = useState(projCode);
  const [newaffectedTo, setNewAffectedTo] = useState(affectedTo);
  const [newrequestedDicipline, setNewrequestedDicipline] = useState(requestedDicipline);
  const [newLevel, setNewLevel] = useState(Level);
  const [newnbExperience, setNewnbExperience] = useState(nbExperience);
  const [newNumbervacancies, setNewNumbervacancies] = useState(Numbervacancies);
  const [newcertif, setNewcertif] = useState(certif);
  const [newexDep, setNewexDep] = useState(exDep);
  const [newoDep, setNewoDep] = useState(oDep);
  const [newCheckedHod, setNewCheckedHod] = useState(signatureHod);
  const [newCheckedBod, setNewCheckedBod] = useState(signatureBod);

  const [selectedLieu, setSelectedLieu] = useState(affectedTo);
  const [dataEdit, setDataEdit] = useState("")
  const [newcomentPlaner, setNewcomentPlaner] = useState(comentPlaner);

  const lieu = [
    { place: 'Office' },
    { place: 'Site' },
    { place: 'Office & Site' },
  ];

  const handlePlaceSelect = (value) => {
    setSelectedLieu(value);

  };
  function HandleexDep(e) {

    setNewexDep(e.target.checked)

  }
  function HandleoDep(e) {

    setNewoDep(e.target.checked)

  }
  function HandleHOD(e) {

    setNewCheckedHod(e.target.checked)

  }
  function HandleBOD(e) {

    setNewCheckedBod(e.target.checked)

  }
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/update?id=${id}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

      
          dep: "IT33",
          // desiredDate: newdesiredDate,
          // dep: newdep,
          // idemp: newidemp,
          // position: newposition,
          // requestName: newrequestName,
          // requestedDicipline: newrequestedDicipline,
          // approuvedRecrutRequestNumber: 1,
          // projectName: newprojectName,
          // totalNumber: newNumbervacancies,
          // experience: newLevel,
          // nbExperience: newnbExperience,
          // type: type,
          // affectedTo: newaffectedTo,
          // certif: newcertif,
          // bod: null,
          // oDep: newoDep,
          // exDep: newexDep,
          // signatureHod: newCheckedHod,
          // signatureBod: null,
          // projRef: newprojRef,


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        setTimeout(() => {
          window.location.reload();
          navigate(-1)
        }, 2000);
      
      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }






  return (
    <div style={{paddingLeft:"1rem",paddingRight:"1rem"}}>
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
                  <Form.Item label='Job Code' name='JobCode'>
                    <Input
                    className='StyleInput'
                    placeholder={"RRS-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Recruitement Date' name='DateRecruitement'


                  >{/*Date et temp de Interview bu Hr*/}
                    <DatePicker
                      //defaultValue={new Date()} 
                      defaultValue=""

                      style={{ width: "100%", height: "38px" }}
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
                      value={newprojectName}
                      onChange={(e) => setNewprojectName(e.target.value)}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Project Code'
                    name='ProjectCode'

                  >
                    <Input
                      placeholder='Code Project'
                      value={newprojRef}
                      onChange={(e) => setNewprojRef(e.target.value)}

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
                  >
                    <StyledScrumBoardDatePicker
                    className='StyleInput'
                      value={newdesiredDate}
                      onChange={() => setNewDesiredDate()}
                    />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Recruitment For' name='Recruitment For'>
                    <Select
                    
                      placeholder='Recruitment For'
                      onChange={handlePlaceSelect}
                      value={selectedLieu}
                    >
                      {lieu.map((p, index) => (
                        <Select.Option key={index} value={p.place}>
                          {p.place}
                        </Select.Option>
                      ))}
                    </Select>
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
                      value={newposition}
                      onChange={() => setNewposition()}
                      placeholder="Position"
                    />




                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Required Level' name='RequiredLevel'

                  >
                    <Input
                    className='StyleInput'
                      value={newLevel}
                      onChange={() => setNewLevel()}
                      placeholder="Required Level"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired years of experience'
                    name='Desiredyearsexperience'>

                    <Input
                    className='StyleInput'
                      value={newnbExperience}
                      onChange={() => setNewnbExperience()}
                      placeholder="Desired years of experience"
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Number of vacancies'
                  >
                    <Input
                    className='StyleInput'
                      value={newNumbervacancies}
                      onChange={() => setNewNumbervacancies()}
                      placeholder="Number of vacancies"
                      type="number" />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                  
                    label='Academic Certificates /Comments (otherrequired Knowledge /Recruitment objective)'
                    name='certif'

                  >
                    <Input
                    className='StyleInput'
                      value={certif}
                      onChange={() => setNewcertif()}
                      placeholder="Academic Certificates" />


                  </Form.Item>
                </Col>


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>


        {dep === "operation" ?
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>PMO Controlling</Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='As per : '
                      name='Asper'

                    >

                      <Checkbox checked={newexDep} onChange={HandleexDep}>
                        Extra Deployment Schedule
                      </Checkbox>
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label=' '
                      name='Asper'

                    >

                      <Checkbox checked={newoDep} onChange={HandleoDep}>
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
                        placeholder="PMO Comments"
                        value={newcomentPlaner}
                        onChange={() => setNewcomentPlaner()}


                      />


                    </Form.Item>
                  </Col>



                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>




          : null}
           {userRoles.includes("admin") ?
           <>
           
           <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
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
                      <Checkbox checked={newCheckedHod} onChange={HandleHOD}>

                        Yes
                      </Checkbox>

                      <Checkbox

                      >
                        No
                      </Checkbox>

                    </Form.Item>
                  </StyledInput>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>


        <Divider style={{ marginTop: 16, marginBottom: 16 }} />

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
                      label='Executive Directors Approval'
                      name='DirectorsApproval'>
                      <Checkbox checked={newCheckedBod} onChange={HandleBOD}>

                        Yes
                      </Checkbox>
                      <Checkbox
                      // checked={newCheckedBod} onChange={HandleBOD}
                      >
                        No
                      </Checkbox>

                    </Form.Item>
                  </StyledInput>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>


          </Col>

        </AppRowContainer>
           
           
           
           
           
           </>
           
           
           
           
           
           :null}

       


        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={Back}>Cancel</Button>
          <Button onClick={Update}>
            Update
          </Button>
          {/* <Button
            type='primary'
            ghost
            onClick={() => Update(newdesiredDate, newdep, newidemp, newrequestName, newposition, newprojectName,
              newprojRef, newaffectedTo, newLevel, newrequestedDicipline, newnbExperience, newNumbervacancies, newcertif)}>

            <p style={{ textAlign: "center", paddingTop: "9px" }}>Update</p>

          </Button> */}

        </Space>

      </Form>



    </div>

  );
};


export default EditRecruitement;
