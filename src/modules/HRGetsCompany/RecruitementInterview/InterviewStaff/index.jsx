import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import OrderTable from './DataTableStaffInterview';
import {
  StyledOrderHeader,
  StyledOrderHeaderInputView,
  StyledOrderHeaderRight,
  StyledOrderHeaderPagination
} from '../../../../styles/index.styled';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import { useGetDataApi } from '../../../../@crema/hooks/APIHooks';
import Pagination from '../../../../@crema/components/AppsPagination';
import clsx from 'clsx';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal'; 
import { useNavigate } from "react-router-dom";
const StaffInterview = ({ allinterviewStaffManagement,token,departement }) => {
  const navigate = useNavigate();
  const [interviewStaff, setInterviewStaff] = useState([]);
  const [interviewStaffFiltrer, setInterviewStaffFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [findIdData, setFindIdData] = useState(null);
  const [id, setId] = useState(0);
  const [codeJob, setCodeJob] = useState(0);
  const [interviewCode, setInterviewCode] = useState(0);
  const count = allinterviewStaffManagement.length

  useEffect(() => {
    fetchInterviewStaff();
  }, [currentPage, pageSize, nameFilter, count, id]);
  const userRoles = localStorage.getItem("role");
  const fetchInterviewStaff = async () => {
    try {

      const url = `https://dev-gateway.gets-company.com/api/v1/int/listBypage?size=${pageSize}&page=${currentPage}&sortBy=interviwDate&token=${token}`;
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      console.log("dataaaaa", data)
      setInterviewStaff(data);
    } catch (error) {
      console.error('Error fetching Interview:', error);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

  };
  // const handleNameFilterChange = (event) => {
  //   setNameFilter(event.target.value);
  //   handleSearch(event.target.value)
  //   setIsDropdownOpen(event.target.value.trim() !== '');

  // };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleListItemClick = (item) => {
    setNameFilter(item.projname);
    handleSearch({ target: { value: item.projname } });
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);
    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/filterByName?projname=$${filterValue}&token=${token}`);
        if (!response.ok) {
          throw new Error('Failed to filter Recruitement');
        }
        const data = await response.json();
        setInterviewStaffFiltrer(data)
        setInterviewStaff(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering Recruitement:', error);
      }
      if (filterValue.length > 0) {
        setIsDropdownOpen(true);
        // Filtrer les données en fonction de la valeur de l'entrée
        const filteredData = // votre logique de filtrage ici
          setInterviewStaffFiltrer(filteredData);
      } else {
        setIsDropdownOpen(false);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
    }
  };

  //Fin Bu Id 
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/findId?code=${code}&token=${token}`, {
        method: 'GET',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        console.log("responseData", responseData)
        setFindIdData(responseData);
        setId(responseData.interviewCode)
        setCodeJob(responseData?.jobCode)
        setInterviewCode(responseData.interviewCode)


      }
    } catch (error) {
      console.error("Erreur lors de la récupération du Interview :", error);
    }
  };
  const handleInterview = () => {
    onGenerateInterview(true);
  };
  return (
    <AppsContainer type='bottom' fullView>
      <AppsHeader>
        <StyledOrderHeader>
          <div style={{ marginRight: 20, boxShadow: "none !important" }}>
            <Input.Search
              placeholder='Search Here By projet Name'
              type="text"
              value={nameFilter}
              onChange={handleNameFilterChange}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  handleSearch(event);
                }
              }}
            />
            {isDropdownOpen && (
              <List
                style={{
                  zIndex: 5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                  background: "white", position: "absolute", top: "3.5rem", width: "15%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"
                }}
                dataSource={interviewStaffFiltrer}
                renderItem={(item) => (
                  <List.Item onClick={() => handleListItemClick(item)}>
                    {item.projname}
                  </List.Item>
                )}
              />
            )}
          </div>

        </StyledOrderHeader>
      </AppsHeader>
      <AppsContent
        style={{
          paddingTop: 10,
          paddingBottom: 10,
        }}>
        <OrderTable
          allinterviewStaffManagement={allinterviewStaffManagement}
          findIdData={findIdData}
          id={id}
          findId={findId}
          setFindIdData={setFindIdData}
          open={open}
          handleInterview={handleInterview}
          codeJob={codeJob}
          interviewCode={interviewCode}/>
          <div className='Pagination' >
        <StyledOrderHeaderRight>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(count / pageSize)}
            handlePageChange={handlePageChange}
          />

        </StyledOrderHeaderRight>
        </div>
      </AppsContent>


    </AppsContainer>

  );
};

export default StaffInterview;
