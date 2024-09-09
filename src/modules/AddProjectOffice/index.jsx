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
const AddProjectOffice = () => {
  const navigate = useNavigate();
  const [projName, setProjName] = useState("");
  const [getsId, setGetsId] = useState("");
  const [projref, setProjRef] = useState("");
  const [cotractRef, setCotractRef] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("Default");
  const [selectedCountry, setSelectedCountry] = useState("Default");
  const [partener, setPartener] = useState("");
  const [partenerName, setPartenerName] = useState("");
  const [cosCenter, setCosCenter] = useState("");
  const [name, setName] = useState("");
  const [form] = Form.useForm();


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Project',
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
      description: 'Error Add Project',
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
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();

        setName(responseData?.name)




      }
    } catch (error) {
      console.error("Erreur lors de la récupération du employees:", error);
    }
  };

  const SaveProject = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/off/addproject?id=${getsId}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({

          projName: projName,
          getsId: getsId,
          name: name,
          projRef:projref,
          cotractRef:cotractRef,
          projLocation:selectedLocation,
          country:selectedCountry,
          partener:partener,
          partenername:partenerName,
          // contarctRefFile:
          cosCenter:cosCenter



     
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
  const handleProjetNameChange = (event) => {
    const value = event.target.value;
    setProjName(event.target.value);
  };
  const handleGetsIdChange = (event) => {

    const value = event.target.value;
    setGetsId(event.target.value);
  };
  const handleprojrefChange = (event) => {
    const value = event.target.value;
    setProjRef(event.target.value);
  };
  const handleContartRefChange = (event) => {
    const value = event.target.value;
    setCotractRef(event.target.value);
  };
  const handlePartnerName = (event) => {
    const value = event.target.value;
    setPartenerName(event.target.value);
  };
  const handleCosCenter = (event) => {
    const value = event.target.value;

    setCosCenter(event.target.value);
  };
  const handleCancel = () => {
    navigate(-1)

  }
  const Location = [
    // { location: 'Office' },
    { location: 'Sfax/Tunis' },
  
  ];
  const country = [
    { count: 'Tunis' },
    // { count: 'Tunis/Sfax' },

  ];
  const handleprojLocation = (value) => {
    setSelectedLocation(value);
  };
  const handleprojCountry = (value) => {
    setSelectedCountry(value);


  };
  const handlePartener = (event) => {
    const value = event.target.value;
    setPartener(event.target.value);
  };



  const BeforeSaveProjet = () => {
    //setIsModalVisible(true)
    form.validateFields(['projName', 'GetsId'

    ]).then(values => {
      //onSave(true)
      SaveProject()



    }).catch(errorInfo => {

      openNotificationWarning('bottomRight')

      // setIsModalVisible(false);

    });
  };
  useEffect(() => {
    findId()
      ;
  }, [getsId]);

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
            <Typography.Title level={4}>Projet Office Information</Typography.Title>

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
                  <Form.Item label='Projet Name' name='projName'
                    rules={[
                      { required: true, message: 'Please input your Project Name!' },
                    ]}

                  >
                    <Input
                      className='Input'
                      placeholder="Projet Name"
                      value={projName}
                      onChange={handleProjetNameChange}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='HOD Gets Id' name='GetsId'
                    rules={[
                      { required: true, message: 'Please input your Gets Id!' },
                    ]}

                  >
                    <Input
                      className='Input'
                      type="number"
                      placeholder="Gets Id"
                      value={getsId}
                      onChange={handleGetsIdChange}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='HOD Name ' name='Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference Projet' name='ReferenceProjet'
                  

                  >
                    <Input
                      className='Input'

                      placeholder="Reference Projet"
                      value={projref}
                      onChange={handleprojrefChange}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Contrat Reference' name='cotractRef'
                 
                  >
                    <Input
                      className='Input'

                      placeholder="Contrat Reference"
                      value={cotractRef}
                      onChange={handleContartRefChange}


                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    name="projLocation"
                    label="Site Location Of The Project"
                 
                  >
                    <Select onChange={handleprojLocation} placeholder="Site Location Of The Project" allowClear>
                      {Location.map(type => (
                        <Option key={type.location} value={type.location}>
                          {type.location}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="country"
                    label="country"
                 
                  >
                    <Select onChange={handleprojCountry} placeholder="Country" allowClear>
                      {country.map(type => (
                        <Option key={type.count} value={type.count}>
                          {type.count}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Partner Name' name='partener'
                  

                  >
                    <Input
                      className='Input'

                      placeholder="Partner Name"
                      value={partener}
                      onChange={handlePartener}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Owner Name' name='partenername'
                  

                  >
                    <Input
                      className='Input'

                      placeholder="Partner Name"
                      value={partenerName}
                      onChange={handlePartnerName}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Cost Center' name='cosCenter'
                   

                  >
                    <Input
                      className='Input'
                      placeholder="Cos Center"
                      value={cosCenter}
                      onChange={handleCosCenter}
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




    </div>

  );
};


export default AddProjectOffice ;
