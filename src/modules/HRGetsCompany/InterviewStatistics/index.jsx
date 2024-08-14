import { useEffect, useState } from "react";
import AppRowContainer from "../../../@crema/components/AppRowContainer";
import AppAnimate from "../../../@crema/components/AppAnimate"
import InfoDataHrRecruitement from "../../../modules/dashboards/StaticsHR/InterviewStatistic";
import {
  AppViewStatic

} from "../../../styles/index.styled"


const InterviewStatics = () => {

  const [jobOffers, setJobOffers] = useState(0);
  const [totalInterviews, setTotalInterviews] = useState(0);
  const [filterinterviewaccepted, setFilterinterviewaccepted] = useState(0);
  const [filteroffresrejected, setFilteroffresrejected] = useState(0);
  const [ staticsDataaccepted, setStaticsDataaccepted] = useState([]);
 
  useEffect(() => {
    const fetchDataStatique = async () => {
      try {
        const endPoint =
          process.env.NODE_ENV === "development"
            ? "https://dev-gateway.gets-company.com"
            : "";

            const response = await fetch("https://dev-gateway.gets-company.com/api/v1/re/list", {
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
        const filtered = responseData.filter(p => p.jobCode !== 0);
        const numberOfJobOffers = filtered.length.toString();
        console.log("numberOfJobOffers", numberOfJobOffers)
        setJobOffers(numberOfJobOffers)
        //Api rejected offres
        const filteredjobrejected = responseData.filter(p => p.notif !== 3);
        const numberOfJobrejected = filteredjobrejected.length.toString();
        setFilteroffresrejected(numberOfJobrejected)
        //Count Total Interview
        //Api Interview List 
        const responseinterview = await fetch("https://dev-gateway.gets-company.com/api/v1/int/list", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        
        if (!response.ok) {
          throw new Error('La requête a échoué avec le code ' + response.status);
        }
        
         
        const responseDataInterview = await responseinterview.json();
        const numberOfTotalInterview = responseDataInterview.length.toString();
        setTotalInterviews(numberOfTotalInterview)
        //Api ACCepted Employees 
  
        const filteredInterviewaccepted = responseDataInterview.filter(p => p.notif == 3);
        const numberOfJobOffersinterviewaccepted = filteredInterviewaccepted.length.toString();
        setFilterinterviewaccepted(numberOfJobOffersinterviewaccepted)

      //Accepter Interview 
      const filteredDataaccepted = responseDataInterview.filter(interview => interview.notif === 3);
    
      setStaticsDataaccepted(filteredDataaccepted)
   

      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchDataStatique();
  }, []);
  const listInerview = [
    { title: 'Job Offers', number: jobOffers, subtitle: "Job Offers" ,icon: <img src={'/assets/images/job-offer.png'} style={{width:'15%'}}  /> },
    { title: 'Total Interviews', number: totalInterviews, subtitle: "Interviews",icon:<img src={'/assets/images/total-interview.png'} style={{width:'15%'}}  /> },
    { title: 'Accepted Employees', number: filterinterviewaccepted, subtitle: "Employees",icon:<img src={'/assets/images/choose.png'} style={{width:'15%'}}  />},
    { title: 'Rejected offers', number: filteroffresrejected, subtitle: "Offres" ,icon:<img src={'/assets/images/rejected.png'} style={{width:'15%'}}  />},
  ];

  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <AppRowContainer>
          <AppViewStatic>
         
          
            <InfoDataHrRecruitement staticsDataaccepted ={staticsDataaccepted}
            listInerview={listInerview}/>
            </AppViewStatic>
      


        </AppRowContainer>
      </AppAnimate>
  

    </>
  );
};

export default InterviewStatics;
