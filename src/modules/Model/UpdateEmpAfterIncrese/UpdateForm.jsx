import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Form, Input, Col, Button, notification } from 'antd';
import {
  StyledContactForm,
  StyledContactFormHeaderTitle,
  StyledContactModalScrollbar,
  StyledContactFormContent,
  StyledShadowWrapper
} from './index.styled';
import { position } from 'polished';
import AppRowContainer from '../../../@crema/components/AppRowContainer';

const UpdateForm = (props) => {
  const { setUserImage, handleUpdateEmployeesClose, findIdData, saveIncrease } = props;


  const { getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      '.pdf': [],
    },
    onDrop: (acceptedFiles) => {
      setUserImage(URL.createObjectURL(acceptedFiles[0]));
    },
  });
  const [LastRequest, setLastRequest] = useState("");
  const token = localStorage.getItem("token");
  const [newSalary, setnewSalary] = useState(LastRequest?.newSalary);
  const [newlevel, setnewLevel] = useState(LastRequest?.newLevel);
  const [newPosition, setnewPosition] = useState(LastRequest?.newPosition);

  useEffect(() => {
    const latestPositionChange = saveIncrease?.positionChanges[saveIncrease?.positionChanges?.length - 1];
    setLastRequest(latestPositionChange)

  }, [LastRequest]);
  const openNotification = () => {
    notification.open({
      message: 'Success',
      description: 'Successfully updated employee',
      style: {
        backgroundColor: '#28a745',
        border: '1px solid #28a745',
        color: '#FFFFFF',
      },
      placement: 'topRight',
    });
  };

  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error updating employee',
      style: {
        backgroundColor: 'red',
        border: '1px solid #dc3545',
        color: '#FFFFFF',
      },
      placement: 'topRight',
    });
  };

  const Update = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/emp/update?token=${token}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          getsId: findIdData?.getsId,
          passport_finish_date: findIdData?.passport_finish_date,
          finishDateVisa: findIdData?.finishDateVisa,
          password: findIdData?.password,
          idVisa: findIdData?.idVisa,
          name: findIdData.name,
          arName: findIdData?.arName,
          position: LastRequest?.newPosition,
          arPosition: findIdData?.arPosition,
          destination: findIdData?.destination,
          arDestination: findIdData?.arDestination,
          departement: findIdData?.departement,
          nbchildren: findIdData?.nbchildren,
          dailyRate: findIdData?.dailyRate,
          actStatus: findIdData?.actStatus,
          phoneNumber: findIdData?.phoneNumber,
          email: findIdData?.email,
          joinDate: findIdData?.joinDate,
          finishDate: findIdData?.finishDate,
          nationality: findIdData?.nationality,
          residance_finish_date: findIdData?.residance_finish_date,
          exitRentry_finish_date: findIdData?.exitRentry_finish_date,
          desertPass_finish_date: findIdData?.desertPass_finish_date,
          exrentry_date: findIdData?.exrentry_date,
          birthDate: findIdData?.birthDate,
          nbExperience: findIdData?.nbExperience,
          familyStatus: findIdData?.familyStatus,
          cnss: findIdData?.cnss,
          passportnumber: findIdData?.passportnumber,
          phoneEmergency: findIdData?.phoneEmergency,
          contractType: LastRequest?.newContractTYpe,
          contractNumb: findIdData?.contractNumb,
          getsEmail: findIdData?.getsEmail,
          companyType: findIdData?.companyType,
          desert_pass: findIdData?.desert_pass,
          visa_Nb: findIdData?.visa_Nb,
          type_Emp: findIdData?.type_Emp,
          toApplyForVisa: findIdData?.toApplyForVisa,
          requestSendVisa: findIdData?.requestSendVisa,
          visaReady: findIdData?.visaReady,
          contratctCopy: findIdData?.contratctCopy,
          dateVisa: findIdData?.dateVisa,
          vCableReceive: findIdData?.vCableReceive,
          vCabledate: findIdData?.vCabledate,
          passportSubmit: findIdData?.passportSubmit,
          passportSubmitdate: findIdData?.passportSubmitdate,
          traveldate: findIdData?.traveldate,
          endTravelDate: findIdData?.endTravelDate,
          finalVisaReceive: findIdData?.finalVisaReceive,
          finalVisaReceiveDate: findIdData?.finalVisaReceiveDate,
          idJoys: findIdData?.idJoys,
          exitRentryType: findIdData?.exitRentryType,
          cin: findIdData?.cin,
          gender: findIdData?.gender,
          residenceAdress: findIdData?.residenceAdress,
          arResidenceAdress: findIdData?.arResidenceAdress,
          salary: LastRequest?.newSalary,
          duration: findIdData?.duration,
          emergencyName: findIdData?.emergencyName,
          emergencyRelation: findIdData?.emergencyRelation,
          contractCategory: findIdData?.contractCategory,
          dateReturnToOffice: findIdData?.dateReturnToOffice,
          cvCopy: findIdData?.cvCopy,
          passportCopy: findIdData?.passportCopy,
          cnssCopy: findIdData?.cnssCopy,
          approvalStatus: findIdData?.approvalStatus,
          projName: findIdData.projName,
          notif: findIdData?.notif,
          cinDate: findIdData?.cinDate,
          primeProductivity: findIdData?.primeProductivity,
          category: findIdData?.category,
          bankName: findIdData?.bankName,
          deductionAmount: findIdData?.deductionAmount,
          gradeSite: findIdData?.gradeSite,
          gradeOffice: findIdData?.gradeOffice,
          netOfice: findIdData?.netOfice,
          netSite: findIdData?.netSite,
          settelment: findIdData?.settelment,
          lastMonth: findIdData?.lastMonth,
          rib: findIdData?.rib,
          altenativeNameBank: findIdData?.altenativeNameBank,
          paymentCategory: findIdData?.paymentCategory,
          paymentType: findIdData?.paymentType,
          checkHolderName: findIdData?.checkHolderName,
          // nbExperience:10

        }),
      });

      if (!response.ok) {
        openNotificationError();
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.text();
        openNotification();
        handleUpdateEmployeesClose();
         window.location.reload();
      }
    } catch (error) {
      console.error('Error during update:', error);
    }
  };

  // Define the experience level text based on newlevel (or findIdData.nbExperience)
  const experienceLevel = newlevel > 5 ? 'midem' : newlevel < 5 ? 'junior' : 'senior';

  return (
    <StyledContactForm>
      <Form.Item>
        <input {...getInputProps()} />
        <label htmlFor='icon-button-file'>
          <StyledContactFormHeaderTitle>
            <p className='TitleModal'>Update Employee Data After Approved BOD</p>
          </StyledContactFormHeaderTitle>
        </label>
      </Form.Item>
      <Col xs={24} md={24

      }>
     
          <AppRowContainer>

            <Col xs={24} md={12}>
              <Form.Item label='New Salary' name='NewSalary'>
                <Input
                  placeholder={LastRequest?.newSalary}
                  readOnly
                />
              </Form.Item>

            </Col>

            <Col xs={24} md={12}>
            <Form.Item label='New Requested Level' name='NewRequestedLevel'>
          <Input
            type='number'
            placeholder={LastRequest?.newLevel}
            value={newlevel}
            onChange={(e) => setnewLevel(e.target.value)}
          />
        </Form.Item>

            </Col>
            <Col xs={24} md={12}>
            <Form.Item label='New Position' name='NewPosition'>
          <Input
            placeholder={LastRequest?.newPosition}
            readOnly
          />
        </Form.Item>
        </Col>



            <Col xs={24} md={12}>
            <Form.Item label='New Contract Type' name='New ContractType'>
          <Input
            placeholder={LastRequest?.newContractTYpe}
            readOnly
         
          />
        </Form.Item>
            </Col>
           

      

          </AppRowContainer>
        
      </Col>
{/* 
      <Col xs={24} md={24}>
        <Form.Item label='New Salary' name='NewSalary'>
          <Input
            placeholder={LastRequest?.newSalary}
            readOnly
          />
        </Form.Item>
      </Col>

      <Col xs={24} md={24}>
        <Form.Item label='New Requested Level' name='NewRequestedLevel'>
          <Input
            type='number'
            placeholder={LastRequest?.newLevel}
            value={newlevel}
            onChange={(e) => setnewLevel(e.target.value)}
          />
        </Form.Item>
      </Col> */}

      {/* <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <h3>{`Experience Level: ${experienceLevel}`}</h3>
      </div> */}
      {/* <Col xs={24} md={24}>
        <Form.Item label='New Position' name='NewPosition'>
          <Input
            placeholder={LastRequest?.newPosition}
            readOnly
          />
        </Form.Item>
      </Col>
      <Col xs={24} md={24}>
        <Form.Item label='New Contract Type' name='New ContractType'>
          <Input
            placeholder={LastRequest?.newContractTYpe}
            readOnly
         
          />
        </Form.Item>
      </Col> */}


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={Update}>Save</Button>
      </div>

      <StyledContactModalScrollbar>
        <StyledContactFormContent />
      </StyledContactModalScrollbar>
    </StyledContactForm>
  );
};

export default UpdateForm;
