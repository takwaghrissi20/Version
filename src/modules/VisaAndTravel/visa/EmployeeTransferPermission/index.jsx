import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, DatePicker,notification
  ,Checkbox} from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
  StyledInput,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
const EmployeeTransferPermission = () => {
  const navigate = useNavigate();
  const [lastIdTransfer, setLastIdTransfer] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [getsEmployeeId, setGetsEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [nameEmp, setNameEmp] = useState("");
  const [profileEmployee, setProfileEmployee] = useState("");
  const [position, setPosition] = useState("");
  const [actualprojet, setActualProjet] = useState("");
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState("");
  const [projRef, setProjRef] = useState("");
  const [tansferFrom , setTansferFrom ] = useState("");
  const [tansferTo ,setTansferTo] = useState("");
  const [flight ,setFlight] = useState("");
  const [isPositionHR ,setIsPositionHR] = useState(false);
  const [isNewRecruitement ,setIsNewRecruitement] = useState(false);
  const [reasonFor ,setReasonFor] = useState("");

  const [confirmationMission, setConfirmationMission] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("role");
  const [selectedTransferProject, setSelectedTransferProject] = useState('');
  const [projets, setProjets] = useState("")
  const [projectCode, setProjectCode] = useState('');
  const [desiredTransferDate, setDesiredtransferDate] = useState("");
  const [listProjet, setListProjet] = useState([]);
  const userEmail = localStorage.getItem("email");
  function PositionHR(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsPositionHR(e.target.checked)
    if (e.target.checked) {
      setIsNewRecruitement(false);
   
    }

  }
  function NewRecruitement(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsNewRecruitement(e.target.checked)
    if (e.target.checked) {
      setIsPositionHR(false);
   
    }

  }
 

  const handleTransferProjectChange = (value) => {
    setSelectedTransferProject(value);
    const selectedProject = projets.find(project => project.projName === value);
    if (selectedProject) {
      setProjectCode(selectedProject.projRef);
    }
  };
  


  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };


  const handleInputGetsIdEmploeeChange = (event) => {
    const value = event.target.value;
    setGetsEmployeeId(value);
    findEmpId(value);
  };

  const findEmpId = async (getsId) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setProfileEmployee(responseData )
      setNameEmp(responseData?.name)

      const projectsData = responseData?.projects?.map(project => ({
        projName: project.projName,
        projId: project.projId
      }));
      const projectscountry = responseData?.projects?.flatMap(project => project.country);

      setProjectsCountry(projectscountry);
      setProjects(projectsData);
    } catch (error) {
      console.error("Erreur lors de la récupération du employess:", error);
    }
  };
  //Gets Employeee
  const  handleInputGetsIdChange = (event) => {
    const value = event.target.value;
    setGetsId(value);
    findId(value);
  };

  const findId = async (getsId) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      
      setName(responseData?.name || '');
      setPosition(responseData?.position || '');

      const projectsData = responseData?.projects?.map(project => ({
        projName: project.projName,
        projId: project.projId
      }));
      const projectscountry = responseData?.projects?.flatMap(project => project.country);

      setProjectsCountry(projectscountry);
      setProjects(projectsData);
    } catch (error) {
      console.error("Erreur lors de la récupération du employess:", error);
    }
  };


  //End Gets Employee

  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}&token=${token}`, {
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
      const uniqueProjects = Array.from(new Set(data.projects.map(p => p.projName)))
        .map(projName => {
          return data.projects.find(p => p.projName === projName);
        });

      setProjets(uniqueProjects);



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastIndexTransfer = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/transfer/last?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      console.log(data);
      setLastIdTransfer(data.refTransf);
    } catch (error) {
      console.error('Erreur lors de la récupération refTransf', error);
    }
  };
  const [isExDep, setIsExDep] = useState(false);
  const [isOrDep, setIsOrDep] = useState(false);
  ///////////////
  function ExDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsExDep(e.target.checked)
    if (e.target.checked) {
      setIsOrDep(false);
   
    }

  }
  function OrDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOrDep(e.target.checked)
    if (e.target.checked) {
      setIsExDep(false);
   
    }

  }

  const LastTransfer = lastIdTransfer + 1;
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Employee Transfer Permission ',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const openNotificationWarning = () => {
    notification.open({
      message: 'Warning',
      description: 'All Fields Not Complete',
      style: {
        backgroundColor: '#eab000',
        border: '1px solid #eab000',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #ce9c09',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Add Employee Transfer Permission ',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
 


  const Flight = [
    {
      Fli: "Transfer By Land",

    },
    {
      Fli: "Transfer By Flight",

    },
  

  ]
  // Project By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        const ProjectName = data.map(project => project.projName);
 
       setListProjet(ProjectName )
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };


  useEffect(() => {
    LastIndexTransfer();
    fetchProjectEmail()
      GetProfileEmployess()
    

  }, []);


  const handleAddTransfer = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/transfer/save?token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          refTransf:LastTransfer,
          inputDate:formattedDate,
          requestor:name,
          position:position,
          getsId:getsId,
          transferFrom:tansferFrom,
          transferTo:tansferTo,
          transferByLand:flight,
          transferByFlight:flight,
          positionToBeReplaced:isPositionHR,
          newRecruitement:isNewRecruitement,
          reasonForTransfer:reasonFor,
          newWorkingProj:selectedTransferProject,
          projRef:projectCode,
          desiredTransfDate:desiredTransferDate,
     
           originalDeploSchedule:isOrDep,
          extraDeploymentSchedule:isExDep,
          // projectLeaderDesision,
          empId:getsEmployeeId,
          empName:nameEmp,
          actualProj:actualprojet,
          requiredPosition:profileEmployee?.position


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        form.resetFields();
        openNotification('bottomRight')
        //  navigate(`/Hr/Visa/MissionOrder`)
        //navigate(-1)
        setTimeout(() => {
          window.location.reload();
        }, 2000);

    
      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Transfer Employee:", error);
    }
  };


 
  const goBack = () => {
    navigate(-1)
  }
  const BeforeSaveTransfer = () => {
    form.validateFields([''])
      .then(values => {
        handleAddTransfer()
      })
      .catch(errorInfo => {
        
        openNotificationWarning('bottomRight')


      });
  };

  const handleConfirmationAddTransfer= () => {
    setConfirmationMission(true)
  }
  const handleCancelTransfer = () => {
    //onCancel(true);
 
      navigate(-1)
  
  }
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
            <Typography.Title level={4}>Employee Transfer Permission</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Requestor</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12} >
                  <Form.Item  label='Reference' name='Code'>
                    <Input placeholder={"ETP-" + LastTransfer} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col  xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                  <Input
                      
                      placeholder={formattedDate}
                      readOnly
                     
                     />

                  
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Id Requestor' name='idRequestor'>
                    <Input
                      className='Input'
                      placeholder="Id Requestor"
                      value={getsId}
                      onChange={handleInputGetsIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='PersonName'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Position' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={position} />
                  </Form.Item>
                </Col>
  
               


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Employee Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
               
                    
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='GetsidEmployee '>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsEmployeeId}
                      onChange={handleInputGetsIdEmploeeChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Employee Name' name='EmployeeName'>
                    <Input
                      className='Input'
                      placeholder={nameEmp}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='FunctionEmployee'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={profileEmployee?.position} />
                  </Form.Item>
                </Col>
  
                <Col xs={24} md={12}>
                  <Form.Item label='Actual Working Projet' name='ActualWorkingProjet'
                    rules={[
                      {
                        required: true,
                        message: 'Please enter Actual Working Projet',
                      },

                    ]} >
                    <Select
                      defaultValue="Actual Working Projet"
                      placeholder="Actual Working Projet"
                      onChange={(value) => setActualProjet(value)} >

                      {listProjet?.map((p) => {
                        return (
                          <Option value={p} key={p}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>

                  </Form.Item>
                </Col>
             


               
             

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Desired Transfer Location</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                                 
                <Col xs={24} md={12}>
                  <Form.Item label='Tansfer From' name='TansferFrom '>
                    <Input
                      className='Input'
                      placeholder="Tansfer From"
                      value={tansferFrom}
                      onChange={(e) => setTansferFrom(e.target.value)}/>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='To' name='To'>
                    <Input
                      className='Input'
                      placeholder="To"
                      value={tansferTo}
                      onChange={(e) => setTansferTo(e.target.value)}


                     />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Flight' name='Flight'>
                     <Select
                      defaultValue="Flight"
                      placeholder="Flight"
                      onChange={(value) => setFlight(value)} 
                      >

                      {Flight?.map((p) => {
                        return (
                          <Option value={p.Fli} key={p.Fli}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.Fli}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                </Col>
  
                <Col xs={24} md={18}>
      
              <AppRowContainer>
                <Col xs={24} md={18}>
                  <StyledInput>
                    <Form.Item
                      label=''
                      name='employeeTransferPermission'>
                      <Checkbox 
                      checked={isPositionHR} onChange={PositionHR}
                      >

                        <IntlMessages id='employeeTransferPermission.PositionToBeReplacedByHR' />
                      </Checkbox>
                      <Checkbox 
                      checked={isNewRecruitement} onClick={NewRecruitement}
                      >
                        <IntlMessages id='employeeTransferPermission.NewRecruitement' />
                      </Checkbox>
                    </Form.Item>
                  </StyledInput>
                </Col>



              </AppRowContainer>
          
          </Col>
             
          <Col xs={24} md={24}>
                  <Form.Item label='Reason For Transfer' name='ReasonFor'>
                    <Input
                      className='InputComment'
                      placeholder="Reason For Transfer"
                      value={reasonFor}
                      onChange={(e) => setReasonFor(e.target.value)}
                       />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='New Working Project'
                    name='ProjectName'
                    rules={[
                      { required: true, message: 'Please input your Project Name!' },
                    ]}
                  >
                    <Select
                      placeholder='Project Name'
                      onChange={handleTransferProjectChange}
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
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired Transfer Date'
                    name='DateDesiredTransfer'
                    rules={[
                      { required: true, message: 'Please input your Desired Transfer Date!' },
                    ]}>
                    <DatePicker
              
                      placeholder="YYYY-MM-DD"
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setDesiredtransferDate(dayjs(value).format('YYYY-MM-DD'))}
                    />

                  </Form.Item>
                </Col>
               
             

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*PMO iNPUT*/}
        { user.includes('PMO')  || user.includes('admin')?
          <AppRowContainer style={{ marginTop: 32, marginBottom: 32 }}>
            <Col xs={24} md={6}>
              <Typography.Title level={5}>PMO INPUTS  </Typography.Title>

            </Col>
            <Col xs={24} md={18}>
              <StyledShadowWrapper>
                <AppRowContainer>


                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='As per :'
                        name='As per'
 >
                        <Checkbox checked={isExDep} onChange={ExDep}>

                          <IntlMessages id='Exdep.planner' />
                        </Checkbox>
                        <Checkbox checked={isOrDep} onClick={OrDep}>
                          <IntlMessages id='Ordep.planner' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>

                </AppRowContainer>
              </StyledShadowWrapper>
            </Col>
          </AppRowContainer>

          : null}



        {/*pmo input*/}
    
        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={handleCancelTransfer}>Cancel</Button>
          <Button
            onClick={BeforeSaveTransfer}
            type='primary'
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
      {confirmationMission ? (
        <ConfirmationModal
          open={confirmationMission}
          paragraph={'Are you sure you Add Mission Assignment Order'}
          onDeny={setConfirmationMission}
          onConfirm={handleAddTransfer}
          modalTitle="Add Mission "
          handleConfirmationAddMission={handleConfirmationAddTransfer}
        />
      ) : null}
        {isCancel? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Mission "
          handleMission={ handleCancelTransfe}
        />
      ) : null}
    </>
  );
};

export default EmployeeTransferPermission;
