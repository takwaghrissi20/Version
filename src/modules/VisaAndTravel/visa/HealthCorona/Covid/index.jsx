import { useEffect, useState } from "react";
import AppRowContainer from "../../../../../@crema/components/AppRowContainer";
import AppAnimate from "../../../../../@crema/components/AppAnimate"
import StaticsCovid from "./CovidStatics/HeathStatics";
import {
  AppViewStatic

} from "../../../../../styles/index.styled"


const CovidCertification = () => {
  const [totalVaccinCorona, setTotalVaccinCorona] = useState(0);
  const [totalVaccinFirstCorona, setTotalVaccinFirstCorona] = useState(0);
  const [totalVaccinSecondCorona, setTotalVaccinSecondCorona] = useState(0);
  
  const fetchVaccin = async () => {
    try {
      const countVaccin = await fetch(`https://dev-gateway.gets-company.com/api/v1/vac/list`);
        
      const filteredDataCovid = data.filter(item => item.typeVccin === "COVID VACCINE");
      setTotalVaccinCorona(filteredDataCovid.lenght)
      const filteredDataFirstCovid = data.filter(item => 
        item.typeVccin === "COVID VACCINE" && item.corona1Date && !isNaN(Date.parse(item.corona1Date))
      );
      setTotalVaccinFirstCorona(filteredDataFirstCovid)
      const filteredDataSecondCovid = data.filter(item => 
        item.typeVccin === "COVID VACCINE" && item.corona1Date && !isNaN(Date.parse(item.corona2Date))
      );
      setTotalVaccinSecondCorona(filteredDataSecondCovid)
   

    } catch (error) {
      console.error('Error fetching Vaccin employees:', error);
    }
  };
  useEffect(() => {
    fetchVaccin()
  }, []);
 
  const CovidStatics = [
    { title: 'Total Vaccination Corona', number: totalVaccinCorona, subtitle: "as of 01-December 2024" },
    { title: 'Number Of Vaccition First Dose', number:totalVaccinFirstCorona, subtitle: "as of 01-December 2024" },
    { title: 'Number Of Vaccition Second Dose', number:totalVaccinSecondCorona, subtitle: "as of 01-December 2024" },
 

  ];

  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <AppRowContainer>
          <AppViewStatic>
                  
            <StaticsCovid 
            CovidStatics={CovidStatics}/>
            </AppViewStatic>
      


        </AppRowContainer>
      </AppAnimate>
  

    </>
  );
};

export default CovidCertification;
