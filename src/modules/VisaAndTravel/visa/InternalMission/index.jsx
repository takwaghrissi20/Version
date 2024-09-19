import React, { useState, useEffect } from 'react';
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
const InternalMission = () => {
  const navigate = useNavigate();
  const [lastIdMission, setLastIdMission] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [costCenter, setCostCenter] = useState("");
  const [requestRef, setRequestRef] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);


  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [country, setCountry] = useState("");
  const [missionObject, setMissionObject] = useState("");
  const [expence, setExpence] = useState("");
  const [amount, setAmount] = useState("");

  const [remaining, setRemaining] = useState(0);
  const [confirmationMission, setConfirmationMission] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const [expenseBlocks, setExpenseBlocks] = useState([{ expence: '', amount: '' }]);
  const token = localStorage.getItem("token");


  useEffect(() => {
    let sum = 0;
    expenseBlocks.forEach((block) => {
      if (block.amount) {
        sum += parseFloat(block.amount);
      }
    });
    setTotalAmount(sum);
  }, [expenseBlocks]);
  const handleAddExpenseBlock = () => {
    setExpenseBlocks([...expenseBlocks, { expence: '', amount: '' }]);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    const updatedExpenses = [...expenseBlocks];
    updatedExpenses[expenseBlocks.length - 1].amount = value; // Update the last added expense block
    setExpenseBlocks(updatedExpenses);
  };


  const handleInputGetsIdChange = (event) => {
    const value = event.target.value;
    setGetsId(event.target.value);
    console.log(value); // Log the input value to the console
  };
  const handleCountryChange = (event) => {
    const value = event.target.value;
    setCountry(event.target.value);

  };
  const handleMissionObjectChange = (event) => {
    const value = event.target.value;
    setMissionObject(event.target.value);

  };
  const handleExpenceChange = (event) => {
    const value = event.target.value;
    setExpence(event.target.value);
  }




  const handleCostCenterChange = (event) => {
    const value = event.target.value;
    setCostCenter(event.target.value);
  };


  const LastIndexMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intMission/last?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      console.log(data);
      setLastIdMission(data.idMiss);
    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastMission = lastIdMission + 1;
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Add Mission',
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
      description: 'Error Add Mission',
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

  const findId = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        setName(responseData?.name);



      }



    } catch (error) {
      console.error("Erreur lors de la récupération du employess:", error);
    }
  };

  useEffect(() => {
    LastIndexMission();

    findId();



  }, [getsId]);

  const mapExpensesToApiFields = (expenses) => {
    const apiFields = {
      expence1: expence[0]?.expence || "",
      expence2: expence[1]?.expence || "",
      expence3: expence[2]?.expence || "",
      others: expence[3]?.expence || "", // Assurez-vous que cela correspond à votre logique

      val1: expence[0]?.amount || 0,
      val2: expence[1]?.amount || 0,
      val3:expence[2]?.amount || 0,
      valOthers: expence[3]?.amount || 0
    };
  
    return apiFields;
  };
  
  const handleAddMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intMission/add?token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          idMiss: lastIdMission + 1,
          MissionObject: missionObject,
          MissionPlace: country,
          costCenter: costCenter,
          empName: name,
          totalAmount: totalAmount.toFixed(2),
          remainingAmount: remaining,
          expence1: expenseBlocks[0]?.expence || "",
          expence2: expenseBlocks[1]?.expence || "",
          expence3: expenseBlocks[2]?.expence || "",
          others: expenseBlocks[3]?.expence || "",
          val1: expenseBlocks[0]?.amount || 0,
          val2: expenseBlocks[1]?.amount || 0,
          val3: expenseBlocks[2]?.amount || 0,
          valOthers: expenseBlocks[3]?.amount || 0
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
        setTimeout(() => {
          window.location.reload();
          navigate(-1)

         
        }, 100);
      




      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };

  const handleRequestRefChange = (value) => {

    setRequestRef(value);
  };
  const handleTotalAmountChange = (value) => {

    setTotalAmount(value);
  };

  const goBack = () => {
    navigate(-1)
  }

  const BeforeSaveMission = () => {
    form.validateFields(['Destination', 'missionObject', 'Destination'])
      .then(values => {
        handleAddMission()
      })
      .catch(errorInfo => {

        openNotificationWarning('bottomRight')


      });
  };

  const handleConfirmationAddMission = () => {
    setConfirmationMission(true)
  }
  const handleCancelMission = () => {
    //onCancel(true);

    navigate(-1)

  }
  const [formItems, setFormItems] = useState([{ key: Date.now() }]);

  const addFormItem = () => {
    setFormItems([...formItems, { key: Date.now() }]);
  };
  useEffect(() => {
    let sum = 0;
    expenseBlocks.forEach((block) => {
      if (block.amount) {
        sum += parseFloat(block.amount);
      }
    });
    setTotalAmount(sum);
  }, [expenseBlocks]);
  ////////////////////
  const handleExpenseChange = (index, fieldName, value) => {
    const updatedExpenses = [...expenseBlocks];
    updatedExpenses[index][fieldName] = value;
    setExpenseBlocks(updatedExpenses);
  };
  const handleRemainingChange = (event) => {
    const value = event.target.value;
    setRemaining(event.target.value);

  }

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
            <Typography.Title level={4}>Mission  Order</Typography.Title>
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
                    <Input placeholder={LastMission} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                    <Input

                      placeholder={formattedDate}
                      readOnly

                    />

                    {/* <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      defaultValue={dateInput ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                      value={formattedDate ? dayjs(formattedDate, 'YYYY-MM-DD') : null}
                      onChange={(value) => setDateInput(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                    /> */}

                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Cost Center' name='Cost Center '>
                    <Input
                      className='Input'
                      placeholder="Cost Center"
                      value={costCenter}
                      onChange={handleCostCenterChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Request Ref' name='Request Ref'>
                    <Input
                      className='Input'
                      placeholder="Request Ref"
                      value={requestRef}
                      onChange={handleRequestRefChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Amount' name='TotalAmount'>
                    <Input
                      className='Input'
                      type='number'
                      placeholder="Total Amount"
                      readOnly
                    // value={totalAmount}
                    // onChange={handleTotalAmountChange}

                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets ID' name='Gets ID'>
                    <Input
                      className='Input'
                      placeholder="Gets ID"
                      value={getsId}
                      onChange={handleInputGetsIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={name}
                      readOnly />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Mission Place' name='Destination'
                    rules={[
                      { required: true, message: 'Please input your Mission Place!' },
                    ]}
                  >
                    <Input
                      className='Input'
                      placeholder="Mission Place"
                      value={country}
                      onChange={handleCountryChange}

                      name='Mission Place'
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Mission Object' name='missionObject'
                    rules={[
                      { required: true, message: 'Please input your Mission Object!' },
                    ]}
                  >
                    <Input
                      className='Input'
                      placeholder="Mission Object"
                      value={missionObject}
                      onChange={handleMissionObjectChange}

                      name='Mission Place'
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
            <Typography.Title level={5}>Expence Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>

                {expenseBlocks.map((expense, index) => (
                  <React.Fragment key={index}>
                    <Col xs={24} md={12}>
                      <Form.Item
                        label='Expense'
                        name={`Expence-${index}`}

                      >
                        <Input
                          className='Input'
                          placeholder="Expense"
                          value={expense.expence}
                          onChange={(e) => handleExpenseChange(index, 'expence', e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} md={12}>
                      <Form.Item
                        type='number'
                        label='Amount'
                        name={`Amount-${index}`}

                      >
                        <Input
                          className='Input'
                          placeholder="0 DT"
                          value={expense.amount}
                          onChange={(e) => handleExpenseChange(index, 'amount', e.target.value)}
                        />
                      </Form.Item>
                    </Col>
                  </React.Fragment>
                ))}
                <Button onClick={handleAddExpenseBlock}>+ Add Expense</Button>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Amount</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Total Amount' name='TotalAmount'>
                    <Input
                      className='Input'
                      type='number'
                      placeholder={`${totalAmount.toFixed(2)} DT`}

                      value={totalAmount.toFixed(2)} // Utilisez toFixed(2) pour le formatage

                      readOnly
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item
                    label='Remaining Amount' name='remaining'
                    rules={[
                      { required: true, message: 'Please input your Remaining Amount!' },
                    ]}

                  >
                    <Input
                      type='number'
                      className='Input'
                      placeholder="Remaining Amount"
                      name='Remaining Amount'
                      value={remaining}
                      onChange={handleRemainingChange}
                     
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
          <Button onClick={handleCancelMission}>Cancel</Button>
          <Button
            onClick={BeforeSaveMission}
            type='primary'

            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
      {confirmationMission ? (
        <ConfirmationModal
          open={confirmationMission}
          paragraph={'Are you sure you Add Mission Assignment Order'}
          onDeny={setConfirmationMission}
          onConfirm={handleAddMission}
          modalTitle="Add Mission "
          handleConfirmationAddMission={handleConfirmationAddMission}
        />
      ) : null}
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Mission "
          handleMission={handleCancelMission}
        />
      ) : null}
    </>
  );
};

export default InternalMission;
