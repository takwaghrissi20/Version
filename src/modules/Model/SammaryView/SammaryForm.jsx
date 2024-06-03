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
import { DatePicker,Space } from 'antd';

import locale from 'antd/es/date-picker/locale/fr_FR'; 




const SammaryForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    JobCode,
    idemp,
    dep,
    requestName,
    position,
    DesiredDate,
    projectName,
    projRef,
    type,
    affectedTo,
    requestedDicipline,
    Level,
    exDep,
    Numbervacancies,
    certif,
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
              <p>Recruitement.Request</p>

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
            <p>Recruitement.Requestor View Required Profile</p>
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>

              <Form.Item
                className='form-field'>
                <FloatLabel label="Id :" name="Id">
                  <Input
                    className='Input'
                    placeholder={idemp}
                    //defaultValue={idemp}
                    readOnly={true} />
                </FloatLabel>

              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel label="departement :" name="Departement">
                  <Input
                    className='Input'
                    placeholder={dep}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="Request Name :" name="Request Name">
                  <Input
                    className='Input'
                    placeholder={requestName}
                    // defaultValue={requestName}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
               
            

              <Form.Item
                className='form-field'>
                <FloatLabel label="position :" name="position">
                  <Input
                    placeholder={position}
                    className='Input'
                    //defaultValue={position}
                    readOnly={true}

                  />
                </FloatLabel>
              </Form.Item>
             
             
        
              <Form.Item
                className='form-field'>
                <FloatLabel label="Desired Date :" name="Desired Date">
                <DatePicker 
                 placeholder={messages['common.DesiredDate']}
                className='Input'
                defaultValue={moment(DesiredDate, 'YYYY-MM-DD')} inputReadOnly/>
                 
                </FloatLabel>
              </Form.Item>
              {/**/}
         
             
              {/***/}


              <Form.Item className='form-field'>
                <FloatLabel label="Project Name :" name="Project Name">
                  <Input
                    className='Input'
                    placeholder={messages['common.projName']}
                    defaultValue={projectName}
                    readOnly={true}

                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="Project Reference :" name="Project Reference">
                  <Input
                    className='Input'
                    placeholder={messages['common.ref']}
                    defaultValue={projRef}
                    readOnly={true} />
                </FloatLabel>
              </Form.Item>

            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>
            <StyledContactFormItemTitle>
              {/* <IntlMessages id={type} /> */}
              <p>{type}</p>
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              <Form.Item className='form-field'>
                <FloatLabel label="Recruitment For:" name="Recruitment For">
                  <Input
                    className='Input'
                    placeholder={messages['common.affectedTo']}
                    defaultValue={affectedTo}
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field' >
                <FloatLabel label="Requested Dicipline :" name="requestedDicipline">
                  <Input
                    className='Input'
                    placeholder={messages['common.requestedDicipline']}
                    defaultValue={requestedDicipline}
                    readOnly={true}

                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="Level:" name="Level">
                  <Input
                    className='Input'
                    placeholder={messages['common.Level']}
                    defaultValue={Level}
                    readOnly={true}


                  />
                </FloatLabel>


              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="Desired years experiences:" name="Desiredyearsexperiences">
                  <Input
                    className='Input'
                    placeholder={messages['common.Desiredyearsexperiences']}
                    defaultValue={exDep}
                    readOnly={true}

                  />
                </FloatLabel>


              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="# vacancies:" name="Numbervacancies">
                  <Input
                    className='Input'
                    placeholder={messages['common.Numbervacancies']}
                    defaultValue={Numbervacancies}
                    readOnly={true}


                  />
                </FloatLabel>

              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="certification:" name="certif">
                  <Input
                    className='Input'
                    placeholder={messages['common.certif']}
                    defaultValue={certif}
                    readOnly={true}
                  />
                </FloatLabel>

              </Form.Item>

            </StyledContactFormContentField>
          </StyledContactFormContentItem>


        </StyledContactFormContent>

        <StyledContactFormFooter>
          <StyledContactFormBtn
            type='primary'
            ghost
            onClick={handleAddContactClose}
          >
            {/* <IntlMessages id='common.cancel' /> */}
            <p style={{ textAlign: "center", paddingTop: "8px" }}>Cancel </p>
          </StyledContactFormBtn>

        </StyledContactFormFooter>
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default SammaryForm;

