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






const RecruitementForm = (props) => {
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

  console.log("exDep", DesiredDate)
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
      
              <p className='TitleModal'>Recruitement.Request</p>
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
            <p className='SousTitle'>Recruitement.Requestor View Required Profile</p>
          
              {/* <IntlMessages id='Recruitement.RequestorandRequired Profile' /> */}
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
              
            <Form.Item className='form-field'>
                <FloatLabel name="Gets Id">
                  <span className='modallabel'> Gets Id :</span>
                  <Input
                    className='Input'
                    placeholder="Gets Id"
                    value={idemp}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Departement">
                  <span className='modallabel'> Departement :</span>
                  <Input
                    className='Input'
                    placeholder="Departement"
                    value={dep}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requestor Name">
                  <span className='modallabel'>Requestor Name :</span>
                  <Input
                    className='Input'
                    placeholder="Requestor Name"
                    value={requestName}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Discipline">
                  <span className='modallabel'>Position :</span>
                  <Input
                    className='Input'
                    placeholder="Position"
                    value={position}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name=" Desired Date">
                  <span className='modallabel'> Desired Date :</span>
                  <Input
                    className='Input'
                    placeholder=" Desired Date"
                    value={DesiredDate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
             
              <Form.Item className='form-field'>
                <FloatLabel name="Project Name">
                  <span className='modallabel'> Project Name :</span>
                  <Input
                    className='Input'
                    placeholder="Project Name"
                    value={projectName}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Project Code/Office	 :">
                  <span className='modallabel'> Project Code/Office :</span>
                  <Input
                    className='Input'
                    placeholder="Project Code/Office:"
                    value={projRef}
                    classNames="ViewInput"
                    readOnly={true}
                  />
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
                <FloatLabel name="Recruitment For">
                  <span className='modallabel'> Recruitment For :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.affectedTo']}
                    value={affectedTo}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Requested Discipline">
                  <span className='modallabel'> Requested Discipline :</span>
                  <Input
                    className='Input'
                    placeholder="Requested Discipline"
                    value={requestedDicipline}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Level">
                  <span className='modallabel'> Level :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.Level']}
                    value={Level}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="Level">
                  <span className='modallabel'> Desired years experiences: :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.Desiredyearsexperiences']}
                    value={nbExperience}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
          
            
              <Form.Item className='form-field'>
                <FloatLabel name="# vacancies ">
                  <span className='modallabel'> # vacancies :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.Numbervacancies']}
                    value={Numbervacancies}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel name="certif">
                  <span className='modallabel'>certification: :</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.certif']}
                    value={certif}
                    classNames="ViewInput"
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
            <p style={{ textAlign: "center", paddingTop: "9px" }}>Cancel </p>
          </StyledContactFormBtn>

        </StyledContactFormFooter>
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default RecruitementForm;

