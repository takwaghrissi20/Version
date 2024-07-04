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
const Affectaprojecttoemployee = () => {
  const navigate = useNavigate();
  const [projName, setProjName] = useState("");
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [form] = Form.useForm();
  const [profile, setProfile] = useState("")
  const [allprojet, setAllprojet] = useState([])
  const [selectedProjet, setSelectedProjet] = useState("Default");


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Project oF Employee',
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
      description: 'Error Add Project Of Employee',
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
  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");


    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${storedemail}`, {
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
      setProfile(data)
      console.log("profile", profile)
      setGetsId(data?.getsId)
      setName(data?.name)



    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
  ///Get All Projet
  const GetProjet = async () => {


    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/list`, {
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
      console.log("daaattttt proj", data)
      const uniqueProjects = [...new Set(data.map(proj => proj.projName))];
      console.log("uniqueProjects", uniqueProjects)
      setAllprojet(uniqueProjects);
   

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };



  //End Get All Projet

  const SaveProjectEmployee = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/off/affect?id=${getsId}&name=${selectedProjet}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
      
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("add projecttt", responseData)
        form.resetFields();
        openNotification('bottomRight')




      }
      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };


  const goBack = () => {
    navigate(-1)

  }


  const BeforeSaveProjet = () => {
    //setIsModalVisible(true)
    form.validateFields(['SelectProjet'

    ]).then(values => {
      //onSave(true)
      SaveProjectEmployee()



    }).catch(errorInfo => {

      openNotificationWarning('bottomRight')

      // setIsModalVisible(false);

    });
  };
  useEffect(() => {
    GetProfileEmployess()
    GetProjet()
  }, [getsId,selectedProjet]);
  const handleprojEmployee = (value) => {
    setSelectedProjet(value);


  };
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
            <Typography.Title level={4}>Add Projet of Employee</Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id Employee' name='GetsId'


                  >
                    <Input
                      className='Input'
                      type="number"
                      placeholder={profile?.getsId}
                      readOnly={true}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Project Leader Name ' name='Name'


                  >
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
                  <Form.Item label='Position' name='position'>
                    <Input
                      placeholder={profile?.position}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="SelectProjet"
                    label="Select Projet"
                    rules={[{ required: true, message: 'Please select Name Of Projet' }]}
                  >
                    <Select onChange={handleprojEmployee} placeholder="Select Projet" allowClear>
                      {allprojet.map(p => (
                        <Option key={p} value={p}>
                          {p}
                        </Option>
                      ))}
                    </Select>
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
          <Button onClick={goBack} >Cancel</Button>
          <Button
            onClick={BeforeSaveProjet}

            type='primary'
            htmlType='submit'>
            Save

          </Button>
        </Space>

      </Form>




    </div>

  );
};


export default Affectaprojecttoemployee;
