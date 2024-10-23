import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import OrderTable from './DataTableStaffRecruitement';
import {
  StyledOrderHeader,
  StyledOrderHeaderRight,
  StyledCustomerHeaderRight,
} from '../../../../styles/index.styled';
import AppsHeader from '../../../../@crema/components/AppsContainer/AppsHeader';
import AppsContent from '../../../../@crema/components/AppsContainer/AppsContent';
import Pagination from '../../../../@crema/components/AppsPagination';
import ConfirmationModal from '../../../../@crema/components/AppConfirmationModal';
import { useNavigate } from "react-router-dom";
const RecruitementStaff = ({ allrecruitementabove, roles, token,
  loading, setLoading, recruitementTypeIdAbovePMO, recruitementTypeIdAboveBOD,
  recruitementTypeIdAboveOperationManager,
  recruitementTypeIdAbove, allrecruitementAbove
}) => {
  const navigate = useNavigate();
  const [recruitementabove, setRecruitementabove] = useState([]);
  const [recruitementaboveFiltrer, setRecruitementaboveFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGenerateInterview, onGenerateInterview] = useState(false);
  const [findIdData, setFindIdData] = useState(null);
  const [id, setId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const count = allrecruitementabove.length
  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     setLoading(false);
  //   }, 2000);

  //   return () => clearTimeout(timer); 
  // }, []);
  useEffect(() => {
    fetchRecruitementabove();
  }, [currentPage, pageSize, nameFilter, count, id]);

  const fetchRecruitementabove = async () => {
    try {

      const url = `https://dev-gateway.gets-company.com/api/v1/re/getRecByType?size=${pageSize}&page=${currentPage}&type=Above Foreman&sortBy=jobCode`;
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
      const filteredDataPMO =data.filter(item => item?.type === "Above Foreman");

      setRecruitementabove(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
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
    setNameFilter(item.position);
    handleSearch({ target: { value: item.position } });
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim();
    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/filterByPosition?position=$${filterValue}&token=${token}`);
        if (!response.ok) {
          throw new Error('Failed to filter Recruitement');
        }
        const data = await response.json();
        setRecruitementaboveFiltrer(data)
        setRecruitementabove(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering Recruitement:', error);
      }
      if (filterValue.length > 0) {
        setIsDropdownOpen(true);
        const filteredData =
          setRecruitementaboveFiltrer(filteredData);
      } else {
        setIsDropdownOpen(false);
      }
    } else {
      setIsDropdownOpen(false);
    }
  };

  const InterviewGenerate = async () => {

    navigate(`/dashboards/hr/${id}`, {
      state: {
        DesiredDate: findIdData?.desiredDate,
        JobCode: findIdData?.jobCode,
        totalNumber: findIdData?.totalNumber,
        level: findIdData?.experience,
        projectName: findIdData?.projectName,
        position: findIdData?.position,
        experience: findIdData?.experience,
        dep: findIdData?.dep
      }


    });


  }
  //Fin Bu Id 
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${code}&token=${token}`, {
        method: 'POST',

      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (response.ok) {
        const responseData = await response.json();
        setFindIdData(responseData);
        console.log("etFindIdData", responseData)
        setId(responseData.jobCode)



      }
    } catch (error) {
      console.error("Erreur lors de la récupération du jobcode:", error);
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
              placeholder='Search Here By Position'
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
                dataSource={recruitementaboveFiltrer}
                renderItem={(item) => (
                  <List.Item onClick={() => handleListItemClick(item)}>
                    {item.position}
                  </List.Item>
                )}
              />
            )}
          </div>


          <StyledOrderHeaderRight>

          </StyledOrderHeaderRight>
        </StyledOrderHeader>
      </AppsHeader>
      <AppsContent
        style={{
          paddingTop: 10,
          paddingBottom: 10,

        }}>
        
        {roles.includes('bod')  &&
          (
            <>
              <OrderTable
                allrecruitementabove={recruitementabove}
                findIdData={findIdData}
                id={id}
                findId={findId}
                setFindIdData={setFindIdData}
                open={open}
                handleInterview={handleInterview}
                roles={roles}
                setLoading={setLoading}
                loading={setLoading}
                recruitementTypeIdAbovePMO={recruitementTypeIdAbovePMO}
                recruitementTypeIdAboveBOD={recruitementTypeIdAboveBOD}
              />
              <div className='Pagination' >
                <StyledOrderHeaderRight>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(recruitementTypeIdAboveBOD.length / pageSize)}
                    handlePageChange={handlePageChange} />

                </StyledOrderHeaderRight>

              </div>
            </>
          )
        }
        {/*PMO*/}
        {roles.includes('PMO') && (
          <>
            <OrderTable
              allrecruitementabove={recruitementabove}
              findIdData={findIdData}
              id={id}
              findId={findId}
              setFindIdData={setFindIdData}
              open={open}
              handleInterview={handleInterview}
              roles={roles}
              setLoading={setLoading}
              loading={setLoading}
              recruitementTypeIdAbovePMO={recruitementTypeIdAbovePMO}
              recruitementTypeIdAboveBOD={recruitementTypeIdAboveBOD}
            />
            <div className='Pagination' >
              <StyledOrderHeaderRight>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(recruitementTypeIdAbovePMO.length / pageSize)}
                  handlePageChange={handlePageChange} />

              </StyledOrderHeaderRight>

            </div>
          </>
        )

        }
        {/*End  PMO*/}
        {/*Manager*/}
        {((roles.includes("Manager") && 
        !roles.includes("Human Ressource"))
         || roles.includes("Leader")) && (
            <>
            
              <OrderTable
                allrecruitementabove={recruitementTypeIdAbove}
                findIdData={findIdData}
                id={id}
                findId={findId}
                setFindIdData={setFindIdData}
                open={open}
                handleInterview={handleInterview}
                roles={roles}
                recruitementTypeIdAbovePMO={recruitementTypeIdAbovePMO}
                recruitementTypeIdAboveBOD={recruitementTypeIdAboveBOD}
                recruitementTypeIdAboveOperationManager={recruitementTypeIdAboveOperationManager}

              />

              <div className='Pagination' >
                <StyledCustomerHeaderRight>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(recruitementTypeIdAbove.length / pageSize)}
                    handlePageChange={handlePageChange}
                  />
                </StyledCustomerHeaderRight>
              </div>
            </>
          )}

        {/*OpeartionManager */}
        {/*CORDINATOR */}
        {(
          roles.includes("admin") ||roles.includes("Cordinator") ||roles.includes("Administrator") ||
          roles.includes("Human Ressource")) && (
            <>
              <OrderTable
                allrecruitementabove={recruitementTypeIdAbove}
                allrecruitementAbove={allrecruitementabove}
                findIdData={findIdData}
                id={id}
                findId={findId}
                setFindIdData={setFindIdData}
                open={open}
                handleInterview={handleInterview}
                roles={roles}
                recruitementTypeIdAbovePMO={recruitementTypeIdAbovePMO}
                recruitementTypeIdAboveBOD={recruitementTypeIdAboveBOD}
                recruitementTypeIdAboveOperationManager={recruitementTypeIdAboveOperationManager}

              />

              <div className='Pagination' >
                <StyledCustomerHeaderRight>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(recruitementTypeIdAbove.length / pageSize)}
                    handlePageChange={handlePageChange}
                  />
                </StyledCustomerHeaderRight>
              </div>
            </>
          )}
        {/*End Cordinator */}



      </AppsContent>
      {isGenerateInterview ? (
        <ConfirmationModal
          open={isGenerateInterview}
          paragraph={'Are you sure you want to Gernerate  this?'}
          onDeny={onGenerateInterview}
          onConfirm={InterviewGenerate}
          modalTitle="Generate Interview"
          handleInterview={handleInterview}
        />
      ) : null}

    </AppsContainer>

  );
};

export default RecruitementStaff;
