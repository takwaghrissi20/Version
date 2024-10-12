import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from "../../../@crema/components/AppsContainer";
import AppPageMeta from '../../../@crema/components/AppPageMeta';
import AppRowContainer from '../../../@crema/components/AppRowContainer';
import { StyledBuyCellCard, StyledTabs } from '../../../styles/index.styled';
import AppInfoView from '../../../@crema/components/AppInfoView';
import { Col, Spin } from 'antd';
import RecruitementStaff from './RecruitementStaffManager';
import RecruitementConstruction from './RecruitementConstruction';
import InterviewStaff from './InterviewStaff';
import InterviewConstruction from './InterviewConstruction';
import LastRequestor from "./LastRequestor";
import StaticNumber from "./StaticNumber";
import { useLocation } from 'react-router-dom';
import { position } from 'polished';

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
  const [allrecruitementAbove, setAllrecruitementAbove] = useState([]);
  const [recruitementTypeIdbelow, setRecruitementTypeIdbelow] = useState("");
  const [recruitementTypeIdbelowPMO, setRecruitementTypeIdbelowPMO] = useState("");
  const [recruitementTypeIdbelowBOD, setRecruitementTypeIdbelowBOD] = useState("");
  const [recruitementTypeIdAbovePMO, setRecruitementTypeIdAbovePMO] = useState("");
  const [recruitementTypeIdAboveBOD, setRecruitementTypeIdAboveBOD] = useState("");
  const [interTypeIdManagement, setInterTypeIdManagement] = useState([]);
  const [interTypeIdConstruction, setInterTypeIdConstruction] = useState("");
  const [recruitementTypeIdAboveOperationManager, setRecruitementAboveOperationManager] = useState("");
  const [recruitementTypeIdBelowOperationManager, setRecruitementBelowOperationManager] = useState("");
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(true);
  const location = useLocation();
  const findIdData = location.state ? location.state.findIdData : null;
  // Gets Id BY Profile:
  const userEmail = localStorage.getItem("email");
  const roles = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const departement = localStorage.getItem("departement");
  const name = localStorage.getItem("name");
  const [idgets, setIdgets] = useState("");
  // Project By email
  const fetchProjectEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getProjectByMail?mail=${userEmail}&token=${token}`;
      const response = await fetch(url, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        setIdgets(data?.getsId)
        const ProjectName = data.map(project => project.projName);
        setProject(ProjectName);
        console.log("testtttttg 55555", ProjectName)
      } else {
        console.error("Erreur lors de la récupération du email:", response.status);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération du email:", error);
    }
  };

  const fetchEmployeesEmail = async () => {
    try {
      const url = `https://dev-gateway.gets-company.com/api/v1/emp/getByEmail?email=${userEmail}&token=${token}`;
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
      const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/list?token=${token}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!response.ok) {
        throw new Error('La requête a échoué avec le code ' + response.status);
      }
      const data = await response.json();
      const filteredData = data.filter(item => item?.idemp === idProfile);

      const filteredDataType = filteredData.filter(item => item?.type === "Above Foreman");

      setRecruitementTypeIdAbove(filteredDataType)
      ///////////////All Recruitement Staff
      const filteredAllDataType = data.filter(item => item?.type === "Above Foreman");
      setAllrecruitementAbove(filteredAllDataType)

      ///////////////////
      const filteredDataTypeAboveBOD = data.filter(item => {
        const condition1 = (
          ((item?.oDep === "true" && item?.exDep === "false") ||
            (item?.oDep === "false" && item?.exDep === "true")) &&
          item?.projectName !== "Office" &&
          item?.signatureHod === "true" &&
          !item.position.includes("Leader")
        );
        const condition3 = (
          ((item?.oDep === "true" && item?.exDep === "false") ||
            (item?.oDep === "false" && item?.exDep === "true")) &&
          item?.projectName !== "Office" &&
          item?.signatureHod === "true" &&
          (item.notif === 7 || item.notif === 3 || item.notif === 8) &&
          item.position.includes("Leader")
        );

        const condition2 = (
          item?.projectName === "Office" &&
          item?.signatureHod === "true"
        );

        // Log pour comprendre pourquoi certains éléments ne passent pas
        console.log('Item:', item);
        console.log('Condition 1:', condition1);
        console.log('Condition 2:', condition2);

        return item?.type === "Above Foreman" && (condition1 || condition2 || condition3);
      });

      setRecruitementTypeIdAboveBOD(filteredDataTypeAboveBOD)
      const filteredDataTypeAbovePMO = data.filter(item =>
      ((item?.projectName && item?.type === "Above Foreman" &&
        !item.projectName.includes("Office") &&
        item?.signatureHod === "true") ||
        (item?.projectName &&
          !item.projectName.includes("Office") &&
          item?.notif === 6

        )
      )
      );
      setRecruitementTypeIdAbovePMO(filteredDataTypeAbovePMO)
      //////////////////////////Manager Operationnn
      const filteredDataTypeAboveOperation = data.filter(item =>
        (
          item?.type === "Above Foreman" &&
          (item?.notif === 4 || item?.notif === 7 || item?.notif === 3 || item?.notif === 8) &&
          item?.dep?.includes('Operation') &&
          (
            (item?.oDep === "true" && item?.exDep === "false") ||
            (item?.oDep === "false" && item?.exDep === "true")
          ) &&
          item?.position?.includes("Leader")
        ) ||
        (
          item?.type === "Above Foreman" &&
          item?.notif === 8 &&
          item?.dep?.includes('Engineering')
        )
      );
      setRecruitementAboveOperationManager(filteredDataTypeAboveOperation)

      console.log("Above", filteredDataTypeAboveOperation)


      //////////////////////////////
      ///If Foreman & Below
      const filteredDataTypeForman = filteredData.filter(item => item?.type === "Foreman & Below");
      setRecruitementTypeIdbelow(filteredDataTypeForman)
      const filteredDataTypeFormanBOD = data.filter(item =>
        item?.type === "Foreman & Below" && (
          // Condition 1: oDep or exDep is true, and projectName is not "Office", signatureHod is true
          (
            ((item?.oDep === "true" && item?.exDep === "false") ||
              (item?.oDep === "false" && item?.exDep === "true")) &&
            item?.projectName !== "Office" &&
            item?.signatureHod === "true" &&
            !item.position.includes("Leader")
          ) ||
          (
            ((item?.oDep === "true" && item?.exDep === "false") ||
              (item?.oDep === "false" && item?.exDep === "true")) &&
            item?.projectName !== "Office" &&
            item?.signatureHod === "true" &&
            !item.position.includes("Manager")
          ) ||


          // Condition 2: Project is "Office", signatureHod is true
          (
            item?.projectName === "Office" &&
            item?.signatureHod === "true"
          )
        )
      );

      setRecruitementTypeIdbelowBOD(filteredDataTypeFormanBOD);
      ///setRecruitementTypeIdbelowPMO
      const filteredDataTypeFormanPMO = data.filter(item =>
        item?.type === "Foreman & Below" && (
          // Condition 1: oDep or exDep is true, and projectName is not "Office", signatureHod is true
          (
            item?.projectName !== "Office" &&
            item?.signatureHod === "true"
          )
        )
      );

      console.log('Filtered Data pmo', filteredDataTypeFormanPMO);
      setRecruitementTypeIdbelowPMO(filteredDataTypeFormanPMO);
      //////OperationManager  item?.type === "Foreman & Below"
      const filteredDataTypeBelowOperation = data.filter(item =>
        (
          item?.type === "Foreman & Below" &&
          item?.notif === 4 &&
          item?.dep?.includes('Operation') &&
          (
            (item?.oDep === "true" && item?.exDep === "false") ||
            (item?.oDep === "false" && item?.exDep === "true")
          ) &&
          item?.position?.includes("Leader")
        ) ||
        (
          item?.type === "Foreman & Below" &&
          item?.notif === 8 &&
          item?.dep?.includes('Engineering')
        )

      );
      setRecruitementBelowOperationManager(filteredDataTypeBelowOperation)

      setRecruitementTypeIdbelow(filteredDataTypeForman)


    } catch (error) {
      console.error('Erreur lors de la récupération List Recruitement', error);
    }
  };

  // const fetchInterviewTypeProfileManagement = async () => {
  //   try {
  //     const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/list?token=${token}`, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error('La requête a échoué avec le code ' + response.status);
  //     }

  //     const data = await response.json();
  //     const filteredData = data.filter(item => item?.idemp === idProfile);
  //     const filteredDataType = filteredData.filter(item => item?.type === "Above Foreman");
  //     setRecruitementTypeIdAbove(filteredDataType)

  //     ///If Foreman & Below
  //     const filteredDataTypeForman = filteredData.filter(item => item?.type === "Foreman & Below");
  //     setRecruitementTypeIdbelow(filteredDataTypeForman)

  //   } catch (error) {
  //     console.error('Erreur lors de la récupération List Recruitement', error);
  //   }
  // };

  const items = [
    {
      label: 'Staff Management Recruitment',
      key: '1',
      children:
        <RecruitementStaff
          recruitementTypeIdAbove={recruitementTypeIdAbove}

          roles={roles}
          allrecruitementabove={allrecruitementabove}
          token={token}
          loading={loading}
          setLoading={setLoading}
          recruitementTypeIdAbovePMO={recruitementTypeIdAbovePMO}
          recruitementTypeIdAboveBOD={recruitementTypeIdAboveBOD}
          allrecruitementAbove={allrecruitementAbove}
          recruitementTypeIdAboveOperationManager={recruitementTypeIdAboveOperationManager}
          
        />,
    },
    {
      label: 'Constructuction Staff Recruitment',
      key: '2',
      children: <RecruitementConstruction
        allrecruitementbelow={allrecruitementbelow}
        recruitementTypeIdbelow={recruitementTypeIdbelow}
        recruitementTypeIdbelowBOD={recruitementTypeIdbelowBOD}
        recruitementTypeIdbelowPMO={recruitementTypeIdbelowPMO}
        roles={roles}
        token={token}
        loading={loading}
        setLoading={setLoading}
        recruitementTypeIdAboveOperationManager={recruitementTypeIdAboveOperationManager}
        recruitementTypeIdBelowOperationManager={recruitementTypeIdBelowOperationManager}

      />,
    },
    {/*Interview Sheet**/ },
    ...((roles?.includes('Cordinator') || roles?.includes('admin') || roles?.includes('PMO') ||
      roles?.includes('bod') || roles?.includes('Ressource Manager') || roles?.includes('Manager')) ? [{
        label: 'Staff Management Interview',
        key: '3',
        children: <InterviewStaff
          allinterviewStaffManagement={allinterviewStaffManagement}
          token={token}
          roles={roles}
          departement={departement}

        />

      }] : []),

    // {
    //   label: 'Staff Management Interview',
    //   key: '3',
    //   children: <InterviewStaff 
    //   allinterviewStaffManagement={allinterviewStaffManagement}


    //   />,
    // },
    ...((roles?.includes('Cordinator') || roles?.includes('Ressource Manager') || roles?.includes('Manager') ||
      roles?.includes('admin') || roles?.includes('PMO') || roles?.includes('bod') || roles?.includes('Ressource')) ? [{
        label: 'Construction Staff Interview',
        key: '4',
        children: <InterviewConstruction
          allinterviewConstructionTeam={allinterviewConstructionTeam}
          token={token}
        />

      }] : []),
    // {
    //   label: 'Construction Staff Interview',
    //   key: '4',
    //   children: <InterviewConstruction allinterviewConstructionTeam={allinterviewConstructionTeam} />,
    // },
  ];

  useEffect(() => {
    const fetchDataStatiqueTotalInterviewRecruitement = async () => {
      try {
        const endPoint =
          process.env.NODE_ENV === "development"
            ? "https://dev-gateway.gets-company.com"
            : "";

        const response = await fetch(`https://dev-gateway.gets-company.com/api/v1/int/list?token=${token}`, {
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
        setTotalNumberInterview(responseData.length);
        setAllinterviewStaffManagement(responseData);


        const responseRecruitement = await fetch(`https://dev-gateway.gets-company.com/api/v1/re/list?token=${token}`, {
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

        const ItRecruitement = resulttypebelove.filter(p => p.dep && p?.dep?.includes('IT'));
        setAllrecruitementaboveItRecruitement(ItRecruitement.length);

        const resulttypebelow = responseDataRecruitement.filter(p => p.type === "Foreman & Below");
        setAllrecruitementbelow(resulttypebelow);

        const responseInterviewConstruction = await fetch(`https://dev-gateway.gets-company.com/api/v1/intc/list?token=${token}`, {
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
  // useEffect(() => {
  //   if (!sessionStorage.getItem('reloaded')) {
  //     sessionStorage.setItem('reloaded', 'true');
  //     window.location.reload();
  //   }
  // }, []);

  useEffect(() => {
    fetchProjectEmail()
    if (!roles?.includes("admin")) {
      console.log("Not Admin");
      fetchEmployeesEmail().then(() => {
        if (idProfile) {
          fetchRecruitementTypeProfile();
        }
      });
    }
    ///////////
    if (loading1) {
      const timer = setTimeout(() => {
        setLoading1(false);

      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [roles, idProfile])


  return (
    <>
      <div>
        {loading1 ? (
          <Spin className="loading-charge" size="large" />
        ) : (
          <>
            <AppsContainer
              title={messages['sidebar.app.recruitementinterview']}
              cardStyle={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              fullView
            >
              {/* Layout of dashboards */}
              <AppPageMeta title="InterviewRecruitement" />
              <div>
                <AppRowContainer ease="easeInSine">
                  {roles === "admin" && (
                    <>
                      <Col xs={24} md={10}>
                        <LastRequestor lastRecruitement={lastRecruitement} />
                      </Col>
                      <Col xs={24} md={14}>
                        <StaticNumber
                          allrecruitementaboveItRecruitement={allrecruitementaboveItRecruitement}
                          totalNumberInterview={totalNumberInterview}
                          totalNumber={totalNumber}
                          user={roles}
                        />
                      </Col>
                    </>
                  )}

                </AppRowContainer>
              </div>

              <AppsContainer type="bottom" fullView>
                <StyledBuyCellCard style={{ paddingLeft: "10px" }} heightFull>
                  <StyledTabs defaultActiveKey="1" items={items} />
                </StyledBuyCellCard>
              </AppsContainer>

              <AppInfoView />
            </AppsContainer>
          </>
        )}
      </div>
    </>

  );
};

export default RecruitementInterview;
