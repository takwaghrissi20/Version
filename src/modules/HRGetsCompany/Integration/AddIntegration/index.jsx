import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert,TimePicker, Checkbox, DatePicker, notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
   
  StyledTodoDetailDatePicker,
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import 'antd/dist/reset.css';
const { RangePicker } = DatePicker;
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';


const AddIntegration = () => {
  const navigate = useNavigate();
  const [lastIdIntegration, setLastIdIntegration] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const [section, setSection] = useState("");
  const [topic, setTopic] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [supervisorAssessment , setSupervisorAssessment] = useState("");
  const [dateTo , setDateTo] = useState("");
  const [datefrom, setDatefrom] = useState("");
  const [selectedPType, setSelectedPType] = useState('')
  const [integrationTime, setIntegrationTime] = useState(dayjs().format('HH:mm:ss.SSS'));
  const P = [
    {
      type: "Great Knowledge ",

    },
    {
      type: "Good Knowledge ",

    },
    {
      type: "Common Knowledge",

    },
   



  ]
  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
  };


  const LastIndexIntegartion = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/integration/last`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      console.log("datttaaa", data)
      setLastIdIntegration(data.ref);
    } catch (error) {
      console.error('Erreur lors de la récupération Last Integration', error);
    }
  };

  const LastIntegarionData = lastIdIntegration + 1;
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Integration',
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
      description: 'Error Add integration',
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

  const onChange = (dates, dateStrings) => {
      const [first, end] = dates;
      console.log('Date de début: ', first ? first.format('YYYY-MM-DD') : 'Non défini');
      setDateTo(first ? first.format('YYYY-MM-DD') : null);
      console.log('Date de fin: ', end ? end.format('YYYY-MM-DD') : 'Non défini');
      setDatefrom(end ? end.format('YYYY-MM-DD') : null)
      console.log('Dates formatées: ', dateStrings);
   
  };

  useEffect(() => {
    LastIndexIntegartion();
    findIdIntegration();



  }, [getsId]);




  const handleAddIntegration = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/integration/save?id=${LastIntegarionData}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          ref: LastIntegarionData ,
          employee_getsId:getsId,
          fullname:name,
          position:position,
          toD:dateTo,
          fromD:datefrom,
          p:selectedPType,
          section:section,
          topic:topic,
          supervisor:supervisor,
          supAssement:supervisorAssessment,
          integrationTime:integrationTime

          
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
          navigate('/Hr/IntegrationStatistics');
        }, 100);
       






      }
   

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Integration:", error);
    }
  };


  const goBack = () => {
    navigate(-1)
  }

  const BeforeSaveIntegration = () => {
    form.validateFields(['GetsId', 'P', 'Section','Topic','Supervisor','Supervisor Assessment'])
      .then(values => {
        handleAddIntegration()
      })
      .catch(errorInfo => {

        openNotificationWarning('bottomRight')


      });
  };


  const handleCancel= () => {
    //onCancel(true);

    navigate(-1)

  }
  const [formItems, setFormItems] = useState([{ key: Date.now() }]);




  const findIdIntegration = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      setName(responseData?.name);
      setPosition(responseData?.position);


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const handleTimeChange = (value) => {
    if (value) {
      setIntegrationTime(dayjs(value).format('HH:mm:ss.SSS'));
    }
  };
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
            <Typography.Title level={4}>Integration plan </Typography.Title>
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
                <Col xs={24} md={12} >
                  <Form.Item label='Reference' name='interviewCode'>
                    <Input placeholder={LastIntegarionData} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                    <Input

                      placeholder={formattedDate}
                      readOnly />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label='Time Integration' name='TimeInterview'>
                      <StyledTodoDetailDatePicker
                        className='form-field'>
                        <TimePicker
                          defaultValue={dayjs('12:00:00.000', 'HH:mm:ss.SSS')}
                          format='HH:mm:ss.SSS'
                          style={{ width: "100%", height: "34px" }}
                          onChange={handleTimeChange}
                        />
                      </StyledTodoDetailDatePicker >
                    </Form.Item>
                  </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='GetsId'>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsId}
                      onChange={handleInputGetsIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Employee Full Name' name='Employee Full Name'  >
                    <Input

                      placeholder={name}
                      readOnly />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Position' name='Position'  >
                    <Input

                      placeholder={position}
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
            <Typography.Title level={5}>Integration plan</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>

                  <Form.Item label='Integration Period From' name='IntegrationPeriodFrom'>


                    <RangePicker 
                    style={{width:"100%",height:"2.5em"}}
                    
                    onChange={onChange} />


                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='*P' name='P'
                    rules={[
                      {
                        required: true,
                        message: 'Please Select *P',
                      },

                    ]}>
                    <Select
                      defaultValue="*P"
                      placeholder="type"
                      onChange={(value) => setSelectedPType(value)}
                

                    >
                      {P.map((p) => {
                        return (
                          <Option value={p.type} key={p.type}>
                            <div className='ant-row ant-row-middle'>

                              <span>{p.type}</span>
                            </div>
                          </Option>
                        );
                      })}
                    </Select>

                    {/* <Input placeholder='Relation Ship' readOnly={!isEdit} /> */}
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                      label='Section' name='Section'
                      rules={[{ required: true, message: 'Please select Section ' }]}>


                      <Input
                        className='Input'
                        placeholder="Section"
                        value={section}
                        onChange={(e) =>setSection(e.target.value)}
                    
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={24}>
                    <Form.Item
                      label='Topic' name='Topic'
                      rules={[{ required: true, message: 'Please select Topic ' }]}>


                      <Input
                        className='InputComment'
                        placeholder="Topic"
                        value={topic}
                        onChange={(e) =>setTopic(e.target.value)}
                    
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Supervisor' name='Supervisor'
                      rules={[{ required: true, message: 'Please select Supervisor ' }]}>


                      <Input
                        className='Input'
                        placeholder="Supervisor"
                        value={supervisor}
                        onChange={(e) =>setSupervisor(e.target.value)}
                    
                      />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      label='Supervisor Assessment ' name='Supervisor Assessment'
                      rules={[{ required: true, message: 'Please select Supervisor Assessment  ' }]}>


                      <Input
                        className='Input'
                        placeholder="Supervisor Assessment "
                        value={supervisorAssessment}
                        onChange={(e) =>setSupervisorAssessment(e.target.value)}
                    
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
          <Button onClick={handleCancel}>Cancel</Button>
          <Button
            onClick={BeforeSaveIntegration}
            type='primary'

            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
 
    </>
  );
};

export default AddIntegration;
