import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, notification, Checkbox, DatePicker, InputNumber } from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,

} from './index.styled';

import IntlMessages from '../../@crema/helpers/IntlMessages';
import dayjs from 'dayjs';
import RecruitementRequest from "../Model/RecruitementRequet"
import ConfirmationModal from '../../@crema/components/AppConfirmationModal';
import { useNavigate } from 'react-router-dom';
import Notification from '../../modules/Notification';
import { useLocation } from 'react-router-dom';
const ViewTraining= () => {
  const navigate = useNavigate();
  const location = useLocation();
  ////////////////////
  const ref = location.state ? location.state.ref: null;









  ///////////////////////////////
  const [getsId, setGetsId] = useState("");
  const [getsEmpId, setGetsEmpId] = useState("");
  const [empName,  setEmpName] = useState("");
  const [form] = Form.useForm();
  const [dep, setDep] = useState('');
  const [profile, setProfile] = useState("")
  const [isInternal, setIsInternal] = useState(false);
  const [isExternal, setIsExternal] = useState(false);
  const [remarks, setRemarks] = useState("");
  const [topic, setTopic] = useState("");
  const [displine,setDispline] = useState("");
  const [trainingOrganization, setTrainingOrganization] = useState("");
  const [desiredDuration, setDesiredDuration] = useState("");
  const [desiredStartingDate, setDesiredStartingDate] = useState("");
  const [ purposeTraining, setPurposeTraining] = useState("");
  const userRole = localStorage.getItem("role");
  const [lastIdTraining, setLastIdTraining] = useState(0);
  // const [beniciare, setBeniciare] = useState([{getsEmpId : '', empName: '' }]);
  /////////////////TrAINING
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  function Internal(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsInternal(e.target.checked)
    if (e.target.checked) {
    setIsExternal(false)
    }
  }
  function External(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsExternal(e.target.checked)
    if (e.target.checked) {
      setIsInternal(false)
      }

  }
  const handleGetsIdChange = (event) => {
    const value = event.target.value;
    setGetsEmpId(event.target.value);
  };
  ///////////End TrAIING


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Training',
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
      description: 'Error Add Training',
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
  const token = localStorage.getItem("token");
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
      setDep(data.departement)
      setProfile(data)




    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
//Get Emp iNFORMATION
const findId = async () => {
  try {
    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsEmpId}&token=${token}`, {
      method: 'GET',

    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    if (response.ok) {
      const responseData = await response.json();
      setEmpName(responseData)
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du employees:", error);
  }
};
//Get End Emp iNFORMATION
////Last TrAINING
const LastIndexTraining = async () => {
  try {
    const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/train/last`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error('La requête a échoué avec le code ' + response.status);
    }

    const data = await response.json();
    setLastIdTraining(data.ref);
  } catch (error) {
    console.error('Erreur lors de la récupération Last Recruitement', error);
  }
};
const LastTraining = lastIdTraining + 1;
//eND lAST tRaining
  const SaveTraining = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/train/add?id=${profile?.getsId}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          pdate:formattedDate,
          id:profile?.getsId,
          requestor:profile?.name,
          position:profile?.position,
          desp:dep,
          excDirSign2:isInternal,
          excDirSign1:isExternal,
          trainOrg:trainingOrganization,
          desiredDuration:desiredDuration,
          desiredDate:desiredStartingDate,
          purpose:purposeTraining




        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        setTimeout(() => {
          form.resetFields();
          window.location.reload();
        }, 1000);







      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  const goBack = () => {
    navigate(-1)

  }

  const handleCancel = () => {
    navigate(-1)

  }




  const BeforeSaveProjet = () => {
    //setIsModalVisible(true)
    form.validateFields(['TrainingName','Discipline','TrainingOrganization','DesiredDuration','PurposeoftheTraining'

    ]).then(values => {
      //onSave(true)
      SaveTraining()



    }).catch(errorInfo => {

      openNotificationWarning('bottomRight')

      // setIsModalVisible(false);

    });
  };
  useEffect(() => {
    GetProfileEmployess()
    findId()
  }, [getsId]);

  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
      {userRole.includes("admin")&&
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
            <Typography.Title level={4}>TRAINING REQUEST FORM</Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>INFORMATION</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference' name='Reference'

                  >
                    <Input
                      className='Input'
                      placeholder={LastTraining}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Request Date' name='DateTraining' >
                    <Input
                      placeholder={formattedDate}
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
            <Typography.Title level={5}>REQUESTOR INFORMATION</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='ID Requestor' name='id'>
                    <Input
                      className='Input'
                      placeholder={profile?.getsId}
                      readOnly


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Requestor' name='requestor'
                  >
                    <Input
                      className='Input'
                      placeholder={profile?.name}
                      readOnly

                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='position'


                  >
                    <Input
                      className='Input'
                      placeholder={profile?.position}
                      readOnly


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Departement' name='dep'


                  >
                    <Input
                      className='Input'
                      placeholder={dep}
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
            <Typography.Title level={5}>REQUESTED TRAINING INFORMATION</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Training Name/ Topic ' name='TrainingName'>
                    <Input
                      className='Input'
                      placeholder="Training Name/ Topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Discipline' name='Discipline'
                  >
                    <Input
                      className='Input'
                     placeholder="Discipline"
                     value={displine}
                     onChange={(e) => setDispline(e.target.value)}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={18}>
             

                  <Col xs={24} md={24}>
                    <StyledInput>
                      <Form.Item
                        label='Training Type'
                        name='TrainingType'>
                        <Checkbox  checked={isInternal} onChange={Internal}>

                          <IntlMessages id='TrainingType.Internal' />
                        </Checkbox>
                        <div style={{width:"1rem"}}></div>
                        <Checkbox
                        checked={isExternal} onClick={External}>
                          <IntlMessages id='TrainingType.External' />
                        </Checkbox>
                      </Form.Item>
                    </StyledInput>
                  </Col>

             
            </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Training Organization ' name='TrainingOrganization'


                  >
                    <Input
                      className='Input'
                      placeholder="Training Organization"
                      value={trainingOrganization}
                      onChange={(e) => setTrainingOrganization(e.target.value)}
                     


                    />
                  </Form.Item>
                </Col>
               
                <Col xs={24} md={12}>
                  <Form.Item label='Desired Duration(/Hrs)' name='DesiredDuration' >
                    <Input
                      className='Input'
                      placeholder="Desired Duration"
                      type='number'
                      value={desiredDuration+ "/Hrs"}
                      onChange={(e) => setDesiredDuration(e.target.value)}
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Desired Starting Date' name='Desired Starting Date' >
                  <DatePicker
                      placeholder="YYYY-MM-DD"
                      style={{ width: "100%", height: "30px" }}
                      onChange={(value) => setDesiredStartingDate (dayjs(value).format('YYYY-MM-DD'))}
                    />
                    
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Purpose of the Training' name='PurposeoftheTraining' >
                    <Input
                      className='Input'
                      placeholder="Purpose of the Training"
                      value={purposeTraining}
                      onChange={(e) => setPurposeTraining(e.target.value)}
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
            <Typography.Title level={5}>BENEFICIARIES LIST </Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
          <Col xs={24} md={12}>
                  <Form.Item label='Id' name='Id' >
                    <Input
                      placeholder="Gets Id"
                      value={getsEmpId}
                      onChange={handleGetsIdChange}
                   
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Name' name='name' >
                    <Input
                      placeholder={empName?.name}
                      readOnly
                   
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='position' >
                    <Input
                      placeholder={empName?.position}
                      readOnly
                   
                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Remarks' name='remarks' >
                    <Input
                      placeholder="Remarks"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                   
                    />

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
          <Button onClick={handleCancel} >Cancel</Button>
          <Button
            onClick={BeforeSaveProjet}

            type='primary'
            htmlType='submit'>
            Save

          </Button>
        </Space>

      </Form>
}




    </div>

  );
};


export default ViewTraining;
