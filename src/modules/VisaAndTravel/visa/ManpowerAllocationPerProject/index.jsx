import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Statistic, Divider, Space, Table, Select } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BiRectangle } from "react-icons/bi";
import Pagination from '../../../../@crema/components/AppsPagination';
import AppPageMeta from "../../../../@crema/components/AppPageMeta";
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../../../@crema/components/AppCard';
import { StyledOrderHeader, StyledOrderHeaderRight } from '../../../../styles/index.styled';
import OrderTable from './Table'
import { useIntl } from 'react-intl';
import clsx from 'clsx';
const localizer = momentLocalizer(moment);

const AllocationPerProject = () => {
  const { messages } = useIntl();
  const [lastFivedata, setLastFivedata] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [mob, setMob] = useState([]);
  const [filteredMob, setFilteredMob] = useState([]);
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [count, setCount] = useState(0);
  const [allProjects, setAllProjects] = useState([]);
  const [lastmob, setLastmob] = useState("");
  const [lastdemob, setLastdemob] = useState("");
  const openNotificationError = () => {
    notification.open({
      message: 'Error',
      description: 'Error',
      style: {
        backgroundColor: '#dc3545',
        border: '1px solid #dc3545',
        color: '#FFFFFF',
        borderRadius: '3px',
        boxShadow: '1px 3px 4px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        height: "102px",
        width: "500px",
        borderLeft: '8px solid #bd1120',
      },
      placement: 'topRight',
    });
  };
  useEffect(() => {
    fetchFiveDemobilization();
    fetchMob()
    fetchAllProjects()
    fetchLasMobDemob()
  }, []);
  const fetchMob = async () => {
    try {
      const countResponse = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/countByType?type=DeMobilization`);
      const datacount = await countResponse.json();
      setCount(datacount);
      const response2 = await fetch(` https://dev-gateway.gets-company.com/api/v1/travel/list?page=${currentPage}&size=${pageSize}`);
      const data2 = await response2.json();
      console.log('jjjjjj',data2)
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/list?page=${currentPage}&size=${pageSize}`);
      if (!response.ok) {
        openNotificationError();
        throw new Error('Failed to fetch mob');
      }
      const data = await response.json();
      setMob(data);
      setFilteredMob(selectedProject !== 'All Projects'
        ? data.filter(p => p.projName === selectedProject)
        : data);
    } catch (error) {
      console.error('Error fetching mob:', error);
      openNotificationError();

    }
  };
  //Api Last Mobilisation ET Last 
  const fetchLasMobDemob = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/getAll`);
      if (!response.ok) {
        throw new Error('Failed to fetch MobDemob');
      }

      const data = await response.json();
      console.log("GetAll", data);

      // Assuming data is an array of objects with dateDemob and dateMob properties
      let lastDateDemobEntry = null;
      let lastDateMobEntry = null;

      data.forEach(entry => {
        if (!lastDateDemobEntry || new Date(entry.dateDemob) > new Date(lastDateDemobEntry.dateDemob)) {
          lastDateDemobEntry = entry;
        }
        if (!lastDateMobEntry || new Date(entry.dateMob) > new Date(lastDateMobEntry.dateMob)) {
          lastDateMobEntry = entry;
        }
      });

      console.log("Last dateDemob Entry:", lastDateDemobEntry.dateDemob);

      console.log("Last dateMob Entry:", lastDateMobEntry.dateMob);
      setLastmob(lastDateMobEntry.dateMob)
      setLastdemob(lastDateDemobEntry.dateDemob)
    } catch (error) {
      console.error('Error fetching MobDemob:', error);
      openNotificationError();
    }
  };



  const myEventsList = [
    {
      title: 'Last Mob',
      start: lastmob,
      end: lastmob,
      className: 'event-yellow'
    },
    {
      title: 'Last Demob',
      start: lastdemob,
      end: lastdemob,
      className: 'event-red'
    }
  ];

  const eventStyleGetter = (event, start, end, isSelected) => {
    return {
      className: event.className
    };
  };

  // API call to fetch the last five demobilizations
  const fetchFiveDemobilization = async () => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/mobDemob/fiveLast?type=DeMobilization`);
      if (!response.ok) {
        throw new Error('Failed to fetch MobDemob');
      }
      const data = await response.json();
     
      setLastFivedata(data);
    } catch (error) {
      console.error('Error fetching MobDemob:', error);
    }
  };
  //Api count By type




  const columns = [
    {
      title: 'Gets Id',
      dataIndex: 'getsId',
      key: 'getsId',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Project Name',
      dataIndex: 'projName',
      key: 'projName',
    },
    {
      title: 'DeMobilization Date',
      dataIndex: 'dateDemob',
      key: 'dateDemob',
    },
    {
      title: 'Mobilization Date',
      dataIndex: 'dateMob',
      key: 'dateMob',
    },
  ];

  const handleProjectChange = (value) => {
    setSelectedProject(value);
    setFilteredMob(value !== 'All Projects'
      ? mob.filter(mob => mob.projName === value)
      : mob);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const fetchAllProjects = async () => {
    try {


      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/proj/list`);
      if (!response.ok) {

        throw new Error('Failed to fetch Projects');
      }

      const data = await response.json();
      const projectNames = [...new Set(data.map(project => project.projName))];
      console.log("Project Names:", projectNames);
      setAllProjects(projectNames.map(projName => ({ proj: projName })));
      setAllProjects(projectNames)

    } catch (error) {
      console.error('Error fetching mob:', error);
      openNotificationError();
    }
  };
  return (
    <div className='site-statistic-demo-card'>
      <AppPageMeta title='ManpowerAllocationPerProject' />
      <Row gutter={16}>
        <Col span={14}>
          <Card>
            <Statistic
              title='DeMobilization Number'
              value={count}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<ArrowUpOutlined />}
              suffix='Person'
            />
          </Card>
          <Space direction='vertical' style={{ width: '100%' }}>
            <AppCard
              className='no-card-space-ltr-rtl'
              title={messages['sidebar.hr.fiveDemob']}
            >
              <Table columns={columns} dataSource={lastFivedata} />
            </AppCard>
          </Space>
        </Col>
        <Col span={10}>
          <Card>
            <Space direction='vertical'>
              <Divider orientation='left'>Last Demobilzation</Divider>
              <div>
                <h6>Last Demobilzation</h6>
                <Calendar
                  localizer={localizer}
                  events={myEventsList}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 340, borderRadius: 10 }}
                  eventPropGetter={eventStyleGetter}
                />
                <Row style={{ marginTop: "1rem" }}>
                  <BiRectangle style={{ color: "#2DA8E0", marginTop: "0.2rem" }}></BiRectangle>
                  <p style={{ fontWeight: "bold" }}> Last Mobilization</p>
                  <BiRectangle style={{ color: "#C0B198", marginTop: "0.2rem" }}></BiRectangle>
                  <p style={{ fontWeight: "bold" }}> Last Demo</p>
                </Row>
              </div>
              <Divider dashed />
            </Space>
          </Card>
        </Col>
      </Row>


      <AppCard
        className='no-card-space-ltr-rtl'
        title={messages['sidebar.hr.ManpowerLocationTrackPerProject']}
      >
        <AppsHeader>

          <StyledOrderHeader>
            <Select
              placeholder='Project Name'
              onChange={handleProjectChange}
              value={selectedProject}
              style={{ width: 200 }}
            >
              {allProjects.map((p, index) => (
                <Select.Option key={index} value={p}>
                  {p}
                </Select.Option>
              ))}
            </Select>
          </StyledOrderHeader>
        </AppsHeader>
        <OrderTable className={clsx("item-hover")} orderData={filteredMob} />
      </AppCard>
      <StyledOrderHeaderRight>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(count / pageSize)}
          handlePageChange={handlePageChange}
        />
      </StyledOrderHeaderRight>

    </div>
  );
};

export default AllocationPerProject;
