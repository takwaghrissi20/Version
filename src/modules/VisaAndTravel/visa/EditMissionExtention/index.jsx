import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker,notification} from 'antd';
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
import { update } from 'lodash';
const ViewMission = () => {
  const navigate = useNavigate();
  const targetRef = useRef();
  const [isCancel, onCancel] = useState(false);
  const [form] = Form.useForm();
  const [dateInput, setDateInput] = useState(new Date());
  const formattedDate = dayjs(dateInput).format('YYYY-MM-DD');
  const location = useLocation();
  //////////////////////////////////
  const [profile, setProfile] = useState("")
  const id = location.state ? location.state.id: null;
  const [mission, setMission] = useState("")
  const [getsId, setGetsId] = useState("");
  const [newrefMiss, setNewRefMiss] = useState("");
  const [starTDateMis, setStarTDateMis] = useState(null);
  const [newstarTDateMis, setNewstarTDateMis] = useState(starTDateMis);
  const [reason,setReason] = useState("");
  const [commentaire,setCommentaire] = useState("");
  const [newreason, setNewReason] = useState(reason);
  const [newcommentaire, setNewcommentaire] = useState(commentaire);
  const [extraProject, setExtraProject] = useState("");
  const [newextraProject, setNewExtraProject] = useState(extraProject);
  const [ plannerInput, setPlannerInput] = useState("");
  const [ newplannerInput, setNewPlannerInput] = useState(plannerInput);
  function ExtraProject(e) {
    setNewExtraProject(e.target.checked)

  }
  function   PlannerInput(e) {

    setNewPlannerInput(e.target.checked)

  }

  
 
  const findIdMission = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/getById?id=${id}`, {
        method: 'Get',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {
        const responseData = await response.json();
        setMission(responseData)
        setStarTDateMis(responseData?.new_mission);
           
        setGetsId(responseData?.getsId)
        setReason(responseData?.reasonForExtension)
        setCommentaire(responseData?.comments)
        setExtraProject(mission?.extraProject)
        setPlannerInput(mission?.plannerInput)
  
       
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
  const handleInputReasonChange = (event) => {
    setNewReason(event.target.value);
  };
  const handleInputCommentaireChange = (event) => {
    setNewcommentaire(event.target.value);
  };
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Save Mission Extention',
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
      description: 'Error Save Mission Extention',
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
  
  ///Update
  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/missionEx/updateTr?id=${id}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          ref:id,
          dateinput:mission?.dateinput,
          refMiss:mission?.refMiss,
          projectTitle:mission?.projectTitle,
          projRef:mission?.projRef,
          name:profile?.name,
          position:profile?.position,
          actualLocation: mission?.actualLocation,
          old_mission:mission?.old_mission,
          new_mission:newstarTDateMis,
          reasonForExtension:newreason,
          comments: newcommentaire,
          extraProject:newextraProject,
          plannerInput:newplannerInput
        

         

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
           <div  ref={targetRef} id="pdf-content">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography.Title level={4}>Mission Extention</Typography.Title>
          </div>
        </div>
        <Divider style={{ marginTop: 16, marginBottom: 16 }} />
        <AppRowContainer>
          <Col xs={24} md={6}>
            <Typography.Title level={5}>Information Extension</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
                <Col xs={24} md={12} >
                  <Form.Item  label='Reference' name='MAO'>
                    <Input 
                    className='Input'
                    placeholder={"MER-" + id} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col  xs={24} md={12}>
                  <Form.Item label='Date' name='Date'  >
                  <Input
                      className='Input'
                      placeholder={mission?.dateinput}
                      readOnly
                     
                     />         
                  </Form.Item>
                </Col>               
                <Col xs={24} md={12}>
                  <Form.Item label='Mission Reference' name='Mission Reference '>
                    <Input
                      className='Input'
                      placeholder={mission?.refMiss}  
                      readOnly                        
                 
                      />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Project Name' name='Project Name'>
                    <Input
                      className='Input'
                      placeholder={mission?.projectTitle}
                      readOnly />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Project Reference' name='Project Reference'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={mission?.projRef}
                       />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Name ' name='Name'
                   
                  >
                    <Input
                      className='Input'
                      placeholder={profile?.name}
                      name='Name'
                      readOnly={true}
                    />
                  </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                  <Form.Item
                    label='Position'
                    name='Position'
                  >
                     <Input
                     
                      className='Input'
                      placeholder={profile?.position}                   
                      readOnly={true}
                    />
                    

                  </Form.Item>
                </Col>
            
                <Col xs={24} md={12}>
                  <Form.Item label='Actual Location' name='Actual Location'>
                    <Input
                      placeholder={mission?.actualLocation}
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
            <Typography.Title level={5}>New Information Mission Extension</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
              <Col xs={24} md={12}>
                  <Form.Item label='Old End Mission Date' name='Old End Mission Date'>
                    <Input
                      placeholder={mission?.old_mission}
                      readOnly={true} />
                  </Form.Item>
                </Col>
            

                <Col style={{marginTop:"0.78rem"}}xs={24} md={12}>
                <span >New End Mission Date</span>
                  <Form.Item >

                    <DatePicker
                    style={{height:"30px",width:'100%',marginTop:"1px"}}
                      placeholder={mission?.old_mission}
                      onChange={(value) => setNewstarTDateMis(dayjs(value))}
                      value={newstarTDateMis} />

                  </Form.Item>

                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Reason For Extention' name='Reason For Extention'>
                    <Input
  
                      placeholder={mission?.reasonForExtension}
                      value={newreason}
                      onChange={handleInputReasonChange} />
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
                      placeholder={mission?.comments}
                      value={newcommentaire}
                      onChange={handleInputCommentaireChange}
                      
                    
                   
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
            <Typography.Title level={5}>Planner Input</Typography.Title>
          </Col>
          <Col xs={24} md={18}>
            <StyledShadowWrapper>
              <AppRowContainer>
              <AppRowContainer>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label='As per : '
                      name='As per'

                    >
                      <Checkbox checked={mission?.extraProject} onChange={ExtraProject}
                      
                    >
                      Extra Project Time Shedule
                      </Checkbox>



                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item
                      label=' '
                      name='Asper'

                    >
                      <Checkbox checked={mission?.plannerInput} onChange={PlannerInput}>
                         As per Project Time Schedule
                      </Checkbox>



                    </Form.Item>
                  </Col>
                



                </AppRowContainer>
             
                
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
          
          <Button  
            onClick={Update}
          >Save</Button>
     
        </Space>
      </Form>

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
