import React,{useEffect,useState} from 'react';
import { useNavigate} from "react-router-dom";
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import {
  StyledScrumBoardDetailTitle,
  StyledOrderHeader,
  StyledFormAddWrapper
} from './index.styled';
import AppAnimate from '../../../@crema/components/AppAnimate';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { Col } from 'antd';
import AppCard from '../../../@crema/components/AppCard';
import AppsHeader from '../../../@crema/components/AppsContainer/AppsHeader';
import EmployeeInformation from './EmployeeInformationManagementStaff'
import { useLocation } from 'react-router-dom';
const AddEmployeesIdManagementStaff= () => {
  const location = useLocation();
  const [listInterview, setListInterview] = useState([]);
  const navigate = useNavigate();
  const interviewCode= location.state ? location.state.interviewCode : null;
  const fullName= location.state ? location.state.fullName : null;
  const birthayDate= location.state ? location.state.birthayDate : null;
  const familySituation =location.state ? location.state.familySituation : null;
  const positionToBeFilled=location.state ? location.state.positionToBeFilled : null;
  const department=location.state ? location.state.department : null;
  const projname=location.state ? location.state.projname : null;
  const  agreedJoinedDate=location.state ? location.state.agreedJoinedDate : null; 
  const token = localStorage.getItem("token");


  const fetchDataList = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/list?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }
      const data = await response.json();
      setListInterview(data)
     

    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  useEffect(() => {

    fetchDataList();
  }, []);

  return (
       <>
        <AppPageMeta title='ConstructionStaff' />
    <div style={{marginBottom:"20"}}>
    
{/*        
          <StyledScrumBoardDetailTitle onClick={onGoToBoardList}>
           Add Employees Id 
          </StyledScrumBoardDetailTitle>
          &gt; Add Employee Management Staff */}
        
      <AppAnimate animation='transition.slideUpIn' delay={200}>
    
      <AppRowContainer style={{marginTop:20}}>
      <Col xs={24} lg={24}>
      <AppCard
            title={
              <AppsHeader>
                <StyledOrderHeader>
                <StyledFormAddWrapper >
                <EmployeeInformation 
                  listInterview={listInterview}
                  interviewCode={interviewCode}
                  fullName={fullName}
                  birthayDate={birthayDate}
                  familySituation={familySituation}
                  positionToBeFilled={positionToBeFilled}
                  department={department}
                  projname={projname}
                  agreedJoinedDate={agreedJoinedDate}
                  
                  
                  
                  >
                  </EmployeeInformation>     
               </StyledFormAddWrapper >
       
                </StyledOrderHeader>
              </AppsHeader>
            }
          >
      
          </AppCard>


        </Col>
        {/* <Col xs={24} lg={6}>
        <FilterItemInterviewSheet 
        listInterview={listInterview} 
        intCode={intCode}
        findIdInterview={findIdInterview}
        setInterviewCode={setInterviewCode}
         
        />
        </Col> */}




      </AppRowContainer>
      
      </AppAnimate>
   </div>
   </>
  );
};

export default AddEmployeesIdManagementStaff;
