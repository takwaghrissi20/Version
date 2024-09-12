import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import CustomerTableSite from './CustomerTable';
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppsContent from '../../../@crema/components/AppsContainer/AppsContent';
import AppsContainer from '../../../@crema/components/AppsContainer';
import AppCard from '../../../@crema/components/AppCard';
const MonthlySiteSummary = () => {

  const [siteWorkStatus, setSiteWorkStatus] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(moment().month() + 1);
  const [selectedYear, setSelectedYear] = useState(moment().year());
  const [pickerValue, setPickerValue] = useState(new Date(selectedYear, selectedMonth - 1));
  const token = localStorage.getItem("token");
  // Fetch OfficeWorkStatus with filters
  const fetchEmployeesSiteWorkStatus1 = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/SiteWorkStatus/all?token=${token}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch office work status');
      }
      const data = await response.json();
      // Filter data based on selectedMonth and selectedYear
      const filteredData = data.filter(item => item.mois === moment(selectedMonth, 'M').format('MMMM').toUpperCase() && item.year === selectedYear);
      console.log("Filtered Data:", filteredData);
      setSiteWorkStatus(filteredData);
    } catch (error) {
      console.error('Error fetching office work status:', error);
    }
  };
  const fetchEmployeesSiteWorkStatus = async () => {
    try {

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/SiteWorkStatus/all?token=${token}`);

      if (!response.ok) {
        throw new Error('Failed to fetch training List By Page');
      }
      if (response.ok) {
        const data = await response.json();
        console.log("rrrtttt",data)
        // Filter data based on selectedMonth and selectedYear
        const filteredData = data.filter(item => item.mois === moment(selectedMonth, 'M').format('MMMM').toUpperCase() && item.year === selectedYear);
    console.log("rrrtttt",filteredData)
        setOfficeWorkStatus(filteredData);
      }



    } catch (error) {
      console.error('Error fetching training By Pageess:', error);
    }
  };

  // Handle month and year change
  const handleMonthChange = (date) => {
    if (date) {
      const newMoment = moment(date);
      setSelectedMonth(newMoment.month() + 1);
      setSelectedYear(newMoment.year());
      setPickerValue(date);
    }
  };

  // Trigger fetch on month/year change
  useEffect(() => {
    fetchEmployeesSiteWorkStatus();
  }, [selectedMonth, selectedYear]);

  // Handle filter button click
  const handleFilterClick = () => {
    fetchEmployeesSiteWorkStatus();
  };

  return (
    <>
     <AppPageMeta title='Monthly Site Summary' />
     <AppCard title="Monthly Site Summary" heightFull>
     <AppsContainer   type="bottom" fullView>
     <div style={{  display: 'flex',justifyContent: 'center', marginTop: '1rem', marginBottom: '2rem',
      }}>
     <Row className="row" gutter={16} style={{ display: 'flex', alignItems: 'center' }}>
        <Col className="calendar" style={{ display: "flex" }} span={15}>
          <div className="datepicker-wrapper">
            <DatePicker
              selected={pickerValue}
              onChange={handleMonthChange}
              dateFormat="MMMM yyyy"
              showMonthYearPicker
              placeholderText="Select Month and Year"
              className="custom-datepickerEmployees"
            />
          </div>
          <Button
            style={{
              backgroundColor: '#41b3f8',
              borderColor: 'transparent',
              color: 'white',
              paddingRight: "4rem",
              paddingLeft: "4rem",
              marginLeft: "5rem"
            }}
            onClick={handleFilterClick}
          >
            Filter
          </Button>
        </Col>
      </Row>
      </div>

      {/* Render SiteWorkStatus Table */}
      <AppsContent style={{ paddingTop: 10, paddingBottom: 10 }}>
      <CustomerTableSite

        siteWorkStatus={siteWorkStatus}
      />
    
      </AppsContent>
    </AppsContainer>
    </AppCard>
    </>
  );
};

export default MonthlySiteSummary;
