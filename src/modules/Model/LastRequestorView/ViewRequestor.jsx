import React from 'react';
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

import locale from 'antd/es/date-picker/locale/fr_FR';




const RecruitementForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    jobCode,
    requestName,
    idemp,
    position,
    projectName,
    projRef,
    desiredDate,
    nbExperience

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

  const dateFormat = 'YYYY/MM/DD';
  const monthFormat = 'YYYY/MM';
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p style={{color:"rgb(22, 119, 255)",texttransform: "uppercase"}}>Last  Recruitement Request</p>

            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>


      </StyledContactFormHeader>

      <StyledContactModalScrollbar>
        <StyledContactFormContent>
          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              <StyledContactFormContentField>

                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="Job Code Numero">
                  <span className='modallabel'> Job Code :</span>
                    <Input
                      className='Input'
                      placeholder='Job Code Numero'
                      value={jobCode}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="Gets Id">
                  <span className='modallabel'> Gets Id :</span>
                    <Input
                      className='Input'
                      placeholder='Gets Id'
                      value={idemp}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name=" Request Name ">
                  <span className='modallabel'> Requestor Name :</span>
                    <Input
                      className='Input'
                      placeholder='Request Name '
                      value={requestName}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="Position ">
                  <span className='modallabel'> Position :</span>
                    <Input
                      className='Input'
                      placeholder='Position '
                      value={position}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="project Name ">
                  <span className='modallabel'> Project Name :</span>
                    <Input
                      className='Input'
                      placeholder='Project Name '
                      value={ projectName}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="Project Reference ">
                  <span className='modallabel'> Project Reference :</span>
                    <Input
                      className='Input'
                      placeholder='Project Reference '
                      value={ projRef}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="Join Date">
                  <span className='modallabel'> Desired Join Date :</span>
                    <Input
                      className='Input'
                      placeholder='Desired Join Date '
                      value={desiredDate}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
                <Form.Item
                  className='form-field'>
                  <FloatLabel  name="nbExperience">
                  <span className='modallabel'>Desired Experiences :</span>
                    <Input
                      className='Input'
                      placeholder='Desired Experiences '
                      value={ nbExperience}
                      readOnly={true} />
                  </FloatLabel>

                </Form.Item>
   
  
   
              </StyledContactFormContentField>

              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>


          </StyledContactFormContentItem>






        </StyledContactFormContent>

      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default RecruitementForm;

