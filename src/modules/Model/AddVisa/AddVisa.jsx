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

