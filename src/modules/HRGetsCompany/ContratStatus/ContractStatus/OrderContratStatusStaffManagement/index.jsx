import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyledOrderTable, StyledAction } from '../../../../../styles/index.styled';
import ContratStatusView from "../../../../Model/ContratStatusView";
import ContratStatusEdit from "../../../../Model/ContratStatusEdit";
import { Button, Dropdown } from 'antd';
import { GrFormView } from "react-icons/gr";
import { AiFillEdit } from "react-icons/ai";
import { CiSaveDown2 } from "react-icons/ci";
import { MoreOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
const OrderTable = ({ temployee, loading }) => {
  console.log("temployeerrrrrrr",temployee)
  const navigate = useNavigate();
  const [findIdData, setFindIdData] = useState("");
  const [contractCategory, setContractCategory] = useState("");
  const [getsId, setGetsId] = useState("");
  const [isViewContrat, onViewContrat] = useState(false);
  const [isEditContrat, OnisEditContrat] = useState(false);

  const handleAddContratOpen1 = () => {
    onViewContrat(true);
    setFindIdData(record) 
    }

  const handleAddContratOpen = () => {
    // onViewContrat(true);
    // setFindIdData(record)   
    navigate(`/Hr/View/Construction_Team/contractList/idGets=${getsId}`, { 
      state:
       { id:getsId,
        name:findIdData?.name,
        departement:findIdData?.departement,
        familyStatus:findIdData?.familyStatus,
        position:findIdData?.position,
        traveldate:findIdData?.traveldate,
        destination:findIdData?.destination,
        companyType:findIdData?.companyType,
        contractCategory:findIdData?.contractCategory,
        visaReady:findIdData?.visaReady,
        contratctCopy:findIdData?.contratctCopy

        }
    });
 
  };
  const handleEditContratOpen1 = () => {
    // onViewContrat(true);
    // setFindIdData(record)   
    navigate(`/Hr/Upload_Contract/Management_Staff/contractList/idGets=${getsId}`, { 
      state:
       { id:getsId,
        name:findIdData?.name,
        departement:findIdData?.departement,
        familyStatus:findIdData?.familyStatus,
        position:findIdData?.position,
        traveldate:findIdData?.traveldate,
        destination:findIdData?.destination,
        companyType:findIdData?.companyType,
        contractCategory:findIdData?.contractCategory,
        visaReady:findIdData?.visaReady,
        contratctCopy:findIdData?.contratctCopy,
        paymentCategory:findIdData?.paymentCategory,
        bankName:findIdData?.bankName,
        rib:findIdData?.rib,
        altenativeNameBank:findIdData?.altenativeNameBank,
        checkHolderName:findIdData?.checkHolderName?
        PaymentType:findIdData?.PaymentType,


        }
    });
 
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
      console.log("reeooooo",responseData.id )
      setGetsId(responseData.id )
      setFindIdData(responseData);
      setContractCategory(findIdData?.contractCategory)
      console.log("contractCategory 8888 0000",findIdData?.contractCategory)
    } catch (error) {
      console.error("Erreur lors de la récupération du Employee :", error);
    }
  };
  useEffect(() => {
    console.log("contractCategory 8888",contractCategory)
  }, [contractCategory]);
  console.log("ttgggggaarrrr",contractCategory)
  //SelectionnerContract
  const SelectionnnerContrat = () => {

    console.log("contractCategorysssssss", contractCategory)
    if (contractCategory === "CAT-B1") {
      console.log(" contractCategory", contractCategory)
      ContratB1();
    } else if (contractCategory === "CAT-A1") {
      console.log(" contractCategory A1")
      //ContratA1()
      ContratA1()
    } else if (contractCategory === "CAT-A2") {
      console.log(" contractCategory A2")
      ContratA2()

    }
    else if (contractCategory === "CAT-A3") {
      console.log(" contractCategory  CAT- A3 ")
      ContratA3()

    }

    else if (contractCategory === "CAT-E1") {
      console.log(" contractCategory  CAT -E1")
      ContratE1()

    }
    else if (contractCategory=== "CAT-E2") {
      console.log(" contractCategory  CAT -E2")
      ContratE2()

    }
    else if (contractCategory=== "SERVICE1-E3") {
      console.log(" contractCategory  SERVICE 1-E3")
      ContratE3()

    }
    else if (contractCategory === "SERVICE2-E3") {
      console.log(" contractCategory  SERVICE2-E3")
      ContratS2E3()

    }
    else if (contractCategory === "CAT-B2") {
      console.log(" contractCategory")
      ContratB2()
    }
    else if (contractCategory === "CAT-B2") {
      console.log(" contractCategory")
      ContratB2()
    }
    else if (contractCategory === "CAT-B3") {
      console.log("contractCategory")
      ContratB3()
    }
    else if (contractCategory === "CAT-C") {
      console.log(" contractCategory")
      ContratC()
    }
    else if (contractCategory === "CAT-D") {
      console.log(" contractCategory")
      ContratD()
    }
    else if (contractCategory === "Contrat SIVP") {
      console.log("Contrat SIVP")
      ContratSIVP()
    }

  };
  ////////////////////////Les Contract
  const ContratB1 = () => {

    navigate('/HRGetsCompany/ContartTypeB1', {
      state: {
        fullName:findIdData?. arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType: findIdData?.companyType,
        traveldate: findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?. arPosition,
        // lastId: LastIdIncremente,
        salary: findIdData?.salary,
        dailyRate: findIdData?.dailyRate,

      }

    });
  };
  const ContratA1 = () => {

    navigate('/HRGetsCompany/StaffManagement/ContartTypeA1', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress:findIdData?. arResidenceAdress,
        companyType: findIdData?.companyType,
        traveldate: findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        salary: findIdData?.salary,
        joinDate: findIdData?.joinDate,
        finishDate: findIdData?.finishDate,
        dailyRate: findIdData?.dailyRate,
        duration: findIdData?.duration

      }


    });
  };
  const ContratA2 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartA2', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate: findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        dailyRate: findIdData?.dailyRate,
        duration: findIdData?.duration,
        joinDate: findIdData?.joinDate,
        salary: findIdData?.salary,


      }


    });
  };
  const ContratA3 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartA3', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate: findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        dailyRate: findIdData?.dailyRate,
        duration: findIdData?.duration,
        joinDate: findIdData?.joinDate,
        salary: findIdData?.salary,



      }


    });
  };
  const ContratE1 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartE1', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate: findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        dailyRate: findIdData?.dailyRate,
        duration: findIdData?.duration,
        arPosition: findIdData?.arPosition,
        joinDate: findIdData?.joinDate,
        finishDate: findIdData?.finishDate,




      }


    });
  };
  const ContratE2 = () => {
    navigate('/HRGetsCompany/StaffManagement/ContartE2', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate:findIdData?. passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente ,
        dailyRate : findIdData?.dailyRate,
        duration: findIdData?.duration,
        joinDate: findIdData?.joinDate

      }


    });
  };
  const ContratS2E3 = () => {
    navigate('/HRGetsCompany/StaffManagement/SERVICE2-E3', {
      state: {
        fullName: findIdData?.arName,
        passportNumber:findIdData?. passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        dailyRate: findIdData?.dailyRate,
        duration: findIdData?.duration,
        CIN: findIdData?.cin,
        cinDate: findIdData?.cinDate,
        duration: findIdData?.duration,
        salary: findIdData?.salary,
        joinDate: findIdData?.joinDate,
        finishDate: findIdData?.finishDate

      }


    });
  };
  const ContratB2 = () => {
    navigate('/HRGetsCompany/ContartTypeB2', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        salary: findIdData?.salary,
        primeProductivity:findIdData?.primeProductivity

      }


    });
  };
 
  const ContratB3 = () => {
    navigate('/HRGetsCompany/ContartTypeB3', {
      state: {
        fullName: findIdData?.arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        salary: findIdData?.salary,
        primeProductivity:findIdData?.primeProductivity

      }


    });
  };
  const ContratC = () => {
    navigate('/HRGetsCompany/ContartTypeC', {
      state: {
        fullName: findIdData?.arName,
        passportNumber:findIdData?. passportnumber,
        passportSubmitdate:findIdData?. passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        salary: findIdData?.salary,
        primeProductivity:findIdData?.primeProductivity,
        dailyRate:findIdData?.dailyRate

      }


    });
  };
  const ContratD = () => {
    navigate('/HRGetsCompany/ContartTypeD', {
      state: {
        fullName:findIdData?. arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate: findIdData?.passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition: findIdData?.arPosition,
        // lastId: LastIdIncremente,
        salary:findIdData?. salary,
        primeProductivity:findIdData?.primeProductivity,
        dailyRate:findIdData?.dailyRate

      }


    });
  };
  const ContratSIVP = () => {
    navigate('/HRGetsCompany/StaffManagement/ContratSIVP', {
      state: {
        name:findIdData?.name,
        fullName:findIdData?. arName,
        passportNumber: findIdData?.passportnumber,
        passportSubmitdate:findIdData?. passportSubmitdate,
        arResidenceAdress: findIdData?.arResidenceAdress,
        companyType:findIdData?.companyType,
        traveldate:findIdData?.traveldate,
        endTravelDate:findIdData?.endTravelDate,
        arDestination: findIdData?.arDestination,
        arPosition:findIdData?. arPosition,
        // lastId: LastIdIncremente,
        salary: findIdData?.salary,
        primeProductivity:findIdData?.primeProductivity,
        dailyRate:findIdData?.dailyRate

      }


    });
  };

  ///End Contract


  //EndSelectionnerContract

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
          // { key: 1, label: <span style={{ fontSize: 14 }}>Viewhhh</span>, onClick: handleAddContratOpen1 },
          // { key: 2, label: <span style={{ fontSize: 14 }}>Upload Contract</span>, onClick: handleEditContratOpen },
          { key: 2, label: <span style={{ fontSize: 14 }}>Upload Contract</span>, onClick: handleEditContratOpen1}
        ];

        if (record.contratctCopy) {
          items.push({ key: 3, label: <span style={{ fontSize: 14 }}>Download</span>,onClick: SelectionnnerContrat });
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
