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
const ContratC = () => {
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
    const  arPosition= location.state ? location.state. arPosition : null;
    const dailyRate=location.state ? location.state. dailyRate : null;
   
    const navigate = useNavigate();
    const onGoToBack = () => {
      navigate(-1);
    };
  

  return (
    <div>
       <StyledScrumBoardDetailTitle onClick={onGoToBack}>
            Add Employee Construction Staff
          </StyledScrumBoardDetailTitle>
          &gt; CONTRACT CDD-MANPOWER SUPPLY-DAILY RATE.pdf
          <div style={{margin:"20px",textAlign: 'right' }}>
    <Col >
      <Button
        variant="contained"
        type="primary"
        size="large"
        style={{ margin: '0 20px', verticalAlign: 'middle' }}
        onClick={() => generatePDF(targetRef, { filename: 'CONTRACT CDD-MANPOWER SUPPLY-DAILY RATE.pdf' })}
      >
        <IoCloudDownloadOutline style={{ marginRight: '8px' }} />
        Download PDF
      </Button>
    </Col>
    </div>
 

{/* 
    <Button onClick={handleDownloadPDF}>Download PDF</Button> */}
    <div  ref={targetRef} id="pdf-content"
    
    style={{
      borderRadius: 8,
      background: "white",

    }}
    >
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
       arPosition={arPosition}
       dailyRate={dailyRate}
      /> 
   
        <Page2 />
       <Page3 />

      {/* <Page4 />   */}
    </div>




  </div>
);
};



export default ContratC;
