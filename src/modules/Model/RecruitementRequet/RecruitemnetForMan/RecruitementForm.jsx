import React from 'react';
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
import { DatePicker, Space } from 'antd';


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
    certif,
    affectedTo,
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
              <FloatLabel name="Id">
                <span className='modallabel'>Desired Date of Recruitment :</span>
                <Input
                  className='Input'
                  placeholder="Desired Date of Recruitment "
                  value={DateDesiredRecruitement}
                  classNames="ViewInput"
                  readOnly={true}
                />
              </FloatLabel>
            </Form.Item>
            <Form.Item className='form-field'>
              <FloatLabel name="affectedTo">
                <span className='modallabel'>Recruitment For :</span>
                <Input
                  className='Input'
                  placeholder="Recruitment For "
                  value={affectedTo}
                  classNames="ViewInput"
                  readOnly={true}
                />
              </FloatLabel>
            </Form.Item>
            
            <Form.Item className='form-field'>
              <FloatLabel name="Position">
                <span className='modallabel'>Position:</span>
                <Input
                  className='Input'
                  placeholder="Position"
                  value={positionRecruitement}
                  readOnly
                />
              </FloatLabel>
            </Form.Item>
            <Form.Item className='form-field'>
              <FloatLabel name="Required Level">
                <span className='modallabel'>Required Level :</span>
                <Input
                  className='Input'
                  placeholder="Required Level "
                  value={level}
                  readOnly
                />
              </FloatLabel>
            </Form.Item>
            <Form.Item className='form-field'>
              <FloatLabel name="Desired years of experience">
                <span className='modallabel'>Desired years of experience:</span>
                <Input
                  className='Input'
                  placeholder="Desired years of experience"
                  value={desiredExperience}
                  readOnly
                />
              </FloatLabel>
            </Form.Item>




            <Form.Item className='form-field'>
              <FloatLabel name="Number of vacancies">
                <span className='modallabel'> Number of vacancies :</span>
                <Input
                  className='Input'
                  placeholder="Number of vacancies"
                  value={vacancie}
                  readOnly
                />
              </FloatLabel>
            </Form.Item>
            <Form.Item className='form-field'>
              <FloatLabel name="certif">
                <span className='modallabel'> Academic Certificates /
                  Comments (other
                  required Knowledge /
                  Recruitment objective)
                  :</span>
                <Input
                  className='Input'
                  placeholder="Academic Certificates /
                  Comments (other
                  required Knowledge /
                  Recruitment objective)
                  "
                  value={certif}
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

export default TabsInformationRecruitement;

