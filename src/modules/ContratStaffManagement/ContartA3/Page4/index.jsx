
import React,{useEffect,useState} from 'react';
import { useIntl } from 'react-intl';
import {Col,Row} from "antd"
import image from "../../../../assets/icon/logo-with-name.png"

const ContratA1Page4= () => {
  const { messages } = useIntl();
  const today = new Date();

  // Tableaux pour mapper les noms des mois et des jours de la semaine
  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const months = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  
  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();
  
  
  return (
    <div style={{marginTop:"10rem"}}>
  <div className='page4' >
<div className='ContratPage' style={{ height: "297mm"}}>
<div className='HeaderContrat' style={{ display: 'flex' }}>
  <div className='HeaderContratPage'>
    <p dir="rtl" className="TitleGeneral">عقد شغل لمدة محدودة</p>
  </div>

  <img src={image} alt="logo" style={{ alignSelf: 'flex-end',marginRight:"1rem",width:"120px"}} />
</div>

{/*End Header*/}
<div className='table' style={{display: "none"}}>
  <div className='HeaderContratPage'>   
  </div>

  <table class="zui-table">
      <thead>
        <tr>
          <th> G-E-..........-2024</th>
          <th>{messages['Numero.contrat']}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
         B2

          </td>
          <td>{messages['categorie.name']}</td>
        </tr>
       
        {/* Ajoutez autant de lignes que nécessaire */}
      </tbody>
    </table>


</div>

<div dir="rtl">
<style jsx>{`
            .contrat-page4 {
            
              font-family: 'Arial', sans-serif;
              font-size: 20px;
              line-height: 1.6;
              text-align: justify;
              color:black; /* Couleur du texte */
              background-color: #fff; /* Couleur de fond */
              padding: 20px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre */
             
            }
          
          `}</style>
           <div className="contrat-page4"></div>
           <br></br> الغرض وفي صورة فشل المصالحة فانه يتم تحرير محضر فشل المحاولة الصلحية في الغرض ثم يتم الالتجاء للقضاء ويكون النظر فيها من طرف محاكم صفاقس 1 فقط.<br></br>

<br></br>حرر بصفاقس في نظيرين بتاريخ  <span style={{fontWeight:"bold",paddingRight:"8px",paddingLeft:"8px"}}>{day} / {today.getDate()} / {month}</span> <br></br>
  <span style={{paddingBottom:"20px",paddingTop:"25px"}}>


<Row>
      <Col span={12} style={{  color: 'black',  padding: '20px' }}>
     <br></br>الطرف الاول شركة  <br></br>
                                                                                      
     <br></br>  STE GLOBAL ENGINEERING  <br></br>
                                                                                      
     <br></br> FOR TECHNICAL SERVICES      <br></br> 
     <br></br>  في شخص ممثلها القانوني أو من ينوبه
      </Col>
      <Col span={12} style={{ color: 'black', textAlign: 'center', padding: '20px' }}>
      <br></br>الطرف الثاني الأجير<br></br>
      </Col>
    </Row>




</span>   
     
    </div>

 








    <div dir="rtl" >
<p className="stylepage">صفحة 4</p>
</div>


</div>






   </div>

   </div>
  );
};

export default ContratA1Page4;
