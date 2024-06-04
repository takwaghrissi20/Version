import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from "../../../@crema/components/AppsContainer"
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
  const [totalNumber, setTotalNumber] = useState(0);
  const [lastRecruitement, setLastRecruitement] = useState("");
  const [allrecruitementabove, setAllrecruitementabove] = useState([]);
  const [allrecruitementbelow, setAllrecruitementbelow] = useState([]);
  const [allinterviewStaffManagement, setAllinterviewStaffManagement] = useState([]);
  const [allinterviewConstructionTeam, setAllinterviewConstructionTeam] = useState([]);
  const items = [
    {
      label: 'Staff Management Recruitment',
      key: '1',
      children: <RecruitementStaff allrecruitementabove={allrecruitementabove} ></RecruitementStaff>,
    }, // remember to pass the key prop
    {
      label: 'Constructuction Staff Recruitment',
      key: '2',
      children: <RecruitementConstruction allrecruitementbelow={allrecruitementbelow} ></RecruitementConstruction>,
    },
    {
      label: 'Staff Management Interview',
      key: '3',
      children: <InterviewStaff allinterviewStaffManagement={allinterviewStaffManagement}></InterviewStaff>,
    },
    {
      label: 'Construction Staff Interview',
      key: '4',
      children: <InterviewConstruction allinterviewConstructionTeam={allinterviewConstructionTeam}></InterviewConstruction>,
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

        const responseData = await response.json();
        const numberOfInterview = responseData.length.toString();
        setTotalNumberInterview(numberOfInterview)
        setAllinterviewStaffManagement(responseData)


        //Recruitement
        const responseRecruitement = await fetch("https://dev-gateway.gets-company.com/api/v1/re/list", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (!responseRecruitement.ok) {
          throw new Error('La requête a échoué avec le code ' + responseRecruitement.status);
        }


        const responseDataRecruitement = await responseRecruitement.json();
        const numberOfRecruitement = responseDataRecruitement.length.toString();
        setTotalNumber(numberOfRecruitement)
        const lastRecruitment = responseDataRecruitement[responseDataRecruitement.length - 1];
        setLastRecruitement(lastRecruitment)
        /////////////////////////////////Type Recruitement
        const resulttypebelove = responseDataRecruitement.filter((p) => p.type === "Above Foreman");
        setAllrecruitementabove(resulttypebelove)

        //Formen
        const resulttypebelow = responseDataRecruitement.filter((p) => p.type === "For Foreman & Below");
        setAllrecruitementbelow(resulttypebelow);
        ////////////////////////Interview Construction //////////////////
        const responseInterviewConstruction = await fetch("https://dev-gateway.gets-company.com/api/v1/intc/list", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        if (!responseInterviewConstruction.ok) {
          throw new Error('La requête a échoué avec le code ' + responseInterviewConstruction.status);
        }


        const responseDataInterview = await responseInterviewConstruction.json();
        setAllinterviewConstructionTeam(responseDataInterview)




      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchDataStatiqueTotalInterviewRecruitement();
  }, []);

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

            <Col xs={24} md={10}>
              <LastRequestor lastRecruitement={lastRecruitement} />
            </Col>

            <Col xs={24} md={14}>
              <StaticNumber totalNumberInterview={totalNumberInterview} totalNumber={totalNumber} />
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
