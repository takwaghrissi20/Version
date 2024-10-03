import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import { Form, Input, Select, Col,notification } from 'antd';
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
  StyledShadowWrapper,
} from './index.styled';
import FloatLabel from "./FloatLabel";
import { DatePicker, Space ,Button} from 'antd';
import dayjs from 'dayjs';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { StyledOrderTable } from '../../../styles/index.styled';
const Setement = (props) => {
  const {
    setUserImage,
    handleCloseView,
    salaryData

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

  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Success Save Candidate Feedback After BOD Approval',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #1f8838',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error Save Candidate Feedback After BOD Approval',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF !important',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
        fontsize: '30px',
        lineheight: '150%',
        marginbottom: 0,
        margintop: 0,
        maxwidth: 'calc(100% - 15px)',
        position: 'relative',
      },
      placement: 'topRight',
      color: '#FFFFFF !important',
    });
  };
  const update = async () => {
 
    try {
      console.log('testttttt')
    

    
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };
  const columns = [
  
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Cash Ad &Ded',
      dataIndex: 'advance',
      key: 'advance',
    },
    {
      title: 'Gross Site',
      dataIndex: 'grandTotalSite',
      key: 'grandTotalSite',
    },
    {
      title: 'Net Site PAID',
      dataIndex: 'paidSite',
      key: 'paidSite',
    },
    {
      title: 'Gross Office ',
      dataIndex: 'grandTotalOffice',
      key: 'grandTotalOffice',
    },
    {
      title: 'Net Office PAID',
      dataIndex: 'paidOffice',
      key: 'paidOffice',
    },
    {
      title: 'Rest Office',
      dataIndex: 'restPaidOffcie',
      key: 'restPaidOffcie',
    },
    {
      title: 'Rest Site',
      dataIndex: 'restPaidSite',
      key: 'restPaidSite',
    },

   
  ];

  return (
    <StyledContactForm>

        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              <p className='TitleModal'>View All Details</p>
            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>
        <StyledOrderTable
        hoverColor
        data={salaryData}
        columns={columns}
        scroll={{ x: 'auto', y: 250 }}/>
  
            {/* <Col xs={24} md={24}>
            <span className='modallabel'> Candidate Accept offer/Not Accept Offer :</span>
              <Form.Item
                name="CandidateAccept"
                label="">
                <Select
                  style={{marginTop:"0.5rem"}}
                  onChange={handleFedback}
                  placeholder="Candidate Accept offer/Not Accept Offer"
                  allowClear>
                  {Fedback.map(type => (
                    <Option key={type.Fedback} value={type.Fedback}>
                      {type.Fedback}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
        
      
     
      <Col xs={24} md={24}>
      <Form.Item className='form-field'>
        <FloatLabel name="Interview Date">
          <span className='modallabel'> Agreed Join Date if Approved By BOD:</span>
          <DatePicker
          placeholder={findIdData?.agreedJoinedDate}     
          onChange={(value) => setnewDateJointCandidate(dayjs(value).format('YYYY-MM-DD'))}
            //  onChange={(value) => setnewDateJointCandidate(dayjs(value))}
            // value={newDateJointCandidate}
           style={{height:"2rem",marginTop:"0.5rem"}}

          />
        </FloatLabel>
      </Form.Item>
      </Col> */}
 
{/* 
      <Button onClick={update}> Save </Button> */}

{/* 

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
      </Form.Item> */}

      <StyledContactModalScrollbar>
        <StyledContactFormContent>





        </StyledContactFormContent>



      </StyledContactModalScrollbar>
    </StyledContactForm>

  );
};

export default Setement;

