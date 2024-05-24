
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";
import {Col,Row} from "antd"
const ContratA1Page3 = () => {
  const { messages } = useIntl();
  const today = new Date();

  const days = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  const months = ["جانفي", "فيفري", "مارس", "افريل", "ماي", "جوان", "جويلة", "اوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
  
  const day = days[today.getDay()];
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  return (
    <div className='page1'>
      <div className='ContratPage'>
        <div className="page">
          <img style={{marginTop:"9rem"}}src={image} alt="logo" className="logo" />
        </div>
        <div  style={{marginTop:"20px"}}className='HeaderContratPage'>
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
   
     
    </div>
      </div >
  <div className="contrat-page1" dir="rtl">
    <p>

    <br></br>	 * في صورة قطع هدا العقد في وقت سابق لأوانه وجب إعلام الطرف الأخر بأي إثر كتابي قبل شهر مع وجوب تامين الأجير مدة لا تقل ل 7 أيام لتمرير مهامه لمن سيعوضه تحتسب من تاريخ وصول المعوض.
<br></br>	 *	 يتعهد الأجير بعدم المشاركة في أي إضراب داخل الموقع وكذلك الامتناع عن إثارة مشاكل أو شغب فيما يخص السكن أو الأكل.
<br></br>	 *	 لا يمكن طلب التراجع أو طلب المراجعة أو إعادة النظر في كامل هذا العقد أو جزء منه من طرف الأجير خلال المدة المحددة بالعقد خاصة خلال تواجده بموقع الحظيرة وادا حصل دلك وخاصة انجر عنه اضطراب في سير العمل العادي ودخول في إضراب واحتجاجات يعتبر  هدا العقد ملغى حيني ويتم ترحيله لتونس وتمريره على مجلس التأديب .
<span className='TitleSouligne'>
            الفصل العاشر: أسباب فسخ العقد
            </span><br></br>
   
يعتبر هدا العقد ملغى في إحدى الحالات التالية  :
<br></br>	 *	الإخلال بإحدى فصول هدا العقد من طرف أحد الأطراف ولا يمكن للطرف المخل المطالبة بغرامة أو تعويض
<br></br>	 * حدوث أخطاء مهنية جسيمة تضر بمصالح الطرف الأول للعقد ولا يمكن للطرف المخطئ المطالبة بغرامة أو تعويض
في صورة طلب فسخ العقد قبل أوانه من أحد الأطراف وجب إعلام الطرف الأخر بأي وسيلة كتابية ودلك قبل شهر كما يلتزم الأجير في جميع الحالات بتامين مدة شهر كفترة نقل وتسليم مهام.<br></br>    


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


    {/* <p style={{  
    margintop:"50rem"
  }} lassName="stylepage">صفحة 3</p> */}
  </div>
    </div >
  );
};

export default ContratA1Page3;
