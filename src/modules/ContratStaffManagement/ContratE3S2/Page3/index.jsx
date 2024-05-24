
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";
import {Col,Row} from "antd"

const ContratE3Page3 = () => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();

  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const months = ["جانفي", "فيفري", "مارس", "افريل", "ماي", "جوان", "جويلة", "اوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  const today = new Date();
  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  return (
    <div className='page1'>
      <div className='ContratPage'>
        <div className="page">
          <img style={{ marginTop: "25px" }} src={image} alt="logo" className="logo" />
        </div>
        <div style={{ marginTop: "8px" }} className='HeaderContratPage'>
          <p dir="rtl" className="TitleGeneral">عقد شغل لمدة محدودة</p>
        </div>


        <div dir="rtl">
          <style jsx>{`
            .contrat-page1 {
              font-family: 'Arial', sans-serif;
              font-weight: normal;
              font-size:30px;
              font-style: normal;
              line-height: 1.6;
              text-align: justify;
              color: black; 
              background-color: #fff;
              padding: 20px;        
              opacity: 1;
             
            }
            
            @media print {
              .contrat-page1 {
                background-color: #fff; /* Couleur de fond pour l'impression */
                -webkit-print-color-adjust: exact; 
              }
           
              .zui-table, .zui-table th, .zui-table td {
                border: 1px solid #000; /* Bordure noire pour la table lors de l'impression */
              }
              .page1, .ContratPage, .page, .HeaderContrat, .HeaderContratPage, .table {
                margin: 0;
                padding: 0;
              }
            }
          `}</style>
          <div className="contrat-page1">

<br></br>حرر بصفاقس في نظيرين بتاريخ  <span style={{fontWeight:"bold",paddingRight:"8px",paddingLeft:"8px"}}>{day} / {today.getDate()} / {month}</span> <br></br>
  <span style={{paddingBottom:"20px",paddingTop:"25px"}}>

<Row>
      <Col span={12} style={{  color: 'black',  padding: '20px',fontSize:"30px" }}>
     <br></br>الطرف الاول شركة  <br></br>
                                                                                      
     <br></br>  STE GLOBAL ENGINEERING  <br></br>
                                                                                      
     <br></br> FOR TECHNICAL SERVICES      <br></br> 
     <br></br>  في شخص ممثلها القانوني أو من ينوبه
      </Col>
      <Col span={12} style={{ color: 'black', textAlign: 'center', padding: '20px',fontSize:"30px"  }}>
      <br></br>الطرف الثاني الأجير<br></br>
      </Col>
    </Row>
    </span>




          </div>
        </div>
      </div >
      <div dir="rtl">
        <p className="stylepage">صفحة 2</p>
      </div>
    </div >
  );
};

export default ContratE3Page3;
