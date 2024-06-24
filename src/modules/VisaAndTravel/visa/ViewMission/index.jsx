import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker,notification } from 'antd';
import { MdEdit } from 'react-icons/md';
import {
  StyledShadowWrapper,
} from './index.styled';
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
const ViewMission = () => {
  const navigate = useNavigate();
  const targetRef = useRef();
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const location = useLocation();
  const [pdfVisible, setPdfVisible] = useState(false);
  //////////////////
  const handleGeneratePDF = () => {
    setPdfVisible(true);
    setTimeout(() => {
      generatePDF(targetRef, { filename: 'Mission Order' });
      setPdfVisible(false);
    }, 1000);
  };
  ///////////////
  //////////////////////////////////
  const [profile, setProfile] = useState("")
  const id = location.state ? location.state.id: null;
  const [mission, setMission] = useState("")
  const [getsId, setGetsId] = useState("");
  const findIdMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getById?id=${id}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        setMission(responseData)
        console.log('ffffff',mission?.starTDateMiss)
      
        setGetsId(responseData?.getsId )
  
       
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du id Mission:", error);
    }
  };

  //Find By ID Profile
  const findId = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        setProfile(responseData)

      }
    } catch (error) {
      console.error("Erreur lors de la récupération du employees:", error);
    }
  };
 

 


  const goBack = () => {
    navigate(-1)
  }



  const handleCancelMission = () => {
    //onCancel(true); 
      navigate(-1)
  
  }
  useEffect(() => {
    if (getsId) {
      findId();
    }
    findIdMission()
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
           <div  >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>Mission Assignment Order</Typography.Title>
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
                  <Form.Item  label='Reference' name='MAO'>
                    <Input placeholder={"MAO-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col  xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                  <Input
                      
                      placeholder={formattedDate}
                      readOnly
                     
                     />         
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                      placeholder={getsId}                  
                      readOnly
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Person Name' name='Person Name'>
                    <Input
                      className='Input'
                      placeholder={profile?.name}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={profile?.position} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Destination ' name='Destination'
                   
                  >
                    <Input
                      className='Input'
                      placeholder={mission?.location}
                      name='Destination'
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item
                    label='Mission Start Date'
                    name='missionStartDate'
                  >
                     <Input
                     
                      className='Input'
                      placeholder={mission?.starTDateMiss}                   
                      readOnly={true}
                    />
                    

                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Mission End Date'
                    name='missionEndDate'
                  
                  >
                         <Input
                      className='Input'
                      placeholder={mission?.endDateMiss}
                      name='Mission End Date'
                      readOnly={true}
                    />
                   
                   
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Duration' name='Duration'>
                    <Input
                      placeholder={mission?.dureMiss}
                      readOnly={true} />
                  </Form.Item>
                </Col>



              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Project Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
              <Col xs={24} md={12}>
                  <Form.Item label='projectName' name='projectName'>
                    <Input
                      placeholder={mission?.projName}
                      readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Location' name='Location'>
                    <Input
                      placeholder={mission?.location}
                      readOnly={true} />
                  </Form.Item>
                </Col>

             
              
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Comments</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={24}>
                  <Form.Item label='Comments' name='Comments'>
                    <Input
                      className='InputComment'
                      // placeholder={mission?.location}             
                      placeholder={mission?.comentaire}
                      
                    
                      readOnly
                    />
                  </Form.Item>
                </Col>
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        </div>
        <Space
          size={15}
          style={{ display: 'flex', marginTop: 12, justifyContent: 'flex-end' }}
        >
          <Button onClick={handleCancelMission}>Cancel</Button>
          <Button onClick={handleGeneratePDF}>Generate PDF</Button>
          {/* <Button  
           onClick={() => generatePDF(targetRef, { filename: 'Mission Order' })}
          >Generate PDF</Button> */}
     
        </Space>
      </Form>
      <div ref={targetRef} id="pdf-content" style={{ visibility: pdfVisible ? "visible" : "hidden" }}>
    
      test
      
      
      </div>

        {isCancel? (
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

export default ViewMission;
