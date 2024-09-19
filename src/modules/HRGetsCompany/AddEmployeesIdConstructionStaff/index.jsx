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
import EmployeeInformationConstruction from './EmployeeInformationConstructionStaff'
import { useLocation } from 'react-router-dom';
const AddEmployeesIdConstructionStaff = ({


}) => {
  const location = useLocation();

  const navigate = useNavigate();
  const interviewCode= location.state ? location.state.interviewCode : null;
  const fullName= location.state ? location.state.fullName : null;
  const birthayDate= location.state ? location.state.birthayDate : null;
  const familySituation =location.state ? location.state.familySituation : null;
  const positionToBeFilled=location.state ? location.state.positionToBeFilled : null;
  const department=location.state ? location.state.department : null;
  const projname=location.state ? location.state.projname : null;
  const  agreedJoinedDate=location.state ? location.state.agreedJoinedDate : null; 
  const [listInterview, setListInterview] = useState([]);
  const [findIdInterview, setFindIdInterview] = useState([]);
 const token = localStorage.getItem("token")

  const fetchDataList = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/list?token=${token}`, {
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
    console.log("Second useEffect");
    fetchDataList();
   
    // Your logic here
  }, []);
  return (
       <>
        <AppPageMeta title='ConstructionStaff' />
        <div style={{marginBottom:"20"}}>
{/*     
        <>
          <StyledScrumBoardDetailTitle onClick={onGoToBoardList}>
           Add Employees Id 
          </StyledScrumBoardDetailTitle>
          &gt; Add Employee Construction Staff
       </>    */}
      
      <AppAnimate animation='transition.slideUpIn' delay={200}>
    
      <AppRowContainer style={{marginTop:20}}>
      <Col xs={24} lg={24}>
      <AppCard
            title={
              <AppsHeader>
                <StyledOrderHeader>
                <StyledFormAddWrapper >
                <EmployeeInformationConstruction 
                 listInterview={listInterview} 
                 fullName={fullName}
                 birthayDate={birthayDate}
                 familySituation={familySituation}
                 positionToBeFilled={positionToBeFilled}
                 department={department}
                 projname={projname}
                 agreedJoinedDate={agreedJoinedDate}
                 interviewCode={interviewCode}
                 
                           
                 ></EmployeeInformationConstruction>
      
              </StyledFormAddWrapper >
       
                </StyledOrderHeader>
              </AppsHeader>
            }
          >
      
          </AppCard>


        </Col>
       




      </AppRowContainer>
      
      </AppAnimate>
   </div>
   </>
  );
};

export default AddEmployeesIdConstructionStaff;
