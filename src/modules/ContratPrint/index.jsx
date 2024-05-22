import React from 'react';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import html2pdf from 'html2pdf.js';
import { useLocation } from 'react-router-dom';
import { Button ,Col} from 'antd';
import {
  StyledScrumBoardDetailTitle,

} from './index.styled';
import { useNavigate} from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";

const ContratB1 = () => {

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
    const navigate = useNavigate();
    const onGoToBack = () => {
      navigate(-1);
    };

  return (
    <div>
       <StyledScrumBoardDetailTitle onClick={onGoToBack}>
            Add Employee Management Staff
          </StyledScrumBoardDetailTitle>
          &gt; CONTRACT-B1-CDD-MANAGEMENT-STAFF-SITE.pdf
    <div style={{ backgroundColor: "white",marginTop:"20px" }}>
     <Col xs={24} md={6} style={{backgroundColor: "white"  }}>
  
  <Button
    variant="contained"
    type='primary' 
    size='large'
    style={{ margin: '0 20px', verticalAlign: 'middle' }}
    onClick={handleDownloadPDF}

  >
    < IoCloudDownloadOutline />
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
  </div>
);
};



export default ContratB1;
