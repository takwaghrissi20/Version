import React, { useEffect, useState } from 'react';
import { Input, List } from 'antd';
import AppsContainer from "../../../../@crema/components/AppsContainer"
import OrderTable from './DataTableRecruitementConstruction';
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
const RecruitementConstruction = ({ allrecruitementbelow, roles,
  recruitementTypeIdbelow, token, recruitementTypeIdbelowBOD,
  recruitementTypeIdbelowPMO,
  recruitementTypeIdBelowOperationManager

}) => {
  const navigate = useNavigate();
  const [recruitementbelow, setRecruitementbelow] = useState([]);
  const [recruitementbelowid, setRecruitementbelowid] = useState(recruitementTypeIdbelow);
  const [recruitementbelowFiltrer, setRecruitementbelowFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGenerateInterview, onGenerateInterview] = useState(false);
  const [findIdData, setFindIdData] = useState(null);
  const [id, setId] = useState(0);
  const [loading, setLoading] = useState(false);

  const count = allrecruitementbelow.length
  useEffect(() => {
    fetchRecruitementbelow();
  }, [currentPage, pageSize, nameFilter, count, id]);

  const fetchRecruitementbelow = async () => {
    try {

      const url = `https://dev-gateway.gets-company.com/api/v1/re/getRecByType?size=${pageSize}&page=${currentPage}&type=Foreman & Below&sortBy=desiredDate`;
      const response = await fetch(url);


      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }
      const data = await response.json();
      console.log("getRecByType", data)
      setRecruitementbelow(data);
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
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);
    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/filterByPosition?position=$${filterValue}&token=${token}`);
        if (!response.ok) {
          throw new Error('Failed to filter Recruitement');
        }
        const data = await response.json();
        setRecruitementbelowFiltrer(data)
        setRecruitementbelow(data);
        setIsDropdownOpen(true);
      } catch (error) {
        console.error('Error filtering Recruitement:', error);
      }
      if (filterValue.length > 0) {
        setIsDropdownOpen(true);
        // Filtrer les données en fonction de la valeur de l'entrée
        const filteredData = // votre logique de filtrage ici
          setRecruitementbelowFiltrer(filteredData);
      } else {
        setIsDropdownOpen(false);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
    }
  };

  const InterviewGenerate = async () => {
    navigate(`/dashboards/hr/InterviewSheetContructionStaff/codeJob=${id}`, {
      state: {
        DesiredDate: findIdData?.desiredDate,
        JobCode: findIdData?.jobCode,
        totalNumber: findIdData?.totalNumber,
        level: findIdData?.experience,
        projectName: findIdData?.projectName,
        position: findIdData?.position,
        experience: findIdData?.experience,
        dep: findIdData?.dep,
        requestedDicipline: findIdData?.requestedDicipline,
        requestName: findIdData?.requestName,
        idemp: findIdData?.idemp,



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
                dataSource={recruitementbelowFiltrer}
                renderItem={(item) => (
                  <List.Item onClick={() => handleListItemClick(item)}>
                    {item.position}
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
        {/*bOD DeSCITION*/}
        {roles.includes('bod') && (
          <>
            <OrderTable
              allrecruitementbelow={recruitementbelow}
              recruitementTypeIdbelowBOD={recruitementTypeIdbelowBOD}
              findIdData={findIdData}
              id={id}
              findId={findId}
              setFindIdData={setFindIdData}
              open={open}
              handleInterview={handleInterview}
              roles={roles}
            />
            <div className='Pagination' >
              <StyledOrderHeaderRight>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(recruitementTypeIdbelowBOD.length / pageSize)}
                  handlePageChange={handlePageChange} />

              </StyledOrderHeaderRight>

            </div>
          </>
        )
        }
        {/*eND bOD Desction*/}
        {roles.includes('PMO') && (
          <>
            <OrderTable
              recruitementTypeIdbelowPMO={recruitementTypeIdbelowPMO}
              findIdData={findIdData}
              id={id}
              findId={findId}
              setFindIdData={setFindIdData}
              open={open}
              handleInterview={handleInterview}
              roles={roles}
            />
            <div className='Pagination' >
              <StyledOrderHeaderRight>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(recruitementTypeIdbelowPMO.length / pageSize)}
                  handlePageChange={handlePageChange} />

              </StyledOrderHeaderRight>

            </div>
          </>
        )
        }
        {(roles.includes("admin") ||
          roles.includes("Cordinator")
          || roles.includes("Administrator")
          || (roles.includes("Human Ressource") &&
            roles.includes("Manager")))
          && (
            <>
              <OrderTable
                allrecruitementbelow={allrecruitementbelow}
                findIdData={findIdData}
                id={id}
                findId={findId}
                setFindIdData={setFindIdData}
                open={open}
                handleInterview={handleInterview}
                roles={roles}
              />
              <div className='Pagination'>
                <StyledOrderHeaderRight>
                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(count / pageSize)}
                    handlePageChange={handlePageChange}
                  />
                </StyledOrderHeaderRight>
              </div>
            </>
          )}
        {(((roles.includes("Manager") && !roles.includes("Human Ressource")) && !roles.includes("Operation")
        ) || roles.includes("Leader")) && (
            <>
              <OrderTable
                allrecruitementbelow={recruitementTypeIdbelow}
                recruitementTypeIdBelowOperationManager={recruitementTypeIdBelowOperationManager}
                findIdData={findIdData}
                id={id}
                findId={findId}
                setFindIdData={setFindIdData}
                open={open}
                handleInterview={handleInterview}
                roles={roles}

              />
              <div className='Pagination' >

                <StyledOrderHeaderRight>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(recruitementTypeIdbelow.length / pageSize)}
                    handlePageChange={handlePageChange} />
                </StyledOrderHeaderRight>

              </div>
            </>


          )}
        {((roles.includes("Manager") && roles.includes("Operation")
        )) && (
            <>
              <OrderTable

                recruitementTypeIdBelowOperationManager={recruitementTypeIdBelowOperationManager}
                findIdData={findIdData}
                id={id}
                findId={findId}
                setFindIdData={setFindIdData}
                open={open}
                handleInterview={handleInterview}
                roles={roles}

              />
              <div className='Pagination' >

                <StyledOrderHeaderRight>

                  <Pagination
                    currentPage={currentPage}
                    totalPages={Math.ceil(recruitementTypeIdbelow.length / pageSize)}
                    handlePageChange={handlePageChange} />
                </StyledOrderHeaderRight>

              </div>
            </>


          )}

        {/* {(!roles.includes("admin")) ?
       
        :null} */}
        {/* <OrderTable 
         allrecruitementabove={filteredData}
         /> */}
      </AppsContent>
      {isGenerateInterview ? (
        <ConfirmationModal
          open={isGenerateInterview}
          paragraph={'Are you sure you want to Gernerate  this Interview?'}
          onDeny={onGenerateInterview}
          onConfirm={InterviewGenerate}
          modalTitle="Generate Interview"
          handleInterview={handleInterview}
        />
      ) : null}

    </AppsContainer>

  );
};

export default RecruitementConstruction;
