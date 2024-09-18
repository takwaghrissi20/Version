import React, { useState, useEffect } from 'react';
import { Input, List, Tooltip } from 'antd';
import OrderTable from './TabsForms';
import Pagination from '../../@crema/components/AppsPagination';
import AppPageMeta from "../../@crema/components/AppPageMeta";
import clsx from 'clsx';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
} from '../../styles/index.styled';
import AppsHeader from '../../@crema/components/AppsContainer/AppsHeader';
import AppCard from '../../@crema/components/AppCard';
import { useIntl } from 'react-intl';

const ProjectLocation = () => {
  const { messages } = useIntl();
  const [allproj, setAllproj] = useState([]);
  const [filteredMission, setFilteredMission] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [count, setCount] = useState(0);
  const user = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const [project, setProject] = useState([]);
  const [idgets, setIdgets] = useState("");

  useEffect(() => {
    fetchProject();
    fetchProjectEmail()
  }, [currentPage, pageSize, nameFilter]);

  const userEmail = localStorage.getItem("email");
  console.log("userEmail Profile", userEmail);

  // Fetch Projects
  const fetchProject = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/proj/list?token=${token}`;
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        const filteredProjects = data
          .filter(project => project.country === "Libya")
          .reduce((acc, current) => {
            const x = acc.find(item => item.projName === current.projName);
            return !x ? acc.concat([current]) : acc;
          }, []);

        // Apply the name filter
        const filteredByName = filteredProjects.filter(project =>
          project.projName.toLowerCase().includes(nameFilter.toLowerCase())
        );

        setAllproj(filteredByName);
        setCount(filteredByName.length);
      
      } else {
        console.error("Erreur lors de la récupération des projets:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des projets:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setNameFilter(e.target.value);
  };
  // Project By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };

  return (
    <div>
      <AppPageMeta title='PROJECTSLOCATIONTRACKRECORD' />
      <div style={{ backgroundColor: "white", borderRadius: "20px" }}>
        <AppsHeader>
          <StyledOrderHeader>
            {/* Input for filtering by project name */}
            <Input.Search
              placeholder="Filter by project name"
              value={nameFilter}
              onChange={handleFilterChange}
              style={{ width: 300, marginRight: '10px' }}


            />
            {/* <Input
              placeholder="Filter by project name"
              value={nameFilter}
              onChange={handleFilterChange}
              style={{ width: 200, marginRight: '10px' }}
            /> */}
          </StyledOrderHeader>
        </AppsHeader>
        {user.includes("Leader") ?
          <>
          <>
            <AppCard className='no-card-space-ltr-rtl' title={messages['dashboard.PROJECTSLOCATIONTRACKRECORD']}>
              <OrderTable className={clsx("item-hover")}
               project={project}
               user={user} />
            </AppCard>

            <StyledOrderHeaderRight>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(project?.length / pageSize)}
                handlePageChange={handlePageChange}
              />
            </StyledOrderHeaderRight>

            <div style={{ height: "10px" }}></div>
          </>
          
          
          
          
          </>
          : 
          <>
            <AppCard className='no-card-space-ltr-rtl' title={messages['dashboard.PROJECTSLOCATIONTRACKRECORD']}>
              <OrderTable className={clsx("item-hover")} allproj={allproj}
               user={user} />
            </AppCard>

            <StyledOrderHeaderRight>
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(count / pageSize)}
                handlePageChange={handlePageChange}
              />
            </StyledOrderHeaderRight>

            <div style={{ height: "10px" }}></div>
          </>




        }

      </div>

    </div>
  );
};

export default ProjectLocation;
