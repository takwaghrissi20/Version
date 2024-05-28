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

const AddVisa = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    // getsId,
    // nationality,
    // birthDate,
    // familyStatus,
    // phoneNumber,
    // joinDate,
    // companyType,
    // finishDate,
    // actStatus,
    // position,
    // getsEmail,
    // name,
    // passportnumber,
    // cnss,
    // contractNumb,
    // cvCopy,
    // passportCopy,
  

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


  // const handleEdit = async (maritalStatus,newTelNumber,newFinishDate,newactStatus,newposition) => {
  //   try {
  //     const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/update`, {

  //       method: 'PUT',
  //       headers: {
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         "Access-Control-Allow-Origin": "*",
  //         'Content-Type': 'application/json',
  //         "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
  //       },
  //       body: JSON.stringify({
  //         getsId:getsId,
  //         name:name,
  //         position:newposition,
  //         nationality:nationality,
  //         birthDate:birthDate,
  //         familyStatus:maritalStatus,
  //         phoneNumber:newTelNumber,
  //         joinDate,
  //         companyType,
  //         finishDate:newFinishDate,
  //         actStatus:newactStatus,
  //         position:newposition,
  //         getsEmail:getsEmail,
  //         passportnumber:passportnumber,
  //         cnss:cnss,
  //         contractNumb: contractNumb,
  //         cvCopy:cvCopy,
  //         passportCopy:passportCopy,

  //       })
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     if (response.ok) {

  //       const responseData = await response.json();
       
  //       setDataEdit(responseData)
  //       //handleAddContactClose(true)
  //     }

  //     // Handle responseData if needed
  //   } catch (error) {
  //     console.error("Erreur lors de la récupération du Id :", error);
  //   }
  // };


  
  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Visa Information</p>

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>

        <StyledContactFormHeaderTitle>

        </StyledContactFormHeaderTitle>

      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
    



      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default AddVisa;

