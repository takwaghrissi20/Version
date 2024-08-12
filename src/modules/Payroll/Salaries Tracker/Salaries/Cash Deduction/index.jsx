import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select, Alert,
  Checkbox, DatePicker, InputNumber, notification
} from 'antd';
import {

  StyledShadowWrapper,
  StyledInput,

} from '../../index.styled';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';


const CashDeduction = () => {
  const navigate = useNavigate();
  //////////////////////////////
  const [amountDeducted, setAmountDeducted] = useState("");
  const [scan, setScan] = useState("");
  const [getsInput, setGetsInput] = useState("");
  const [deductionMonth, setDeductionMonth] = useState(dayjs());
  const [getsId, setGetsId] = useState("");
  const [selectCashAdvanceType, setSelectCashAdvanceType] = useState('');
  const [name, setName] = useState("");
  /////////////////////////

  const [profile, setProfile] = useState("")

  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState("");
  const userRole = localStorage.getItem("role");
  const handleInputGetsId = (event) => {
    setGetsInput(event.target.value);
  };
  const CashAdvanceType = [
    {
      type: "Office Cash Advance",

    },
    {
      type: "Site Cash Advance",

    },
  ]

  const GetProfileEmployess = async () => {
    const storedemail = window.localStorage.getItem("email");
    console.log("storedemail", storedemail)
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
      setGetsId(data?.getsId)

    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };
    //FindId
    const findId = async () => {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsInput}`, {
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

  useEffect(() => {
    GetProfileEmployess()
    findId()

  }, [getsId,getsInput]);


  const BeforeSaveCashAdvance = () => {
    //setIsModalVisible(true)
    form.validateFields(['AmounttobeDeducted', 'ForMonth', 'CashAdvanceType'
      , 'ScanFileCashAdvance','GetsId'

    ]).then(values => {

      SaveCashAdvance();



    }).catch(errorInfo => {

      openNotificationWarning('bottomRight')

      // setIsModalVisible(false);

    });
  };

  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Cash Deduction and Salary Advance',
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
  const openRefuseNotification = () => {
    notification.open({
      message: 'Refuse',
      description: 'Refuse Cash Deduction and Salary Advance',
      style: {
        backgroundColor: '#335F8A',
        border: '1px solid #335F8A',
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
      description: 'Error Cash Deduction and Salary Advance',
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
  const SaveCashAdvance = async () => {
    try {


      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/AdvSalary/add?id=${getsInput}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          getsId: getsInput,
          name:name,
          amount: amountDeducted,
          month: deductionMonth,
          cashOrOther: selectCashAdvanceType,
          description: scan



        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("responseData", responseData)
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
  const user = localStorage.getItem("role");
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const handleCashAdvance = (value) => {
    setSelectCashAdvanceType(value);

  };
  return (
    <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
      {/**All Fied not empty */}
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
            <Typography.Title level={4}>Cash Deduction and Salary Advance</Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Employee</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id ' name='GetsId'>
                  <Input
                      className='Input'
                      type="number"
                      value={getsInput}
                      onChange={handleInputGetsId} 
                      placeholder='Gets Id'
                  
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Full Name' name='name'>
                    <Input
                   
                      placeholder={name}
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
            <Typography.Title level={5}> Deduction </Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Amount to be Deducted ' name='AmounttobeDeducted'
                    rules={[
                      { required: true, message: 'Please Input your Amount to be Deducted!' },
                    ]}


                  >
                    <Input
                      placeholder='Amount to be Deducted'
                      type='number'
                      value={amountDeducted}
                      onChange={(e) => setAmountDeducted(e.target.value)}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='For Month ' name='ForMonth '
                    rules={[
                      { required: true, message: 'Please input your For Month' },
                    ]}

                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      picker="month"
                      placeholder="For Month"
                      onChange={(value) => setDeductionMonth(value)}
                      value={deductionMonth}
                      format="YYYY-MM"
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Cash Advance  Type'
                    name='CashAdvanceType'
                    rules={[
                      { required: true, message: 'Please input your Cash Advance  Type' },
                    ]}
                  >
                    <Select
                      placeholder='Cash Advance  Type'
                      onChange={handleCashAdvance}
                    >
                      {CashAdvanceType && CashAdvanceType.map((p, index) => (
                        <Select.Option key={index} value={p.type}>
                          {p.type}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item label='Scan  File Cash Advance' name='ScanFileCashAdvance'
                    rules={[
                      { required: true, message: 'Please input your Scan  File Cash Advance' },
                    ]}


                  >
                    <Input
                      placeholder='Scan File Cash Advance'
                      value={scan}
                      onChange={(e) => setScan(e.target.value)}
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
          {/*Save Head of departement differenr de Enginner et operation*/}

          <Button
            onClick={BeforeSaveCashAdvance}

            type='primary'
            htmlType='submit'>
            Save
          </Button>



        </Space>

      </Form>




    </div>

  );
};


export default CashDeduction;
