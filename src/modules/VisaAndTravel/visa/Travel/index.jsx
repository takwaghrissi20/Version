import React, { useState, useEffect } from 'react';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import { Button, Col, Divider, Form, Input, Space, Typography, Select, Alert, Checkbox, DatePicker, } from 'antd';
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
const AddTravel = () => {
  const navigate = useNavigate();
  const [lastIdTravel, setLastIdTravel] = useState(0);
  const [getsId, setGetsId] = useState("");
  const [JosId, setJosId] = useState("");
  const [ticketReference, setTicketReference] = useState("");


  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [passportnumber, setPassportnumber] = useState("");
  const [country, setCountry] = useState("");
  const [projects, setProjects] = useState([]);
  const [missionOrder, setMissionOrder] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedMission, setSelectedMission] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedTrip, setSelectedTrip] = useState("");
  const [selectedRound, setSelectedRound] = useState("");
  const [selectTypeValue, setSelectTypeValue] = useState(null);
  const [mobDate, setMobDate] = useState("");
  const [travelDesert, setTravelDesert] = useState("");

  const [demobDate, setDemobDate] = useState("");
  const [DateTravel, setDateTravel] = useState("");

  const [projRef, setProjRef] = useState("");
  const [ typetripdessert, setTypetripdessert] = useState("");
  const [  urlCopy, setUrlCopy] = useState("");
 
 
  const [confirmationTravel, setConfirmationTravel] = useState(false);
  const [isCancel, onCancel] = useState(false);
  const [actualLocation, setActualLocation] = useState("");
  const [exit, setExit] = useState("");
  const [tolocation, setTolocation] = useState("");
  const [exitrentry, setExitrentry] = useState("");
  const [url, setUrl] = useState("");

  // Handle URL selection
  const handleUrlSelection = () => {
    const url = "https://cloud.gets-company.com.tn/index.php/f/1388374/";
    setUrl(url);
  };

  //Select Scan File Ticket :
  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box',
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden',
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%',
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'application/pdf': [], // Use 'application/pdf' instead of '.pdf'
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });


  const thumbs = files.map((file) => {
    if (file.type === 'application/pdf') {
      return (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <a href={file.preview} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </div>
        </div>
      )
     } else {
      return (
        <div style={thumb} key={file.name}>
          <div style={thumbInner}>
            <img alt="preview" src={file.preview} style={img} />
          </div>
        </div>
      );
    }
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

    ////End dowload file 
  const [form] = Form.useForm();

  const Type = [
    { type: 'Mobilzation' },
    { type: 'Demobilization' },

  ];
  const round = [
    { type: 'one Trip' },
    { type: 'Round Trip' },

  ];
  const trip = [
    { type: 'Flight' },
    { type: 'By Land' },

  ];
  const ExitType = [
    { type: 'Exit Reentry' },
    { type: 'Final Exit' },

  ];
  



  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
  };
  const handleJosId = (event) => {
    setJosId(event.target.value);
  };
  const handleTicketReference = (event) => {
    setTicketReference(event.target.value);
  };
  const  handletypetripdessert = (event) => {
    setTypetripdessert(event.target.value);
  };
  const  handleScanurl = (event) => {
    setUrlCopy(event.target.value);
  };


 
  const LastIndexTravel = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/last`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const data = await response.json();
      setLastIdTravel(data.idTravel);
    } catch (error) {
      console.error('Erreur lors de la récupération Last Recruitement', error);
    }
  };

  const LastTravel = lastIdTravel + 1;

  const findId = async () => {
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
      setCountry(responseData?.destination);
      setPassportnumber(responseData?.passportnumber)

      const projectsData = responseData?.projects?.map(project => ({
        projName: project.projName,
        projId: project.projId
      }));
      setProjects(projectsData);


    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const GetIdProject = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/getByname?name=${selectedProject}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();

      setProjRef(responseData?.[0]?.projRef)



    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const GetMissionByProjName = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mission/getByProjName?name=${selectedProject}`, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      const MissionData = responseData?.map(mission => ({
        missionId: mission.idMiss,
        // projId: project.projId
      }));

      setMissionOrder(MissionData)
   



    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };

  const handleAddTravel = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/travel/adTr?id=${selectedMission}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          goBack:selectTypeValue,
          projName:selectedProject,
          dateMob:mobDate,
          dateDemob:demobDate,
          dateOfTravel:DateTravel,
          ticketRef:ticketReference,
           type:selectedTrip,
          round:selectedRound,
          actualLocationTo:actualLocation,
          actualLocationFrom:tolocation,
          dateTravelDesert:travelDesert,
          tripTypeDesert:typetripdessert,
          idendityCopy: urlCopy
          // exitrentry //Ajouter
          


        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        alert("Success Travel Add")
        confirmationTravel(false)
        


      }

    } catch (error) {
      console.error("Erreur lors de la récupération du Id Mission:", error);
    }
  };

  useEffect(() => {
    LastIndexTravel();
    if (getsId) {
      findId();
    }
    GetIdProject()
    GetMissionByProjName()
  }, [getsId, selectedProject
  ]);

  const handleProjectChange = (value, option) => {

    setSelectedProject(value);

  };
  const handleMissionChange = (value, option) => {
    setSelectedMission(value)


  };



  // const handleTravelType = (value) => {
  //   setSelectedType(value);
  // };
  const handleTravelType = (value) => {
    setSelectedType(value);

    if (value === 'Mobilzation') {
      setSelectTypeValue(0);
    } else if (value === 'Demobilization') {
      setSelectTypeValue(1);
    }
  };
  console.log("setSelectTypeValue",selectTypeValue)
  const handleTravelRound = (value) => {
    setSelectedRound(value);
  };
 

  const handleActualLocation  = (event) => {
    const value = event.target.value;
    setActualLocation(value);
    console.log(value); 
  };

  const handleExist = (value) => {
    setExit(value);
  }
  const handleExistRentry = (event) => {
    const value = event.target.value;
    setExitrentry(value);
    console.log(value); 
    
  }
  const handleLocation = (event) => {
    const value = event.target.value;
    setTolocation(value);
    console.log(value); // Log the input value to the console
  };
 


  const handleTraveltrip = (value) => {
    setSelectedTrip(value)
  };

  const goBack = () => {
    navigate(-1)
  }
  const BeforeSaveTravel = () => {
    const mobDemobValue = form.getFieldValue('MobDemob'); 
    const mobDateValue = form.getFieldValue('mobDate'); 
    const demobDateValue = form.getFieldValue('demobDate'); 
    const DateTravelValue = form.getFieldValue('DateTravel'); 
    const TicketReferenceValue = form.getFieldValue('TicketReference'); 
    const TRIPTypeValue= form.getFieldValue('TRIPType'); 
    const RoundValue = form.getFieldValue('RoundTrip');
    const  ActualLocationValue= form.getFieldValue('ActualLocation');
    const  ToLocationValue= form.getFieldValue('ToLocation');
    const   DateTravelDesertValue= form.getFieldValue('DateTravelDesert');
    const   TripTypeDesertValue= form.getFieldValue('TripTypeDesert');
    
   
  
  
    if (!mobDemobValue || !mobDateValue ||!demobDateValue ||!DateTravelValue ||!TicketReferenceValue
          ||!TRIPTypeValue || !RoundValue || !ActualLocationValue || !ExitReentry || !ToLocationValue
          ||!DateTravelDesertValue || !TripTypeDesertValue


    ) { 
      alert("Please complete all fields");
      return; 
    }
  
    form.validateFields(['MobDemob', 'mobDate','demobDate','DateTravel',
    'TicketReference','TRIPType','RoundTrip','ActualLocation','ToLocation','DateTravelDesert','TripTypeDesert'])
      .then(values => {
        alert("All fields are complete.");
        setConfirmationTravel(true);
      })
      .catch(errorInfo => {
        alert("Please complete all fields");
      });
  };

  
  const handleConfirmationAddTravel = () => {
    setConfirmationTravel(true)
  }
  const handleCancelTravel = () => {
    onCancel(true);
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
                    <Input placeholder={"" + LastTravel} readOnly={true} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date' name='Date :'
                  >
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      placeholder='YYYY-MM-DD'
                    // value={missionDate ? dayjs(travelDate, 'YYYY-MM-DD') : null}
                    // onChange={(value) => setTravelDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Gets Id' name='Gets Id '>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsId}
                      onChange={handleInputGetsIdChange} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Jos Id' name='Jos Id'>
                    <Input
                      className='Input'
                      placeholder="Jos Id"
                      onChange={handleJosId}
                      value={JosId}


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
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Function' name='Function'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={position} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    label='Passport Number' name='Passport Number'>
                    <Input
                      readOnly={true}
                      className='Input'
                      placeholder={passportnumber} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'
                    name='projectName'
                  >
                    <FloatLabel >
                      <span className='modallabel'>Project Name:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Your Project Name"
                        onChange={handleProjectChange}
                        value={selectedProject}
                      >
                        {projects.map(project => (
                          <Option key={project.projId} value={project.projName}>
                            {project.projName}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item className='form-field'
                    name='Mission'
                  >
                    <FloatLabel >
                      <span className='modallabel'>Reference Mision Order:</span>
                      <Select
                        style={{ marginTop: "10px" }}
                        placeholder="Select Your Mision Order"
                        onChange={handleMissionChange}
                        value={selectedMission}
                      >
                        {missionOrder.map(p => (
                          <Option key={p.missionId} value={p.missionId}>
                            {"MAO -"+p.missionId}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
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
              rules={[{ required: true, message: 'Please select mobilization or demobilization' }]}
            >
              <Select onChange={handleTravelType} placeholder="Mobilization / Demobilization" allowClear>
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
                   rules={[{ required: true, message: 'Please select Date Mobilization' }]}>
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={mobDate ? dayjs(mobDate, 'YYYY-MM-DD') : null}
                      onChange={(value) => setMobDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date DeMobilization' name='demobDate'
                   rules={[{ required: true, message: 'Please select Date Demobilization' }]}>
                  
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={demobDate ? dayjs(demobDate, 'YYYY-MM-DD') : null}
                      onChange={(value) => setDemobDate(value ? dayjs(value).format('YYYY-MM-DD') : '')}
                    />
                  </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                  <Form.Item label='Desert Flight' name='DateTravel'
                     rules={[{ required: true, message: 'Please select Desert Flight' }]}>
                  
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={DateTravel ? dayjs(DateTravel, 'YYYY-MM-DD') : null}
                      onChange={(value) => setDateTravel(value ? dayjs(value).format('YYYY-MM-DD') : '')}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Ticket Reference'
                  name='TicketReference'
                  rules={[{ required: true, message: 'Please select Ticket Reference' }]}>
                  
                    <Input
                      className='Input'
                      placeholder="Ticket Reference"
                      onChange={handleTicketReference}
                      value={ticketReference}



                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
              <Form.Item
              name="TRIPType"
              label="LAND /FLIGHT"
              rules={[{ required: true, message: 'Please select TRIP BY LAND /FLIGHT' }]}
            >
              <Select
                onChange={handleTraveltrip}
                placeholder="TRIP BY LAND /FLIGHT" allowClear>
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
              rules={[{ required: true, message: 'Please select Round Trip/One Trip' }]}
            >
              <Select
               onChange={handleTravelRound }
                placeholder="Round Trip/One Trip" allowClear>
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
                    rules={[{ required: true, message: 'Please select Actual Location ' }]}>
                    
                    
                    <Input
                      className='Input'
                      placeholder="Actual Location"
                      value={actualLocation}
                      onChange={handleActualLocation}
                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
              <Form.Item
              name="ExitReentry"
              label="Exit Reentry /Final Exit"
              rules={[{ required: true, message: 'Please select Exit Reentry /Final Exit' }]}
            >
              <Select
               onChange={handleExistRentry }
                placeholder="Exit Reentry /Final Exit" allowClear>
                {ExitType.map(type => (
                  <Option key={type.type} value={type.type}>
                    {type.type}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    label='To Location' name='ToLocation'
                    rules={[{ required: true, message: 'Please select To Location ' }]}>
                    
                    
                    <Input
                      className='Input'
                      placeholder="To Location"
                      value={tolocation}
                      onChange={handleLocation}
                    // value={exit}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Date Travel Desert' name='DateTravelDesert'
                     rules={[{ required: true, message: 'Please select Date Travel Desert' }]}>
                  
                    <DatePicker
                      style={{ width: "100%", height: "30px" }}
                      value={travelDesert ? dayjs(travelDesert, 'YYYY-MM-DD') : null}
                      onChange={(value) => setTravelDesert(value ? dayjs(value).format('YYYY-MM-DD') : '')}


                    />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label='Trip Type Desert' name='TripTypeDesert'
                  rules={[{ required: true, message: 'Please select Trip Type Desert' }]}>
                    <Input
                      className='Input'
                      placeholder="Trip Type Desert"
                    // value={exit}
                    value={typetripdessert}
                    onChange={handletypetripdessert}

                    />
                  </Form.Item>
                </Col>
          
                {/* <section className='container'>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section> */}
                <Col xs={24} md={12}>
                  <Form.Item label='Idendity Copy Ticket'
                  >
                    <Input
                      className='Input'
                      placeholder="Url Idendity Copy Ticket"
                    value={urlCopy}
                    onChange={ handleScanurl}



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
          <Button onClick={handleCancelTravel}>Cancel</Button>
          <Button
             onClick={BeforeSaveTravel}
             disabled={!selectedMission || !selectedProject ||!getsId}
            type='primary'
            htmlType='submit'>
            Save
          </Button>
        </Space>
      </Form>
     {confirmationTravel ? (
        <ConfirmationModal
          open={confirmationTravel}
          paragraph={'Are you sure you Add Travel Ticket'}
          onDeny={setConfirmationTravel}
         onConfirm={handleAddTravel}
          modalTitle="Add Travel"
          handleConfirmationAddTravel={handleConfirmationAddTravel}
        />
      ) : null}
      {isCancel ? (
        <ConfirmationModal
          open={isCancel}
          paragraph={'Are you sure you canceled All data is lost?'}
          onDeny={onCancel}
          onConfirm={goBack}
          modalTitle="Cancel Travel "
          handleTravel={handleCancelTravel}
        />
      ) : null} 
    </>
  );
};

export default AddTravel;
