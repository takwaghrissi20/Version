import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import {Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker,InputNumber  } from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,

} from '../index.styled';

import IntlMessages from '../../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import RecruitementRequest from "../../Model/RecruitementRequet"

const AddRecruitementForemanBelow = () => {
  const [requestorDate, setRequestorDate] = useState("");
  const [recruitementDate, setRecruitementDate] = useState("");
  const [desiredrecruitementDate, setDesiredrecruitementDate] = useState("");
  const [lastJobCode, setLastJobCode] = useState(0);
  const [profile, setProfile] = useState("")
  const [projets, setProjets] = useState("")
  const [selectedProject, setSelectedProject] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [position, setPosition] = useState('');
  const [positionRecruitement, setPositionRecruitement] = useState('');
  const [desiredExperience, setDesiredExperience] = useState('');
  const [desiredExperienceLevel, setDesiredExperiencELevel] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [vacancie, setVacancie] = useState(0);
  const [asper, setAsper] = useState(0);
  const [certif, setCertif] = useState("");
  const [commentplanner, setCommentPlanner] = useState("");
  const [dep, setDep] = useState('');
  const [isOkHead, setIsOkHead] = useState(false);
  const [isNOHead, setIsNOHead] = useState(false);
  const [isOkBod, setIsOkBod] = useState(false);
  const [isNoBod, setIsNoBod] = useState(false);
  const [isoriginDep, setIsoriginDep] = useState(false);
  const [isExtraDep, setIsExtraDep] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [type,setType]=useState("Foreman & Below")
  const [form] = Form.useForm();
  console.log("positionRecruitement",positionRecruitement)
  const handleValidateEmployeeClose = () => {
    setIsModalVisible(false);
  };
  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      console.log("data profile", data)
      setDep(data.departement)
     
      setProfile(data)
      setProjets(data.projects)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  //Api de Gets Position Construction

  const GetPositions = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateConst/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();

      const Position = data.map(p => p.description)
      console.log("GetPositions", Position)
      setPosition(Position)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };


  const requiredlevel = [
    { level: 'Level I ' },
    { level: 'Level II' },
    { level: 'levelIII' },
    { level: 'LEVEL IV' },
    { level: 'Level V' },

  ];
  const handleLevelSelect = (value) => {
    setSelectedLevel(value);
    setDesiredExperience(calculateDesiredExperience(value));
  };
  const handleAsper = (value) => {
    setAsper(value)
  };
  const calculateDesiredExperience = (level) => {
    switch (level) {
      case 'Level I':
        return '1-5 years';
      case 'Level II':
        return '7-8 years';
      case 'levelIII':
        return 'More than 10 years';
      case 'LEVEL IV':
        return 'More than 10 years';
      case 'Level V':
        return 'More than 10 years';
      default:
        return '';
    }
  };
  //Last Id of Recruitement 
  const LastIndexRecruitement = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/last`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      console.log(data.jobCode)
      setLastJobCode(data.jobCode)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastIndexRecruitementIncremente = lastJobCode + 1
  useEffect(() => {
    LastIndexRecruitement()
    GetProfileEmployess()
    GetPositions()
  }, [dep,type]);
  const handleProjectChange = (value) => {
    setSelectedProject(value);
    const selectedProject = projets.find(project => project.projName === value);

    if (selectedProject) {
      setProjectCode(selectedProject.projRef);
    }
  };
  //Select As Per
  const AsPer = [
    { per: 'Original Deployment Schedule' },
    { per: 'Extra Deployment Schedule' },
   

  ];
  function  OkHead(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOkHead(e.target.checked)
  
  }

  function NoHead(e) {
    console.log(`NoHead = ${e.target.checked}`);
    setIsNOHead(e.target.checked)
    
  }
  function  OkBOD(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOkBod(e.target.checked)
  
  }

  function NoBOD(e) {
    console.log(`NoHead = ${e.target.checked}`);
    setIsNoBod(e.target.checked)
    
  }
//   const Saverecrutement = async () => {
//     try {
//       const params = new URLSearchParams({ name: projname, id: id });

//       const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/addrecrutt?${params}`, {

//         method: 'POST',
//         headers: {
//           "Access-Control-Allow-Headers": "Content-Type",
//           "Access-Control-Allow-Origin": "*",
//           'Content-Type': 'application/json',
//           "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
//         },
//         body: JSON.stringify({
//           //recruttrequestDate: DateRecruitement,
//           requestName: name,
//           approuvedRecrutRequestNumber: null,
//           //jobCode: JobCode,
//           certif: certif,
//           experience: level,
//           position: position,
//           projectName: projname,
//           recruttrequestDate: DateRequestor,
//           requestedDicipline: positionRecruitement,
//           totalNumber: vacancie,
//           type: "For Foreman & Below",
//           oDep: asper,
//           // exDep: "",
//           // status:"0",
//           nbExperience: desiredExperience,
//           projRef: projCode,
//           bod: isOkBod,
//           idemp: id,
//           desiredDate: DateDesiredRecruitement,
//           affectedTo: affectedTo

//         })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//         setShowAlertError(true)
//       }
//       if (response.ok) {

//         const responseData = await response.json();
//         setShowAlert(true)
//         alert("Request Success and send Email");
//         const email = 'rihemhassounanjim90@gmail.com';
//         const secondApiResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/bodNotif?email=${encodeURIComponent(email)}`, {
//           method: 'POST',
//         });

//         if (secondApiResponse.ok) {
//           const secondResponseData = await secondApiResponse.json();
//         } else {
//           console.error("Failed to fetch data from the second API.");
//         }

//         alert('Recruitment request saved successfully.');
        
//       }

//     }

//  catch (error) {
//       console.error("Erreur lors de la récupération du recrutement:", error);
//     }
//   };

 
  const BeforeSaveRecruitement = () => {
    //setIsModalVisible(true)
    form.validateFields(['DateRecruitement','DateRequestor','ProjectName','ProjectCode'
    ,'DateDesiredRecruitement','position','RequiredLevel','Desiredyearsexperience','Numbervacancies',

    ]).then(values => {
       alert("all fields are complete.");
       setIsModalVisible(true)


    }).catch(errorInfo => {
      alert("Please complete all fields");
      setIsModalVisible(false);

    });
  };
console.log("isNOHead",isOkHead)
  return (
    <>
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
                  <Input placeholder={"RRS-" + LastIndexRecruitementIncremente} readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Recruitement Date' name='DateRecruitement'
                  rules={[
                    { required: true, message: 'Please input your Recruitement Date!' },
                  ]}


                >{/*Date et temp de Interview bu Hr*/}
                  <DatePicker
                    //defaultValue={new Date()} 
                    defaultValue={dayjs(recruitementDate, '2024-01-01')}

                    style={{ width: "100%", height: "30px" }}
                    onChange={(value) => setRecruitementDate(dayjs(value).format('YYYY-MM-DD'))}
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
                    placeholder={profile?.getsId}

                    readOnly={true}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Full Name' name='name'>
                  <Input
                    placeholder={profile?.name}
                    readOnly={true}
                  />
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item label='Position' name='position'>
                  <Input
                    placeholder={profile?.position}
                    readOnly={true} />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item label='Requestor Date' name='DateRequestor'
                  rules={[
                    { required: true, message: 'Please input your Requestor Date!' },
                  ]}


                >{/*Date et temp de Interview bu Hr*/}
                  <DatePicker
                    //defaultValue={new Date()} 
                    defaultValue={dayjs(requestorDate, '2024-01-01')}

                    style={{ width: "100%", height: "30px" }}
                    onChange={(value) => setRequestorDate(dayjs(value).format('YYYY-MM-DD'))}
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
                  name='ProjectName'
                  rules={[
                    { required: true, message: 'Please input your Project Name!' },
                  ]}
                >
                  <Select
                    placeholder='Project Name'
                    onChange={handleProjectChange}
                  >
                    {projets && projets.map((p, index) => (
                      <Select.Option key={index} value={p.projName}>
                        {p.projName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} md={12}>
                <Form.Item
                  label='Project Code'
                  name='ProjectCode'
                
                >
                  <Input
                    placeholder={projectCode}
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
          <Typography.Title level={5}>For Foreman & Below Recruitement </Typography.Title>

        </Col>
        <Col xs={24} md={18}>
          <StyledShadowWrapper>
            <AppRowContainer>
              <Col xs={24} md={12}>
                <Form.Item label='Desired Date of Recruitment' name='DateDesiredRecruitement'
                  rules={[
                    { required: true, message: 'Please input your Desired Date of Recruitment!' },
                  ]}


                >{/*Date et temp de Interview bu Hr*/}
                  <DatePicker
                    //defaultValue={new Date()} 
                    defaultValue={dayjs(desiredrecruitementDate, '2024-01-01')}

                    style={{ width: "100%", height: "30px" }}
                    onChange={(value) => setDesiredrecruitementDate(dayjs(value).format('YYYY/MM/DD'))}
                  />

                </Form.Item>
              </Col>


              <Col xs={24} md={12}>
                <Form.Item label='Position' name='Position'
                   onChange={(value) =>setPositionRecruitement(value)}

                  rules={[
                    { required: true, message: 'Please input your Position!' },

                  ]} >
                  <Select
                    placeholder='Select Position'
                   value={positionRecruitement}
                    onChange={(value) => console.log('Select Position:', value)}

                  >

                    {position && position.map((p, index) => (
                      <Select.Option key={index} value={p}>
                        {p}
                      </Select.Option>
                    ))}
                  </Select>




                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Required Level' name='RequiredLevel'

                  rules={[
                    { required: true, message: 'Please Select your Select Required Level!' },

                  ]}
                >
                  <Select
                    placeholder='Required Level'
                    onChange={handleLevelSelect}
                    value={selectedLevel}
                  >
                    {requiredlevel.map((p, index) => (
                      <Select.Option key={index} value={p.level}>
                        {p.level}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  label='Desired years of 
                  experience'
                  name='Desiredyearsexperience'

                  >

                    <Input
                    value={desiredExperienceLevel}
                    onChange={(value) =>setDesiredExperiencELevel(value)}
                    type="number"
                    // placeholder={desiredExperience}
                    />

                </Form.Item>
              </Col>
              <Col style={{marginTop:"1.5rem"}}xs={24} md={12}>
                <Form.Item
                  label='Number of vacancies '
                  name='Numbervacancies'
               

                  rules={[
                    { required: true, message: 'Please Select your Select Number of vacancies!' },

                  ]}
                >
                <Input
                    placeholder="Number Of Vacancies"
                    type="number"
                    value={vacancie}
                    onChange={(e) => setVacancie(e.target.value)}

                    />

                 
                </Form.Item>
              </Col>
              
              

            </AppRowContainer>
          </StyledShadowWrapper>
        </Col>
      </AppRowContainer>


      {dep==="operation"?
      <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
       <Col xs={24} md={6}>
        <Typography.Title level={5}>Planner Review </Typography.Title>

      </Col>
      <Col xs={24} md={18}>
        <StyledShadowWrapper>
          <AppRowContainer>
          {/* <Col xs={24} md={12}>
          <StyledInput>
                <Form.Item
                  label='As per : '
                  name='Asper'
                  // rules={[
                  //   { required: true, message: 'Please Check your  Executive Directors Approval!' },

                  // ]}
>
                  <Checkbox  checked={isOkBod} onChange={OkBOD}>
               
                    <IntlMessages id='accepted.BOD' />
                  </Checkbox>
                  <Checkbox checked={isNoBod} onClick={NoBOD}>
                    <IntlMessages id='Refuse.BOD' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col> */}



          
          <Col xs={24} md={12}>
                <Form.Item
                  label='As per : '
                  name='Asper'
               

                  rules={[
                    { required: true, message: 'Please Select your Select As per :!' },

                  ]}
                >
                   <Select
                    placeholder='As Per'
                    onChange={handleAsper }
                    value={asper}
                
                  >
                    { AsPer.map((p, index) => (
                      <Select.Option key={index} value={p.per}>
                        {p.per}
                      </Select.Option>
                    ))}
                  </Select>
                 

                 
                </Form.Item>
              </Col>
              <Col xs={24} md={24}

              >
                <Form.Item
                  label='Planner Comments'
                  name='PlannerComments'
                 
                 
               

                  rules={[
                    { required: true, message: 'Please Select your Select Planner Comments!' },

                  ]}
                >
                <Input
                style={{paddingTop:"1rem",paddingBottom:"1rem"}}
                    placeholder="Planner Comments"
                    value={commentplanner}
                    onChange={(e) => setCommentPlanner(e.target.value)}
                 
                    />

                 
                </Form.Item>
              </Col>
              
      

          </AppRowContainer>
        </StyledShadowWrapper>
      </Col>
    </AppRowContainer>
      
    
    
    
   :null }   
        <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
       <Col xs={24} md={6}>
        <Typography.Title level={5}> Head of Department Inputs</Typography.Title>
      </Col>
      <Col xs={24} md={18}>
        <StyledShadowWrapper>
          <AppRowContainer>
          <Col xs={24} md={12}>
                <StyledInput>
                <Form.Item
                  label='Head Of Departement Decision'
                  name='HeadInputs' 
                  // rules={[
                  //   { required: true, message: 'Please Check your  Head Of Departement Decision!' },

                  // ]}
                  
                  
                  >
                  <Checkbox  checked={isOkHead} onChange={OkHead}>
          
                    <IntlMessages id='accepted.Head' />
                  </Checkbox>
                  <Checkbox checked={isNOHead} onClick={NoHead}>
                    <IntlMessages id='Refuse.head' />
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
          <Col xs={24} md={12}>
          <StyledInput>
                <Form.Item
                  label='Executive Directors Approval'
                  name='DirectorsApproval'
                  // rules={[
                  //   { required: true, message: 'Please Check your  Executive Directors Approval!' },

                  // ]}
>
                  <Checkbox  checked={isOkBod} onChange={OkBOD}>
               
                    <IntlMessages id='accepted.BOD' />
                  </Checkbox>
                  <Checkbox checked={isNoBod} onClick={NoBOD}>
                    <IntlMessages id='Refuse.BOD' />
                  </Checkbox>
                  </Form.Item>
                </StyledInput>
              </Col>
              
      

          </AppRowContainer>
        </StyledShadowWrapper>
          
                
              </Col>
     
    </AppRowContainer>


      <Space
        size={15}
        style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
      >
        <Button >Cancel</Button>
        <Button
        onClick={BeforeSaveRecruitement}

          type='primary'
          htmlType='submit'>
            Save
         
        </Button>
      </Space>

    </Form>
     <RecruitementRequest
       isViewInfo={isModalVisible}
       handleAddContactClose={handleValidateEmployeeClose}
       JobCode={LastIndexRecruitementIncremente}
       DateRecruitement={recruitementDate}
       id={profile?.getsId}
       name={profile?.name}
       position={profile?.position}
       DateRequestor={requestorDate}
       projname={selectedProject}
       projCode={projectCode}
       DateDesiredRecruitement={desiredrecruitementDate}
       positionRecruitement={positionRecruitement}
       level={selectedLevel}
       desiredExperience={desiredExperienceLevel}
       vacancie={vacancie}
       asper={asper}
       commentplanner={commentplanner}
       isOkHead={isOkHead}
       isOkBod={isOkBod}
       dep={dep}
       certif={certif}
       type={type}
       
       
       
       
       
       >



     </RecruitementRequest>
  

     </>
  
  );
};


export default AddRecruitementForemanBelow;
