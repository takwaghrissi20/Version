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
const FedbackForm = (props) => {
  const {
    setUserImage,

    isFeedbackEmployee,
    handleFeedbackContactClose,
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
  const token = localStorage.getItem("token")
  const { messages } = useIntl();
  const [newDateJointCandidate, setnewDateJointCandidate] = useState(findIdData?.agreedJoinedDate);
  const [selectedFedback, setSelectedFedback] = useState("Default");
  const Fedback = [
    { Fedback: 'Accepted Offer' },
    { Fedback: 'Not Accepted Offer' },];
  const handleFedback = (value) => {
    setSelectedFedback(value);
  };
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
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/updateintv?id=${findIdData?.interviewCode}&token=${token}`, {

        method: 'PUT',
        headers: {
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH,PUT"
        },
        body: JSON.stringify({
          interviewCode: findIdData?.interviewCode,
          jobCode: findIdData?.jobCode,
          interviwDate:findIdData?.interviwDate,
          totalAccept: findIdData?.totalAccept,
          totalInterv: findIdData?.totalInterv,
          totalReqPos:  findIdData?.totalReqPos,
          totalRequiredGrade: findIdData?.totalRequiredGrade,
          idNumb:findIdData?.idNumb,
          department: findIdData?.department,
          projname: findIdData?.projname,
          requiredGrade: findIdData?.requiredGrade,
          requiredQualification:  findIdData?.requiredQualification,
          positionToBeFilled:  findIdData?. positionToBeFilled,
          fullName: findIdData?.fullName,
          birthayDate: findIdData?.birthayDate,
          familySituation: findIdData?. familySituation,
          experience: findIdData?.experience,
          educationLevel: findIdData?.educationLevel,
          diploma: findIdData?.diploma,
          telCondidate:  findIdData?.telCondidate,
          urlCv:findIdData?.urlCv,
          validatesFor:findIdData?. validatesFor,
          goTotest2: findIdData?.goTotest2,
          psy_Person: findIdData?.psy_Person,
          psy_HumQuality: findIdData?.psy_HumQuality,
          psy_motivation: findIdData?. psy_motivation,
          psy_Intellig:findIdData?. psy_Intellig,
          goToTest3: findIdData?.goToTest3,
          techEnglishSkills: findIdData?.techEnglishSkills,
          evalDesision: findIdData?.evalDesision,
          techcommentaire: findIdData?.techcommentaire,
          techDate: findIdData?.techDate,
          meetDesision: findIdData?.meetDesision,
          hr_Person: findIdData?.hr_Person,
          hr_HumQuality: findIdData?.hr_HumQuality,
          hr_motivation: findIdData?.hr_motivation,
          hr_Intellig: findIdData?.hr_Intellig,
          intvlevel: findIdData?.intvlevel,
          headOfDepAprouv: findIdData?.headOfDepAprouv,
          // agreedJoinedDate,
          expectedJoinDate: findIdData?.expectedJoinDate,
          dailyRate: findIdData?.dailyRate,
          hrDesion: findIdData?.hrDesion,
        
          propsedsalary: findIdData?.propsedsalary,
          notif: findIdData?. notif,
          directSign1: findIdData?.directSign1,
          directSign2: findIdData?.directSign2,
          propsedsalaryBod1: findIdData?.propsedsalaryBod1,
          propsedsalaryBod2: findIdData?. propsedsalaryBod2,
          dailyRateBod1: findIdData?.dailyRateBod1,
          dailyRateBod2:findIdData?. dailyRateBod2,
          commentareBod1: findIdData?.commentareBod1,
          commentareBod2:findIdData?. commentareBod2,
          agreedJoinedDate:newDateJointCandidate,
          feedback:selectedFedback


        })
      });

      if (!response.ok) {
        openNotificationError('bottomRight')

        throw new Error('Network response was not ok');
      }
      if (response.ok) {

        const responseData = await response.json();
        openNotification('bottomRight')
        handleFeedbackContactClose()
        window.location.reload();
      
      }

      // Handle responseData if needed
    } catch (error) {
      console.error("Erreur lors de la récupération du Id :", error);
    }
  };

  return (
    <StyledContactForm>

        <Form.Item >
          <input {...getInputProps()} />
          <label htmlFor='icon-button-file'>
            < StyledContactFormHeaderTitle  >
              <p className='TitleModal'>Candidate Feedback After 
                BOD Approva</p>
            </StyledContactFormHeaderTitle>
          </label>
        </Form.Item>
  
            <Col xs={24} md={24}>
            <span className='modallabel'> 
              Candidate Accept offer/Not Accept Offer:</span>
              <Form.Item
                name="CandidateAccept"
                label="">
                <Select
                  style={{marginTop:"0.5rem"}}
                  onChange={handleFedback}
                  placeholder="Candidate Accept offer/Not Accept Offer "
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
      </Col>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <Button onClick={update}>Save</Button>
</div>
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

export default FedbackForm;

