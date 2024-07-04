import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from "../../../@crema/components/AppsContainer";
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Col } from 'antd';
import RecruitementStaff from './RecruitementStaffManager';
import RecruitementConstruction from './RecruitementConstruction';
import InterviewStaff from './InterviewStaff';
import InterviewConstruction from './InterviewConstruction';
import LastRequestor from "./LastRequestor";
import StaticNumber from "./StaticNumber";

const RecruitementInterview = () => {
  const { messages } = useIntl();
  const [totalNumberInterview, setTotalNumberInterview] = useState(0);
  const [idProfile, setIdProfile] = useState("");
  const [totalNumber, setTotalNumber] = useState(0);
  const [lastRecruitement, setLastRecruitement] = useState("");
  const [allrecruitementabove, setAllrecruitementabove] = useState([]);
  const [allrecruitementaboveItRecruitement, setAllrecruitementaboveItRecruitement] = useState([]);
  const [allrecruitementbelow, setAllrecruitementbelow] = useState([]);
  const [allinterviewStaffManagement, setAllinterviewStaffManagement] = useState([]);
  const [allinterviewConstructionTeam, setAllinterviewConstructionTeam] = useState([]);
  const [recruitementTypeIdAbove, setRecruitementTypeIdAbove] = useState([]);
  const [recruitementTypeIdbelow, setRecruitementTypeIdbelow] = useState("");
  // Gets Id BY Profile:
  const userEmail = localStorage.getItem("email");
  const roles = localStorage.getItem("role");

  const fetchEmployeesEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}`;
      const response = await fetch(url, { method: "GET" });
      if (response.ok) {
        const data = await response.json();
        setIdProfile(data?.getsId);
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };

  const fetchRecruitementTypeProfile = async () => {
    try {
      const endPoint =
        process.env.NODE_ENV === "development"
          ? "https://dev-gateway.gets-company.com"
          : "";

      const response = await fetch(`${endPoint}/api/v1/re/list`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué Recruitement ' + response.status);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La réponse n'est pas au format JSON");
      }

      const data = await response.json();
      console.log("all recruitement", data);
      console.log("idProfile", idProfile);

      
        const filteredData = data.filter(item => item?.idemp === idProfile);
        console.log("Filtered recruitement", filteredData);
        const filteredDataType = filteredData.filter(item => item?.type === "Above Foreman");
        console.log("Filtered recruitementrrrr",filteredDataType);
        setRecruitementTypeIdAbove(filteredDataType)
        
        ///If Foreman & Below
        const filteredDataTypeForman = filteredData.filter(item => item?.type === "Foreman & Below");
        console.log("filteredDataTypeForman33333",filteredDataTypeForman)
        setRecruitementTypeIdbelow(filteredDataTypeForman)

         ///End If Foreman & Below
        // Use filteredData as needed
      
    } catch (error) {
      console.error('Erreur lors de la récupération all Recruitement', error);
    }
  };

  const items = [
    {
      label: 'Staff Management Recruitment',
      key: '1',
      children: <RecruitementStaff 
      recruitementTypeIdAbove={recruitementTypeIdAbove}
      roles={roles}
      allrecruitementabove={allrecruitementabove} />,
    },
    {
      label: 'Constructuction Staff Recruitment',
      key: '2',
      children: <RecruitementConstruction allrecruitementbelow={allrecruitementbelow} 
      recruitementTypeIdbelow={recruitementTypeIdbelow}
      roles={roles}
      
      />,
    },
    {
      label: 'Staff Management Interview',
      key: '3',
      children: <InterviewStaff 
      allinterviewStaffManagement={allinterviewStaffManagement}

      
      
      
      />,
    },
    {
      label: 'Construction Staff Interview',
      key: '4',
      children: <InterviewConstruction allinterviewConstructionTeam={allinterviewConstructionTeam} />,
    },
  ];

  useEffect(() => {
    const fetchDataStatiqueTotalInterviewRecruitement = async () => {
      try {
        const endPoint =
          process.env.NODE_ENV === "development"
            ? "https://dev-gateway.gets-company.com"
            : "";

        const response = await fetch("https://dev-gateway.gets-company.com/api/v1/int/list", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!response.ok) {
          throw new Error('La requête a échoué avec le code ' + response.status);
        }

        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new TypeError("La réponse n'est pas au format JSON");
        }
        const responseData = await response.json();
        console.log("interviewww",responseData)
        setTotalNumberInterview(responseData.length);
        setAllinterviewStaffManagement(responseData);
        //////Interview Bu Id
        





        //End Interview bu Id 

        const responseRecruitement = await fetch("https://dev-gateway.gets-company.com/api/v1/re/list", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!responseRecruitement.ok) {
          throw new Error('La requête a échoué avec le code ' + responseRecruitement.status);
        }

        const responseDataRecruitement = await responseRecruitement.json();
        setTotalNumber(responseDataRecruitement.length);
        setLastRecruitement(responseDataRecruitement[responseDataRecruitement.length - 1]);

        const resulttypebelove = responseDataRecruitement.filter(p => p.type === "Above Foreman");
        setAllrecruitementabove(resulttypebelove);

        const ItRecruitement = resulttypebelove.filter(p => p.dep && p.dep.includes('IT'));
        setAllrecruitementaboveItRecruitement(ItRecruitement.length);

        const resulttypebelow = responseDataRecruitement.filter(p => p.type === "Foreman & Below");
        setAllrecruitementbelow(resulttypebelow);

        const responseInterviewConstruction = await fetch("https://dev-gateway.gets-company.com/api/v1/intc/list", {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (!responseInterviewConstruction.ok) {
          throw new Error('La requête a échoué avec le code ' + responseInterviewConstruction.status);
        }

        const responseDataInterview = await responseInterviewConstruction.json();
        setAllinterviewConstructionTeam(responseDataInterview);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchDataStatiqueTotalInterviewRecruitement();
  }, []);

  useEffect(() => {
    if (!roles.includes("admin")) {
      console.log("Not Admin");
      fetchEmployeesEmail().then(() => {
        if (idProfile) {
          fetchRecruitementTypeProfile();
        }
      });
    }
  }, [roles, idProfile])

  
  return (

    <>
      <AppsContainer
        title={messages['sidebar.app.recruitementinterview']}
        cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
        fullView
      >
        {/*Layout of dahbords*/}
        <AppPageMeta title='InterviewRecruitement' />
        <div>
          <AppRowContainer ease={'easeInSine'}>
            {roles==="admin" ?
              <Col xs={24} md={10}>
              <LastRequestor
              
              lastRecruitement={lastRecruitement} />
            </Col>
            :null
                         
          }        
            <Col xs={24} md={14}>
              <StaticNumber 
              allrecruitementaboveItRecruitement={allrecruitementaboveItRecruitement}          
              totalNumberInterview={totalNumberInterview} totalNumber={totalNumber} user={roles}/>
            </Col>

            {/* <Col  xs={24} sm={12} lg={6}>
              <StaticsTotalRecruitement totalNumber={totalNumber}></StaticsTotalRecruitement>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StaticsTotalInterview totalNumberInterview={totalNumberInterview}></StaticsTotalInterview>
              </Col>
              <Col xs={24} sm={12} lg={10}>
                <LastRequestorRecruitement lastRecruitement={lastRecruitement} ></LastRequestorRecruitement>
              </Col> */}

          </AppRowContainer>
        </div>

        <AppsContainer
          title={messages['sidebar.app.recruitementinterview']}
          type='bottom'
          fullView>
          <StyledBuyCellCard style={{ paddingLeft: "10px" }} heightFull>
            <StyledTabs defaultActiveKey='1' items={items} />
          </StyledBuyCellCard>
        </AppsContainer>

        <AppInfoView />

      </AppsContainer>


      {/* <AppsContainer
      title={messages['sidebar.Recruitement.InterviewSheet']}
      sidebarContent={
        <ProductsSidebar
          filterData={filterData}
          setFilterData={setFilterData}
        />
      }
    > */}
      {/* <AppPageMeta title='Products Listing' />
      <ProductListing
        filterData={filterData}
        viewType={viewType}
        setViewType={setViewType}
        setFilterData={setFilterData}
      />
    </AppsContainer> */}
    </>
  );
};

export default RecruitementInterview;
