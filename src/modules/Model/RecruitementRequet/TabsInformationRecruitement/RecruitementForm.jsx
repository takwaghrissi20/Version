import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { Form, Input, Select, Row } from 'antd';
import IntlMessages from '@crema/helpers/IntlMessages';
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
} from '../index.styled';
import FloatLabel from "../FloatLabel";
import { DatePicker, Space, Alert } from 'antd';


const TabsInformationRecruitement = (props) => {

  const {

    setUserImage,
    isViewInfo,
    handleAddContactClose,
    JobCode,
    DateRecruitement,
    id,
    name,
    position,
    DateRequestor,
    projname,
    projCode,
    DateDesiredRecruitement,
    positionRecruitement,
    level,
    desiredExperience,
    vacancie,
    asper,
    commentplanner,
    isOkHead,
    isOkBod,
    dep, certif,
    affectedTo

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
  const token = localStorage.getItem("token");
  const { messages } = useIntl();

  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const [showAlert, setShowAlert] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const Saverecrutement = async () => {

    try {
      const params = new URLSearchParams({ name: projname, id: id });

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/addrecrutt?${params}&token=${token}`, {

        method: 'POST',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          //recruttrequestDate: DateRecruitement,
          requestName: name,
          approuvedRecrutRequestNumber: null,
          //jobCode: JobCode,
          certif: certif,
          experience: level,
          position: position,
          projectName: projname,
          recruttrequestDate: DateRequestor,
          requestedDicipline: positionRecruitement,
          totalNumber: vacancie,
          type: "Foreman & Below",
          oDep: asper,
          // exDep: "",
          // status:"0",
          nbExperience: desiredExperience,
          projRef: projCode,
          bod: isOkBod,
          idemp: id,
          desiredDate: DateDesiredRecruitement,
          affectedTo: affectedTo

        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
        setShowAlertError(true)
      }
      if (response.ok) {

        const responseData = await response.json();
        setShowAlert(true)
        alert("Request Success and send Email");
        const email = 'rihemhassounanjim90@gmail.com';
        const secondApiResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/bodNotif?email=${encodeURIComponent(email)}`, {
          method: 'POST',
        });

        if (secondApiResponse.ok) {
          const secondResponseData = await secondApiResponse.json();
        } else {
          console.error("Failed to fetch data from the second API.");
        }

        alert('Recruitment request saved successfully.');
        
      }

    }

 catch (error) {
      console.error("Erreur lors de la récupération du recrutement:", error);
    }
  };

  return (


    <>
      <StyledContactFormContent>
        <StyledContactFormContentItem>
          <StyledContactFormContentField>
            <Form.Item className='form-field'>
              <FloatLabel name="Id">
                <span className='modallabel'>Job Code :</span>
                <Input
                  className='Input'
                  placeholder="Job Code"
                  value={JobCode}
                  classNames="ViewInput"
                  readOnly={true}
                />
              </FloatLabel>
            </Form.Item>
            <Form.Item className='form-field'>
              <FloatLabel name="name">
                <span className='modallabel'>Recruitement Date:</span>
                <Input
                  className='Input'
                  placeholder="Recruitement Date"
                  value={DateRecruitement}
                  readOnly
                />
              </FloatLabel>
            </Form.Item>





          </StyledContactFormContentField>
        </StyledContactFormContentItem>
      </StyledContactFormContent>
      <h2 style={{ textAlign: "center", fontWeight: "bold", paddingBottom: "20px" }}>Verify the data before saving</h2>

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
          onClick={Saverecrutement}
          ghost >
          <IntlMessages id='Comfirm & save' />
        
        </StyledContactFormBtn>
     
  


      </StyledContactFormFooter>
      {showAlert && (
        <Alert
          message="Success"
          description="Recruitement Request saved successfully"
          type="success"
          showIcon
          closable
          onClose={() => setShowAlert(false)}
          style={{ marginBottom: 16, marginTop: 20, height: 100,fontWeight:"bold" }}
        />
      )}
          {showAlertError && (
        <Alert
          message="Failed"
          description="Recruitement Request saved Failed"
          type="error"
          showIcon
          closable
          onClose={() => setShowAlertError(false)}
          style={{ marginBottom: 16, marginTop: 20, height: 100 }}
        />
      )}
    

    </>

  );
};

export default TabsInformationRecruitement;

