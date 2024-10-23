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
import { DatePicker} from 'antd';



const ContratViewForm = (props) => {
  const {

    setUserImage,
    handleAddContactClose,
    id,
    name,
    position,
    destination,
    traveldate,
    companyType,
    contractCategory,
    familyStatus,
    contratctCopy,
    visaReady,
    departement,
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
              <IntlMessages id='Contrat List' />

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
              <IntlMessages id='Contrat.Information' />
            </StyledContactFormItemTitle>

            <StyledContactFormContentField>
            <Form.Item className='form-field'>
                <FloatLabel name="id">
                  <span className='modallabel'> Id:</span>
                  <Input
                    className='Input'
                    placeholder="Id"
                    value={id}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
                <Form.Item className='form-field'>
                <FloatLabel name="name">
                  <span className='modallabel'> Name :</span>
                  <Input
                    className='Input'
                    placeholder="Id"
                    value={name}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
         
                <Form.Item className='form-field'>
                <FloatLabel name="departement">
                  <span className='modallabel'> Departement :</span>
                  <Input
                    className='Input'
                    placeholder="Departement"
                    value={departement}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>

                <Form.Item className='form-field'>
                <FloatLabel name="familyStatus">
                  <span className='modallabel'>Family Status:</span>
                  <Input
                    className='Input'
                    placeholder="Family Status"
                    value={familyStatus}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>

                <Form.Item className='form-field'>
                <FloatLabel name="position">
                  <span className='modallabel'>Position:</span>
                  <Input
                    className='Input'
                    placeholder="Position"
                    value={position}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
            

          
             
             
        
              

            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>
           

            <StyledContactFormContentField>
         
              <Form.Item className='form-field'>
                <FloatLabel name="traveldate">
                  <span className='modallabel'>Travel Date:</span>
                  <Input
                    className='Input'
                    placeholder="Travel Date"
                    value={traveldate}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
          

        
              <Form.Item className='form-field'>
                <FloatLabel name="destination">
                  <span className='modallabel'>Destination:</span>
                  <Input
                    className='Input'
                    placeholder="destination"
                    value={destination}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
           
              <Form.Item className='form-field'>
                <FloatLabel name="companyType">
                  <span className='modallabel'>Company Type:</span>
                  <Input
                    className='Input'
                    placeholder="company Type"
                    value={companyType}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
         
                
              <Form.Item className='form-field'>
                <FloatLabel name="contractCategory">
                  <span className='modallabel'>Contract Category :</span>
                  <Input
                    className='Input'
                    placeholder="Contract Category "
                    value={contractCategory}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
           
              <Form.Item className='form-field'>
                <FloatLabel name="visaReady">
                  <span className='modallabel'>Visa Ready:</span>
                  <Input
                    className='Input'
                    placeholder="Visa Ready "
                    value={visaReady}
                    classNames="ViewInput"
                    readOnly={true}
                  />
                </FloatLabel>
                </Form.Item>
                <Form.Item className='form-field'>
                <FloatLabel name="contratctCopy">
                  <span className='modallabel'>Contratct Copy:</span>
                  <Input
                    className='Input'
                    placeholder={messages['common.contratctCopy']}
                    value={contratctCopy}
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
            <IntlMessages id='common.cancel' />
          </StyledContactFormBtn>

        </StyledContactFormFooter>
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default ContratViewForm ;

ContratViewForm .propTypes = {
  userImage: PropTypes.string.isRequired,
  setUserImage: PropTypes.func,
  handleAddContactClose: PropTypes.func,
  reCallAPI: PropTypes.func,


};
