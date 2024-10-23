
import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../@crema/components/AppRowContainer';
import {
  Button, Col, Divider, Form, Input, Space, Typography, Select, Alert,
  Checkbox, DatePicker, InputNumber, notification, Table
} from 'antd';

import {
  StyledShadowWrapper,
  StyledInput,

} from '../../styles/index.styled'
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '../../@crema/helpers/IntlMessages';
import OrderTable from './TableOrderPaymentRequest';
import { useLocation } from 'react-router-dom';

const PaymentForRequestSalary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token")
  const [lastRequest, setLastRequest] = useState(0);
  const [dateInput, setDateInput] = useState(new Date());
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [costCenter, setCostCenter] = useState([]);
  const [listCosCenterAndProjName, setListCosCenterAndProjName] = useState([]);
  const [listCosCenter, setListCosCenter] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [subject, setSubject] = useState('');
  const [bancAccount, setBancAccount] = useState('');
  const [ibanNumber, setIbanNumber] = useState('');
  const [typecompany, setTypecompany] = useState('');
  const [chequeName, setChequeName] = useState('');
  const [from, setFrom] = useState("Payroll Coordinator & Administrator");
  const [isCash, setIsCash] = useState(true);
  const [isTransfer, setIsTransfer] = useState(false);
  const [isCheque, setIsCheque] = useState(false);
  const [descriptions, setDescriptions] = useState({});
  const [getsIdData, setGetsIdData] = useState("");
  const [getsIdTempData, setGetsIdTempData] = useState("");
  const [empId, setEmpId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [data, setData] = useState("");
  //List Of Request Payment
  useEffect(() => {
    LastRequestPayment()
    fetchCosCenter()
    listEmployees()
  }, []);
  const listEmployees = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/list?token=${token}`);

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      if (response.ok) {
        const data = await response.json();
        console.log("dataaa reponse ", data)
      }


    } catch (error) {
      console.error('Error fetching List Employees:', error);
    }
  };
  //Find By Id 


  //End List Of Request Payment
  const handleCompany = (value) => {
    setTypecompany(value);
    if (value === 'default') {
      window.location.reload();
    }
  };
  const TypePaymrnt = [
    { type: 'CASH' },
    { type: 'CHEQUE' },
    { type: 'Transfer Remittance' },

  ];
  const listbancAccount = [
    { type: 'BIAT-E-TND', iban: "08704000451002103249" },
    { type: 'ZITOUNA -E-TND', iban: "" },
    { type: 'ATTIJARI -E-TND', iban: "" },
    // { type: 'ATTIJARI-E-USD' },
    // { type: 'ATTIJARI-E-EURO' },
    { type: 'ATTIJARI -T-TND', iban: "" },
    // { type: 'ATTIJARI-T-USD' },
    // { type: 'ATTIJARI -T-EURO' },
    // { type: 'ATTIJARI -T-EURO' },
    // { type: 'ATTIJARI -T-NEGOCE-USD ' },
    // { type: 'BIAT-T-NEGOCE-USD  ' },
    { type: 'zitouna VAIC TND', iban: "" },
    { type: 'BIAT VAIC TND', iban: "" },
    // { type: 'BIAT VAIC USD' },
    { type: 'alBaraka -E-TND', iban: "32034788116194074110" },
  ];
  const Company = [
    { type: 'GETS E&C' },
    { type: 'TRADE' },
    { type: 'VAIC' },
  ];
  const Subject = [
    { type: 'FINANCE SETTLEMENT' },
    { type: 'VISA REQUEST IN THE EMBASSY' },
    { type: 'RATES PAYMENT SITE' },
    { type: 'STANDBY WELDERS IN TUNISIA' },
    { type: 'MISSION TO TUNISIA' },
    { type: 'FLIGHT TICkET MANPOWER' },
    { type: 'TRANSPORTATION BY ROAD MANPOWER' },
    { type: 'INTERNAL TRANSPORTATION MANPOWER' },
    { type: 'FRIDAY RATE SITE' },
    { type: 'MANPOWER HOTEL PAYMENT' },
    { type: 'SITE MANPOWER BONUS' },
    { type: 'SALARY PAYMENT OFFICE' },
    { type: 'ADVANCE PAYMENT SITE' },
    { type: 'ADVANCE PAYMENT OFFICE' },
    { type: 'HEALTH CERTIFICATE PAYMENT' },
  ];
  const handleSubject = (value) => {
    setSubject(value);
    if (value === 'default') {
      window.location.reload();
    }
  };

  const SaveRequesttest = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/add?token=${token}`, {

        method: 'POST',

        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({

          dateInput: formattedDate,
          object: subject,
          fromReq: from,
          paymentType: isCash,
          total: 33,
          monthBy: "",
          requstor: "Syrine",
          companyType: typecompany,
          fromBankCheque: bancAccount,
          "payrollSign": null,
          "checkedByHod": null,
          "approvedByBod1": true,
          "approvedByBod2": null,
          notif: 0,
          "cashpayment": null,
          "transfertPayment": null,
          "paymentRefDate": null,
          "payrolDate": null,
          "otherDescription": null,
          "prinRreq": null,
          nameCheque: chequeName,
          cosCenter: costCenter,
          projName: selectedProject,
          "travelAgent": null,
          "bankNameTravel": null,
          "ibnTravel": null,
          "idPaid": null,
          "virementOrdre": null,
          listRequestPayments,
          ibanCheque: ibanNumber

        })
      });


      if (!response.ok) {
        openNotificationError('bottomRight')
        throw new Error('Network response was not ok');


      }
      if (response.ok) {

        const responseData = await response.json();
        console.log("setItemSave nnjj", responseData)

        // setTimeout(() => {
        //   window.location.reload();

        // }, 100);

      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  const fetchCosCenter = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/list?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      const dataCosCenter = data.filter(p => p.cosCenter);
      const listCosCenterAndProjName = dataCosCenter.map(p => ({
        projName: p.projName,
        cosCenter: p.cosCenter
      }));
      setListCosCenterAndProjName(listCosCenterAndProjName)
      const cosCenters = [...new Set(dataCosCenter.map(p => p.cosCenter))];

      setListCosCenter(cosCenters)

    } catch (error) {
      console.error('Erreur lors de la récupération des données Project List:', error);
    }
  };


  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Payment Request Order',
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
      description: 'Error Payment Order Request ',
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

  //Checkbox
  function Cash(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsCash(e.target.checked)
    if (e.target.checked) {
      setIsTransfer(false);
      setIsCheque(false);
    }

  }
  function Transfer(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsTransfer(e.target.checked)
    if (e.target.checked) {
      setIsCash(false);
      setIsCheque(false);
    }
  }
  function Cheque(e) {
    console.log(`checkedHead = ${e.target.checked}`);
    setIsCheque(e.target.checked)
    if (e.target.checked) {
      setIsCash(false);
      setIsTransfer(false);
    }
  }

  const goBack = () => {
    navigate(-1)
  }
  const handleCostCenterChange = (value) => {
    setCostCenter(value);
    const matchedProject = listCosCenterAndProjName?.find(proj => proj.cosCenter === value);
    if (matchedProject) {
      setSelectedProject(matchedProject.projName);
    } else {
      setSelectedProject('');
    }
  };
  const handleBanc = (value) => {
    setBancAccount(value);
    const selectedBank = listbancAccount.find(bank => bank.type === value);
    if (selectedBank) {
      setIbanNumber(selectedBank.iban || "");
    }
    if (value.includes('-E-')) {
      setTypecompany('GETS E&C');
    } else if (value.includes('-T-')) {
      setTypecompany('TRADE');
    } else if (value.includes('VAIC')) {
      setTypecompany('VAIC');
    }
    if (value === 'default') {
      window.location.reload();
    }
  };
  const LastRequestPayment = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/last?token=${token}`, {
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
      setLastRequest(data?.id)

    } catch (error) {
      console.error('Erreur lors de la récupération Last RequestPayment', error);
    }
  };
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const lastRequetPayment = lastRequest + 1
  /////////////Table de request and payment
  const [dataSource, setDataSource] = useState([
    { key: '1', getsId: '', position: '', name: '', otherDescription: '', month: '', amount: '' }
  ]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to calculate the total amount
  const calculateTotalAmount = () => {
    const total = dataSource.reduce((sum, record) => {
      return sum + parseFloat(record.amount || 0); 
    }, 0);
    setTotalAmount(total);
  };


  const [loading, setLoading] = useState(false);
  const fetchDataByGetsId = async (getsId) => {
    const isTemp = /^[A-Za-z]-\d+/.test(getsId);
    const apiURL = isTemp
      ? `https://dev-gateway.gets-company.com/api/v1/empT/getById?id=${getsId.slice(2)}&token=${token}`
      : `https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`;

    try {
      const response = await fetch(apiURL, { method: 'GET' });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return {
        position: data.position || '',
        name: data.name || ''
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { position: '', name: '' };
    }
  };
  const SaveRequest = async () => {
    try {
      const listRequestPayments = dataSource.map((item) => ({
        "numero": 0,
        // getsId: item.getsId,
        getsId: extractNumberFromGetsId(item.getsId),
        projName: item.projName,
        costcenter: item.costcenter,
        fullName: item.fullName,
        position: item.position,
        desiredDate: item.desiredDate,
        amount: item.amount,
      }));

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/RequestPayment/add?token=${token}`, {
        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dateInput: formattedDate,
          object: subject,
          fromReq: from,
          paymentType: isCash,
          total: 33,
          monthBy: "",
          requstor: "Syrine",
          companyType: typecompany,
          fromBankCheque: bancAccount,
          payrollSign: null,
          checkedByHod: null,
          approvedByBod1: true,
          approvedByBod2: null,
          notif: 0,
          listRequestPayments: listRequestPayments,
          ibanCheque: ibanNumber,
        }),
      });

      if (!response.ok) {
        openNotificationError('bottomRight');
        throw new Error('Network response was not ok');
      }
      console.log("List Request Payments: ", listRequestPayments);
      const responseData = await response.json();
      console.log("Response Data: ", responseData);
      openNotification('bottomRight')

    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  const handleInputChange = async (value, key, field) => {
    setLoading(true);
    const updatedDataSource = dataSource.map((item) => {
      if (item.key === key) {
        return { ...item, [field]: value };
      }
      return item;
    });

    if (field === 'getsId') {
      const { position, name } = await fetchDataByGetsId(value);
      const finalDataSource = updatedDataSource.map((item) => {
        if (item.key === key) {
          return { ...item, position, name };
        }
        return item;
      });

      setDataSource(finalDataSource);
    } else {
      setDataSource(updatedDataSource);
    }
    if (field === 'amount') {
      calculateTotalAmount();
    }

    setLoading(false);
  };
  const extractNumberFromGetsId = (getsId) => {
    if (typeof getsId === 'string' && getsId.startsWith('V-')) {
      return getsId.split('-')[1]; 
    }
    return getsId; 
  };

  const year= new Date().getFullYear();
  const columns = [
    {
      title: 'Gets ID',
      dataIndex: 'getsId',
      render: (text, record) => (
        <Input
          value={record.getsId}
          onChange={(e) => handleInputChange(e.target.value, record.key, 'getsId')}
          placeholder="Enter Gets ID"
        />
      ),
    },
    {
      title: 'Position',
      dataIndex: 'position',
      render: (text, record) => (
        <Input
          value={record.position}
          readOnly
          placeholder="Position will auto-fill"
        />
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <Input
          value={record.name}
          readOnly
          placeholder="Name will auto-fill"
        />
      ),
    },
    {
      title: 'Other Description',
      dataIndex: 'otherDescription',
      render: (text, record) => (
        <Input
          value={record.otherDescription}
          onChange={(e) => handleInputChange(e.target.value, record.key, 'otherDescription')}
          placeholder="Enter other description"
        />
      ),
    },
    {
      title: 'Month',
      dataIndex: 'month',
      render: (text, record) => (
        <Select
          value={record.month}
          onChange={(value) => handleInputChange(value, record.key, 'month')}
          placeholder="Select month"
          style={{ width: '100%' }}
        >
          {Array.from({ length: 12 }, (_, index) => (
            <Select.Option key={index} value={`${new Date(0, index).toLocaleString('en-US', { month: 'long' })} ${new Date().getFullYear()}`}>
              {new Date(0, index).toLocaleString('en-US', { month: 'long' })} {new Date().getFullYear()}
            </Select.Option>
          ))}
        </Select>
      ),
    },
    {
      title: 'Amount(DT)',
      dataIndex: 'amount',
      render: (text, record) => (
        <Input
          type="number"
          value={record.amount}
          onChange={(e) => handleInputChange(e.target.value, record.key, 'amount')}
          placeholder="Enter amount DT"
        />
      ),
    },
    // {
    //   title: 'Amount(DT)',
    //   dataIndex: 'amount',
    //   render: (text, record) => (
    //     <Input
    //       type="number"
    //       value={record.amount}
    //       onChange={(e) => handleInputChange(e.target.value, record.key, 'amount')}
    //       placeholder="Enter amount DT"
    //     />
    //   ),
    // },

  ];


  const handleAddRow = () => {
    const newRow = {
      key: (dataSource.length + 1).toString(),
      getsId: '',
      position: '',
      name: '',
      otherDescription: '',
      month: '',
      amount: '',
    };
    setDataSource([...dataSource, newRow]);
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
            <Typography.Title level={4}>REQUEST FOR PAYMENT

            </Typography.Title>

          </div>

        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Payment Request Information</Typography.Title>

          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                <Col xs={24} md={12}>
                  <Form.Item label='Request Reference' name='Requestref'>
                    <Input
                      readOnly
                      placeholder={"DAF-FR-" + lastRequetPayment+"-"+year}

                    />
                  </Form.Item>
                </Col>



                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='date'>
                    <Input
                      placeholder={formattedDate}
                      readOnly

                    />

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='COST CENTER' name='COST CENTE'>
                    <Select
                      style={{ width: "100%", marginTop: "0.5rem" }}
                      placeholder="Cost Center"
                      allowClear
                      onChange={handleCostCenterChange}
                      value={costCenter}
                    >
                      <Select.Option key="default" value="default">Default</Select.Option>
                      {listCosCenter?.map(center => (
                        <Select.Option key={center}
                          value={center}>{center}</Select.Option>
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
            <Typography.Title level={5}>Payment Request Information</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='PROJECT NAME' name='PROJECTNAME'>
                    <Input
                      placeholder={selectedProject}
                      readOnly
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Object' name='Object'>
                    <Select
                      // style={{ width: "100%", marginTop: "0.5rem" }}
                      placeholder="Request Subject"
                      allowClear
                      onChange={handleSubject}
                      value={subject}
                    >
                      <Select.Option key="default" value="default">
                        Default
                      </Select.Option>
                      {Subject.map(p => (
                        <Select.Option key={p.type} value={p.type}>
                          {p?.type}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='REQUESTED BY' name='from'>
                    <Input
                      placeholder={from}
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='BANC ACCOUNT' name='BANCACCOUNT'>
                    <Select
                      style={{ width: "100%" }}
                      placeholder="FROM BANK ACCOUNT"
                      allowClear
                      onChange={handleBanc}
                      value={bancAccount}>
                      <Select.Option key="default" value="default">
                        Default
                      </Select.Option>
                      {listbancAccount.map(p => (
                        <Select.Option key={p.type} value={p.type}>
                          {p?.type}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='IBAN NUMBER' name='IBAN NUMBER'>
                    <Input
                      type='number'
                      placeholder={ibanNumber}
                      value={ibanNumber}
                      readOnly
                    ></Input>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='GETS COMPANY/TRADE' name='GETS COMPANY/TRADE'>
                    <Select
                      style={{ width: "100%", marginTop: "0.5rem" }}
                      placeholder={typecompany}
                      allowClear
                      onChange={handleCompany}
                      value={typecompany}

                    >
                      <Select.Option key="default" value="default">
                        Default
                      </Select.Option>
                      {Company.map(p => (
                        <Select.Option key={p.type} value={p.type}>
                          {p?.type}
                        </Select.Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Col>
                {isCheque && (
                  <Col xs={24} md={12}>
                    <Form.Item label='CHEQUE RECEIVER NAME' name='chequeReceiverName'>
                      <Input
                        placeholder="CHEQUE RECEIVER NAME"
                        value={chequeName}
                        onChange={(e) => setChequeName(e.target.value)}
                      />
                    </Form.Item>
                  </Col>
                )}

                <Col xs={24} md={12}>
                  <Form.Item label='Total' name='Total'>
                    <Input
                    placeholder={totalAmount}
                      
                      readOnly

                    ></Input>

                  </Form.Item>
                </Col>
                <Col xs={24} md={24}>
                  <Form.Item label="Payment Type :" name="PaymentType">
                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={isCash}
                        onChange={Cash}
                      >
                        <IntlMessages id='Cash' />
                      </Checkbox>
                    </Col>

                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={isTransfer}
                        onChange={Transfer}
                      >
                        <IntlMessages id='Transfer' />
                      </Checkbox>
                    </Col>

                    <Col style={{ margin: "1rem" }} xs={24} md={8}>
                      <Checkbox
                        checked={isCheque}
                        onChange={Cheque}
                      >
                        <IntlMessages id='Cheque' />
                      </Checkbox>
                    </Col>
                  </Form.Item>
                </Col>

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>

        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Payment Request Order</Typography.Title>

          </Col>

          {/* <Col xs={24} md={12}>
                <Form.Item className='form-field'>
                
                    <span className='modallabel'>Employee Id :</span>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsId}
                      onChange={handleInputGetsIdChange} // Correction de la fonction de changement
                    />
              
                </Form.Item>
              </Col>
              <p>{name}</p> */}

          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                {/*Order Payment*/}
                <Col xs={24} md={24}>
                  <Button onClick={handleAddRow} type="primary" style={{ marginBottom: 16 }}>
                    Add Row
                  </Button>
                  <Table
                  style={{width:"100%"}}
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                    rowKey="key"
                    pagination={false}
                    bordered
                  />
                </Col>  
                {/*End Order Payment*/}

              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>



        <Divider style={{ marginTop: 16, marginBottom: 16 }} />

        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={goBack} >Cancel</Button>
          <Button onClick={SaveRequest}>Save</Button>

          <div style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
            {isLoading && (
              <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100px' }}>
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#5CAFE7',
                    animation: 'bounce 1s infinite alternate'
                  }} />
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: '#82CEF9',
                    animation: 'bounce 1s infinite alternate',
                    animationDelay: '0.5s'
                  }} />
                </div>
              </div>
            )}
          </div>

        </Space>

      </Form>





    </div>

  );
};


export default PaymentForRequestSalary;
