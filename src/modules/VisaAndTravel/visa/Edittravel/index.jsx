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
const UpdateTravel = () => {
  const navigate = useNavigate();
  const targetRef = useRef();
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const location = useLocation();

  const [selectedTrip, setSelectedTrip] = useState("");
  const [profile, setProfile] = useState("")
  const id = location.state ? location.state.id : null;
  const [travel, setTravel] = useState("")
  const [getsId, setGetsId] = useState("");
  const [newdateMob, setNewdateMob] = useState("");
  const [newdateDeMob, setNewdateDeMob] = useState("");
  const [newDateTravel, setNewDateTravel] = useState("");
  const [newTicketReference, setNewTicketReference] = useState("");
  const [selectedRound, setSelectedRound] = useState("");
  const [ newactualLocationFrom, setNewactualLocationFrom] = useState("");
  const [ newactualLocationTo, setNewactualLocationTo] = useState("");
  const handleTraveltrip = (value) => {
    setSelectedTrip(value)
  };

  const handlenewTicketReference = (event) => {
    setNewTicketReference
  };
 

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
        console.log("traveellll", responseData)
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
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Update Travel',
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


  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Update',
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
  /////Update 
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/updateTr?id=${id}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          // dateOfTravel:travel?.dateOfTravel,
          
          projName:"tettt",
          // ticketRef:newTicketReference,
          // name:travel?.name,
          // position:travel?.position,
          // josId:travel?.josId,
          // getsId:travel?.getsId,
          // goBack:travel?.goBack,
          // dateMob:newdateMob,
         
          // dateDemob:newdateDeMob,

          // type:selectedTrip,
          // refTicket:newTicketReference,
          // round:selectedRound,

         
          
          // actualLocationTo:newactualLocationTo,
          // actualLocationFrom:newactualLocationFrom,

          // rich_DateToSite,
          // bookingStatusDesert,
          // dateTravelDesert,
          // tripTypeDesert,
          // bookingStatusJoys,

          // dateTravelJoys,
          inputDate:travel?.inputDate,
          // tripTypeJoys,
          // idendityCopy,



        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.text();
        openNotification('bottomRight')

      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  }
  const handleTravelType = (value) => {
    setSelectedType(value);

    if (value === 'Mobilzation') {
      setSelectTypeValue(0);
    } else if (value === 'DeMobilization') {
      setSelectTypeValue(1);
    }
  };

  const handleTravelRound = (value) => {
    setSelectedRound(value);
  };
  const  handlenewactualLocationFrom= (event) => {
    setNewactualLocationFrom(event);
  };
  const  handlenewactualLocationTo= (event) => {
    setNewactualLocationTo(event);
  };

 
  const Type = [
    { type: 'Mobilzation' },
    { type: 'Demobilization' },

  ];
  const trip = [
    { type: 'Flight' },
    { type: 'By Land' },

  ];
  const ExitType = [
    { type: 'Exit Reentry' },
    { type: 'Final Exit' },

  ];
  const round = [
    { type: 'one Trip' },
    { type: 'Round Trip' },

  ];
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
                    <Select
                      onChange={handleTravelType}
                      placeholder="Mobilization / Demobilization"
                      defaultValue={travel?.goBack ? 'Demobilization' : 'Mobilization'}


                      allowClear>
                      {Type.map(type => (
                        <Option key={type.type} value={type.type}>
                          {type.type}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>




                <Col xs={24} md={12}>
                  <Form.Item label='Date Mobilization' name='mobDate'
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={travel?.dateMob ? dayjs(travel?.dateMob, 'YYYY-MM-DD') : null}
                      onChange={(value) => setNewdateMob(value ? dayjs(value).format('YYYY-MM-DD') : '')}


                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date DeMobilization' name='demobDate'
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={travel?.dateDemob ? dayjs(travel?.dateDemob, 'YYYY-MM-DD') : null}
                      onChange={(value) => setNewdateDeMob(value ? dayjs(value).format('YYYY-MM-DD') : '')}


                    />


                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Desert Flight' name='DateTravel' >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={travel?.dateOfTravel ? dayjs(travel?.dateOfTravel, 'YYYY-MM-DD') : null}
                      onChange={(value) => setNewDateTravel(value ? dayjs(value).format('YYYY-MM-DD') : '')}


                    />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Ticket Reference'
                    name='TicketReference'
                  >

                    <Input
                      
                      className='Input'
                      placeholder={travel?.ticketRef}
                      value={newTicketReference}
                      onChange={handlenewTicketReference}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="TRIPType"
                    label="LAND /FLIGHT"

                  >
                     <Select
                      onChange={handleTraveltrip}
                      placeholder="TRIP BY LAND /FLIGHT" 
                      defaultValue={travel?.type}
                      allowClear>
                      {trip.map(type => (
                        <Option key={type.type} value={type.type}>
                          {type.type}
                        </Option>
                      ))}
                    </Select>
                   
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="RoundTrip"
                    label="Round Trip/One Tript"
                  
                  >
                    <Select
                      onChange={handleTravelRound}
                      placeholder="Round Trip/One Trip" 
                      defaultValue={travel?.round}
                      
                      allowClear>
                      {round.map(type => (
                        <Option key={type.type} value={type.type}>
                          {type.type}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>

                

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Actual Location' name='ActualLocation'
                  >


                    <Input
                      className='Input'
                      placeholder={travel?.actualLocationFrom}
                      value={travel?.actualLocationFrom}
                      onChange={handlenewactualLocationFrom}

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
                      value={travel?.actualLocationTo}
                      onChange={handlenewactualLocationTo}
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
          <Button onClick={Update} >Save</Button>

        </Space>
      </Form>


    </>
  );
};

export default UpdateTravel;
