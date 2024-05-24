
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";
import {Col,Row} from "antd"

const ContratE1Page2 = () => {
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
          عملا <span style={{ fontWeight: "bold" }}>بالفصل 45 من الاتفاقية المشتركة الإطارية </span> يلتزم الأجير بالمحافظة على جميع ممتلكات الشركة داخل الموقع سواء كانت التي بعهدته الشخصية أو المتواجدة للعموم وإرجاعها للشركة فور إنهاء مهامه ويعتبر أي ضرر أو إتلاف أو سرقة أو فقدان للمعدات بعهدته هو المسؤول عنها مسؤولية تامة مع إلزامه بجبر الأضرار وإمكانية اعتبارها مدعاة لفسخ هذا العقد حسب تقدير الشركة مع عدم المطالبة الأجير بتعويض أو غرامة <br></br>يلتزم الأجير بواجب حفظ السر المهني وألا يفشي أي معلومات سواء تجارية أو فنية أو علمية أو مالية أو قانونية أو شخصية أو غيرها من المعلومات التي تخص الشركة ويبقى هدا الواجب عام ودائم دون تحديد مدة وحتى بعد نهاية هدا العقد
            <p>

              كما يلتزم الأجير بالحفاظ على جميع الأدوات والمعدات المقدمة من الشركة سواء في شكل امتيازات عينية أو أدوات لإنجاز الخدمة
              كما لا يحق الأجير التعامل أو التعاقد مع حرفاء ومنافسي الشركة الطرف الأول للعقد

            </p>
            <span className='TitleSouligne'>
            الفصل العاشر: التزام الصحة والسلامة والبيئة
            </span><br />
            <p>

              يلتزم الأجير بما يلي
              <br></br>*	  احترام قواعد الصحة للشركة
              <br></br>*	احترام قواعد الصحة والسلامة المهنية
              <br></br>* المساهمة في حماية البيئة

            </p>


            <br />
          
    <p>
 
<span className='TitleSouligne'>
الفصل الحادي عشر: أسباب فسخ العقد
            </span><br></br>
  
يعتبر هدا العقد ملغى في إحدى الحالات التالية:   
<br></br>* الإخلال بأي من بنود هذا العقد من أي من الطرفين، ولا يحق للطرف المخالف المطالبة بغرامة أو تعويض <br></br>*
وقوع أخطاء مهنية جسيمة تضر بمصالح الطرف الأول في العقد، ولا يحق للطرف المخطئ المطالبة بغرامة أو تعويض.<br></br>
*وفي حالة طلب أحد الطرفين إنهاء العقد قبل الأوان يجب إبلاغ الطرف الآخر بأي وسيلة كتابية بذلك، ويجب أن يتم ذلك قبل شهر من تاريخ الإنهاء. كما يلتزم الموظف في جميع الحالات بإتاحة فترة شهر واحد لنقل وتسليم المهام


    </p>
  
    <span className='TitleSouligne'> الفصل الحادي عشر: في حل النزاعات </span><br></br>
    يصرح الطرفان أنهما قبلا هدا العقد وشروطه والتزما العمل بمقتضاه وفي صورة حدوث نزاعات بين الطرفين يكون الالتجاء للمصالحة الودية التي تكون مرحلة ملزمة للطرفين وفي صورة الوصول إلى الاتفاق يتم تحرير محضر في الغرض وفي صورة فشل المصالحة فانه يتم تحرير محضر فشل المحاولة الصلحية في الغرض ثم يتم الالتجاء للقضاء ويكون النظر فيها من طرف محاكم صفاقس 1 فقط. <br></br>
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
      {/* <div dir="rtl">
        <p className="stylepage">صفحة 2</p>
      </div> */}
    </div >
  );
};

export default ContratE1Page2;
