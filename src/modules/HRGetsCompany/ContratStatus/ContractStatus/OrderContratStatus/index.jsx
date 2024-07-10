import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable, StyledAction } from '../../../../../styles/index.styled';
import ContratStatusView from "../../../../Model/ContratStatusView";
import ContratStatusEdit from "../../../../Model/ContratStatusEdit";
import { Button, Dropdown } from 'antd';
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import { MoreOutlined } from '@ant-design/icons';

const OrderTable = ({ temployee, loading }) => {
  console.log("temployeerrrrrrr",temployee)
  const [findIdData, setFindIdData] = useState("");
  const [isViewContrat, onViewContrat] = useState(false);
  const [isEditContrat, OnisEditContrat] = useState(false);

  const handleAddContratOpen = (record) => {
    onViewContrat(true);
    setFindIdData(record)
 
  };

  const handleEditContratOpen = () => {
    OnisEditContrat(true);
    setFindIdData(record)
 
 
  };

  const handleEditContratClose = () => {
    OnisEditContrat(false);
    setFindIdData(null);
  };

  const handleAddContartClose = () => {
    onViewContrat(false);
    setFindIdData(null);
  };

  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/empT/getById?id=${code}`, {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("reeooooo",responseData )
      setFindIdData(responseData);
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
    // {
    //   title: 'Contract Category',
    //   dataIndex: 'contractCategory',
    //   key: 'contractCategory',
    // },
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Position',
      dataIndex: 'position',
      key: 'position',
    },
    {
      title: 'Departement',
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
    // {
    //   title: 'contratctCopy',
    //   dataIndex: 'contratctCopy',
    //   key: 'contratctCopy',
    // },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      className: 'customer-table-actions',
      render: (text, record) => {
        const items = [
          { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleAddContratOpen },
          { key: 2, label: <span style={{ fontSize: 14 }}>Upload Contract</span>, onClick: handleEditContratOpen },
        ];

        if (record.contratctCopy) {
          items.push({ key: 3, label: <span style={{ fontSize: 14 }}>Download</span> });
        }

        return (
          <div onClick={() => findId(record?.id)}>
         
            <Dropdown menu={{ items }} trigger={['click']}>
              <Button type='circle'>
                <MoreOutlined />
              </Button>
            </Dropdown>
            {isEditContrat && (
              <ContratStatusEdit
              isEditContrat={isEditContrat}
              // isEditContrat={isEditContrat}
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
          )} 
              {isViewContrat && (
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
          )} 
         
                    
          
          </div>
        );
      },
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
