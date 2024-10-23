import React from 'react';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { useLocation } from 'react-router-dom';
import { Button ,Col} from 'antd';
import {
  StyledScrumBoardDetailTitle,

} from './index.styled';
import { useNavigate} from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useRef } from 'react';
import generatePDF from 'react-to-pdf';
const ContratE3Service1 = () => {
  const targetRef = useRef();
  const location = useLocation();
  const fullName = location.state ? location.state.fullName : null;
  const  passportNumber = location.state ? location.state.passportNumber : null;
  const  passportSubmitdate=location.state ? location.state.passportSubmitdate : null;
    const arResidenceAdress=location.state ? location.state.arResidenceAdress : null;
    const companyType=location.state ? location.state.companyType : null;
    const traveldate=location.state ? location.state.traveldate : null;
    const endTravelDate= location.state ? location.state.endTravelDate : null;
    const arDestination=location.state ? location.state.arDestination : null;
    const positionfieledarabe=location.state ? location.state.positionfieledarabe : null;
    const  lastId=location.state ? location.state. lastId : null;
    const salary=location.state ? location.state. salary : null;
    const joinDate=location.state ? location.state. joinDate : null;
    const finishDate=location.state ? location.state. finishDate : null;
    const dailyRate=location.state ? location.state.dailyRate : null;
    const duration=location.state ? location.state.duration : null;
    const CIN=location.state ? location.state.CIN : null;
    const cinDate=location.state ? location.state.cinDate : null;
    const arPosition=location.state ? location.state.arPosition : null;
  
    
    const navigate = useNavigate();
    const onGoToBack = () => {
      navigate(-1);
    };

  return (
    <div>
       <StyledScrumBoardDetailTitle onClick={onGoToBack}>
            Add Employee Management Staff
          </StyledScrumBoardDetailTitle>
          &gt; CONTRAT DE PRESTATION DE SERVICE 2-E3
          <div style={{margin:"20px",textAlign: 'right' }}>
    <Col >
      <Button
        variant="contained"
        type="primary"
        size="large"
        style={{ margin: '0 20px', verticalAlign: 'middle' }}
        onClick={() => generatePDF(targetRef, { filename: 'CONTRAT DE PRESTATION DE SERVICE 2-E3.pdf' })}
      >
        <IoCloudDownloadOutline style={{ marginRight: '8px' }} />
        Download PDF
      </Button>
    </Col>
    </div>


{/* 
    <Button onClick={handleDownloadPDF}>Download PDF</Button> */}
     <div 
        style={{
          borderRadius: 8,
          background: "white",
    
        }}
     
     ref={targetRef} id="pdf-content">
       <Page1 
        fullName={fullName} 
        passportNumber={passportNumber} 
       passportSubmitdate={passportSubmitdate}
       arResidenceAdress={arResidenceAdress}
       companyType={companyType}
        traveldate={traveldate}
       endTravelDate={endTravelDate}
       arDestination={arDestination}
       positionfieledarabe={positionfieledarabe}
       lastId={lastId}
       salary={salary}
       joinDate={joinDate}
       finishDate={finishDate}
       dailyRate={dailyRate}
       duration={duration}
       CIN={CIN}
       cinDate={cinDate}
       arPosition={arPosition}
       

      /> 
   
        <Page2   duration={duration} />
      {/* <Page3 />  */}

      {/* <Page4 />   */}
    </div>




  </div>
);
};



export default ContratE3Service1;
