import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import { StyledOrderTable, StyledAction } from '../index.styled';
/// change 
import { StyledOrderTable } from '../../../../../styles/index.styled';

import { Button, Alert, Tooltip } from 'antd';
import InterviewView from "../../../../Model/InterviewView"
import FeddbackEmployeesStaff from "../../../../Model/FeddbackEmployeesStaff"
import InterviewEdit from "../../../../Model/InterviewEdit"
import { Dropdown, Select } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import {
  StyledRecentPatientBadge,

} from '../../index.styled'
import ConfirmationModal from '../../../../../@crema/components/AppConfirmationModal';
import IntlMessages from '../../../../../@crema/helpers/IntlMessages';
import { useNavigate } from "react-router-dom";

const TableInterviewStaff = ({ allinterviewStaffManagement, findIdData, id,
  findId, setFindIdData, open, handleInterview, codeJob, interviewCode }) => {
  //const [findIdData, setFindIdData] = useState(null);
  console.log("FindBuIdddd",findIdData?.agreedJoinedDate)
  const [isViewInterviewStaff, onViewInterviewStaff] = useState(false);
  const [isEditInterviewStaff, onEditInterviewStaff] = useState(false);
  const [isDelteInterviewStaff, onDeleteInterviewStaff] = useState(false);
  const [isAddEmployees, onAddEmployees] = useState(false);
  const [isFeddbackEmployee, onFeddbackEmployee] = useState(false);
  const [tableHeight, setTableHeight] = useState('auto');
  const userRoles = localStorage.getItem("role");
  useEffect(() => {
    const updateTableHeight = () => {
      const pageHeight = window.innerHeight;
      const tableHeight = pageHeight * 0.15;
      setTableHeight(tableHeight);
    };
    window.addEventListener('resize', updateTableHeight);
    updateTableHeight();
    return () => {
      window.removeEventListener('resize', updateTableHeight);
    };
  }, []);
  const navigate = useNavigate();
  const handleAddInterviewStaffOpen = () => {
    //onViewInterviewStaff(true);
  
    navigate(`/Hr/Recruitement&Interview/View/${interviewCode}`, {
      state: {
        interviewCode: findIdData?.interviewCode,
        jobCode: findIdData?.jobCode,
        interviwDate: findIdData?.interviwDate,
        totalAccept: findIdData?.totalAccept,
        totalInterv: findId.totalInterv,
        totalReqPos: findIdData?.totalReqPos,
        totalRequiredGrade: findIdData?.totalRequiredGrade,
        idNumb: findIdData?.idNumb,
        department: findIdData?.department,
        projname: findIdData?.projname,
        requiredGrade: findIdData?.requiredGrade,
        requiredQualification: findIdData?.requiredQualification,
        positionToBeFilled: findIdData?.positionToBeFilled,
        fullName: findIdData?.fullName,
        birthayDate: findIdData?.birthayDate,
        familySituation: findIdData?.familySituation,
        experience: findIdData?.experience,
        educationLevel: findIdData?.educationLevel,
        diploma: findIdData?.diploma,
        telCondidate: findIdData?.telCondidate,
        urlCv: findIdData?.urlCv,
        validatesFor: findIdData?.validatesFor,
        goTotest2: findIdData?.goTotest2,
        psy_Person: findIdData?.psy_Person,
        psy_HumQuality: findIdData?.psy_HumQuality,
        psy_motivation: findIdData?.psy_motivation,
        psy_Intellig: findIdData?.psy_Intellig,
        goToTest3: findIdData?.goToTest3,
        techEnglishSkills: findIdData?.techEnglishSkills,
        evalDesision: findIdData?.evalDesision,
        techcommentaire: findIdData?.techcommentaire,
        techDate: findIdData?.techDate,
        hr_Person: findIdData?.hr_Person,
        hr_HumQuality: findIdData?.hr_HumQuality,
        hr_motivation: findIdData?.hr_motivation,
        hr_Intellig: findIdData?.hr_Intellig,
        level: findIdData?.level,
        headOfDepAprouv: findIdData?.headOfDepAprouv,
        agreedJoinedDate: findIdData?.agreedJoinedDate,
        expectedJoinDate: findIdData?.expectedJoinDate,
        dailyRate: findIdData?.dailyRate,
        hrDesion: findIdData?.hrDesion,
        feedback: findIdData?.feedback,
        propsedsalary: findIdData?.propsedsalary,
        finaldesision: findIdData?.finaldesision,
        time: findIdData?.time,
        hrComentaire: findIdData?.hrComentaire


      }

    });


  };
  const handleAddInterviewStaffClose = () => {
    setFindIdData(null);
    onViewInterviewStaff(false);
  };
  const handleAddEditInterviewStaffClose = () => {
    setFindIdData(null);
    onEditInterviewStaff(false);
  };
  const handleFeedbackEmployeesClose = () => {
    setFindIdData(null);
    onFeddbackEmployee(false);
  };
  const handleFeedbackEmployeesOpen = (code) => {
    onFeddbackEmployee(true);
  };

  const handleEditInterviewStaffOpen = () => {
    navigate(`/Hr/Recruitement&Interview/Update/${interviewCode}`, {
      state: {
        interviewCode: findIdData?.interviewCode,
        jobCode: findIdData?.jobCode,
        interviwDate: findIdData?.interviwDate,
        totalAccept: findIdData?.totalAccept,
        totalInterv: findId.totalInterv,
        totalReqPos: findIdData?.totalReqPos,
        totalRequiredGrade: findIdData?.totalRequiredGrade,
        idNumb: findIdData?.idNumb,
        department: findIdData?.department,
        projname: findIdData?.projname,
        requiredGrade: findIdData?.requiredGrade,
        requiredQualification: findIdData?.requiredQualification,
        positionToBeFilled: findIdData?.positionToBeFilled,
        fullName: findIdData?.fullName,
        birthayDate: findIdData?.birthayDate,
        familySituation: findIdData?.familySituation,
        experience: findIdData?.experience,
        educationLevel: findIdData?.educationLevel,
        diploma: findIdData?.diploma,
        telCondidate: findIdData?.telCondidate,
        urlCv: findIdData?.urlCv,
        validatesFor: findIdData?.validatesFor,
        goTotest2: findIdData?.goTotest2,
        psy_Person: findIdData?.psy_Person,
        psy_HumQuality: findIdData?.psy_HumQuality,
        psy_motivation: findIdData?.psy_motivation,
        psy_Intellig: findIdData?.psy_Intellig,
        goToTest3: findIdData?.goToTest3,
        techEnglishSkills: findIdData?.techEnglishSkills,
        evalDesision: findIdData?.evalDesision,
        techcommentaire: findIdData?.techcommentaire,
        techDate: findIdData?.techDate,
        hr_Person: findIdData?.hr_Person,
        hr_HumQuality: findIdData?.hr_HumQuality,
        hr_motivation: findIdData?.hr_motivation,
        hr_Intellig: findIdData?.hr_Intellig,
        level: findIdData?.level,
        headOfDepAprouv: findIdData?.headOfDepAprouv,
        agreedJoinedDate: findIdData?.agreedJoinedDate,
        expectedJoinDate: findIdData?.expectedJoinDate,
        dailyRate: findIdData?.dailyRate,
        hrDesion: findIdData?.hrDesion,
        feedback: findIdData?.feedback,
        propsedsalary: findIdData?.propsedsalary,
        finaldesision: findIdData?.finaldesision,
        time: findIdData?.time,
        hrComentaire: findIdData?.hrComentaire


      }

    });



    //onEditInterviewStaff(true);
  };

  const handleEditInterviewStaffClose = () => {
    onEditInterviewStaff(false);
  };

  const handleDeleteInterviewStaff = () => {

    onDeleteInterviewStaff(true);
  };

  const handleAddEmployees = () => {
    onAddEmployees(true)

    //navigate(`/HRGetsCompany/AddEmployees/AddEmployeesManagementStaff/reference=${id}`);
  }
  const AddEmployeesAfterConfirmation = async () => {

    navigate(`/HRGetsCompany/AddEmployees/AddEmployeesManagementStaff/reference=${interviewCode}`, {
      state: {
        interviewCode: interviewCode,
        fullName: findIdData?.fullName,
        birthayDate: findIdData?.birthayDate,
        familySituation: findIdData?.familySituation,
        positionToBeFilled: findIdData?.positionToBeFilled,
        department: findIdData?.department,
        projname: findIdData?.projname,
        agreedJoinedDate: findIdData?.agreedJoinedDate

      }

    });

  }

  const DeleteInterviewStaff = async () => {

    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";
      const response = await fetch(`${endPoint}/api/v1/int/delete?code=${codeJob}&id=${id}`, {
        method: 'DELETE',
      });

      // Handle server response
      if (!response.ok) {
        console.log("Error: Response not OK", response.status);
        alert("Error Not Interview Delete");
        throw new Error('La requête a échoué avec le code ' + response.status);
      }

      if (response.ok) {

        const data = await response.text();
        alert(data);
        onDeleteInterviewStaff(false);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }

  const items = [
    { key: 1, label: <span style={{ fontSize: 14 }}>View </span>, onClick: handleAddInterviewStaffOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditInterviewStaffOpen },
    { key: 2, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteInterviewStaff },

  ];
  const handleFeedbackChange = (e, record) => {
    const updatedData = data.map(item => {
      if (item.interviewCode === record.interviewCode) {
        return { ...item, feedback: e.key };
      }
      return item;
    });
    setData(updatedData);
  };


  const columns = [
    {
      title: 'Reference',
      dataIndex: 'interviewCode',
      key: 'interviewCode',
      width: 80,

    },
    {
      title: 'Evalutor Name ',
      dataIndex: 'fullName',
      key: 'fullName',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),

    },
    {
      title: 'Interview Date  ',
      dataIndex: 'interviwDate',
      key: 'interviwDate',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: 'Canditate Name',
      dataIndex: 'fullName',
      key: 'fullName',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),
    },
    {
      title: 'Descpline',
      dataIndex: 'positionToBeFilled',
      key: 'positionToBeFilled',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),
    },
    // {
    //   title: 'Project Name',
    //   dataIndex: 'projname',
    //   key: 'projname',
    // },


    // {
    //   title: 'Expected Join Date',
    //   dataIndex: 'expectedJoinDate',
    //   key: 'expectedJoinDate',
    // },
    {
      title: 'Evaluator  Approval',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => (
        <>
          {(record.notif === 2) && (
            <StyledRecentPatientBadge
              style={{
                backgroundColor: "rgb(50, 205, 50)",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Accepted
            </StyledRecentPatientBadge>
          )}
          {(record.notif === 200) && (
            <StyledRecentPatientBadge
              style={{
                backgroundColor: "rgb(50, 205, 50)",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Not Approved
            </StyledRecentPatientBadge>
          )}
        </>



      ),
    },
    {
      title: 'HR  Approval',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => (
        <>
          {(record.notif === 5) && (
            <StyledRecentPatientBadge
              style={{
                backgroundColor: "rgb(50, 205, 50)",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Accepted
            </StyledRecentPatientBadge>
          )}
          {(record.notif === 500) && (
            <StyledRecentPatientBadge
              style={{
                backgroundColor: "rgb(50, 205, 50)",
                color: "white",
                fontFamily: "inherit"
              }}
            >
              Not Approved
            </StyledRecentPatientBadge>
          )}
        </>



      ),
    },
    {
      title: 'BOD Approval',
      dataIndex: 'notif',
      key: 'notif',
      render: (text, record) => (
        <>
          {((record.notif === 55 && record.directSign2 === "Accepted" && record.directSign1 === "Accepted") ||
            (record.notif === 66 && record.directSign1 === "Accepted" && record.directSign === "Accepted")) && (
              <StyledRecentPatientBadge
                style={{
                  backgroundColor: "rgb(50, 205, 50)",
                  color: "white",
                  fontFamily: "inherit"
                }}
              >
                Accepted
              </StyledRecentPatientBadge>
            )}
          {((record.notif === 550 && record.directSign2 === "Not Accepted") ||
            (record.notif === 660 && record.directSign1 === "Not Accepted")) && (
              <StyledRecentPatientBadge
                style={{
                  backgroundColor: "red",
                  color: "white",
                  fontFamily: "inherit"

                }}>
               Not Approved 
              </StyledRecentPatientBadge>
            )}
                 {((record.notif === 550 && record.directSign2 === "On Hold") ||
                  (record.notif === 660 && record.directSign1 === "On Hold")) && (
              <StyledRecentPatientBadge
                style={{
                  backgroundColor: "red",
                  color: "white",
                  fontFamily: "inherit"

                }}>
               Not Approved 
              </StyledRecentPatientBadge>
            )}
        </>

      ),
    },

    {
      title: 'Candidate Feedback',
      dataIndex: 'feedback',
      key: 'feedback',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),

    },
    {

      title: 'Agreed Join Date',
      dataIndex: 'agreedJoinedDate',
      key: 'agreedJoinedDate',
      ellipsis: {
        showTitle: false,
      },
      render: (name) => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      ),

    },


    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      fixed: 'right',
      className: 'customer-table-actions',
      render: (text, record) => {
        const items = [
          { key: 1, label: <span style={{ fontSize: 14 }}>View</span>, onClick: handleAddInterviewStaffOpen },
          { key: 2, label: <span style={{ fontSize: 14 }}>Edit</span>, onClick: handleEditInterviewStaffOpen },
          ...(userRoles.includes('admin') ? [
            { key: 3, label: <span style={{ fontSize: 14 }}>Delete</span>, onClick: handleDeleteInterviewStaff },
          ] : [])

        ];
        if (((record.notif === 55 && record.directSign2 === "Accepted" && record.directSign1 === "Accepted") ||
        (record.notif === 66 && record.directSign1 === "Accepted" && record.directSign === "Accepted"))) {
          items.push({
            key: 4, label: <span style={{ fontSize: 14 }}>Add Employees</span>,
            onClick: handleAddEmployees
          });
          items.push({
            key: 5, label: <span style={{ fontSize: 14 }}>Feddback Employees</span>,
            onClick: handleFeedbackEmployeesOpen
          });
        }
        return (
          <div onClick={() => findId(record?.interviewCode)}>
            <Dropdown menu={{ items }} trigger={['click']}>
              <Button type='circle'>
                <MoreOutlined />
              </Button>
            </Dropdown>
            {isFeddbackEmployee && (
              <FeddbackEmployeesStaff
                isFeedbackEmployee={isFeddbackEmployee}
                handleFeedbackContactClose={handleFeedbackEmployeesClose}
                findIdData={findIdData}


              />
            )}
            {isViewInterviewStaff && (
              <InterviewView
                isViewInterviewStaff={isViewInterviewStaff}
                handleAddContactClose={handleAddInterviewStaffClose}
                interviewCode={findIdData?.interviewCode}
                jobCode={findIdData?.jobCode}
                interviwDate={findIdData?.interviwDate}
                totalAccept={findIdData?.totalAccept}
                totalInterv={findId.totalInterv}
                totalReqPos={findIdData?.totalReqPos}
                totalRequiredGrade={findIdData?.totalRequiredGrade}
                idNumb={findIdData?.idNumb}
                department={findIdData?.department}
                projname={findIdData?.projname}
                requiredGrade={findIdData?.requiredGrade}
                requiredQualification={findIdData?.requiredQualification}
                positionToBeFilled={findIdData?.positionToBeFilled}
                fullName={findIdData?.fullName}
                birthayDate={findIdData?.birthayDate}
                familySituation={findIdData?.familySituation}
                experience={findIdData?.experience}
                educationLevel={findIdData?.educationLevel}
                diploma={findIdData?.diploma}
                telCondidate={findIdData?.telCondidate}
                urlCv={findIdData?.urlCv}
                validatesFor={findIdData?.validatesFor}
                goTotest2={findIdData?.goTotest2}
                psy_Person={findIdData?.psy_Person}
                psy_HumQuality={findIdData?.psy_HumQuality}
                psy_motivation={findIdData?.psy_motivation}
                psy_Intellig={findIdData?.psy_Intellig}
                goToTest3={findIdData?.goToTest3}
                techEnglishSkills={findIdData?.techEnglishSkills}
                evalDesision={findIdData?.evalDesision}
                techcommentaire={findIdData?.techcommentaire}
                techDate={findIdData?.techDate}
                hr_Person={findIdData?.hr_Person}
                hr_HumQuality={findIdData?.hr_HumQuality}
                hr_motivation={findIdData?.hr_motivation}
                hr_Intellig={findIdData?.hr_Intellig}
                level={findIdData?.level}
                headOfDepAprouv={findIdData?.headOfDepAprouv}
                agreedJoinedDate={findIdData?.agreedJoinedDate}
                expectedJoinDate={findIdData?.expectedJoinDate}
                dailyRate={findIdData?.dailyRate}
                hrDesion={findIdData?.hrDesion}
                feedback={findIdData?.feedback}
                propsedsalary={findIdData?.propsedsalary}
                finaldesision={findIdData?.finaldesision}
                time={findIdData?.time}
              />
            )}
            {isEditInterviewStaff && (
              <InterviewEdit
                isEditInterviewStaff={isEditInterviewStaff}
                handleAddContactClose={handleAddEditInterviewStaffClose}
                interviewCode={findIdData?.interviewCode}
                jobCode={findIdData?.jobCode}
                interviwDate={findIdData?.interviwDate}
                totalAccept={findIdData?.totalAccept}
                totalInterv={findId.totalInterv}
                totalReqPos={findIdData?.totalReqPos}
                totalRequiredGrade={findIdData?.totalRequiredGrade}
                idNumb={findIdData?.idNumb}
                department={findIdData?.department}
                projname={findIdData?.projname}
                requiredGrade={findIdData?.requiredGrade}
                requiredQualification={findIdData?.requiredQualification}
                positionToBeFilled={findIdData?.positionToBeFilled}
                fullName={findIdData?.fullName}
                birthayDate={findIdData?.birthayDate}
                familySituation={findIdData?.familySituation}
                experience={findIdData?.experience}
                educationLevel={findIdData?.educationLevel}
                diploma={findIdData?.diploma}
                telCondidate={findIdData?.telCondidate}
                urlCv={findIdData?.urlCv}
                validatesFor={findIdData?.validatesFor}
                goTotest2={findIdData?.goTotest2}
                psy_Person={findIdData?.psy_Person}
                psy_HumQuality={findIdData?.psy_HumQuality}
                psy_motivation={findIdData?.psy_motivation}
                psy_Intellig={findIdData?.psy_Intellig}
                goToTest3={findIdData?.goToTest3}
                techEnglishSkills={findIdData?.techEnglishSkills}
                evalDesision={findIdData?.evalDesision}
                techcommentaire={findIdData?.techcommentaire}
                techDate={findIdData?.techDate}
                hr_Person={findIdData?.hr_Person}
                hr_HumQuality={findIdData?.hr_HumQuality}
                hr_motivation={findIdData?.hr_motivation}
                hr_Intellig={findIdData?.hr_Intellig}
                level={findIdData?.level}
                headOfDepAprouv={findIdData?.headOfDepAprouv}
                agreedJoinedDate={findIdData?.agreedJoinedDate}
                expectedJoinDate={findIdData?.expectedJoinDate}
                dailyRate={findIdData?.dailyRate}
                hrDesion={findIdData?.hrDesion}
                feedback={findIdData?.feedback}
                propsedsalary={findIdData?.propsedsalary}
                finaldesision={findIdData?.finaldesision}
                time={findIdData?.time}
              />
            )}

          </div>
        );
      },
    },



    // {
    //   title: 'Actions',
    //   dataIndex: 'actions',
    //   key: 'actions',
    //   fixed: 'right',
    //   className: 'customer-table-actions',
    //   render: (text, record) => (
    //     <div onClick={() => findId(record?.interviewCode)}>
    //       <Dropdown menu={{ items }} trigger={['click']}  >
    //         <Button type='circle'>
    //           <MoreOutlined />
    //         </Button>
    //       </Dropdown>
    //         {isViewInterviewStaff && (
    //          <InterviewView
    //          isViewInterviewStaff={isViewInterviewStaff}
    //          handleAddContactClose={handleAddInterviewStaffClose} 
    //          interviewCode={findIdData?.interviewCode}
    //          jobCode={findIdData?.jobCode}
    //          interviwDate={findIdData?.interviwDate}   
    //          totalAccept={findIdData?.totalAccept}  
    //          totalInterv={findId.totalInterv}  
    //          totalReqPos={findIdData?.totalReqPos}
    //          totalRequiredGrade={findIdData?.totalRequiredGrade}
    //          idNumb={findIdData?.idNumb}
    //          department={findIdData?.department}
    //          projname={findIdData?.projname}
    //          requiredGrade={findIdData?.requiredGrade}
    //          requiredQualification={findIdData?.requiredQualification}
    //          positionToBeFilled={findIdData?.positionToBeFilled}
    //          fullName={findIdData?.fullName}
    //          birthayDate={findIdData?.birthayDate}
    //          familySituation={findIdData?.familySituation}
    //          experience={findIdData?.experience}
    //          educationLevel={findIdData?.educationLevel}
    //          diploma={findIdData?.diploma}
    //          telCondidate={findIdData?.telCondidate}
    //          urlCv={findIdData?.urlCv}
    //          validatesFor={findIdData?.validatesFor}
    //          goTotest2={findIdData?.goTotest2}
    //          psy_Person={findIdData?.psy_Person}
    //          psy_HumQuality={findIdData?.psy_HumQuality}
    //          psy_motivation={findIdData?.psy_motivation}
    //          psy_Intellig={findIdData?.psy_Intellig}
    //          goToTest3={findIdData?.goToTest3}
    //          techEnglishSkills={findIdData?.techEnglishSkills}
    //          evalDesision={findIdData?.evalDesision}
    //          techcommentaire={findIdData?.techcommentaire} 
    //          techDate={findIdData?.techDate}         
    //          hr_Person={findIdData?.hr_Person}
    //          hr_HumQuality={findIdData?.hr_HumQuality}
    //          hr_motivation={findIdData?.hr_motivation}
    //          hr_Intellig={findIdData?.hr_Intellig}
    //          level={findIdData?.level}
    //          headOfDepAprouv={findIdData?.headOfDepAprouv}
    //          agreedJoinedDate={findIdData?.agreedJoinedDate}
    //          expectedJoinDate={findIdData?.expectedJoinDate}
    //          dailyRate={findIdData?.dailyRate}
    //          hrDesion={findIdData?.hrDesion}
    //          feedback={findIdData?.feedback}
    //          propsedsalary={findIdData?.propsedsalary}
    //          finaldesision={findIdData?.finaldesision}
    //          time={findIdData?.time}></InterviewView>
    //       )}
    //          {isEditInterviewStaff && (
    //          <InterviewEdit
    //          isEditInterviewStaff={isEditInterviewStaff}
    //          handleAddContactClose={handleAddEditInterviewStaffClose} 
    //          interviewCode={findIdData?.interviewCode}
    //          jobCode={findIdData?.jobCode}
    //          interviwDate={findIdData?.interviwDate}   
    //          totalAccept={findIdData?.totalAccept}  
    //          totalInterv={findId.totalInterv}  
    //          totalReqPos={findIdData?.totalReqPos}
    //          totalRequiredGrade={findIdData?.totalRequiredGrade}
    //          idNumb={findIdData?.idNumb}
    //          department={findIdData?.department}
    //          projname={findIdData?.projname}
    //          requiredGrade={findIdData?.requiredGrade}
    //          requiredQualification={findIdData?.requiredQualification}
    //          positionToBeFilled={findIdData?.positionToBeFilled}
    //          fullName={findIdData?.fullName}
    //          birthayDate={findIdData?.birthayDate}
    //          familySituation={findIdData?.familySituation}
    //          experience={findIdData?.experience}
    //          educationLevel={findIdData?.educationLevel}
    //          diploma={findIdData?.diploma}
    //          telCondidate={findIdData?.telCondidate}
    //          urlCv={findIdData?.urlCv}
    //          validatesFor={findIdData?.validatesFor}
    //          goTotest2={findIdData?.goTotest2}
    //          psy_Person={findIdData?.psy_Person}
    //          psy_HumQuality={findIdData?.psy_HumQuality}
    //          psy_motivation={findIdData?.psy_motivation}
    //          psy_Intellig={findIdData?.psy_Intellig}
    //          goToTest3={findIdData?.goToTest3}
    //          techEnglishSkills={findIdData?.techEnglishSkills}
    //          evalDesision={findIdData?.evalDesision}
    //          techcommentaire={findIdData?.techcommentaire} 
    //          techDate={findIdData?.techDate}         
    //          hr_Person={findIdData?.hr_Person}
    //          hr_HumQuality={findIdData?.hr_HumQuality}
    //          hr_motivation={findIdData?.hr_motivation}
    //          hr_Intellig={findIdData?.hr_Intellig}
    //          level={findIdData?.level}
    //          headOfDepAprouv={findIdData?.headOfDepAprouv}
    //          agreedJoinedDate={findIdData?.agreedJoinedDate}
    //          expectedJoinDate={findIdData?.expectedJoinDate}
    //          dailyRate={findIdData?.dailyRate}
    //          hrDesion={findIdData?.hrDesion}
    //          feedback={findIdData?.feedback}
    //          propsedsalary={findIdData?.propsedsalary}
    //          finaldesision={findIdData?.finaldesision}
    //          time={findIdData?.time}
    //         ></InterviewEdit>
    //       )}


    //     </div>

    //   ),


    // },

  ];
  return (
    <>
      <StyledOrderTable
        hoverColor
        data={allinterviewStaffManagement}
        columns={columns}
        scroll={{ x: 'auto', y: tableHeight }}
      />

      {isDelteInterviewStaff ? (
        <ConfirmationModal
          open={isDelteInterviewStaff}
          paragraph={'Are you sure you want to delete this?'}
          onDeny={onDeleteInterviewStaff}
          onConfirm={DeleteInterviewStaff}
          modalTitle={<IntlMessages id='common.deleteItem' />}
        />
      ) : null}
      {isAddEmployees ? (
        <ConfirmationModal
          open={isAddEmployees}
          paragraph={'Are you sure you want to Add Employees?'}
          onDeny={onAddEmployees}
          onConfirm={AddEmployeesAfterConfirmation}
          modalTitle={<IntlMessages id='common.confirmation' />}
        />
      ) : null}


    </>
  );
};



export default TableInterviewStaff;
