
import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, DatePicker, notification
  , Checkbox
} from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
  StyledInput,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import UpdatesalaryIncrease from "../../modules/Model/UpdatesalaryIncrease"
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '../../@crema/helpers/IntlMessages';
import { useLocation } from 'react-router-dom';
const UpdatePositionChangeSalaryIncrease = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const findIdData = location.state ? location.state.findIdData : null;
  const [getsId, setGetsId] = useState("");
  const [getsEmployeeId, setGetsEmployeeId] = useState("");
  const [name, setName] = useState("");
  const [nameEmp, setNameEmp] = useState("");
  const [actualSalary, setActualSalary] = useState("");
  const [position, setPosition] = useState("");
  const [allposition, setAllPosition] = useState("");
  const [positionIncrease, setPositionIncrease] = useState('');
  const [actualprojet, setActualProjet] = useState("");
  const [newContractType, setNewContractType] = useState("");
  const [newPosition, setNewPosition] = useState("");
  const [newReason, setNewReason] = useState("");
  const [declineReason, setDeclineReason] = useState("");
  const [declineReasonBod1, setDeclineReasonBOD1] = useState("");
  const [declineReasonBod2, setDeclineReasonBOD2] = useState("");
  const [lastIncrementDate, setLastIncrementDate] = useState("");
  const [actualPosition, setActualPosition] = useState("");
  const [actualLevel, setActualLevel] = useState("");
  const [actualContractType, setActualContractType] = useState("");
  const [isUpdateEmp, onUpdateEmp] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectsCountry, setProjectsCountry] = useState([]);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("role");
  const [selectedTransferProject, setSelectedTransferProject] = useState('');
  const [projets, setProjets] = useState("")
  const [projectCode, setProjectCode] = useState('');
  const [startingDate, setStartingDate] = useState("");
  const userEmail = localStorage.getItem("email");
  const [assignementProjet, setAssignementProjet] = useState('');
  const [selectprojet, setSelectprojet] = useState(findIdData?.assignementProject);
  const [findI, setFindId] = useState('');
  const [allproj, setAllproj] = useState([]);
  const fetchProject = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/proj/list?token=${token}`;
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        const ProjectName = data.map(project => project.projName);
        setAllproj(ProjectName)

     
      } else {
        console.error("Erreur lors de la récupération des projets:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des projets:", error);
    }
  };
  const handleAssignementProject= (value) => {
    setSelectprojet(value)

  };
  const [saveIncrease, setSaveIncrease] = useState('');
  const handleUpdateEmployeesClose = () => {
    setFindId(null);
    onUpdateEmp(false);
  };
  const handleUpdateEmployeesOpen = () => {
    onUpdateEmp(true);
  };
  const handlePositionIncrease = (value) => {
    setPositionIncrease(value)

  };
  const GetPositions = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/rateMnStaff/list`, {
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
      setAllPosition(Position)


    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
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
      setProjets(data.projects)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };


  const [isSalaryIncrease, setIsSalaryIncrease] = useState(findIdData?.checkSalaryIncrease);
  const [isPositionchange, setIsPositionchange] = useState(findIdData?.chekPositionChange);
  const [isBoth, setIsBoth] = useState(findIdData?.checkBoth);
  const [newSalary, setNewSalary] = useState("");
  const [isHeadDepartement, setIsHeadDepartement] = useState(findIdData?.headDeapAproval);
  const [isNoHeadDepartement, setNoIsHeadDepartement] = useState(!findIdData?.headDeapAproval);
  const [isapprovalbod1, setIsapprovalbod1] = useState(findIdData?.managementDesision);
  const [isapprovalbod2, setIsapprovalbod2] = useState(!findIdData?.managementDesision);
  const [isnobod1, setIsnobod1] = useState(false);
  const [isnobod, setIsnobod2] = useState(false);
  ///////////////
  function SalaryIncrease(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsSalaryIncrease(e.target.checked)
    if (e.target.checked) {
      setIsPositionchange(false)
      setIsBoth(false)
    }

  }
  function Positionchange(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsPositionchange(e.target.checked)
    if (e.target.checked) {
      setIsSalaryIncrease(false)
      setIsBoth(false)
    }


  }
  function Both(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsBoth(e.target.checked)
    if (e.target.checked) {
      setIsSalaryIncrease(false)
      setIsPositionchange(false)
    }
  }
  function OkHeadDepartement(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsHeadDepartement(e.target.checked)
    if (e.target.checked) {
      setNoIsHeadDepartement(false)
    }
  }
  function NoHeadDepartement(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setNoIsHeadDepartement(e.target.checked)
    if (e.target.checked) {
      setIsHeadDepartement(false)
    }
  }
  /////Bod 
  function OkBod1(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsapprovalbod1(e.target.checked)
    // if (e.target.checked) {
    //   setIsnobod1(false)
    // }
  }
  function NoBod1(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsnobod1(e.target.checked)
    // if (e.target.checked) {
    //   setIsnobod1(false)
    // }
  }
  function NoBod2(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsnobod2(e.target.checked)
    // if (e.target.checked) {
    //   setIsnobod1(false)
    // }
  }



  //Bod
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Update SALARY INCREASE _POSITION CHANGE ',
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
      description: 'Error Update  INCREASE _POSITION CHANGE ',
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
  const handleInputGetsIdEmpChange = (event) => {
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
      setFindId(responseData)
      setNameEmp(responseData?.name || '');  
      setActualSalary(responseData?.salary || '')
      setActualPosition(responseData?.position || '')
      setActualLevel(responseData?.position || '')
      setActualContractType(responseData?.contractCategory || '')
  
    } catch (error) {
      console.error("Erreur lors de la récupération du employess:", error);
    }
  };

  const handleInputGetsIdChange = (event) => {
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
  //Find Emp Name


  //End Find Name

  useEffect(() => {
    GetProfileEmployess();
    GetPositions()
    fetchProject()
  }, []);

  const Level = [
    {
      lev: "Junior",
    },
    {
      lev: "Medium",
    },
    {
      lev: "Senior",
    },
    { lev: 'Level I ' },
    { lev: 'Level II' },
    { lev: 'levelIII' },
    { lev: 'LEVEL IV' },
    { lev: 'Level V' },
  ]
  const handleUpdateChange = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/position/update?token=${token}&ref=${id}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          inputDate: findIdData?.inputDate,
          name: getsEmployeeId,
          getsId: getsId,
          actualPositions: actualPosition,
          newPosition: positionIncrease,
          assignementProject: selectprojet,
          "salaryIncrease": 0.0,
          "contratcCoditionChange": 0.0,
          "both": 0.0,
          checkSalaryIncrease: isSalaryIncrease,
          chekPositionChange: isPositionchange,
          checkBoth: isBoth,
          actualSalary: actualSalary,
          actualLevel: null,
          lastIncrementDate: lastIncrementDate,
          actualContractType: actualContractType,
          newSalary: newSalary,
          newLevel: actualprojet,
          newContractTYpe: newContractType,
          startDate: startingDate,
          reason: newReason,
          headDeapAproval: isHeadDepartement,
          declineHofDepReson: declineReason,
          managementDesision: isapprovalbod1,
          delineManageReason: declineReasonBod1,
          notif: 3


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData", responseData)
        setSaveIncrease(responseData)
        form.resetFields();
        openNotification('bottomRight')

        handleUpdateEmployeesOpen()
        // setTimeout(() => {
        //   window.location.reload();

        // }, 2000);



      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Transfer Employee:", error);
    }
  };

  const BeforeSaveTransfer = () => {
    form.validateFields([''])
      .then(values => {
        handleUpdateChange()
      })
      .catch(errorInfo => {

        openNotificationWarning('bottomRight')


      });
  };

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
            <Typography.Title level={4}>SALARY INCREASE _POSITION CHANGE</Typography.Title>
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
                  <Form.Item label='Reference' name='Code'>
                    <Input placeholder={"SIF-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                    <Input

                      placeholder={findIdData?.inputDate}
                      readOnly />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Id Requestor' name='idRequestor'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.idRequestor}
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


              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>DESIGNATED EMPLOYEE DETAILS</Typography.Title>
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
                      onChange={handleInputGetsIdEmpChange} />
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
                  <Form.Item label='Assignement Project' name='Assignement Project'
                    onChange={(value) => setAssignementProjet(value)}
                    >
                    <Select
                      placeholder={findIdData?.assignementProject}
                      value={selectprojet}
                      onChange={handleAssignementProject} >

                      {allproj && allproj.map((p, index) => (
                        <Select.Option key={index} value={p}>
                          {p}
                        </Select.Option>
                      ))}
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
            <Typography.Title level={5}>REQUEST TYPE</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18} >
                  <StyledShadowWrapper>
                    <AppRowContainer>

                      <Col xs={24} md={24} style={{ paddingTop: "1rem" }}>
                        <StyledInput>
                          <Form.Item
                            label=''
                            name='REQUEST TYPE'>
                            <Checkbox checked={isSalaryIncrease} onChange={SalaryIncrease}>

                              <IntlMessages id='hr.Salaryincrease' />
                            </Checkbox>
                            <Checkbox checked={isPositionchange} onClick={Positionchange}>
                              <IntlMessages id='hr.Positionchange' />
                            </Checkbox>
                            <Checkbox checked={isBoth} onClick={Both}>
                              <IntlMessages id='hr.Both' />
                            </Checkbox>
                          </Form.Item>
                        </StyledInput>
                      </Col>

                    </AppRowContainer>
                  </StyledShadowWrapper>
                </Col>







              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}> OLD DATA </Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item label='Actual Salary' name='ActualSalary'>
                    <Input
                      type='number'
                      className='Input'
                      placeholder={actualSalary}
                      readOnly


                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Last Increment Date'
                    name='Last Increment Date'
                  >
                    <DatePicker

                      placeholder={findIdData?.lastIncrementDate}
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setLastIncrementDate(dayjs(value).format('YYYY-MM-DD'))}
                    />

                  </Form.Item>
                </Col>



                <Col xs={24} md={12}>
                  <Form.Item label='Old Position' name='Old Position'>
                    <Input
                      className='Input'
                      placeholder={actualPosition}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Actual Level'
                    name='ActualLevel'

                  >
                    <Input
                      className='Input'
                      placeholder="Actual Level"
                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Actual Contract Type'
                    name='ActualContractType'

                  >
                    <Input
                      placeholder={actualContractType}

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
            <Typography.Title level={5}>  NEW DATA  </Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item label='New Requested Salary' name='NewRequestedSalary'>
                    <Input
                      type='number'
                      className='Input'
                      placeholder={findIdData?.newSalary}
                      value={newSalary}
                      onChange={(e) => setNewSalary(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='New Requested Level' name='New Requested Level'
                  >
                    <Select
                      defaultValue={findIdData?.newLevel}
                      placeholder="New Requested Level"
                      onChange={(value) => setActualProjet(value)}


                    >

                      {Level?.map((p) => {
                        return (
                          <Option value={p.lev} key={p.lev}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.lev}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='New Contract Type' name='New Contract Type'>
                    <Input
                      className='Input'
                      defaultValue={findIdData?.newContractTYpe}
                      placeholder={findIdData?.newContractTYpe}
                      value={newContractType}
                      onChange={(e) => setNewContractType(e.target.value)}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Starting Date'
                    name='Starting Date'
                  >
                    <DatePicker

                      placeholder={findIdData?.startDate}
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setStartingDate(dayjs(value).format('YYYY-MM-DD'))}
                    />

                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='New Position' name='NewPosition'
                    onChange={(value) => setPositionIncrease(value)}
                  >
                    <Select
                      placeholder={findIdData?.newPosition}
                      value={positionIncrease}
                      onChange={handlePositionIncrease} >

                      {allposition && allposition.map((p, index) => (
                        <Select.Option key={index} value={p}>
                          {p}
                        </Select.Option>
                      ))}
                    </Select>




                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label='Reason' name='Reason'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.reason}
                      value={newReason}
                      onChange={(e) => setNewReason(e.target.value)}

                    />
                  </Form.Item>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*Head of dep*/}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>HEAD OF DEPARTEMENT APPROVAL</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18} >


                  <Col xs={24} md={24} style={{ paddingTop: "1rem" }}>
                    <StyledInput>
                      <Form.Item
                        label=''
                        name='Head departement'>
                        <Checkbox checked={isHeadDepartement} onChange={OkHeadDepartement}>

                          <IntlMessages id='common.yes' />
                        </Checkbox>

                        <Checkbox checked={isNoHeadDepartement} onClick={NoHeadDepartement}>
                          <IntlMessages id='common.no' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>


                </Col>

                <Col xs={24} md={24} style={{ marginTop: "0.5rem" }}>
                  <Form.Item label='Decline Reason' name='DeclineReasonBOD'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.declineHofDepReson}
                      value={declineReason}
                      onChange={(e) => setDeclineReason(e.target.value)} />
                  </Form.Item>
                </Col>




              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*BOD aPPROVAL*/}
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>TOP MANAGEMENT DECISION</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={18} >

                  <Col xs={24} md={24} style={{ paddingTop: "1rem" }}>
                    <StyledInput>
                      <Form.Item
                        label=''
                        name='BOD departement'>
                        <Checkbox checked={isapprovalbod1} onChange={OkBod1}>

                          <IntlMessages id='common.yes' />
                        </Checkbox>

                        <Checkbox checked={isnobod1} onClick={NoBod1}>
                          <IntlMessages id='common.no' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>


                </Col>

                <Col xs={24} md={24} style={{ marginTop: "0.5rem" }}>
                  <Form.Item label='Decline Reason' name='DeclineReason'>
                    <Input
                      className='InputComment'
                      placeholder={findIdData?.delineManageReason}
                      value={declineReasonBod1}
                      onChange={(e) => setDeclineReasonBOD1(e.target.value)}

                    />
                  </Form.Item>
                </Col>






              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*End BOD APPROVAL*/}
        {/*Modal Update Emp*/}
        {isUpdateEmp && findIdData && (
          <UpdatesalaryIncrease
            isUpdateEmp={isUpdateEmp}
            handleUpdateEmployeesClose={handleUpdateEmployeesClose}
            findIdData={findIdData}
            saveIncrease={saveIncrease}

          />
        )}
        {/*End Modal Update Emp*/}
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

    </>
  );
};

export default UpdatePositionChangeSalaryIncrease;
