import React, { useState, useEffect, useRef } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";

const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useDropzone } from 'react-dropzone';
import AppGrid from '../../../../@crema/components/AppGrid';
import { useLocation } from 'react-router-dom';
const ViewTravel = () => {
  const navigate = useNavigate();
  const targetRef = useRef();
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const location = useLocation();


  const [profile, setProfile] = useState("")
  const id = location.state ? location.state.id : null;
  const [travel, setTravel] = useState("")
  const [getsId, setGetsId] = useState("");
  const findIdTravel = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/getById?id=${id}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
     
        setTravel(responseData)
        setGetsId(responseData?.getsId)


      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id Travel:", error);
    }
  };


  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    findIdTravel()
  }, [getsId]);





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
            <Typography.Title level={4}>FLIGHT TICKRT RECORD</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Assigned Person Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Reference Travel' name='refTravel'>
                    <Input placeholder={"" + travel?.idTravel} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'
                  >
                    <Input
                      //defaultValue={new Date()} 
                      placeholder={travel?.inputDate}
                      readOnly

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                     
                      placeholder={travel?.getsId}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Jos Id' name='Jos Id'>
                    <Input
                      className='Input'
                     
                      placeholder={travel?.josId}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={travel?.name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={travel?.position} />
                  </Form.Item>
                </Col>
                {/* <Col xs={24} md={12}>
                  <Form.Item
                    label='Passport Number' name='Passport Number'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder="?????" />
                  </Form.Item>
                </Col> */}
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'
                    label='ProjectName'
                    name='projectName'
                  >
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={travel?.projName} />

                  </Form.Item>
                </Col>

              </AppRowContainer>
           
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
              <AppRowContainer>
                <Col xs={24} md={6}>
                  <Typography.Title level={5}>Travel Details</Typography.Title>
                </Col>
                <Col xs={24} md={18}>
                  <StyledShadowWrapper>
                    <AppRowContainer>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name="MobDemob"
                          label="Mobilization / Demobilization"

                        >
                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.goBack ? 'Demobilization' : 'Mobilization'} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label='Date Mobilization' name='mobDate'
                        >
                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.dateMob} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label='Date DeMobilization' name='demobDate'
                        >

                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.dateDemob
                            } />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item label='Desert Flight' name='DateTravel'
                        >


                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.dateOfTravel} />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label='Ticket Reference'
                          name='TicketReference'
                        >

                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.ticketRef
                            }

                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name="TRIPType"
                          label="LAND /FLIGHT"

                        >
                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.type
                            }

                          />
                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          name="RoundTrip"
                          label="Round Trip/One Tript"

                        >
                          <Input
                            readOnly={true}
                            className='Input'
                            placeholder={travel?.round
                            }

                          />
                        </Form.Item>
                      </Col>


                      <Col xs={24} md={12}>
                        <Form.Item
                          label='Actual Location' name='ActualLocation'
                        >


                          <Input
                            className='Input'
                            placeholder={travel?.actualLocationFrom
                            }
                            readOnly={true}

                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item
                          name="ExitReentry"
                          label="Exit Reentry /Final Exit"

                        >
                          <Input
                            className='Input'
                            placeholder={travel?.
                              tripTypeDesert}
                            readOnly={true}

                          />

                        </Form.Item>
                      </Col>

                      <Col xs={24} md={12}>
                        <Form.Item
                          label='To Location' name='ToLocation'
                         >


                          <Input
                            className='Input'
                          
                            placeholder={travel?.actualLocationTo}
                          // value={exit}


                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label='Date Travel Desert' name='DateTravelDesert'
                          >

                          <Input
                            className='Input'
                         
                            placeholder={travel?.dateTravelDesert
                            }
                          // value={exit}


                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12}>
                        <Form.Item label='Trip Type Desert' name='TripTypeDesert'
                         >
                          <Input
                            className='Input'
                            placeholder={travel?.tripTypeDesert}
                            

                          />
                        </Form.Item>
                      </Col>


                      <Col xs={24} md={12}>
                        <Form.Item label='Idendity Copy Ticket'
                        >
                          <Input
                            className='Input'
                            placeholder={travel?.idendityCopy
                            }



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
          <Button onClick={goBack} >Cancel</Button>

        </Space>
      </Form>


    </>
  );
};

export default ViewTravel;
