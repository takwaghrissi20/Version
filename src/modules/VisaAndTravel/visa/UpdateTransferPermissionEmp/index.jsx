import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
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

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../@crema/helpers/IntlMessages';
import { useLocation } from 'react-router-dom';
const UpdateTransfer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state ? location.state.id : null;
  const findIdData = location.state ? location.state.findIdData : null;
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("role");
  const [form] = Form.useForm();
  const [transferFrom, setTransferFrom] = useState(findIdData?.transferFrom);
  const [transferTo, setTransferTo] = useState(findIdData?.transferTo);
  const [selectedTypeTransfer, setselectedTypeTransfer] = useState(findIdData?.transferByLand);
  const [rasontransfer, setRasontransfer] = useState(findIdData?.reasonForTransfer);
  const [checkedPosition, setCheckedPosition] = useState(findIdData?.positionToBeReplaced);
  const [checkedNewRecuitement, setCheckedNewRecuitement] = useState(findIdData?.newRecruitement);
  const [projets, setProjets] = useState("")
  const [projectCode, setProjectCode] = useState('');
  const [desiredTransferDate, setDesiredtransferDate] = useState(findIdData?.desiredTransfDate);
  const [isExDep, setIsExDep] = useState(false);
  const [isOrDep, setIsOrDep] = useState(false);
  const [selectedTransferProject, setSelectedTransferProject] = useState('');
  ///////////////
  function ExDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsExDep(e.target.checked)

  }
  function OrDep(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsOrDep(e.target.checked)

  }

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
      const data = await response.json()
      const uniqueProjects = Array.from(new Set(data.projects.map(p => p.projName)))
        .map(projName => {
          return data.projects.find(p => p.projName === projName);
        });

      setProjets(uniqueProjects);




    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  const handleTransferProjectChange = (value) => {
    setSelectedTransferProject(value);
    const selectedProject = projets.find(project => project.projName === value);
    if (selectedProject) {
      setProjectCode(selectedProject.projRef);
    }
  };

  const handleTypeTransfer = (value) => {

    setselectedTypeTransfer(value);
  };


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Update Employee Transfer Permission ',
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
      description: 'Error Update Employee Transfer Permission ',
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


  useEffect(() => {
    GetProfileEmployess()


  }, []);

  const handleUpdateTransfer = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/transfer/update?token=${token}&ref=${id}`, {

        method: 'Put',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          refTransf: id,
          inputDate: findIdData?.inputDate,
          requestor: findIdData?.requestor,
          position: findIdData?.position,
          getsId: findIdData?.getsId,
          requiredPosition: findIdData?.requiredPosition,
          empName: findIdData?.empName,
          actualProj: findIdData?.actualProj,
          empId: findIdData?.getsId,
          notif: 0,
          transferFrom: transferFrom,
          transferTo: transferTo,
          transferByLand: selectedTypeTransfer,
          // "transferByFlight": false,
          positionToBeReplaced: checkedPosition,
          newRecruitement: checkedNewRecuitement,
          reasonForTransfer: rasontransfer,
          newWorkingProj: selectedTransferProject,
          projRef: projectCode,
          desiredTransfDate: null,
          "rich_DateToSite": null,
          originalDeploSchedule: false,
          extraDeploymentSchedule: false,




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

  const handleCancelTransfer = () => {
    navigate(-1)

  }
  function HandlePositionReplaced(e) {
    setCheckedPosition(e.target.checked)
    if (e.target.checked) {
      setCheckedNewRecuitement(false);

    }
  }
  function HandleNewRecruitement(e) {
    setCheckedNewRecuitement(e.target.checked)
    if (e.target.checked) {
      setCheckedPosition(false);

    }
  }
  const Flight = [
    {
      Fli: "Transfer By Land",

    },
    {
      Fli: "Transfer By Flight",

    },


  ]
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
                  <Form.Item label='Reference' name='Code'>
                    <Input placeholder={"ETP-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                    <Input

                      placeholder={findIdData?.inputDate}
                      readOnly

                    />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Id Requestor' name='idRequestor'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.empId}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='PersonName'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.requestor}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Position' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={findIdData?.position} />
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
                      placeholder={findIdData?.getsId}
                      readOnly


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Employee Name' name='EmployeeName'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.empName}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='FunctionEmployee'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={findIdData?.requiredPosition} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Actual Working Projet' name='ActualWorkingProjet'
                  >
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={findIdData?.actualProj} />



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
                      placeholder={findIdData?.transferFrom}
                      value={transferFrom}
                      onChange={(e) => setTransferFrom(e.target.value)}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='To' name='To'>
                    <Input
                      className='Input'
                      placeholder={findIdData?.transferTo}
                      value={transferTo}
                      onChange={(e) => setTransferTo(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Flight' name='Flight'>

                    <Select
                      defaultValue="Flight"
                      placeholder="Flight"
                      onChange={handleTypeTransfer}
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
                            checked={findIdData?.positionToBeReplaced}
                            onChange={HandlePositionReplaced}

                          >

                            <IntlMessages id='employeeTransferPermission.PositionToBeReplacedByHR' />
                          </Checkbox>
                          <Checkbox
                            checked={findIdData?.newRecruitement}
                            onChange={HandleNewRecruitement} >
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
                      value={rasontransfer}
                      onChange={(e) => setRasontransfer(e.target.value)}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='New Working Project'
                    name='ProjectName'

                  >
                    <Select
                      placeholder={findIdData?.newWorkingProj}
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
                      placeholder={findIdData?.projRef}
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Desired Transfer Date'
                    name='DateDesiredTransfer'

                  >
                    <DatePicker
                      placeholder={findIdData?.desiredTransfDate}
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setDesiredtransferDate(dayjs(value).format('YYYY-MM-DD'))} />

                  </Form.Item>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        {/*PMO iNPUT*/}
        {user.includes('PMO') || user.includes('admin') ?
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
                        name='As per'>
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
            onClick={handleUpdateTransfer}
            type='primary'
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>

    </>
  );
};

export default UpdateTransfer;
