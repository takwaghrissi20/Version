import React, { useEffect, useState } from 'react';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import html2pdf from 'html2pdf.js';
import { useLocation } from 'react-router-dom';
import { CiSaveDown2 } from "react-icons/ci";
import { Button ,Col} from 'antd';

const ContratA2 = () => {

  const location = useLocation();
  const fullName = location.state ? location.state.fullName : null;
   const  passportNumber = location.state ? location.state.passportNumber : null;
   const  passportSubmitdate=location.state ? location.state.passportSubmitdate : null;
    const arResidenceAdress=location.state ? location.state.arResidenceAdress : null;
    const  companyType=location.state ? location.state.companyType : null;
    const traveldate=location.state ? location.state.traveldate : null;
    const endTravelDate= location.state ? location.state.endTravelDate : null;
    const arDestination=location.state ? location.state.arDestination : null;
    const positionfieledarabe=location.state ? location.state.positionfieledarabe : null;
    const  lastId=location.state ? location.state. lastId : null;
   
   
    const handleDownloadPDF = () => {
      const input = document.getElementById('pdf-content');
      html2pdf(input, {
        filename: 'CONTRACT-B1-CDD-MANAGEMENT-STAFF-SITE.pdf' 
      });
    };

  return (
    <div style={{ backgroundColor: "white" }}>
     <Col xs={24} md={6} style={{ justifyContent: "flex-end",backgroundColor: "white"  }}>
  
  <Button
    variant="contained"
    color="primary"
    startIcon={<CiSaveDown2 />}
    onClick={handleDownloadPDF}
    style={{ marginTop:"2rem" , marginBottom:"2rem", marginLeft:"2rem" }}
  >
    Download PDF
  </Button>



</Col>
<style>
        {`
          @media print {
            body, #pdf-content {
              background: white !important;
            }
          }
        `}
      </style>



{/* 
    <Button onClick={handleDownloadPDF}>Download PDF</Button> */}
    <div id="pdf-content" style={{backgroundColor:"white"}}>
       <Page1  fullName={fullName} passportNumber={passportNumber} 
       passportSubmitdate={passportSubmitdate}
       arResidenceAdress={arResidenceAdress}
       companyType={companyType}
        traveldate={traveldate}
       endTravelDate={endTravelDate}
       arDestination={arDestination}
       positionfieledarabe={positionfieledarabe}
       lastId={lastId}

      /> 
   
      <Page2 />
       <Page3 />
      <Page4 /> 
    </div>



  </div>
);
};



export default ContratA2;
