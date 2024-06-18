import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { Form, Input, Select,Row } from 'antd';
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
import { DatePicker,Space } from 'antd';


const TabsInformationRecruitement  = (props) => {

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
    dep
   
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
  
  
  <>
      <StyledContactFormContent>
        <StyledContactFormContentItem>
          <StyledContactFormContentField>
          <Form.Item className='form-field'>
              <FloatLabel name="Project Name">
                <span className='modallabel'>Project Name :</span>
                <Input
                  className='Input'
                  placeholder="Project Name"
                  value={id}
                  classNames="ViewInput"
                  readOnly={true}
                />
              </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
              <FloatLabel name="Project Code">
                <span className='modallabel'>Project Code</span>
                <Input
                  className='Input'
                  placeholder="Project Code"
                  value={name}
                  readOnly
                />
              </FloatLabel>
              </Form.Item>
           
             

        

          </StyledContactFormContentField>
        </StyledContactFormContentItem>
      </StyledContactFormContent>
    

      {/* <StyledContactFormFooter>

        <StyledContactFormBtn
          type='primary'
          ghost
          onClick={handleAddContactClose}
        >
          <IntlMessages id='common.cancel' />
        </StyledContactFormBtn>
        <StyledContactFormBtn
          type='primary'
          ghost >
          <IntlMessages id='Comfirm & save' />
        </StyledContactFormBtn>


      </StyledContactFormFooter> */}

      </>

  );
};

export default TabsInformationRecruitement ;
