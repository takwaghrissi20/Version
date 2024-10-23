import React, { useEffect } from 'react';
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

const HystoriqueForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    findIdData


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


  console.log("ffff", findIdData)



  return (
    <StyledContactForm>
      <StyledContactFormHeader>
        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              {/* <IntlMessages id='Recruitement.Request' /> */}
              <p className='TitleModal'>Historical</p>

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
              <p className='SousTitle'> Historical Information</p>
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>
            <StyledContactFormContentField>
              {
                findIdData?.map((p, index) => (
                  <div key={index}>
                    <p style={{fontWeight:"bold",color:"#2DA8E0",textDecoration: "underline" }}>Update {index + 1}: </p>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Form.Item className='form-field'>
                          <FloatLabel name="Date Of Mobilization">
                            <span className='modallabel'>Date Of Mobilization:</span>
                            <Input
                              className='Input'
                              placeholder="Date Of Mobilization"
                              value={p.dateMob}
                              readOnly={true}
                            />
                          </FloatLabel>
                        </Form.Item>
                      </Col>
                      <Col span={8}>
                        <Form.Item className='form-field'>
                          <FloatLabel name="Project Name">
                            <span className='modallabel'>Project Name:</span>
                            <Input
                              className='Input'
                              placeholder="Project Name"
                              value={p.projName}
                              readOnly={true}
                            />
                          </FloatLabel>
                        </Form.Item>
                      </Col>
                    </Row>
                  </div>
                ))
              }


              {/* <Row gutter={16}>
              <Col span={8}>
                <Form.Item className='form-field'>
                  <FloatLabel name="Gets Id">
                    <span className='modallabel'> Gets Id :</span>
                    <Input
                      className='Input'
                      placeholder="Gets Id"
                      value={getsId}
                      readOnly={true}
                    />
                  </FloatLabel>
                </Form.Item>
              </Col>
            
          
            </Row> */}







            </StyledContactFormContentField>
          </StyledContactFormContentItem>

          <StyledContactFormFooter>
            <StyledContactFormBtn
              type='primary'
              ghost
              onClick={handleAddContactClose}
            >
              <IntlMessages id='common.cancel' />
            </StyledContactFormBtn>


          </StyledContactFormFooter>



        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>
  )
}

export default HystoriqueForm;

