import { light } from '@mui/material/styles/createPalette';
import React,{useEffect,useState} from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png"


const ContratB2Page3= () => {
  const { messages } = useIntl();
  
  
  return (
    <div style={{marginTop:"12rem"}}>
  <div className='page3'>
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
         B1

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

           الامتثال التام لأوامر المشرفين على الموقع الأعلى رتبة منه واحترام النظام الهرمي للعملة للشركة وحفظ مقامات جميع المتدخلين والحفاظ على القيمة الاعتبارية للشركة لدى جميع المتدخلين وفي صورة الإخلال بهدا وجب على الأجير تقديم مبرراته كتابيا وانتظار قرار إدارة الشركة للبت فيها. 
-	المحافظة على جميع ممتلكات الشركة داخل الموقع سواء كانت التي بعهدته الشخصية أو المتواجدة للعموم لإنجاز المشروع وإرجاعها للشركة فور إنهاء مهامه ويعتبر أي ضرر أو إتلاف أو سرقة أو فقدان للمعدات بعهدته هو المسؤول عنها مسؤولية تامة 
-	 كل الخسائر والأضرار بموقع الحظيرة أو بمقر السكن أو بالمطعم التي ثبت تورط الأجير فيها يتحمل جميع نتائجها الأجير مع إلزامه بجبر الأضرار وإمكانية اعتبارها مدعاة لفسخ هدا العقد حسب تقدير الشركة مع عدم المطالبة الأجير بتعويض أو غرامة    
-	عدم الدخول في أي نوع من العلاقات الشخصية مع عملاء أو منافسي الشركة خصوصا علاقة شغليه أو مهنية والإخلال بهذا يؤدي إلى فسخ هدا العقد مباشرة وتتبع الأجير قضائيا  
-	   في صورة قطع هدا العقد في وقت سابق لأوانه وجب إعلام الطرف الأخر بأي إثر كتابي قبل شهر مع وجوب تامين الأجير مدة لا تقل ل 7 أيام لتمرير مهامه لمن سيعوضه تحتسب من تاريخ وصول المعوض
-	 يتعهد الأجير بعدم المشاركة في أي إضراب داخل الموقع وكذلك الامتناع عن إثارة مشاكل أو شغب فيما يخص السكن أو الأكل.           
 <br></br><span className='TitleSouligne'>الفصل الثامن: السرية والأمانة</span><br></br>

يلتزم الأجير بواجب حفظ السر المهني وألا يفشي أي معلومات سواء تجارية أو فنية أو علمية أو مالية أو قانونية أو شخصية أو غيرها من المعلومات التي تخص الشركة ويبقى هدا الواجب عام ودائم دون تحديد مدة وحتى بعد نهاية هدا العقد 
<br></br><span className='TitleSouligne'>الفصل التاسع: التزام الصحة والسلامة والبيئة</span><br></br>

يلتزم الأجير بما يلي  
-	احترام قواعد الصحة داخل الموقع.
-	 احترام قواعد الصحة والسلامة المهنية
-	 المساهمة في حماية البيئة والحيط.
<br></br><span className='TitleSouligne'>الفصل العاشر: أسباب فسخ العقد</span><br></br>
يعتبر هدا العقد ملغى في إحدى الحالات التالية 
-	الإخلال بإحدى فصول هدا العقد من طرف أحد الأطراف ولا يمكن للطرف المخل المطالبة بغرامة أو تعويض
-	حدوث أخطاء مهنية جسيمة تضر بمصالح الطرف الأول للعقد ولا يمكن للطرف المخطئ المطالبة بغرامة أو تعويض

<br></br><span className='TitleSouligne'>الفصل الحادي عشر: في حل النزاعات</span><br></br>
يصرح الطرفان أنهما قبلا هدا العقد وشروطه والتزما العمل بمقتضاه وفي صورة حدوث نزاعات بين الطرفين يكون الالتجاء للمصالحة الودية التي تكون مرحلة ملزمة للطرفين وفي صورة الوصول إلى الاتفاق يتم تحرير محضر في 




           </div>
           
     
    </div>

 











</div>

<div dir="rtl" >
<p className="stylepage">صفحة 3</p>
</div>




   </div>

   </div>
  );
};

export default ContratB2Page3;
