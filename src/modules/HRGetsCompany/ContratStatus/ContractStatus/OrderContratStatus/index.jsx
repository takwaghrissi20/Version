import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable, StyledAction } from '../../../../../styles/index.styled';


import ContratStatusView from "../../../../Model/ContratStatusView"
import ContratStatusEdit from "../../../../Model/ContratStatusEdit"

import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";


const OrderTable = ({ temployee, loading }) => {
  const [findIdData, setFindIdData] = useState("");
  const [isViewContrat, onViewContrat] = useState(false);
  const [isEditContrat, OnisEditContrat] = useState(false);
  const handleAddContratOpen = () => {
    onViewContrat(true);
  };
  const handleEditContratOpen = () => {
    OnisEditContrat(true);
  };
  
  const handleEditContratClose = () => {
    OnisEditContrat(false);
  };

  const handleAddContartClose = () => {
    onViewContrat(false);
  };
  const findId = async (code) => {
    try {   
      const response = await fetch( `https://dev-gateway.gets-company.com/api/v1/empT/getById?id=${code}`, {
        method: 'GET',
        
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      if (response.ok) {
        const responseData = await response.json();
        setFindIdData(responseData);
        console.log("testtttt",temployee)
        
      
       
       
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
    }
  };


  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Contract Category',
      dataIndex: 'contractCategory',
      key: 'contractCategory',
    },
    {
   
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Dep',
      dataIndex: 'departement',
      key: 'departement',
    },
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
    },

    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
    },
    {
      title: 'Finish Date',
      dataIndex: 'finishDate',
      key: 'finishDate',
    },

    {
      title: 'Action',
      dataIndex: 'id',
      fixed:"left",
      key: 'id',
      render: (text, record) => (
        <>
        <StyledAction  onClick={() => findId(record?.id)}>
        <GrFormView className='iconeView'
          onClick={handleAddContratOpen}
        
        
        ></GrFormView>
          {/* <Button
            onClick={handleAddContratOpen}
            type='primary'
            shape='circle'
            className='icon-btn icon-btn-eye'
            icon={<AiOutlineEye />}
          /> */}
          <ContratStatusView
            isViewContrat={isViewContrat}
            handleAddContactClose={handleAddContartClose}
            findIdData={findIdData}
            id={findIdData?.id}
            name={findIdData?.name}
            position={findIdData?.position}
            destination={findIdData?.destination}
            traveldate={findIdData?.traveldate}
            companyType={findIdData?.companyType}
            contractCategory={findIdData?.contractCategory}
            familyStatus={findIdData?.familyStatus}
            contratctCopy={findIdData?.contratctCopy}
            visaReady={findIdData?.visaReady}
            departement={findIdData?.departement}
          
          />
           <AiFillEdit 
             onClick={handleEditContratOpen}
           
           className='iconeEdit'></AiFillEdit>
           {/* <Button
            type='primary'
            shape='circle'
            className='icon-btn icon-btn-eye'
            onClick={handleEditContratOpen}
            icon={<RiEditFill />}
          /> */}
     
          <ContratStatusEdit 
            isEditContrat={isEditContrat}        
            handleAddContactClose={handleEditContratClose}
            id={findIdData?.id}
            name={findIdData?.name}
            position={findIdData?.position}
            destination={findIdData?.destination}
            traveldate={findIdData?.traveldate}
            companyType={findIdData?.companyType}
            contractCategory={findIdData?.contractCategory}
            familyStatus={findIdData?.familyStatus}
            contratctCopy={findIdData?.contratctCopy}
            visaReady={findIdData?.visaReady}
            departement={findIdData?.departement}
            idVisa={findIdData?.idVisa}
            arName={findIdData?.arName}
            arPosition={findIdData?.arPosition}
            arDestination={findIdData?.arDestination}
            nbchildren={findIdData?.nbchildren}
            actStatus={findIdData?.actStatus}
            phoneNumber={findIdData?.phoneNumber}
            email={findIdData?.email}
            joinDate={findIdData?.joinDate}
            finishDate={findIdData?.finishDate}
            nationality={findIdData?.nationality}
            passport_finish_date={findIdData?.passport_finish_date}
            residance_finish_date={findIdData?.residance_finish_date}
            exitRentry_finish_date={findIdData?.exitRentry_finish_date}
            desertPass_finish_date={findIdData?.desertPass_finish_date}
            exrentry_date={findIdData?.exrentry_date}
            birthDate={findIdData?.birthDate}
            nbExperience={findIdData?.nbExperience}
            cnss={findIdData?.cnss}
            passportnumber={findIdData?.passportnumber}
            phoneEmergency={findIdData?.phoneEmergency}
            contractType={findIdData?.contractType}
            contractNumb={findIdData?.contractNumb}
            getsEmail={findIdData?.getsEmail}
            desert_pass={findIdData.desert_pass}
            visa_Nb={findIdData?.visa_Nb}
            type_Emp={findIdData?.type_Emp}
            toApplyForVisa={findIdData?.toApplyForVisa}
            requestSendVisa={findIdData?.requestSendVisa}
            dateVisa={findIdData?.dateVisa}
            vCableReceive={findIdData?.vCableReceive}
            vCabledate={findIdData?.vCabledate}
            passportSubmit={findIdData?.passportSubmit}
            passportSubmitdate={findIdData?.passportSubmitdate}
            endTravelDate={findIdData?.endTravelDate}
            finalVisaReceive={findIdData?.finalVisaReceive}
            finalVisaReceiveDate={findIdData?.finalVisaReceiveDate}
            finishDateVisa={findIdData?.finishDateVisa}
            idJoys={findIdData?.idJoys}
            exitRentryType={findIdData?.exitRentryType}
            cin={findIdData?.cin}
            gender={findIdData?.gender}
            residenceAdress={findIdData?.residenceAdress}
            arResidenceAdress={findIdData?.arResidenceAdress}
            salary={findIdData?.salary}
            duration={findIdData?.duration}
            emergencyName={findIdData?.emergencyName}
            emergencyRelation={findIdData?.emergencyRelation}
   

           
          /> 
           {temployee.contratctCopy
 !== null ? (
            <CiSaveDown2 id="downloadButton" className='iconeDownload' disabled />
          ) : (
            <CiSaveDown2 id="downloadButton" className='iconeDownload' />
          )}
         
           </StyledAction>
          
        
       
        </>

      ),
    },

  ];

  return (
    <StyledOrderTable
      hoverColor
      data={temployee}
      loading={loading}
      columns={columns}
      scroll={{ x: 'auto', y: 200 }}
     
 
    />
  );
};

OrderTable.defaultProps = {
  temployee: [],
};

OrderTable.propTypes = {
  temployee: PropTypes.array,
  loading: PropTypes.bool,
};

export default OrderTable;
