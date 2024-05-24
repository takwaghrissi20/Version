
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";

const ContratCPage2 = () => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <div className='page1'>
      <div className='ContratPage'>
        <div className="page">
          <img src={image} alt="logo" className="logo" />
        </div>
        <div  style={{marginTop:"8px"}}className='HeaderContratPage'>
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
            <span className='TitleSouligne'>

              الفصل السادس: توقيت العمل والعطل
            </span><br />
            <p dir="rtl">
              في العمل داخل موقع الحظيرة يلتزم الأجير بتقديم إجمالي<span style={{fontWeight:"bold"}}> 10 ساعات عمل في</span> الموقع باحتساب 01 ساعة غداء ويخضع للقواعد التالية
              <br></br>
              *	استراحتان قصيرتان ب 15 دقيقة يوميا في العاشرة صباحا وفي الساعة الثالثة بعد الظهر
              <br></br>

              *	احتساب السفر ذهابا وإيابا يوم عمل
              <br></br>
              * احتساب تعليق ظرفي أو وقتي للعمل عمل فعلي
              <br></br>
              *	احتساب يوم مرض نصف يوم عمل
              <br></br>
              * احتساب يوم العمل خلال الراحة الأسبوعية يوم عمل مضاعف القيمة
              <br></br>
              * احتساب يوم الإضراب يوم غياب

              <br></br> <span className='TitleSouligne'>

                الفصل السابع: التزامات الأجير داخل موقع الحظيرة
              </span><br />
              <p>

                يلتزم الأجير داخل الموقع بالقواعد التالية
                الامتثال التام لأوامر المشرفين على الموقع الأعلى رتبة منه واحترام النظام الهرمي للعملة للشركة وحفظ مقامات جميع المتدخلين والحفاظ على القيمة الاعتبارية للشركة لدى جميع المتدخلين وفي صورة الإخلال بهدا وجب على الأجير تقديم مبرراته كتابيا وانتظار قرار إدارة الشركة للبت فيها.
                <br></br>

                *	المحافظة على جميع ممتلكات الشركة داخل الموقع سواء كانت التي بعهدته الشخصية أو المتواجدة للعموم لإنجاز المشروع وإرجاعها للشركة فور إنهاء مهامه ويعتبر أي ضرر أو إتلاف أو سرقة أو فقدان للمعدات بعهدته هو المسؤول عنها مسؤولية تامة <br></br>
                *	 كل الخسائر والأضرار بموقع الحظيرة أو بمقر السكن أو بالمطعم التي ثبت تورط الأجير فيها يتحمل جميع نتائجها الأجير مع إلزامه بجبر الأضرار وإمكانية اعتبارها مدعاة لفسخ هدا العقد حسب تقدير الشركة مع عدم المطالبة الأجير بتعويض أو غرامة    <br></br>
                *	عدم الدخول في أي نوع من العلاقات الشخصية مع عملاء أو منافسي الشركة خصوصا علاقة شغليه أو مهنية والإخلال بهذا يؤدي إلى فسخ هدا العقد مباشرة وتتبع الأجير قضائيا  <br></br>
                *  في صورة قطع هدا العقد في وقت سابق لأوانه وجب إعلام الطرف الأخر بأي إثر كتابي قبل شهر مع وجوب تامين الأجير مدة لا تقل ل 7 أيام لتمرير مهامه لمن سيعوضه تحتسب من تاريخ وصول المعوض<br></br>

                * يتعهد الأجير بعدم المشاركة في أي إضراب داخل الموقع وكذلك الامتناع عن إثارة مشاكل أو شغب فيما يخص السكن أو الأكل.  <br></br>

              </p>
            </p>
            <span className='TitleSouligne'>
              الفصل الثامن: السرية والأمانة
            </span><br />
            <p>

              يلتزم الأجير بواجب حفظ السر المهني وألا يفشي أي معلومات سواء تجارية أو فنية أو علمية أو مالية أو قانونية أو شخصية أو غيرها من المعلومات التي تخص الشركة ويبقى هدا الواجب عام ودائم دون تحديد مدة وحتى بعد نهاية هدا العقد
            </p>
            <span className='TitleSouligne'>
              الفصل التاسع: التزام الصحة والسلامة والبيئة
            </span><br />


            يلتزم الأجير بما يلي
            *	احترام قواعد الصحة داخل الموقع. <br></br>
            * احترام قواعد الصحة والسلامة المهنية<br></br>

            * المساهمة في حماية البيئة والحيط.<br></br>
            <span className='TitleSouligne'>
              الفصل العاشر: أسباب فسخ العقد

            </span>
<br></br>
            يعتبر هدا العقد ملغى في إحدى الحالات التالية

            *	الإخلال بإحدى فصول هدا العقد من طرف أحد الأطراف ولا يمكن للطرف المخل المطالبة بغرامة أو تعويض<br></br>
            *	حدوث أخطاء مهنية جسيمة تضر بمصالح الطرف الأول للعقد ولا يمكن للطرف المخطئ المطالبة بغرامة أو تعويض
            <br></br>
            <span className='TitleSouligne'>
                الفصل الحادي عشر: في حل النزاعات
            </span> <br></br>

            يصرح الطرفان أنهما قبلا هدا العقد وشروطه والتزما العمل بمقتضاه وفي صورة حدوث نزاعات بين الطرفين يكون الالتجاء للمصالحة الودية التي تكون مرحلة ملزمة للطرفين وفي صورة الوصول إلى الاتفاق يتم تحرير محضر في الغرض
          



      </div>
    </div>
      </div >
  {/* <div dir="rtl">
    <p className="stylepage">صفحة 2</p>
  </div> */}
    </div >
  );
};

export default ContratCPage2;
