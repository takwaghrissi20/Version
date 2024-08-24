import React, { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { useIntl } from 'react-intl';
import { Col, Select, Table, Tooltip, Input } from 'antd';
import AppRowContainer from '../../../../@crema/components/AppRowContainer';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import {
  StyledCoinsWrapper,
  StyledOrderHeaderRight

} from "../../../../styles/index.styled";

import AppCard from '../../../../@crema/components/AppCard';
import StatsDirCardStatics from './StatsDirCardStatics';
import Pagination from '../../../../@crema/components/AppsPagination';
const { Option } = Select;
const InfoDataHrRecruitement = ({ listInerview, staticsDataaccepted }) => {
  const [selectedOption, setSelectedOption] = useState('management');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [recruitementStaff, setRecruitementStaff] = useState([]);
  const [recruitementConstruction, setRecruitementConstruction] = useState([]);
  const handleChange = (value) => {
    setSelectedOption(value);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [selectedMonth, setSelectedMonth] = useState('thisMonth');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermConstruction, setSearchTermConstruction] = useState('');
  const { messages } = useIntl();
  // Filtrer les données d'interview en fonction de la date
  const filteredData = staticsDataaccepted.filter(data => {
    const interviewDate = new Date(data.interviwDate);
    const currentMonth = new Date().getMonth();
    const interviewMonth = interviewDate.getMonth();
    return selectedMonth === 'thisMonth' ? interviewMonth === currentMonth : interviewMonth === currentMonth - 1;
  });
  console.log("filteredData ", filteredData)
  // Mettre à jour les données du graphique en fonction de la sélection de l'utilisateur
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };
  const getRecruitement = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/list`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any necessary headers like Authorization here if required
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      const recruitementStaff = data.filter(item => item?.type === "Above Foreman");
      const recruitementConstruction = data.filter(item => item?.type === "Foreman & Below");
      setRecruitementStaff(recruitementStaff)
      setRecruitementConstruction(recruitementConstruction)

    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    getRecruitement()


  }, []);
  const getDesiredDateColor = (desiredDate) => {
    const daysDifference = desiredDate ? Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24)) : '';
    return daysDifference < 0 ? 'red' : 'green';
  };
  const totalPages = Math.ceil(recruitementStaff.length / pageSize);




  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedData = recruitementStaff.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const columns = [
    {
      title: 'Recrutement Request Num',
      dataIndex: 'jobCode',
      key: 'jobCode',
      width: 100,
      render: (jobCode, record) => {
        const year = new Date(record.dateInputRecrut).getFullYear(); // Extraction de l'année
        return `RRS-${jobCode}-${year}`;
      },
    },
    {
      title: 'Descipline',
      dataIndex: 'requestedDicipline',
      key: 'requestedDicipline',
      width: 100,

    },
    {
      title: 'Project Ref',
      dataIndex: 'projRef',
      key: 'projRef',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (title) => (
        <Tooltip placement='topLeft' title={title}>
          {title}
        </Tooltip>
      ),

    },
    {
      title: 'Request Date',
      dataIndex: 'dateInputRecrut',
      key: 'dateInputRecrut',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (title) => (
        <Tooltip placement='topLeft' title={title}>
          {title}
        </Tooltip>
      ),

    },
    {
      title: 'Total Number',
      dataIndex: 'totalNumber',
      key: 'totalNumber',
      width: 50,
      render: (title) => (
        <Tooltip placement='topLeft' title={title}>
          {title}
        </Tooltip>
      ),

    },
    {
      title: 'Desired Date',
      dataIndex: 'desiredDate',
      key: 'desiredDate',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (desiredDate) => (
        desiredDate ? new Date(desiredDate).toLocaleDateString() : ""
      ),
    },
    {
      title: 'OVERDUE DATE DAYS',
      dataIndex: 'desiredDate',
      key: 'overdueDateDays',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: (desiredDate) => (
        desiredDate ? (
          <Tooltip placement='topLeft' style={{ color: getDesiredDateColor(desiredDate) }}>
            {(() => {
              const diffInDays = Math.ceil((new Date(desiredDate) - new Date()) / (1000 * 60 * 60 * 24));
              return (
                <span style={{ color: diffInDays < 0 ? 'red' : 'inherit' }}>
                  {diffInDays}
                </span>
              );
            })()}
          </Tooltip>
        ) : ''
      ),


    },

  ];
  const filteredDataRecruitement = recruitementStaff.filter(item =>
    item.requestedDicipline?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredDataRecruitementConstruction = recruitementConstruction.filter(item =>
    item.requestedDicipline?.toLowerCase().includes(searchTermConstruction.toLowerCase())
  );
  return (
    <>

      <AppsContainer
        title={messages['sidebar.app.InterviewStatistics']}
        cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        fullView
      >


        <AppRowContainer ease={'easeInSine'}>
          {listInerview?.map((data) => (
            <Col key={data.id} xs={24} sm={12} lg={6}>
              <StatsDirCardStatics
                data={data} />
            </Col>
          ))}


          {/* <Col xs={24} md={16} lg={24} xl={24} style={{marginTop:"3rem"}}>
          
       
          <AppCard title={
            <StyledCoinsWrapper>
              <Select value={selectedMonth} onChange={handleMonthChange} >
                <option value="thisMonth">{messages['dashboard.thisMonth']}</option>
                <option value="lastMonth">{messages['dashboard.lastMonth']}</option>
              </Select>
              <ResponsiveContainer 
                 title={messages['sidebar.app.InterviewStatistics']}
              
                 width='100%' height={200} style={{ marginTop: '100px' }}>
                <BarChart
                title={messages['sidebar.app.InterviewStatistics']}               
                data={filteredData}>
                  <XAxis dataKey='interviwDate' />
                  <YAxis />
                  <CartesianGrid strokeDasharray='3 3' />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='totalInterv' fill='#8884d8' />
                </BarChart>
              </ResponsiveContainer>
            </StyledCoinsWrapper>


          } className='no-card-space-ltr-rtl'>


          </AppCard>


        </Col> */}

        </AppRowContainer>


        <Col xs={24} md={24}>
          <div style={{ display: "flex", justifyContent: "flex-end"}}>
            <Select
              style={{
                marginBottom: "1rem",
               
                borderRadius: "10px",
                boxShadow:"rgb(25, 25, 112) 0px 4px 8px",
                width:"20%",
            
             


              }}
              onChange={handleChange}
              value={selectedOption}
              placeholder="Select Type"
              allowClear
            >
              <Option value="management">Management Staff</Option>
              <Option value="construction">Construction Staff</Option>
            </Select>
          </div>
          {selectedOption === 'management' && (
            <div>

              <AppCard
                className='no-card-space-ltr-rtl'
                title={messages['dashboard.Interview.ManagementStaff']}>
                <Input.Search
                  placeholder="Search by Discipline"
                  allowClear
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ margin: 16, width: "20%" }}
                />

                <Table
                  columns={columns}
                  dataSource={filteredDataRecruitement}
                  pagination={false}
                  rowKey="id"
                  scroll={{ x: 'auto', y: 150 }}
                />
                {/* <StyledOrderHeaderRight>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
              />
            </StyledOrderHeaderRight> */}
              </AppCard>
            </div>
          )}

          {selectedOption === 'construction' && (
            <div>

              <AppCard
                className='no-card-space-ltr-rtl'
                title={messages['dashboard.Interview.Construction']}>
                <Input.Search
                  placeholder="Search by Discipline"
                  allowClear
                  onChange={(e) => setSearchTermConstruction(e.target.value)}
                  style={{ margin: 16, width: "20%" }}
                />

                <Table
                  columns={columns}
                  dataSource={filteredDataRecruitementConstruction}
                  pagination={false}
                  rowKey="id"
                  scroll={{ x: 'auto', y: 150 }}
                />
                {/* <StyledOrderHeaderRight>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              handlePageChange={handlePageChange}
            />
          </StyledOrderHeaderRight> */}
              </AppCard>
            </div>
          )}
        </Col>


      </AppsContainer>

    </>
  );

};

export default InfoDataHrRecruitement;
