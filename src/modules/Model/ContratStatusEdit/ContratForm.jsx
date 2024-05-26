import React, { useState,useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select } from 'antd';

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
import { DatePicker, Space } from 'antd';






const ContratEditForm = (props) => {
  const {
    setUserImage,
    handleAddContactClose,
    id,
    name,
    position,
    destination,
    traveldate,
    companyType,
    contractCategory,
    familyStatus,
    contratctCopy,
    visaReady,
    departement,
    idVisa,
    arName,
    arPosition,
    arDestination,
    nbchildren,
    actStatus,
    phoneNumber,
    email,
    joinDate,
    finishDate,
    nationality,
    passport_finish_date,
    residance_finish_date,
    exitRentry_finish_date,
    desertPass_finish_date,
    exrentry_date,
    birthDate,
    nbExperience,
    cnss,
    passportnumber,
    phoneEmergency,
    contractType,
    contractNumb,
    getsEmail,
    desert_pass,
    visa_Nb,
    type_Emp,
    toApplyForVisa,
    requestSendVisa,
    dateVisa,
    vCableReceive,
    vCabledate,
    passportSubmit,
    passportSubmitdate,
    endTravelDate,
    finalVisaReceive,
    finalVisaReceiveDate,
    finishDateVisa,
    idJoys, exitRentryType,
    cin, gender, residenceAdress,
    arResidenceAdress, salary, duration,
    emergencyName, emergencyRelation

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

  const { Option } = Select;

  const { RangePicker } = DatePicker;


  const [newName, setNewName] = useState(name);
  const [newfamilyStatus, setNewfamilyStatus] = useState(familyStatus);
  const [newposition, setNewposition] = useState(position);
  const [newtravelDate, setNewtravelDate] = useState(traveldate);
  const [newEndtravelDate, setNewEndtravelDate] = useState(endTravelDate);
  const [newdistination, setNewdistination] = useState(destination);
  const [newTypeCompany, setNewTypeCompany] = useState(companyType);
  const [newVisaReady, setNewvisaReady] = useState(visaReady);
  const [newcontratCopy, setNewcontratCopy] = useState("");
  const [idVisaEdit, setIdVisaEdit] = useState(props.name);
  const [dataEdit, setDataEdit] = useState(props.name)


  //Api Update
  const Update = async (newName, newfamilyStatus, newcontratCopy, newposition,
    newEndtravelDate,newtravelDate,newdistination,newTypeCompany,newVisaReady) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/update`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          id,
          name: newName,
          position: newposition,
          destination:newdistination,
          traveldate:newtravelDate,
          companyType:newTypeCompany,
          contractCategory,
          familyStatus:  newfamilyStatus,
          contratctCopy: newcontratCopy,
          visaReady:newVisaReady,
          departement,
          idVisa,
          arName,
          arPosition,
          arDestination,
          nbchildren,
          actStatus,
          phoneNumber,
          email,
          joinDate,
          finishDate,
          nationality,
          passport_finish_date,
          residance_finish_date,
          exitRentry_finish_date,
          desertPass_finish_date,
          exrentry_date,
          birthDate,
          nbExperience,
          cnss,
          passportnumber,
          phoneEmergency,
          contractType,
          contractNumb,
          getsEmail,
          desert_pass,
          visa_Nb,
          type_Emp,
          toApplyForVisa,
          requestSendVisa,
          dateVisa,
          vCableReceive,
          vCabledate,
          passportSubmit,
          passportSubmitdate,
          endTravelDate:newEndtravelDate,
          finalVisaReceive,
          finalVisaReceiveDate,
          finishDateVisa,
          idJoys, exitRentryType,
          cin, gender, residenceAdress,
          arResidenceAdress, salary, duration,
          emergencyName, emergencyRelation

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
  //Save Employeee Gets 
  const AddEmployeesGets = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/create`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
      
        body: JSON.stringify({
         
          name:newName,
          position:newposition,
          familyStatus:newfamilyStatus,
   
           destination:newdistination,
           traveldate:newtravelDate,
          companyType:newTypeCompany,
          // contractCategory,
          // familyStatus,
          // contractType,
          visaReady:newVisaReady,
          // departement,
          // idVisa,
          // arName,
          // arPosition,
          // arDestination,
          // nbchildren,
          // actStatus,
          // phoneNumber,
          // email,
          // joinDate,
          // finishDate,
          // nationality,
          // passport_finish_date,
          // residance_finish_date,
          // exitRentry_finish_date,
          // desertPass_finish_date,
          // exrentry_date,
          // birthDate,
          // nbExperience,
          // cnss,
          // passportnumber,
          // phoneEmergency,
          // contractType,
          // contractNumb,
          // getsEmail,
          // desert_pass,
          // visa_Nb,
          // type_Emp,
          // toApplyForVisa,
          // requestSendVisa,
          // dateVisa,
          // vCableReceive,
          // vCabledate,
          // passportSubmit,
          // passportSubmitdate,
          // endTravelDate,
          // finalVisaReceive,
          // finalVisaReceiveDate,
          // finishDateVisa,
          // idJoys, exitRentryType,
          // cin, gender, residenceAdress,
          // arResidenceAdress, salary, duration,
          // emergencyName, emergencyRelation

        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        handleAddContactClose(true)
       
       
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur Add EmployeeS Gets:", error);
    }
  };

  useEffect(() => { 
    Update(newName, newfamilyStatus, newcontratCopy, newposition,newdistination,newtravelDate,newTypeCompany,newVisaReady)
  }, [newName, newfamilyStatus, newposition,newdistination,newtravelDate,newTypeCompany,newVisaReady]);

      
        
        
  //End Save Enployees Gets 


  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              <IntlMessages id='Contrat List' />

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
              <IntlMessages id='Contrat.Edit.Information Employee' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
            <Form.Item className='form-field'>
                <FloatLabel name="Id">
                  <span className='modallabel'>Id:</span>
                  <Input
                    className='Input'
                    placeholder="Id"
                    value={id}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
                <Form.Item className='form-field'>
                <FloatLabel name="name">
                  <span className='modallabel'>Name:</span>
                  <Input
                    className='Input'
                    placeholder="name"
                    value={newName}
                    classNames="ViewInput"
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </FloatLabel>
                </Form.Item>
            
                <Form.Item className='form-field'>
                <FloatLabel name="Departement">
                  <span className='modallabel'>Departement :</span>
                  <Input
                    className='Input'
                    placeholder="name"
                    value={departement}
                    classNames="ViewInput"
                    readOnly={true}
                   
                  />
                </FloatLabel>
                </Form.Item>

    
              <Form.Item className='form-field'>
                <FloatLabel name="familyStatus">
                  <span className='modallabel'>Family Status :</span>
                  <Input
                    className='Input'
                    placeholder="Family Status"
                    value={newfamilyStatus}
                    classNames="ViewInput"
                    onChange={(e) => setNewfamilyStatus(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>

             

              <Form.Item className='form-field'>
                <FloatLabel name="position">
                  <span className='modallabel'>Position :</span>
                  <Input
                    className='Input'
                    placeholder="Position"
                    value={newposition}
                    classNames="ViewInput"
                    onChange={(e) => setNewposition(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>

            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>


            <StyledContactFormContentField>
         
 

              <Form.Item className='form-field'>
                <FloatLabel name="traveldate">
                  <span className='modallabel'>Travel Date:</span>
                  <Input
                    className='Input'
                    placeholder="Travel Date"
                    value={newtravelDate}
                    classNames="ViewInput"
                    onChange={(e) => setNewtravelDate(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>
      
              <Form.Item className='form-field'>
                <FloatLabel name="destination">
                  <span className='modallabel'>Destination :</span>
                  <Input
                    className='Input'
                    placeholder="destination"
                    value={newdistination}
                    classNames="ViewInput"
                    onChange={(e) => setNewdistination(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>
        
              <Form.Item className='form-field'>
                <FloatLabel name="destination">
                  <span className='modallabel'>Company Type:</span>
                  <Input
                    className='Input'
                    placeholder="Company Type"
                    value={newTypeCompany}
                    classNames="ViewInput"
                    onChange={(e) => setNewTypeCompany(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>
           
              <Form.Item className='form-field'>
                <FloatLabel name="contractCategory">
                  <span className='modallabel'>Contract Category:</span>
                  <Input
                    className='Input'
                    placeholder="Contract Category"
                    value={contractCategory}
                    classNames="ViewInput"
                    readOnly
                   
                  />
                </FloatLabel>
                </Form.Item>
         
              <Form.Item className='form-field'>
                <FloatLabel name="visaReady">
                  <span className='modallabel'>Visa Ready:</span>
                  <Input
                    className='Input'
                    placeholder="Visa Ready"
                    value={newVisaReady}
                    classNames="ViewInput"
                    onChange={(e) => setNewvisaReady(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>
                <Form.Item className='form-field'>
                <FloatLabel name="contratctCopy">
                  <span className='modallabel'>Contratct Copy:</span>
                  <Input
                    className='Input'
                    placeholder="https://NextCloud"
                    value={newcontratCopy}
                    classNames="ViewInput"
                    onChange={(e) => setNewcontratCopy(e.target.value)}
                   
                  />
                </FloatLabel>
                </Form.Item>
          

            </StyledContactFormContentField>
          </StyledContactFormContentItem>


        </StyledContactFormContent>
        <h2 style={{textAlign:"center",fontWeight:"bold",paddingBottom:"20px"}}>Saving this contract will Lok information and generate employee ID.Confirm?</h2>

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
            onClick={() => Update(newName, newfamilyStatus, newcontratCopy, newposition,newtravelDate,newEndtravelDate,
              
              newVisaReady,
              newTypeCompany)} // Pass newName as an argument
          >
            <IntlMessages id='common.Edit' />
          </StyledContactFormBtn>
          <StyledContactFormBtn
            type='primary'
            ghost
            disabled={newcontratCopy == ''}
            onClick={AddEmployeesGets}
        
         
          >
            <IntlMessages id='Comfirm & save' />
          </StyledContactFormBtn>


        </StyledContactFormFooter>

      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default ContratEditForm;

ContratEditForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddContactClose: PropTypes.func,
  reCallAPI: PropTypes.func,


};
