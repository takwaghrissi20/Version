import React,{useState} from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select } from 'antd';
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
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { DatePicker, Space } from 'antd';
import dayjs from 'dayjs';
const FedbackForm = (props) => {
  const {
    setUserImage,

    isFeedbackEmployee,
    handleFeedbackContactClose,

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
  const [newDateJointCandidate, setnewDateJointCandidate] = useState("2024-06-06");


  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              <p className='TitleModal'>Candidate Feedback After BOD Approval</p>

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>
      </StyledContactFormHeader>


      <Form.Item className='form-field'>
        <FloatLabel name="Interview Date">
          <span className='modallabel'> Candidate Accept offer/Not Accept Offer:</span>
          <DatePicker
            className='Input'
            // onChange={(value) => setnewDateJointCandidate(dayjs(value))}
            // value={newDateJointCandidate}
            classNames="ViewInput"


          />
        </FloatLabel>
      </Form.Item>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>





        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>

  );
};

export default FedbackForm;

