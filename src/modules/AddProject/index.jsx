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
import { GrAdd } from "react-icons/gr";
const AddProjectEmployees = () => {
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
  const [locations, setLocations] = useState([{ lieu: "" }]);

  const openNotification = (message, description, style) => {
    notification.open({
      message,
      description,
      style,
      placement: 'topRight',
    });
  };
  const handleprojLocation = (value) => {
    setSelectedLocation(value);
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projName,
          projRef: projref,
          cotractRef:cotractRef,         
          projLocation: selectedLocation,
          country: selectedCountry,
          partener,
          partenername: partenerName,
          cosCenter: cosCenter,
          locations, 
        }),
      });

      if (!response.ok) {
        openNotification('Error', 'Error Add Project', { backgroundColor: 'red', color: '#fff' });
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      openNotification('Success', 'Project Added Successfully', { backgroundColor: '#28a745', color: '#fff' });

      setTimeout(() => {
        form.resetFields();
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error adding project:', error);
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
    { location: 'Brega' },
    { location: 'Benghazi' },
    { location: 'Messla' },
    { location: 'Tripoli' },
    { location: 'Nafoora' },
    { location: 'Sarir' },
    { location: 'Elfil' },
    { location: 'Earawin' },
    { location: 'Sharara' },
    { location: 'Defa/Waha' },

  ];
  const country = [
    { count: 'Libya' },
    // { count: 'Tunis/Sfax' },

  ];

  const handleprojCountry = (value) => {
    setSelectedCountry(value);

  };
  const handleLocationChange = (index, value) => {
    const newLocations = [...locations];
    newLocations[index].lieu = value;
    setLocations(newLocations);
  };
  const addLocation = () => {
    setLocations([...locations, { lieu: "" }]);
  };
  const handlePartener = (event) => {
    const value = event.target.value;
    setPartener(event.target.value);
  };



  const BeforeSaveProjet = () => {
    //setIsModalVisible(true)
    form.validateFields(['projName', 'GetsId', 'ReferenceProjet'
      , 'cotractRef', 'projLocation', 'country'

    ]).then(values => {
      //onSave(true)
      SaveProject()



    }).catch(errorInfo => {

      openNotification('Warning', 'All Fields Not Complete', { backgroundColor: '#eab000', color: '#fff' });

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
            <Typography.Title level={4}>Projet Information</Typography.Title>

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
                  <Form.Item label='Projet Leader /Manager  Gets Id' name='GetsId'
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
                  <Form.Item label='Project Leader Name ' name='Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label=' Reference Projet' name='ReferenceProjet'
                    rules={[
                      { required: true, message: 'Please input your Reference Projet!' },
                    ]}
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
                    rules={[
                      { required: true, message: 'Please input your Contrat Reference!' },
                    ]}

                  >
                    <Input
                      className='Input'
                      placeholder="Contrat Reference"
                      value={cotractRef}
                      onChange={handleContartRefChange}


                    />
                  </Form.Item>
                </Col>


                <Col xs={24} md={12} style={{ marginTop: "0.5rem" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                    {locations.map((location, index) => (
                      <div style={{ flex: "1 1 45%", minWidth: "200px" }} key={index}>
                        <Form.Item label={`Site Location Of The Project`}>
                          <Select
                            placeholder={`Site Location Of The Project }`}                    
                            value={location.lieu || `Site Location Of The Project `}
                            defaultValue="Default"
                            onChange={value => handleLocationChange(index, value)}
                            allowClear
                          >
                            {Location.map(type => (
                              <Option key={type.location} value={type.location}>
                                {type.location}
                              </Option>
                            ))}
                          </Select>
                        </Form.Item>
                      </div>
                    ))}
                  </div>
                  <button className="btnstyle2" onClick={addLocation}>
                    <GrAdd style={{ color: "#2997ff", marginTop: "0.05rem" }} />
                  </button>
                </Col>



                <Col xs={24} md={12}>
                  <Form.Item
                    name="Country"
                    label="Country"

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


export default AddProjectEmployees;
