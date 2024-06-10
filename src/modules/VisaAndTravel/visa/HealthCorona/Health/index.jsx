import { useEffect, useState } from "react";
import AppRowContainer from "../../../../../@crema/components/AppRowContainer";
import AppAnimate from "../../../../../@crema/components/AppAnimate"
import StaticsHealth from "./HeathStatics/HeathStatics";
import {
  AppViewStatic

} from "../../../../../styles/index.styled"


const HealthCertification = () => {

 
  const HeatlStatics = [
    { title: 'Total Vaccination', number: 20, subtitle: "as of 01-December 2024" },
    { title: 'Number Of Fitness to work', number: 20, subtitle: "as of 01-December 2024" },
    { title: 'Number of Hepatite', number:20, subtitle: "as of 01-December 2024" },
    { title: 'Number of IDZ/HIV tEST', number:20, subtitle: "as of 01-December 2024" },
  ];

  return (
    <>
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <AppRowContainer>
          <AppViewStatic>
                  
            <StaticsHealth 
            HeatlStatics={HeatlStatics}/>
            </AppViewStatic>
      


        </AppRowContainer>
      </AppAnimate>
  

    </>
  );
};

export default HealthCertification;
