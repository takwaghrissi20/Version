import React, { useEffect, useState } from 'react';
import { Input,List } from 'antd';
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
import { useLocation } from 'react-router-dom';
const ViewInterviewStaff = ({ allrecruitementabove }) => {
/////////////////////////////////////////////////////
  const location = useLocation();

  const interviewCode = location.state ? location.state.interviewCode : null;
  const jobCode = location.state ? location.state.jobCode : null;
  const interviwDate = location.state ? location.state.interviwDate : null;
  const totalAccept = location.state ? location.state.totalAccept: null;
  const totalInterv = location.state ? location.state.totalInterv : null;
  const totalReqPos = location.state ? location.state.totalReqPos : null;
  const totalRequiredGrade = location.state ? location.state.totalRequiredGrade: null;
  const idNumb = location.state ? location.state.idNumb : null
  const department = location.state ? location.state.  department: null
  const projname = location.state ? location.state.projname : null
  const requiredGrade= location.state ? location.state.requiredGrade : null
  const requiredQualification= location.state ? location.state.requiredQualification : null
  const positionToBeFilled = location.state ? location.state.positionToBeFilled: null
  const fullName = location.state ? location.state.fullName : null
  const birthayDate = location.state ? location.state.birthayDate : null
  const  familySituation = location.state ? location.state.familySituation : null
  const  experience = location.state ? location.state. experience : null
  const educationLevel = location.state ? location.state.educationLevel : null
  const  diploma = location.state ? location.state. diploma: null
  const telCondidate = location.state ? location.state.telCondidate : null
  const urlCv= location.state ? location.state.urlCv: null
  const validatesFor= location.state ? location.state.validatesFor: null
  const goTotest2 = location.state ? location.state.goTotest2 : null












  ////////////////////////////
  const navigate = useNavigate();
  const [recruitementabove , setRecruitementabove ] = useState([]);
  const [recruitementaboveFiltrer, setRecruitementaboveFiltrer] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [nameFilter, setNameFilter] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isGenerateInterview, onGenerateInterview] = useState(false);
  const [findIdData, setFindIdData] = useState(null);
  const [id, setId] = useState(0);
  const count=allrecruitementabove.length
  useEffect(() => {
    fetchRecruitementabove();
  }, [currentPage, pageSize, nameFilter,count,id]);

  const fetchRecruitementabove = async () => {
    try {

      const url = `https://dev-gateway.gets-company.com/api/v1/re/getRecByType?size=${pageSize}&page=${currentPage}&type=Above Foreman&sortBy=desiredDate`;
      const response = await fetch(url);
     

      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const data = await response.json();
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
    setNameFilter(item.position ); 
    handleSearch({ target: { value: item.position } }); 
    setIsDropdownOpen(false)
  };
  const handleNameFilterChange = async (event) => {
    const filterValue = event.target.value.trim(); // Trim whitespace from input value
    setNameFilter(filterValue);  
    if (filterValue !== '') {
      try {
        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/filterByPosition?position=$${filterValue}`);
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
        // Filtrer les données en fonction de la valeur de l'entrée
        const filteredData = // votre logique de filtrage ici
        setRecruitementaboveFiltrer(filteredData);
      } else {
        setIsDropdownOpen(false);
      }
    } else {
      setIsDropdownOpen(false); // Close dropdown if filter is empty
    }
  };
  
  const InterviewGenerate= async () => {
  
    navigate(`/dashboards/hr/${id}`, {
      state: {
        DesiredDate:findIdData?.desiredDate,
        JobCode:findIdData?.jobCode,
        totalNumber:findIdData?.totalNumber,
        level:findIdData?.experience,
        projectName:findIdData?.projectName,
        position:findIdData?.position,
        experience:findIdData?.experience,
     
               
      }


    });

  
  } 
  //Fin Bu Id 
  const findId = async (code) => {
    try {
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/findId?code=${code}`, {
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
                style={{zIndex:5, borderRadius: "6px", maxHeight: '200px', overflowY: 'auto', paddingLeft: "10px",
                background: "white", position: "absolute", top: "3.5rem", width: "15%", boxShadow: "5px 5px 5px 5px rgba(64, 60, 67, .16)"}}
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
          <OrderTable  
          allrecruitementabove={recruitementabove}  
           findIdData={findIdData}
          id={id}
          findId={findId} 
          setFindIdData={setFindIdData}
          open={open}
          handleInterview={handleInterview}
          
          />
        {/* <OrderTable 
         allrecruitementabove={filteredData}
         /> */}
          <div className='Pagination' >
              <StyledCustomerHeaderRight>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(count / pageSize)}
                  handlePageChange={handlePageChange}
                />
              </StyledCustomerHeaderRight>
            </div>
        
      </AppsContent>
      {isGenerateInterview? (
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

export default ViewInterviewStaff ;
