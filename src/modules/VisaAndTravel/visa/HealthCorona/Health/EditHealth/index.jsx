import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker } from 'antd';
import { MdEdit } from 'react-icons/md';
import { StyledShadowWrapper } from './index.styled';
import FloatLabel from "./FloatLabel";
import { useIntl } from 'react-intl';
const { Option } = Select;
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../../../../../../@crema/components/AppConfirmationModal';
import AppPageMeta from '../../../../../../@crema/components/AppPageMeta';
import { useLocation } from 'react-router-dom';

const EditHeath = () => {
  const location = useLocation();
  const [form] = Form.useForm();
  const idv = location.state ? location.state.idv : null;
  const getsid = location.state ? location.state.getsid : null;
  const name = location.state ? location.state.name : null;
  const projName = location.state ? location.state.projName : null;
  const vaccinType = location.state ? location.state.vaccinType : null;
  const DateFetness = location.state ? location.state.DateFetness : null;
  const resultFitness = location.state ? location.state.resultFitness : null;
  const hypatitDare = location.state ? location.state.hypatitDare : null;
  const hepatitResult = location.state ? location.state.hepatitResult : null;
  const idzresult = location.state ? location.state.idzresult : null;
  const idzdate = location.state ? location.state.idzdate : null;
  const [newDateFetness, setnewDateFetness] = useState(DateFetness);
  const [newresultFitness, setnewresultFitness] = useState(resultFitness);
  const [newDateHepatitie, setnewDateHepatitie] = useState(hypatitDare);
  const [newresultHepatitie, setnewresultHepatitie] = useState(hepatitResult);
  const [newDateidz, setnewDateidz] = useState(idzdate);
  const [newresultidz, setnewresultidz] = useState(idzresult);
  const [confirmationUpdate, setConfirmationUpdate] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };

  const handleConfirmationUpdate = () => {
    setConfirmationUpdate(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/vacin/update?token=${token}`, {
        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          idv: 2,
          getsId: getsid,
          name: name,
          projName: projName,
          dateTestWork: newDateFetness,
          resultFitness: newresultFitness,
          hypatitDare: newDateHepatitie,
          hepatitResult: newresultHepatitie,
          idzresult: newresultidz,
          idzdate: newDateidz
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.text();
        alert("Update Vaccin succeed");
        console.log("responseData", responseData);
        setConfirmationUpdate(false); // Close modal on success
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

  return (
    <>
      <AppPageMeta title='Add Heath' />
      <Form
        form={form}
        layout='vertical'
        style={{ backgroundColor: "white", marginBottom: "20px", padding: "10px", borderRadius: "20px" }}
        onSubmit={e => { e.preventDefault() }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>Edit Health For Mobilization</Typography.Title>
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
                  <Form.Item label='Reference' name='interviewCode'>
                    <Input placeholder={"Vaccin-" + idv} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'>
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsid}
                      readOnly
                    />
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
                <Divider style={{ marginTop: 16, marginBottom: 16 }} />
              </AppRowContainer>
            </StyledShadowWrapper>
          </Col>
        </AppRowContainer>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Health Details</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12}>
                  <Form.Item label='Project Name' name='Project Name'>
                    <Input
                      className='Input'
                      placeholder={projName}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Type Vaccin:' name='Type Vaccin:'>
                    <Input
                      className='Input'
                      placeholder={vaccinType}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date Of Health Fetness Test:' name='Date Of Health Fetness Test:'>
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      placeholder={DateFetness}
                      value={newDateFetness ? dayjs(newDateFetness) : null}
                      onChange={(date, dateString) => setnewDateFetness(dateString)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Result Fetness Test:' name='Result Fetness Test:'>
                    <Input                    
                      placeholder={resultFitness}
                      value={newresultFitness}
                      onChange={(e) => setnewresultFitness(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date Of Hepatitie Test:' name='Date Of Hepatitie Test:'>
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={newDateHepatitie ? dayjs(newDateHepatitie) : null}
                      placeholder={hypatitDare}
                      onChange={(date, dateString) => setnewDateHepatitie(dateString)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Result Hepatitie Test:' name='Result Hepatitie Test:'>
                    <Input                
                      placeholder={hepatitResult}               
                      onChange={(e) => setnewresultHepatitie(e.target.value)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date Of IDZ/HIV Test:' name='Date Of IDZ/HIV Test:'>
                    <DatePicker
                      placeholder={idzdate}
                      style={{ width: "100%", height: "30px" }}
                      value={newDateidz ? dayjs(newDateidz) : null}
                      onChange={(date, dateString) => setnewDateidz(dateString)}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Result IDZ/HIV Test:' name='Result IDZ/HIV Test:'>
                    <Input
                     placeholder={idzresult}
                      value={newresultidz}
                      onChange={(e) => setnewresultidz(e.target.value)}
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
          <Button onClick={goBack}>Cancel</Button>
          <Button
            onClick={handleConfirmationUpdate}
            type='primary'
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
      {confirmationUpdate && (
        <ConfirmationModal
          open={confirmationUpdate}
          paragraph={'Are you sure you want to update Vaccin?'}
          onDeny={() => setConfirmationUpdate(false)}
          onConfirm={handleUpdate}
          modalTitle="Update Vaccin"
        />
      )}
    </>
  );
};

export default EditHeath;
