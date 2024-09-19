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

const EmpEditForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    getsId,
    nationality,
    birthDate,
    familyStatus,
    phoneNumber,
    joinDate,
    companyType,
    finishDate,
    actStatus,
    position,
    getsEmail,
    name,
    passportnumber,
    cnss,
    contractNumb,
    cvCopy,
    passportCopy,
    idVisa,
    dateVisa,
    toApplyForVisa,
    destination,
    projName,
    projects


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
  const [maritalStatus, setNewMaritalStatus] = useState(familyStatus)
  const [newTelNumber, setNewTelNumber] = useState(phoneNumber)
  const [newFinishDate, setNewFinishDate] = useState(finishDate)
  const [newactStatus, setNewactStatus] = useState(actStatus)
  const [newposition, setNewposition] = useState(position)
  const [dataEdit, setDataEdit] = useState([])
  const [newidVisa, setNewidVisa] = useState(idVisa)
  const [newdateVisa, setNewdateVisa] = useState(dateVisa)
  const [newDateRequestVisa, setNewDateRequestVisa] = useState("")
  
  const [newtoApplyForVisa, setNewtoApplyForVisa] = useState(toApplyForVisa)
  const [newdestination, setNewDestination] = useState(destination)
  const [selectedProject, setSelectedProject] = useState("")
  const [selectedRequestVisa, setSelectedRequestVisa] = useState("")
  const [selectedVisaCableReceive , setSelectedVisaCableReceive] = useState("")
  const [newvCabledate , setNewvCabledate] = useState("")
  const [selectedPASSPORTSUBMITTED , setSelectedPASSPORTSUBMITTED] = useState("")
  const [passportSubmitdate,setPassportSubmitdate]=useState("")
  const [ selectedFinalVisa,setSelectedFinalVisa]=useState("")
  const [finalVisaReceiveDate,setFinalVisaReceiveDate]=useState("")
  const [finishDateVisa, setFinishDateVisa]=useState("")
 
 
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
  const  finalVisaReceive= [
    { type: 'FINAL RECEIVED' },
    { type: 'Not FINAL RECEIVED' },
  
  ];
  
 
  console.log('vvv:', selectedProject);
  const handleProjectChange = (value) => {
    console.log('Select project :', value);
    setSelectedProject(value); 
  };
  const  handleRequestVisaChange= (value) => {
    console.log('Select  :', value);
    setSelectedRequestVisa(value); 
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

  useEffect(() => {
    console.log('Initial idVisa:', idVisa);
    setNewidVisa(idVisa);
    setNewdateVisa(dateVisa)
    setNewtoApplyForVisa(toApplyForVisa)
    setNewDestination(destination)
  }, [idVisa, dateVisa, toApplyForVisa, destination, getsId]);
  const token = localStorage.getItem("token");
  const handleEdit = async (newidVisa, newdateVisa, newdestination, newtoApplyForVisa

  ) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/update?token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          getsId: getsId,
          name: name,
          position: position,
          nationality: nationality,
          birthDate: birthDate,
          familyStatus: maritalStatus,
          phoneNumber: newTelNumber,
          joinDate,
          companyType,
          finishDate: finishDate,
          actStatus: actStatus,
          position: newposition,
          getsEmail: getsEmail,
          passportnumber: passportnumber,
          cnss: cnss,
          contractNumb: contractNumb,
          cvCopy: cvCopy,
          passportCopy: passportCopy,
          dateVisa: newdateVisa,
          idVisa: newidVisa,
          destination: newdestination,
          toApplyForVisa: newtoApplyForVisa



        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();

        setDataEdit(responseData)
        //handleAddContactClose(true)
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

  const handleInputChange = (e) => {
    // Remove the "V-" prefix before setting the state
    const inputValue = e.target.value;
    const actualValue = inputValue.startsWith('V-') ? inputValue.substring(2) : inputValue;
    setNewidVisa(actualValue);
  };

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
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="APPLICATION NUMBER">
                      <span className='modallabel'> APPLICATION NUMBER :</span>
                      <Input
                        className='Input'
                        placeholder="APPLICATION NUMBER"
                        value={`V-${newidVisa}`}
                        onChange={handleInputChange}


                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="name">
                      <span className='modallabel'> Full Name :</span>
                      <Input
                        className='Input'
                        placeholder="Full Name"
                        value={name}
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <span className='modallabel'> Visa Date:</span>
                  <Form.Item name='Visa Date'>

                    <StyledScrumBoardDatePicker
                      value={newdateVisa}
                      onChange={() => setNewdateVisa()}
                    />
                  </Form.Item>

                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="To Apply For Visa">
                      <span className='modallabel'> To Apply For Visa :</span>
                      <Input
                        className='Input'
                        placeholder="To Apply For Visa"
                        classNames="ViewInput"
                        value={newtoApplyForVisa}
                        onChange={() => setNewtoApplyForVisa()}
                      />
                    </FloatLabel>
                  </Form.Item>

                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="COUNTRY">
                      <span className='modallabel'> COUNTRY :</span>
                      <Input
                        className='Input'
                        placeholder="COUNTRY"
                        value={newdestination}
                        classNames="ViewInput"
                        onChange={(e) => setNewDestination(e.target.value)}

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
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="REQUESTVISA">
                      <span className='modallabel'>REQUEST VISA :</span>
                      <Select
                        placeholder="Select Projets"
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
                <Col span={8}>
                  <span className='modallabel'> Date Request For Visa :</span>
                  <Form.Item name='Date Request For Visa'>

                    <StyledScrumBoardDatePicker
                      value={newDateRequestVisa}
                      onChange={() =>setNewDateRequestVisa()}
                    />
                  </Form.Item>

                </Col>
             
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="vCableReceive">
                      <span className='modallabel'>Visa Cable  :</span>
                     
                      <Select
                        placeholder="Select Visa CableReceive "
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
              </Row>

              <Row gutter={16}>
                <Col span={8}>
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
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="PASSPORT SUBMITTED TO EMBASSY">
                      <span className='modallabel'>PASSPORT SUBMITTED TO EMBASSY :</span>
                      <Select
                        placeholder="PASSPORT SUBMITTED TO EMBASSY "
                        onChange={handlePASSPORTSUBMITTEDChange}
                        value={selectedPASSPORTSUBMITTED}

                      >

                        { PASSPORTSUBMITTED.map(p => (
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
              </Row>


              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="FINAL VISA RECEIVED ">
                      <span className='modallabel'>FINAL VISA RECEIVED  :</span>
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
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="finalVisaReceiveDate">
                      <span className='modallabel'>Date FINAL VISA RECEIVED :</span>
                      <StyledScrumBoardDatePicker
                      value={finalVisaReceiveDate}
                      onChange={() =>setFinalVisaReceiveDate()}
                    />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="finishDateVisa">
                      <span className='modallabel'>FINISH DATE :</span>
                     
                      <StyledScrumBoardDatePicker
                      value={finishDateVisa}
                      onChange={() =>setFinishDateVisa()}
                    />
                    </FloatLabel>
                  </Form.Item>
                </Col>
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

              onClick={() => handleEdit(newName, newfamilyStatus, newcontratCopy, newposition)}
            >
              <IntlMessages id='common.Edit' />
            </StyledContactFormBtn>


          </StyledContactFormFooter>



        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default EmpEditForm;

