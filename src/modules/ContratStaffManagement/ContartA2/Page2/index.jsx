import { light } from '@mui/material/styles/createPalette';
import React,{useEffect,useState} from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png"


const ContratA2Page2= () => {
  const { messages } = useIntl();
  
  
  return (
    <div style={{marginTop:"7rem"}}>
  <div className='page2'>
<div className='ContratPage'>
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
         C

          </td>
          <td>{messages['categorie.name']}</td>
        </tr>
       
        {/* Ajoutez autant de lignes que nécessaire */}
      </tbody>
    </table>


</div>

<div dir="rtl">
<style jsx>{`
            .contrat-page2 {
            
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
            <div className="contrat-page2">

  في صورة تجديد هدا العقد يلتزم الأجير باحترام بشكل قطعي قواعد التناوب الخاصة بالشركة والمتمثلة في على الأقل في 120 يوم عمل متواصلة بموقع الحظيرة دون انقطاع بالنسبة للعملة المختصين والتنفيذ التي تحتسب على أساس القاعدة التالية 
-	ما يفوق أو يساوي 90 يوم عمل بمقر موقع الحظيرة يقابله 21 يوم راحة.   
-	ما بين ما يفوق أو يساوي 60 يوم واقل من 90 يوم عمل بمقر موقع الحظيرة يقابله 14 يوم راحة.
-	ما بين ما يفوق أو يساوي 30 يوم واقل من 60 يوم عمل بمقر موقع الحظيرة يقابله 7 أيام راحة. 
-	ما اقل من 30 يوم عمل بمقر موقع الحظيرة لا يقابلها أيام راحة.
-	يمكن للأجير طلب تقليص مدة الراحة والعودة لموقع الحظيرة ادا توافقت مع متطلبات العمل بالموقع.  
 كما يخضع الأجير للشروط الاتي ذكرها 
-	يلتزم الأجير بالمواظبة على الحضور واحترام توقيت العمل وعدم مغادرة الموقع قبل المدة حتى في الأعياد 
-	ادا تبين تعدد الغيابات دون مبرر شرعي فللشركة حق فسخ العقد من طرفها دون المطالبة بتعويضات أو غرامة
-	من الأجير بعد التنبيه عليه بأي وسيلة تترك أثرا كتابيا في الالتحاق بالعمل في مدة لا تتجاوز 24 ساعة.   
-	في حالة كسر قاعدة التناوب يعرض الأجير نفسه إلى عقوبات إلا في حالات خاصة قاهرة يبررها الأجير وتقيمها الشركة وترخص له الشركة كتابيا 
-	خلال أيام الراحة الأسبوعية وادا تطلبت ظروف العمل دلك وجب على الأجيران يكون متاحا ويحتسب يوم عمل مضاعف الأجر        
-	في حالة زيارة قصيرة لموقع الحظيرة خلال الراحة الأسبوعية يتمتع الأجير بإجازة خصوصية  
-	وجب على الأجير تامين عملية نقل وتسليم مهامه لمن سيعوضه ودلك حسب القوانين الداخلية للشركة ودلك في مدة لا تقل عن 7 أيام من تاريخ وصول المعوض لموقع الحظيرة.
<br></br><span className='TitleSouligne'>الفصل السادس: توقيت العمل والعطل</span><br></br>
في العمل داخل موقع الحظيرة يلتزم الأجير بتقديم إجمالي 10 ساعات عمل في الموقع باحتساب 01 ساعة غداء ويخضع للقواعد التالية
-	استراحتان قصيرتان ب 15 دقيقة يوميا في العاشرة صباحا وفي الساعة الثالثة بعد الظهر
-	احتساب السفر ذهابا وإيابا يوم عمل
-	احتساب تعليق ظرفي أو وقتي للعمل عمل فعلي
-	احتساب يوم مرض نصف يوم عمل
-	احتساب يوم العمل خلال الراحة الأسبوعية يوم عمل مضاعف القيمة
-	احتساب يوم الإضراب يوم غياب 
<br></br><span className='TitleSouligne'>الفصل السابع: التزامات الأجير داخل موقع الحظيرة</span><br></br>

يلتزم الأجير داخل الموقع بالقواعد التالية















            </div>
     
    </div>

 











</div>


<div dir="rtl" >
<p className="stylepage">صفحة 2</p>
</div>



   </div>

   </div> 
  );
};

export default ContratA2Page2;
