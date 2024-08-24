import React, { useState, useEffect } from 'react';
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col, Select } from 'antd';
import LastRequestor from "../../Planificationhr/Planification";
import AppComponentHeader from "../../../@crema/components/AppComponentHeader";
import AppComponentCard from "../../../@crema/components/AppComponentCard";
import InterviewCalendar from "../../VisaAndTravel/calendar/InterviewCalendar";
import StaticsTotalRecruitement from '../RecruitementInterview/StaticsTotalRecruitement';
import StaticsTotalInterview from '../RecruitementInterview/StaticsTotalInterview';
import LastRequestorRecruitement from '../RecruitementInterview/LastRequestorRecruitement';
import LastInterviewStaff from '../RecruitementInterview/LastInterviewStaffManagemnt';
import LastInterviewConstruction from '../RecruitementInterview/LastInterviewConstructionManagement';
const { Option } = Select;

const Planification = () => {
  const [totalNumberInterview, setTotalNumberInterview] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [lastRecruitement, setLastRecruitement] = useState("");
  const [selectedMonth, setSelectedMonth] = useState('');
  const [year] = useState(new Date().getFullYear());
  const [allRecruitementData, setAllRecruitementData] = useState([]);
  const [allInterviewData, setAllInterviewData] = useState([]);
  const [lastStaffInterview, setLastStaffInterview] = useState([]);
  const [lastConstructionInterview, setLastConstructionInterview] = useState([]);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Fetch all data on initial load
  const fetchAllData = async () => {
    try {
      const responseRecruitement = await fetch("https://dev-gateway.gets-company.com/api/v1/re/list");
      const responseDataRecruitement = await responseRecruitement.json();
      setAllRecruitementData(responseDataRecruitement);
      setTotalNumber(responseDataRecruitement.length);
      setLastRecruitement(responseDataRecruitement[responseDataRecruitement.length - 1]);

      const responseInterview = await fetch("https://dev-gateway.gets-company.com/api/v1/int/list");
      const responseDataInterview = await responseInterview.json();
      setAllInterviewData(responseDataInterview);
      setTotalNumberInterview(responseDataInterview.length);
      setLastStaffInterview(responseDataInterview[responseDataInterview.length - 1])
      ///Interview Constraction
      const InterviewConstruction = await fetch("https://dev-gateway.gets-company.com/api/v1/intc/list");
      const responseInterviewConstruction= await InterviewConstruction.json();
      setLastConstructionInterview(responseInterviewConstruction[responseInterviewConstruction.length - 1])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Filter data based on selected month
  const filterDataByMonth = () => {
    if (!selectedMonth) return;

    const filteredRecruitment = allRecruitementData.filter(item => {
      const itemMonth = new Date(item.dateInputRecrut).getMonth() + 1;
      return itemMonth === parseInt(selectedMonth, 10);
    });

    setTotalNumber(filteredRecruitment.length);
    setLastRecruitement(filteredRecruitment[filteredRecruitment.length - 1]);

    const filteredInterview = allInterviewData.filter(item => {
      const itemMonth = new Date(item.dateInputRecrut).getMonth() + 1;
      return itemMonth === parseInt(selectedMonth, 10);
    });

    setTotalNumberInterview(filteredInterview.length);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    if (selectedMonth) {
      filterDataByMonth();
    } else {
      // Reset to all data if no month is selected
      setTotalNumber(allRecruitementData.length);
      setTotalNumberInterview(allInterviewData.length);
    }
  }, [selectedMonth]);

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  return (
    <>
      <Select 
      
      style={{
        marginBottom: "1rem",
       
        borderRadius: "10px",
        boxShadow:"rgb(25, 25, 112) 0px 4px 8px",
        width:"20%",
    
     


      }}
      
      
      placeholder="Select a month"  onChange={handleMonthChange}>
        <Option value="">All Months</Option>
        {months.map((month, index) => (
          <Option key={index} value={index + 1}>
            {month}
          </Option>
        ))}
      </Select>
      <p>Year: {year}</p>
      
      {/* <AppRowContainer>
        <Col xs={24} sm={12} lg={6}>
          <StaticsTotalRecruitement totalNumber={totalNumber} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StaticsTotalInterview totalNumberInterview={totalNumberInterview} />
        </Col>
      </AppRowContainer> */}

      <AppComponentHeader title="Planification Interview" />
      
      <AppRowContainer>
        <Col xs={24} sm={12} lg={6}>
          <StaticsTotalRecruitement totalNumber={totalNumber} />
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <StaticsTotalInterview totalNumberInterview={totalNumberInterview} />
        </Col>
        <Col xs={24} sm={12} lg={12}>
          <LastInterviewStaff lastStaffInterview={lastStaffInterview} lastConstructionInterview={lastConstructionInterview} />
        </Col>
      
      
        {/* <Col xs={24} sm={12} lg={6}>
          <LastRequestorRecruitement lastRecruitement={lastRecruitement} />
        </Col> */}
        <Col xs={24}>
          <AppComponentCard
            title="Interview Calendar"
            component={InterviewCalendar}
          />
        </Col>
      </AppRowContainer>
    </>
  );
};

export default Planification;
