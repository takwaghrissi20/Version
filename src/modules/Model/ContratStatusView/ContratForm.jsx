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
    departement
   
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
  console.log(" id findIddd", id)
  console.log(" departement findIddd", departement)
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

              <Form.Item
                className='form-field'>
                <FloatLabel label="Id :" name="id">
                  <Input
                    className='Input'
                    placeholder={id}                
                    readOnly={true} />
                </FloatLabel>

              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="Name :" name="name">
                  <Input
                    className='Input'
                    placeholder={name}  
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field'>
                <FloatLabel label="departement :" name="departement">
                  <Input
                    className='Input'
                    placeholder={departement}  
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
          
                <Form.Item className='form-field'>
                <FloatLabel label="familyStatus :" name="familyStatus">
                  <Input
                    className='Input'
                    placeholder={familyStatus}
                
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>
            

              <Form.Item
                className='form-field'>
                <FloatLabel label="position :" name="position">
                  <Input                   
                    className='Input'
                    placeholder={position}         
                    readOnly={true}

                  />
                </FloatLabel>
              </Form.Item>
             
             
        
              

            </StyledContactFormContentField>
          </StyledContactFormContentItem>



          <StyledContactFormContentItem>
           

            <StyledContactFormContentField>
              <Form.Item className='form-field'>
                <FloatLabel label="traveldate" name="traveldate">
                  <Input
                    className='Input'
                    placeholder={traveldate}
                 
                    readOnly={true}
                  />
                </FloatLabel>
              </Form.Item>

              <Form.Item className='form-field' >
                <FloatLabel label="destination :" name="destination">
                  <Input
                    className='Input'
                    placeholder={destination}
                    readOnly={true}

                  />
                </FloatLabel>
              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="companyType" name="companyType">
                  <Input
                    className='Input'
                    placeholder={companyType}
                    readOnly={true}


                  />
                </FloatLabel>


              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="contractCategory" name="contractCategory">
                  <Input
                    className='Input'
                
                    placeholder={contractCategory}
                
                    readOnly={true}

                  />
                </FloatLabel>


              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label="visaReady:" name="visaReady">
                  <Input
                    className='Input'
                    placeholder={visaReady}
                   
                    readOnly={true}


                  />
                </FloatLabel>

              </Form.Item>
              <Form.Item className='form-field'>
                <FloatLabel label=" contratctCopy:" name="contratctCopy">
                  <Input
                    className='Input'
                    placeholder={messages['common.contratctCopy']}
                    defaultValue={ contratctCopy}
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
