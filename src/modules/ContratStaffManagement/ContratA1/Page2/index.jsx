
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";

const ContratB1Page2 = () => {
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
            الفصل السادس: الغياب
            </span><br />
            <p dir="rtl">
وفقاً <span style={{fontWeight:"bold"}}>لفصل 23 من الاتفاقية المشتركة الإطارية ,</span> لن يتم التسامح مع أي غياب دون الحصول على إذن مسبق من إدارة الشركة
يتم لفت انتباه إدارة الشركة إلى حالات الغياب بسبب حدث عرضي، مثل الوفاة أو الحادث أو المرض الخطير للزوج أو الأصل أو السليل، في أسرع وقت ممكن وعلى أبعد تقدير في غضون يومين ويجب أن تكون مدة هذا الغياب مرتبطة بالأحداث التي حفزتهم وفي حالة الغياب المتوقع، لا يجوز للعامل التغيب إلا بعد الحصول على إذن مسبق من إدارة الشركة

             
              </p>
              <span className='TitleSouligne'>الفصل السابع: التناوب والتسليم</span>
<p>الفصل السابع: التناوب والتسليم
 في حالة تكليف الأجير العمل بإحدى مواقع الحظيرة التابعة للشركة وجب عليه احترام بشكل قطعي قواعد التناوب الخاصة بالشركة والمتمثلة في على الأقل  <span style={{fontWeight:"bold"}}>في 90 يوم عمل متواصلة </span>
 بموقع الحظيرة دون انقطاع بالنسبة للإطارات والمشرفين كما يخضع الأجير للشروط الاتي ذكرها: <br></br>
 
 * يلتزم الأجير بالمواظبة على الحضور واحترام توقيت العمل وعدم مغادرة الموقع قبل المدة حتى في الأعياد وإذا تبين تعدد الغيابات دون مبرر شرعي فللشركة حق فسخ العقد من طرفها دون المطالبة بتعويضات أو غرامة من الأجير بعد التنبيه عليه بأي وسيلة تترك أثرا كتابيا في الالتحاق بالعمل في مدة لا تتجاوز 24 ساعة.  
        في حالة كسر قاعدة التناوب يعرض الأجير نفسه إلى خصم قيمة 15يوم من منحة الغربة إلا في حالات خاصة قاهرة يبررها الأجير وتقيمها الشركة وترخص له الشركة كتابيا.<br></br>
*	خلال أيام الراحة الأسبوعية وإذا تطلبت ظروف العمل دلك وجب على الأجير ان يكون متاحا ويحتسب يوم عمل مضاعف الأجر  <br></br>      
*  في حالة زيارة قصيرة لموقع الحظيرة خلال الراحة الأسبوعية يتمتع الأجير بإجازة خصوصية  <br></br>
*	وجب على الأجير تامين عملية نقل وتسليم مهامه لمن سيعوضه ودلك حسب القوانين الداخلية للشركة ودلك في مدة <span style={{fontWeight:"bold"}}>لا تقل عن 7 أيام </span> من تاريخ وصول المعوض لموقع الحظيرة.<br></br>

 
 
 
 </p>

           
            <span className='TitleSouligne'>
            الفصل الثامن: في الانتفاع بدورات تكوينية
            </span><br />
            <p>

            مع تطبيق أحكام   <span style={{fontWeight:"bold"}}>الفصل 43 من الاتفاقية المشتركة الإطارية </span>   وفي حال تمتع الأجير بدورة تكوينية متخصصة سواء فرديا أو جماعيا يلتزم الأجير بعدم رفض تجديد هدا العقد بنفس الشروط إذا طلبت الشركة دلك وفي صورة الإخلال يجبر الأجير على تعويض الشركة عن جميع مصاريف الدورة التكوينية التي تمتع بها الأجير  
            </p>
            <span className='TitleSouligne'>
              الفصل التاسع: التزام الصحة والسلامة والبيئة
            </span>
            <br />


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
  <div dir="rtl">
    <p className="stylepage">صفحة 2</p>
  </div>
    </div >
  );
};

export default ContratB1Page2;
