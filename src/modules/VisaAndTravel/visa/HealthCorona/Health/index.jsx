import { useEffect, useState } from "react";
import AppRowContainer from "../../../../../@crema/components/AppRowContainer";
import AppAnimate from "../../../../../@crema/components/AppAnimate"
import StaticsHealth from "./HeathStatics/HeathStatics";
import {
  AppViewStatic

} from "../../../../../styles/index.styled"


const HealthCertification = () => {
  const [totalVaccin, setTotalVaccin] = useState(0);
  const [totalVaccinFetness, setTotalVaccinFetness] = useState(0);
  const [totalVaccinHepatite, setTotalVaccinHepatite] = useState(0);
  const [totalVaccinIdz, setTotalVaccinIdz] = useState(0);
  const user = localStorage.getItem("role");

  const fetchVaccin = async () => {
    try {
      const countVaccin = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/list`);
      const data = await countVaccin.json();
      setTotalVaccin(data.length)
      const filteredDataFetness = data.filter(item => item.typeVccin === "Fetness Certificate");
      setTotalVaccinFetness(filteredDataFetness .length)
      const filteredDataHepatite = data.filter(item => item.typeVccin === "Hepatitie");
      setTotalVaccinHepatite(filteredDataHepatite.length)
      const filteredDataIDZ = data.filter(item => item.typeVccin === "IDZ/HIV");
      setTotalVaccinIdz(filteredDataIDZ .length)
      const filteredDataCovid = data.filter(item => item.typeVccin === "COVID VACCINE");
   

    } catch (error) {
      console.error('Error fetching Vaccin employees:', error);
    }
  };
  useEffect(() => {
    fetchVaccin()
  }, []);
 
  const HeatlStatics = [
    { title: 'Total Vaccinations', number: totalVaccin, subtitle: "as of 01-December 2024" ,icon: <img src={'/assets/images/vaccination.png'} style={{width:"50px",backgroundColor:"#F4F7FE",borderRadius:'50%',padding:'0.5rem'}}/>},
    { title: 'Nb. of Fitness-to-Work  ', number: totalVaccinFetness, subtitle: "as of 01-December 2024" ,icon: <img src={'/assets/images/weights.png'} style={{width:"50px",backgroundColor:"#F4F7FE",borderRadius:'50%',padding:'0.5rem'}}/>},
    { title: 'Nb. of Hepatitis Cases', number:totalVaccinHepatite, subtitle: "as of 01-December 2024" ,icon: <img src={'/assets/images/healthcare.png'} style={{width:"50px",backgroundColor:"#F4F7FE",borderRadius:'50%',padding:'0.5rem'}}/>},
    { title: 'Nb. of IDZ/HIV Tests', number:totalVaccinIdz, subtitle: "as of 01-December 2024",icon: <img src={'/assets/images/test-tube.png'} style={{width:"50px",backgroundColor:"#F4F7FE",borderRadius:'50%',padding:'0.5rem'}}/> },

  ];

  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <AppRowContainer>
          <AppViewStatic>
                  
            <StaticsHealth 
            HeatlStatics={HeatlStatics}
            user={user}
            />
            </AppViewStatic>
      


        </AppRowContainer>
      </AppAnimate>
  

    </>
  );
};

export default HealthCertification;
