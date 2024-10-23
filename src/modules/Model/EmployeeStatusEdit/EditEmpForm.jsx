import React,{useState} from 'react';
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
    findIdData
  

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
  const [maritalStatus,setNewMaritalStatus]=useState(familyStatus)
  const [newTelNumber,setNewTelNumber]=useState(phoneNumber)
  const [newFinishDate,setNewFinishDate]=useState(finishDate)
  const [newactStatus,setNewactStatus]=useState(actStatus)
  const [newposition,setNewposition]=useState(position)
  const [dataEdit, setDataEdit] = useState([])
  const token = localStorage.getItem("token");
  const handleEdit = async (maritalStatus,newTelNumber,newFinishDate,newactStatus,newposition) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/update?token=${token}&id=${getsId}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          getsId:getsId,
          name:name,
          position:newposition,
          nationality:nationality,
          birthDate:birthDate,
          familyStatus:maritalStatus,
          phoneNumber:newTelNumber,
          joinDate,
          companyType,
          finishDate:newFinishDate,
          actStatus:newactStatus,
          // position:newposition,
          getsEmail:getsEmail,
          passportnumber:passportnumber,
          cnss:cnss,
          contractNumb: contractNumb,
          cvCopy:cvCopy,
          passportCopy:passportCopy,
          vacations: findIdData?.vacations, 
          projects:findIdData?.projects,
          pointages:findIdData?.pointages,
          integrations:findIdData?.integrations,
          vaccins:findIdData?.vaccins,
          materials:findIdData?.materials,
          officeWorkStatus:findIdData?.officeWorkStatus,
          siteWorkStatus:findIdData?.siteWorkStatus,
          officepointages:findIdData?.officepointages,
          advancedSalarys:findIdData?.advancedSalarys,
          salaries:findIdData?.salaries,
          transferPermissions:findIdData?.transferPermissions,
          positionChanges:findIdData?.positionChanges,
          trainings:findIdData?.trainings,
          

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


  
  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Sammary</p>

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
              <p className='SousTitle'>Personnal Information</p>
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Gets Id">
                      <span className='modallabel'> Gets Id :</span>
                      <Input
                        className='Input'
                        placeholder="Gets Id"
                        value={getsId}
                        readOnly={true}
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
                  <Form.Item className='form-field'>
                    <FloatLabel name="Nationality">
                      <span className='modallabel'> Nationality :</span>
                      <Input
                        className='Input'
                        placeholder="Nationality"
                        value={nationality}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="Databirth">
                      <span className='modallabel'> Date Of Birth :</span>
                      <Input
                        className='Input'
                        placeholder="Date Of Birth"
                        value={birthDate}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>

                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="familyStatus">
                      <span className='modallabel'> Marital Status :</span>
                      <Input
                        className='Input'
                        placeholder="Marital Status"
                        value={maritalStatus}
                        classNames="ViewInput"
                        onChange={(e) => setNewMaritalStatus(e.target.value)}
                      
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="phoneNumber">
                      <span className='modallabel'>Tel Number :</span>
                      <Input
                        className='Input'
                        placeholder="Tel Number"
                        classNames="ViewInput"
                        value={newTelNumber}
                        onChange={(e) => setNewTelNumber(e.target.value)}
                      
                        
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="phoneNumber">
                      <span className='modallabel'>Join Date :</span>
                      <Input
                        className='Input'
                        placeholder="Join Date"
                        value={joinDate}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="companyType">
                      <span className='modallabel'>Company Name :</span>
                      <Input
                        className='Input'
                        placeholder="Company Name"
                        value={companyType}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="finishDate">
                      <span className='modallabel'>End Contract :</span>
                      <Input
                        className='Input'
                        placeholder="End Contract"
                        classNames="ViewInput"
                        value={newFinishDate}
                        onChange={(e) => setNewFinishDate(e.target.value)}
                        
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="actStatus">
                      <span className='modallabel'>Actual Status :</span>
                      <Input
                        className='Input'
                        placeholder="Actual Status"
                        classNames="ViewInput"
                        value={newactStatus}
                        onChange={(e) =>setNewactStatus(e.target.value)}
                       
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="position">
                      <span className='modallabel'>Position :</span>
                      <Input
                        className='Input'
                        placeholder="Position"
                        value={newposition}
                        onChange={(e) =>setNewposition(e.target.value)}
                        classNames="ViewInput"
                     
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="getsEmail">
                      <span className='modallabel'>E-mail Adress :</span>
                      <Input
                        className='Input'
                        placeholder="E-mail Adress"
                        value={getsEmail}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>


              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="passportnumber">
                      <span className='modallabel'>Passport Number :</span>
                      <Input
                        className='Input'
                        placeholder="Passport Number"
                        value={passportnumber}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name=" passportCopy">
                      <span className='modallabel'>Passport Copy :</span>
                      <Input
                        className='Input'
                        placeholder="https://cloud.gets-company.com.tn/"
                        value={passportCopy}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="cnss">
                      <span className='modallabel'>CNSS Number :</span>
                      <Input
                        className='Input'
                        placeholder="CNSS Number"
                        value={cnss}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="contractNumb">
                      <span className='modallabel'>Contract Number :</span>
                      <Input
                        className='Input'
                        placeholder="Contract Number"
                        value={contractNumb}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="cvCopy">
                      <span className='modallabel'>CV :</span>
                      <Input
                        className='Input'
                        placeholder="https://cloud.gets-company.com.tn/"
                        value={cvCopy}
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item className='form-field'>
                    <FloatLabel name="CovidFirtsDoseDate">
                      <span className='modallabel'>Covid First Dose Date :</span>
                      <Input
                        className='Input'
                        placeholder="Covid First Dose Date"
                        value="Covid Firts Dose Date"
                        classNames="ViewInput"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col span={8}>
                <Form.Item className='form-field'>
                <FloatLabel name="CovidSecondDoseDate">
                  <span className='modallabel'>Covid Second Dose Date :</span>
                  <Input
                    className='Input'
                    placeholder="Covid Second Dose Date"
                    value="Covid Scond Dose Date"
                    classNames="ViewInput"
                    readOnly={true}
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

