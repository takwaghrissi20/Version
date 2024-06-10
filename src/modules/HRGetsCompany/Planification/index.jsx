import React,{useState,useEffect} from 'react';;
import AppRowContainer from '@crema/components/AppRowContainer';
import { Col } from 'antd';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import LastRequestor from "../../Planificationhr/Planification"
import AppComponentHeader from "../../../@crema/components/AppComponentHeader";
import AppComponentCard from "../../../@crema/components/AppComponentCard";
import InterviewCalendar from "../../VisaAndTravel/calendar/InterviewCalendar";
import StaticsTotalRecruitement from '../RecruitementInterview/StaticsTotalRecruitement';
import StaticsTotalInterview from '../RecruitementInterview/StaticsTotalInterview';
import LastRequestorRecruitement from '../RecruitementInterview/LastRequestorRecruitement';


const Planification = () => {

  const [{ apiData: academyData }] = useGetDataApi('/dashboard/academy');
  const [totalNumberInterview, setTotalNumberInterview] = useState(0);
  const [totalNumber, setTotalNumber] = useState(0);
  const [lastRecruitement, setLastRecruitement] = useState("");
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
 
      <AppComponentHeader
        title="Planification Interview">
        </AppComponentHeader>
        <AppRowContainer>

        <Col  xs={24} sm={12} lg={6}>
              <StaticsTotalRecruitement totalNumber={totalNumber}></StaticsTotalRecruitement>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <StaticsTotalInterview totalNumberInterview={totalNumberInterview}></StaticsTotalInterview>
              </Col>
              <Col xs={24} sm={12} lg={10}>
                <LastRequestorRecruitement lastRecruitement={lastRecruitement} ></LastRequestorRecruitement>
              </Col>

        {/* {academyData?.academicStats?.map((item, index) => (
            <Col xs={24} sm={12} lg={6} key={'a' + index}>
              <LastRequestor  stats={item} />
            </Col>
          ))} */}
            <Col xs={24}>
          <AppComponentCard
            title="Interview Calendar"
            component={InterviewCalendar}
      
          />
        </Col>
      

          </AppRowContainer>

   
 
    </>
  );
};

export default Planification;
