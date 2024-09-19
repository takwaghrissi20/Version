import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Row, Col } from 'antd';

import {
  StyledContactForm,
  StyledContactFormBtn,
  StyledContactFormContent,
  StyledContactFormContentField,
  StyledContactFormContentItem,
  StyledContactFormFooter,
  StyledContactFormHeader,
  StyledContactFormHeaderTitle,
  StyledContactFormItemTitle,
  StyledContactModalScrollbar,
  StyledScrumBoardDatePicker,
} from './index.styled';
import FloatLabel from "./FloatLabel";


import AppCard from '../../../@crema/components/AppCard';

const VisaEditForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,


  } = props;

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      '.pdf': [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });

  const { messages } = useIntl();
  const [getsId, setGetsId] = useState("");
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [passportnumber, setPassportnumber] = useState("");
  const [country, setCountry] = useState("");
  const [selectedProject, setSelectedProject] = useState("")
  const [projects, setProjects] = useState([]);
  const [selectedRequestVisa, setSelectedRequestVisa] = useState("")
  const [newDateRequestVisa, setNewDateRequestVisa] = useState("")
  const [selectedVisaCableReceive , setSelectedVisaCableReceive] = useState("")
  const [newvCabledate , setNewvCabledate] = useState("")
  const [selectedPASSPORTSUBMITTED , setSelectedPASSPORTSUBMITTED] = useState("")
  const [passportSubmitdate,setPassportSubmitdate]=useState("")
  const [ selectedFinalVisa,setSelectedFinalVisa]=useState("")
  const [finalVisaReceiveDate,setFinalVisaReceiveDate]=useState("")
  const [finishDateVisa, setFinishDateVisa]=useState("")
  const  handleRequestVisaChange= (value) => {
    console.log('Select  :', value);
    setSelectedRequestVisa(value); 
  };
  const handleProjectChange = (value) => {
    console.log('Select project :', value);
    setSelectedProject(value); 
  };
  const  handleRequestVisaCableChange= (value) => {

    setSelectedVisaCableReceive(value); 
  };
  const  handlePASSPORTSUBMITTEDChange= (value) => {

    setSelectedPASSPORTSUBMITTED(value); 
  };
  const handleFinalVisaChange= (value) => {

    setSelectedFinalVisa(value); 
  };

  const Visa = [
    { type: 'REQUEST SENT' },
    { type: 'REQUEST Not SENT' },

  ];
  const vCableReceive = [
    { type: 'RECEIVED' },
    { type: 'Not RECEIVED' },

  ];
  const PASSPORTSUBMITTED = [
    { type: 'SUBMITTED' },
    { type: 'Not SUBMITTED' },

  ];
  const finalVisaReceive = [
    { type: 'ready' },
    { type: 'Not ready' },

  ];
  const handleInputGetsIdChange = (event) => {
    setGetsId(event.target.value);
  };
  const handleInputPassortNumberChange = (event) => {
    setPassportnumber(event.target.value);
  };
  const token = localStorage.getItem("token");
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/getById?id=${getsId}&token=${token}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
       
        setName(responseData?.name)
        setPosition(responseData?.position)
        setPassportnumber(responseData?.passportnumber)
        setCountry(responseData?.destination)
        const projects = responseData?.projects?.flatMap(employee => employee.projName);     
        setProjects(projects)
      


      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };
  const handleAddVisa= () => {
      // try {
  
      //   const endPoint =
      //     process.env.NODE_ENV === "development"
      //       ? "https://dev-gateway.gets-company.com"
      //       : "";
      //   const requestBody = {
         
      //    name: ,
      //   passportnumber:,
      //    passportSubmitdate:      
      //    position:,
      //    projName:,
        
      //   };
      // console.log("bodyyyyyy",requestBody)
      //   const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/add`, {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(requestBody)
      //   });
  
      //   // Gérer la réponse du serveur
      //   if (!response.ok) {
      //    alert("Request failed")
      //     throw new Error('La requête a échoué avec le code ' + response.status);
  
      //   }
  
      //   const contentType = response.headers.get('content-type');
      //   if (!contentType || !contentType.includes('application/json')) {
      //     throw new TypeError("La réponse n'est pas au format JSON");
      //   }
      //   const data = await response.json();
      //    console.log("datavisa",data)
  
      //   // handleAddContactClose()
      //   // Traiter la réponse de l'API si nécessaire
      // } catch (error) {
      //   console.error('Erreur lors de la récupération des données:', error);
      // }
  
 
    

  };

 

  useEffect(() => {
    findId()
  }, [getsId]);

  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Visa Employees</p>

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>

        <StyledContactFormHeaderTitle>

        </StyledContactFormHeaderTitle>

      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <p className='SousTitle'>Personnal Edit Information Visa</p>

            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Row gutter={16}>

                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="GetsId">
                      <span className='modallabel'>Gets Id :</span>
                      <Input
                        className='Input'
                        placeholder="Gets Id"
                        value={getsId}
                        onChange={handleInputGetsIdChange} // Correction de la fonction de changement
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Full Name ">
                      <span className='modallabel'>Full Name :</span>
                      <Input
                        className='Input'
                        placeholder="Full Name "
                        value={name}
                        readOnly // Correction de la fonction de changement
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Position">
                      <span className='modallabel'>Position :</span>
                      <Input
                        className='Input'
                        placeholder="¨Position"
                        value={position}
                        readOnly // Correction de la fonction de changement
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>

              </Row>
              <Row gutter={16}>

                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Passport Number">
                      <span className='modallabel'>Passport Number:</span>
                      <Input
                        className='Input'
                        placeholder="Passport Number"
                        value={passportnumber}
                        onChange={handleInputPassortNumberChange} // Correction de la fonction de changement
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Project">
                      <span className='modallabel'>Project :</span>
                      <Select
                        placeholder="Select Projets"
                        onChange={handleProjectChange}
                        value={selectedProject}

                      >

                        {projects.map(project => (
                          <Option key={project} value={project}>
                            {project}
                          </Option>
                        ))}
                      </Select>

                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="REQUESTVISA">
                      <span className='modallabel'>REQUEST VISA :</span>
                      <Select
                        placeholder="Requested Visa"
                        onChange={handleRequestVisaChange}
                        value={selectedRequestVisa}

                      >

                        {Visa.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>

              </Row>
              <Row>
              <Col span={8}>
                  <span className='modallabel'> Date Request For Visa :</span>
                  <Form.Item
                  className='form-field'
                  name='Date Request For Visa'>

                    <StyledScrumBoardDatePicker
                      value={newDateRequestVisa}
                      onChange={() =>setNewDateRequestVisa()}
                    />
                  </Form.Item>

                </Col>
                
                <Col span={8} >
                  <Form.Item  className='form-field'>
                    <FloatLabel name="vCableReceive"
                     
                    >
                      <span className='modallabel'>Visa Cable :</span>
                     
                      <Select
                      className='SelectModal'
                        placeholder="Select Visa Cable Receive "
                        onChange={handleRequestVisaCableChange}
                        value={selectedVisaCableReceive}

                      >

                        { vCableReceive.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>

                      
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8} >
                  <Form.Item className='form-field'>
                    <FloatLabel name="vCabledate">
                      <span className='modallabel'>Date Visa Cable :</span>
                      <StyledScrumBoardDatePicker
                      value={newvCabledate}
                      onChange={() =>setNewvCabledate()}
                    />
                    </FloatLabel>
                  </Form.Item>
                </Col>

                </Row>
                <Row gutter={16}>             
               <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="PASSPORT SUBMITTED TO EMBASSY">
                      <span className='modallabel'>PASSPORT SUBMITTED TO EMBASSY :</span>
                      <Select
                       className='form-field'
                        placeholder="PASSPORT SUBMITTED TO EMBASSY "
                        onChange={handlePASSPORTSUBMITTEDChange}
                        value={selectedPASSPORTSUBMITTED}

                      >

                        {PASSPORTSUBMITTED.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                   
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="passportSubmitdate">
                      <span className='modallabel'>Date PASSPORT SUBMITTED TO EMBASSY :</span>
                      <StyledScrumBoardDatePicker
                      value={passportSubmitdate}
                      onChange={() =>setPassportSubmitdate()}
                    />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="FINAL VISA RECEIVED ">
                      <span className='modallabel'>VISA Ready :</span>
                      <Select
                        placeholder="FINAL VISA RECEIVED "
                        onChange={handleFinalVisaChange}
                        value={selectedFinalVisa}

                      >

                        {finalVisaReceive.map(p => (
                          <Option key={p.type} value={p.type}>
                            {p.type}
                          </Option>
                        ))}
                      </Select>
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>             
               <Col span={8}>

                </Col>
                </Row>
                <Row>
                <Col span={8} style={{marginRight:"5px",width: "0.25rem"}}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="finalVisaReceiveDate">
                      <span className='modallabel'>Date FINAL VISA Ready :</span>
                      <StyledScrumBoardDatePicker
                      value={finalVisaReceiveDate}
                      onChange={() =>setFinalVisaReceiveDate()}
                    />
                    </FloatLabel>
                  </Form.Item>
                </Col>
             
                <Col span={8} style={{marginRight:"5px"}}>
                  <Form.Item className='form-field'>
                    <FloatLabel 
                
                    name="finishDateVisa">
                      <span className='modallabel'>FINISH DATE :</span>
                     
                      <StyledScrumBoardDatePicker
                   
                      value={finishDateVisa}
                      onChange={() =>setFinishDateVisa()}
                    />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}></Col>
                        
                </Row>
             
            </StyledContactFormContentField>
          </StyledContactFormContentItem>


          <StyledContactFormFooter>
            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={handleAddContactClose}
            >
              <IntlMessages id='common.cancel' />
            </StyledContactFormBtn>
            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={handleAddVisa}
            >
              <IntlMessages id='common.AddVisa' />
            </StyledContactFormBtn>


          </StyledContactFormFooter>



        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default VisaEditForm;

