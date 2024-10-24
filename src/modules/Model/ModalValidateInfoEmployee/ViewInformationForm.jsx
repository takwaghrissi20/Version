import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Col } from 'antd';
import moment from 'moment';
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
  StyledContactValidationFormBtn,
  StyledContactGenerationFormBtn,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { Alert } from 'antd';
import { useNavigate } from "react-router-dom";



const ViewInformationForm = (props) => {
  const [showAlertError, setShowAlertError] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [generateBtnEnabled, setGenerateBtnEnabled] = useState(false);
  const [grayBackground, setGrayBackground] = useState(false);
  const [data, setData] = useState("");
  const [passpordDate, setPasspordDate] = useState("");
  const [companyTypepdf, setCompanyTypepdf] = useState("");
  const [traveldatepdf, setTraveldatepdf] = useState("");
  const [endtraveldatepdf, setEndTraveldatepdf] = useState("");
  const [arDestinationpdf, setArDestinationpdf] = useState("");
  const [arPositionpdf, setArPositionpdf] = useState("");
  const [idT, setIdT] = useState(0);
  const token = localStorage.getItem("token")

  const [lastId, setLastId] = useState(0);




  const navigate = useNavigate();
  const {

    setUserImage,
    handleAddContactClose,
    name,
    arName,
    CIN,
    nationality,
    birthDate,
    gender,
    phoneNumber,
    familyStatus,
    nbchildren,
    residenceAdress,
    arResidenceAdress,
    passportnumber,
    passportSubmitdate,
    passport_finish_date,
    position,
    arPosition,
    departement,
    type_Emp,
    projname,
    email,
    joinDate,
    finishDate,
    companyType,
    traveldate,
    endTravelDate,
    destination,
    arDestination,
    salary,
    dailyRate,
    contractType,
    emergencyName,
    emergencyRelation,
    phoneEmergency,
    contractCategory,
    projName,
    duration,
    primeProductivity,
    category,
    findIdInterview,
    contactEmail,
    contactPhone,
    selectedCountry

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
 
  console.log("salary testtt salary 222", dailyRate)
  const SaveVisa = async () => {

    try {

      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const requestBody = {

        idVisa: LastIdIncremente,
        category: "Construction Staff",
        departement: departement,
        name: name,
        passportnumber: passportnumber,
        passportSubmitdate: passportSubmitdate,
        position: position,
        projName: projName,
        type_Emp: type_Emp,
        toApplyForVisa: "true",
        dailyRate: findIdInterview?.dailyRate,
        salary: findIdInterview?.propsedsalary,
        finishDate:finishDate,
        joinDate:joinDate



      };
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/visa/add?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Gérer la réponse du serveur
      if (!response.ok) {
        alert("Request failed")
        throw new Error('La requête a échoué avec le code ' + response.status);

      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      if (response.ok) {
      const data = await response.json();
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

      // handleAddContactClose()
      // Traiter la réponse de l'API si nécessaire
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }

  };

  const LastIdIncremente = lastId + 1
  const SaveEmployees = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const requestBody = {

        name,
        arName,
        CIN,
        nationality,
        birthDate,
        gender,
        phoneNumber:contactPhone,
        familyStatus,
        nbchildren,
        residenceAdress,
        arResidenceAdress,
        passportnumber,
        passportSubmitdate,
        passport_finish_date,
        position,
        arPosition,
        departement,
        type_Emp,
        projname,
        email:contactEmail,
        joinDate,
        finishDate,
        companyType,
        traveldate,
        endTravelDate,
        destination:selectedCountry,
        arDestination,
        dailyRate: findIdInterview?.dailyRate,
        salary: findIdInterview?.propsedsalary,
        contractType,
        emergencyName,
        emergencyRelation,
        phoneEmergency,
        contractCategory,
        projName,
        duration,
        primeProductivity,
        category
      };

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/create?token=${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      // Gérer la réponse du serveur
      if (!response.ok) {
        setShowAlertError(true)
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      if (response.ok) {
      const data = await response.json();
      setData(data)
      setPasspordDate(data.passportSubmitdate)
      setCompanyTypepdf(data.companyType)
      setTraveldatepdf(data.traveldate)
      setEndTraveldatepdf(data.endTravelDate)
      setArDestinationpdf(data.arDestination)
      setArPositionpdf(data.arPosition)
      setLastId(data.id)
      setShowAlert(true);
  
      setTimeout(() => {
        handleAddContactClose();
        window.location.reload();
        navigate(-1)
      }, 1500);
      console.log("data.type_Emp",data.type_Emp)

     
      if (type_Emp === "Site") {
        console.log("data.type_EmpConstruction", data.type_Emp)
        alert("EmpSite")
    
        SaveVisa()
      }
    }

      // handleAddContactClose()
      // Traiter la réponse de l'API si nécessaire
    } catch (error) {
      console.error('Erreur lors de la récupération des données EmpT:', error);
    }
  };
  useEffect(() => {
    // Enable the "Generate" button when showAlert is true
    if (showAlert) {
      setGenerateBtnEnabled(true);
    }
  }, [showAlert]);
  useEffect(() => {
    // Set grayBackground to true when generateBtnEnabled is false
    setGrayBackground(!generateBtnEnabled);
  }, [generateBtnEnabled, findIdInterview]);






  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              <IntlMessages id='Validate Employee Information' />

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>

        <StyledContactFormHeaderTitle>

        </StyledContactFormHeaderTitle>

      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle >
              <IntlMessages id='Personal Employee Information' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item>
                <FloatLabel name="name">
                  <span className='modallabel'> Full Name :  </span>
                  <input                  
                    placeholder="Full Name"
                    value={name}
                    classNames="ViewInput"
                    readOnly={true} />
                </FloatLabel>

              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="arName">
                  <span className='modallabel'> Arabic Full name :</span>
                  <input
                
                    placeholder="Arabic Full name"
                    value={arName}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
             
              <Form.Item className='form-field'>
                
                <FloatLabel name="CIN">
                <span className='modallabel'> ID Card Number :</span>
                  <input
                 
                    placeholder="ID Card Number"
                    value={CIN}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               

                <FloatLabel name="nationality">
                <span className='modallabel'>Nationality :</span>
                  <input
                    className='Input'
                    value={nationality}
                    placeholder="Nationality"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
             

                <FloatLabel name="birthDate">
                <span className='modallabel'>Date of Birth :</span>
                  <input
                   
                    value={birthDate}
                    placeholder="Date of Birth"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               
                <FloatLabel name="gender">
                <span className='modallabel'>Gender :</span>
                  <input
                   
                    value={gender}
                    placeholder="Gender"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
       
                <FloatLabel name="phoneNumber">
                <span className='modallabel'>Telephone :</span>
                <input
                 
                    value={contactPhone}
                    placeholder="Telephone"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               
                <FloatLabel name="familyStatus">
                <span className='modallabel'>Marital Status :</span>
                   <input
                   
                    value={familyStatus}
                    classNames="ViewInput"
                    placeholder="Marital Status"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               
                <FloatLabel name="nbchildren">
                <span className='modallabel'>#Children :</span>
                  <input                  
                    value={nbchildren?nbchildren:"nbchildren"}
                    classNames="ViewInput"
                    placeholder="#children"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
              

                <FloatLabel name="residenceAdress">
                <span className='modallabel'> Residence Address :</span>
                <input 
                    
                    value={residenceAdress}
                    classNames="ViewInput"
                    placeholder="Residence Address"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               
                <FloatLabel name="arResidenceAdress">
                <span className='modallabel'> Arabic Residence Address :</span>
                   <input 
                
                    value={arResidenceAdress}
                    placeholder="Arabic Residence Address"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               
                <FloatLabel name="passportnumber">
                <span className='modallabel'> Passport Number :</span>
                  <input 
                
                    value={passportnumber}
                    placeholder="Passport Number"
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
             
                <FloatLabel name="passportSubmitdate">
                <span className='modallabel'> Date of issue:</span>
                <input 
                    
                    placeholder="Date of issue"
                    classNames="ViewInput"
                    value={passportSubmitdate}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
            
                <FloatLabel name="passport_finish_date">
                <span className='modallabel'> Date of expiry :</span>
                  <input
                    
                    placeholder="Date of expiry"
                    value={passport_finish_date}
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>





              {/***/}
            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="Job Information" />
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              <Form.Item className='form-field'>
            

                <FloatLabel name="position">
                <span className='modallabel'>Position To be filled :</span>
                 <input
                   
                    value={position}
                    placeholder="Position To be filled"
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                
                <FloatLabel name="arPosition">
                <span className='modallabel'>Arabic Position To be filled :</span>
                <input
               
                    value={arPosition}
                    placeholder="Arabic Position To be filled"
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               
                <FloatLabel name="departement">
                <span className='modallabel'>Departement :</span>
                <input
                  
                    value={departement}
                    placeholder="Departement"
                    readOnly={true}
                    classNames="ViewInput"
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
           
                <FloatLabel name="type_Emp">
                <span className='modallabel'> Employee Type :</span>
                <input
                    className='Input'
                    value={type_Emp}
                    placeholder="Employee Type"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

          
              <Form.Item className='form-field'>
              

                <FloatLabel name="projName">
                <span className='modallabel'> Project Name :</span>
                <input
                    className='Input'
                    placeholder="Project Name"
                    value={projName}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
               

                <FloatLabel name="email">
                <span className='modallabel'> E-mail Address :</span>
                <input
                    className='Input'
                    value={contactEmail}
                    placeholder="E-mail Address"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              {/* <Form.Item className='form-field'>
              <span className='modallabel'> Contract start date :</span>
                <FloatLabel  name="joinDate">
                  <Input
                    className='Input'
                    value={joinDate}
                    placeholder="Contract start date"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item> */}
              {/* <Form.Item className='form-field'>
              <span className='modallabel'> Contract End date :</span>
                <FloatLabel  name="finishDate">
                  <Input
                    className='Input'
                    value={finishDate}
                    placeholder="Contract End date"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item> */}
              <Form.Item className='form-field'>
          
                <FloatLabel name="companyType">
                <span className='modallabel'> Company Type :</span>
                <input
                    
                    value={companyType}
                    placeholder="companyType"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
                  {/*emp type*/}
                  {type_Emp === "Office" && (
                <>
                  <Form.Item className='form-field'>
                  
                    <FloatLabel name="joinDate">
                    <span className='modallabel'> Join Date :</span>
                    <input
                       className='Input'
                       value={joinDate}
                       placeholder="Join Date"
                       readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                  <Form.Item className='form-field'>
                 
                    <FloatLabel name="finishDate">
                    <span className='modallabel'> Finish Date :</span>
                    <input
                       className='Input'
                       value={finishDate}
                       placeholder="Finish Date"
                       readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </>

              )}
              
              {type_Emp === "Site" || type_Emp === "Office & Site" && (
                <>
                  <Form.Item className='form-field'>
                   

                    <FloatLabel name="traveldate">
                    <span className='modallabel'>Travel Date :</span>
                    <input
                        className='Input'
                        value={traveldate}
                        placeholder="Travel Date"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                  <Form.Item className='form-field'>
                

                    <FloatLabel name="endTravelDate">
                    <span className='modallabel'>Travel End Date :</span>
                    <input
                        className='Input'
                        value={endTravelDate}
                        placeholder="Travel End Date"
                        readOnly={true}
                      />
                    </FloatLabel>
                  </Form.Item>
                </>
              )}
{/*END emp type*/}
              <Form.Item className='form-field'>
           

                <FloatLabel name="destination">
                <span className='modallabel'> Location :</span>
                <input
                    className='Input'
                    value={selectedCountry}
                    placeholder="Location"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
           

                <FloatLabel name="arDestination">
                <span className='modallabel'> Arabic Location:</span>
                <input
                    className='Input'
                    value={arDestination}
                    placeholder="Arabic Location"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              {/* <Form.Item className='form-field'>
              <span className='modallabel'>Approved Office Salary :</span>
                <FloatLabel  name="salary">
                  <Input
                    className='Input'
                    value={salary}
                    placeholder="Approved Office Salary"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item> */}
              {/* <Form.Item className='form-field'>
              <span className='modallabel'>dailyRate :</span>
              
                <FloatLabel  name="dailyRate">
                  <Input
                    className='Input'
                    value={dailyRate}
                    placeholder="dailyRate"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item> */}
              {/* <Form.Item className='form-field'>
                <span className='modallabel'> Contrat Type :</span>

                <FloatLabel name="contractType">
                  <Input
                    className='Input'
                    value={contractType}
                    placeholder="Contrat Type"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item> */}
              <Form.Item className='form-field'>
             
                <FloatLabel name="duration">
                <span className='modallabel'> Duration:</span>
                <input
                    className='Input'
                    value={duration}
                    placeholder="Duration"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
            </StyledContactFormContentField>


          </StyledContactFormContentItem>

          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <IntlMessages id="EMERGENCY Contact Information" />
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              <Form.Item className='form-field'>
                <FloatLabel name="emergencyName">
                <span className='modallabel'> Emergency Full Name:</span>

                <input
                    className='Input'
                    value={emergencyName}
                    placeholder="Emergency Full Name"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
         
                <FloatLabel name="emergencyRelation">
                <span className='modallabel'> RelationShip :</span>
                <input
                    className='Input'
                    placeholder="RelationShip"
                    value={emergencyRelation}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              
                <FloatLabel name="phoneEmergency">
                <span className='modallabel'> Emergency Telephone :</span>
                <input
                    className='Input'
                    value={phoneEmergency}
                    placeholder="Emergency Telephone"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>


            </StyledContactFormContentField>
          </StyledContactFormContentItem>
          <StyledContactFormContentItem>
            {/* <StyledContactFormItemTitle>
              <IntlMessages id="Contract Categorie" />
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              <Form.Item className='form-field'>
              <span className='modallabel'> Contract Category :</span>
                <FloatLabel  name="contractCategory">
                  <Input
                    className='Input'
                    value={contractCategory}
                    placeholder="Contract Category"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

            </StyledContactFormContentField> */}


          </StyledContactFormContentItem>

        </StyledContactFormContent>
        <h2 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "25px", color: "#317AC1" }}>
          Please Review The employee Information </h2>


        <StyledContactFormFooter style={{ marginTop: "20px" }}>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            <IntlMessages id='common.cancel' />
          </StyledContactFormBtn>

          <StyledContactValidationFormBtn
            type='Button'
            ghost
            onClick={SaveEmployees}>

            <IntlMessages id='common.Validate' />
          </StyledContactValidationFormBtn>
          {/* <StyledContactFormBtn
            type='primary'
            ghost
            onClick={SaveEmployees}
          >
            <IntlMessages id='common.Validate' />
          </StyledContactFormBtn> */}
          {/* <StyledContactGenerationFormBtn
             type='Button'
            disabled={!generateBtnEnabled}
            onClick={SelectionnnerContrat}
          >
            Generate
          </StyledContactGenerationFormBtn> */}
          {/* <StyledContactFormBtn
            type='primary'
            ghost
            disabled={!generateBtnEnabled} 
            onClick={SelectionnnerContrat}
        
          
          >
            <IntlMessages id='common.Generate' />
          </StyledContactFormBtn> */}
        </StyledContactFormFooter>
        {showAlert && (
          <Alert
            message="Success"
            description="Employee data saved successfully"
            type="success"
            showIcon
            closable
            onClose={() => setShowAlert(false)}
            style={{ marginBottom: 16, marginTop: 20, height: 100 }}
          />
        )}
        {showAlertError && (
          <Alert
            message="Failed"
            description="Employee data saved Failed"
            type="error"
            showIcon
            closable
            onClose={() => setShowAlertError(false)}

          />
        )}
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default ViewInformationForm;

ViewInformationForm.propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddContactClose: PropTypes.func,
  reCallAPI: PropTypes.func,


};
