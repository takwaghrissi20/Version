
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../assets/icon/logo-with-name.png";

const ContratB1Page1 = ({ fullName, passportNumber, passportSubmitdate, arResidenceAdress, companyType, 
  traveldate, endTravelDate, arDestination, lastId, positionfieledarabe ,salary,arPosition}) => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <div className='page1'>
      <div className='ContratPage'>
        {/* <div className="page">
          <img src={image} alt="logo" className="logo" />
        </div> */}
               {/* <img src={image} alt="logo" className="logo" /> */}
          <div className='HeaderContratPage'>
            <p dir="rtl" className="TitleGeneral">عقد شغل لمدة محدودة</p>
          </div>  
       

        <div className='table'>
          <div className='HeaderContratPage'></div>
          <table className="zui-table">
            <thead>
              <tr>
                <th style={{fontSize:"30px"}}>G-E-{lastId}-{currentYear}</th>
                <th style={{fontSize:"30px"}}>{messages['Numero.contrat']}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{fontSize:"30px"}}>B1</td>
                <td style={{fontSize:"30px"}}>{messages['categorie.name']}</td>
              </tr>
            </tbody>
          </table>
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
            <span className='SousTitlepage1'>بين الممضيين أسفله</span> <br />
            شركة <span className='Title'>{companyType}</span> شركة ذات مسؤولية محدودة مقرها الاجتماعي طريق المهدية كلم 1.5 عمارة كليوباترا الطابق 4 شقة A4.1 –صفاقس معرفها الجبائي <span className='SousTitlepage1'>D 1398080</span> ومرسمة بالسجل الوطني للمؤسسات تحت عدد B087962015
            من ناحية بوصفها المؤجر
            السيد(ة) <span className='infoContrat'>{fullName}</span> صاحب(ة) جواز سفر عدد <span className='infoContrat'>{passportNumber}</span> والمؤرخ بتونس بتاريخ <span style={{ fontWeight: "bold", color: "#001f5d" }}>{passportSubmitdate}</span> والقاطن ب <span className='infoContrat'>{arResidenceAdress}</span>
            من ناحية أخرى بوصفه(ها) الأجير
            <br /><span className='SousTitlepage1'>تم الاتفاق على ما يلي</span><br />
            <span className='TitleSouligne'>الفصل الأول الموضوع</span><br />
            بمقتضى هذا، تم انتداب السيد(ة)<span className='infoContrat'>{fullName}</span> للعمل بشركة ليشغل خطة <span className='infoContrat'>{arPosition}</span>، وبهذه الصفة يكون عليه تأدية المهام حسب المسمى الوظيفي للشركة
           
            قائمة المهام هذه ليست شاملة ويمكن استكمالها وفقًا لاحتياجات الشركة
           
            <br /><span className='TitleSouligne'>الفصل الثاني: مدة العقد</span><br />
            ابرم هذا العقد لمدة محدودة تبتدئ من <span className='infoContrat'>{traveldate}</span> الموافق لتاريخ السفر للموقع وينتهي يوم <span className='infoContrat'>{endTravelDate}</span> الموافق لتاريخ العودة لتونس.
            يتجدد هدا العقد ضمنيا بنفس الفصول أسفله لمدة مطابقة لمدة الإقامة المطبوعة على جواز سفر الأجير حتى في صورة تجديدها وهنا لا يجوز للأجير خلال هده الفترة العمل مع منافسي وحرفاء الشركة أو مغادرة موقع الحظيرة دون إذن كتابي.
            وفي حال سجل غياب الأجير في موقع الحظيرة وفي المسكن التابع لموقع الحظيرة وفي أي مكان أخر تابع لموقع الحظيرة فانه في الحال يتم إعلام أقرب مركز أمنى أو عسكري بغياب الأجير من دون سابق إعلام وإنهاء فاعلية الإقامة من قبل الكفيل وعدم تحمل أي مسؤولية جراء مغادرة الأجير موقع الحظيرة بهذه الطريقة ويعتبر هذا العقد ملغى ويتحمل الأجير جميع التتبعات القانونية.
            <br /><span className='TitleSouligne'>الفصل الثالث: مكان العمل</span><br />
            يباشر السيد(ة) <span className='infoContrat'>{fullName}</span> هذه المهام بمقر موقع الحظيرة للشركة الكائن ب <span className='infoContrat'>{arDestination}</span> مع التزامه بالتحاقه بأي موقع حظيرة أخر تابع للشركة في نفس البلد الأجنبي خلال مدة العقد امتثالا لمتطلبات عمل الشركة دلك.
            <br /><span className='TitleSouligne'>الفصل الرابع: الأجر</span>

            <br></br>حصل الأجير، مقابل ما يؤديه من مهام، <span style={{fontWeight:"bold"}}>اجر شهري صافي قدره </span> <span className='infoContrat'>{salary} </span>


            
            <br /><span className='TitleSouligne'>الفصل الخامس: التناوب والتسليم   </span>
            <p>
في صورة تجديد هدا العقد يلتزم الأجير باحترام بشكل قطعي قواعد التناوب الخاصة بالشركة والمتمثلة في على الأقل في 120 يوم عمل متواصلة بموقع الحظيرة دون انقطاع بالنسبة للعملة المختصين والتنفيذ التي تحتسب على أساس القاعدة التالية
<ul>
  <li>
  *	ما يفوق أو يساوي 90 يوم عمل بمقر موقع الحظيرة يقابله 21 يوم راحة.   

  </li>
  <li>
  * ما بين ما يفوق أو يساوي 60 يوم واقل من 90 يوم عمل بمقر موقع الحظيرة يقابله 14 يوم راحة.

  </li>
  <li>
*	ما بين ما يفوق أو يساوي 30 يوم واقل من 60 يوم عمل بمقر موقع الحظيرة يقابله 7 أيام راحة

  </li>
  <li>
  * ما اقل من 30 يوم عمل بمقر موقع الحظيرة لا يقابلها أيام راحة.

  </li>
  <li>

  * يمكن للأجير طلب تقليص مدة الراحة والعودة لموقع الحظيرة ادا توافقت مع متطلبات العمل بالموقع.  
  </li>
  
  </ul> 
 كما يخضع الأجير للشروط الاتي ذكرها 
 <ul>
<li>
  * يلتزم الأجير بالمواظبة على الحضور واحترام توقيت العمل وعدم مغادرة الموقع قبل المدة حتى في الأعياد 
</li>
<li>
  * 	ادا تبين تعدد الغيابات دون مبرر شرعي فللشركة حق فسخ العقد من طرفها دون المطالبة بتعويضات أو غرامة
</li>
<li>
  * من الأجير بعد التنبيه عليه بأي وسيلة تترك أثرا كتابيا في الالتحاق بالعمل في مدة لا تتجاوز 24 ساعة.   
</li>

<li>

* خلال أيام الراحة الأسبوعية وادا تطلبت ظروف العمل دلك وجب على الأجيران يكون متاحا ويحتسب يوم عمل مضاعف الأجر        
</li>
<li>
  * في حالة زيارة قصيرة لموقع الحظيرة خلال الراحة الأسبوعية يتمتع الأجير بإجازة خصوصية  
</li>
<li>

* وجب على الأجير تامين عملية نقل وتسليم مهامه لمن سيعوضه ودلك حسب القوانين الداخلية للشركة ودلك في مدة لا تقل عن 7 أيام من تاريخ وصول المعوض لموقع الحظيرة.
</li>

 </ul>
</p>
 </div>
    </div>
      </div>
      {/* <div dir="rtl">
        <p className="stylepage">صفحة 1</p>
      </div> */}
    </div>
  );
};

export default ContratB1Page1;
