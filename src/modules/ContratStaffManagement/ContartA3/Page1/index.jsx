
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";

const ContratA3Page1 = ({ fullName, passportNumber, passportSubmitdate, arResidenceAdress, companyType,
  traveldate, endTravelDate, arDestination, lastId, positionfieledarabe, salary, dailyRate,
  joinDate, finishDate,arPosition


}) => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();
  console.log("dailyRate", dailyRate)
  return (
    <div className='page1'>
      <div className='ContratPage'>
        <div className="page">
          <img src={image} alt="logo" className="logo" />
        </div>
        <div className='HeaderContratPage'>
          <p dir="rtl" className="TitleGeneral">عقد شغل لمدة محدودة</p>
        </div>


        <div className='table'>
          <div className='HeaderContratPage'></div>
          <table className="zui-table">
            <thead>
              <tr>
                <th style={{ fontSize: "30px" }}>G-E-{lastId}-{currentYear}</th>
                <th style={{ fontSize: "30px" }}>{messages['Numero.contrat']}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontSize: "30px" }}>A3</td>
                <td style={{ fontSize: "30px" }}>{messages['categorie.name']}</td>
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
            بمقتضى هذا، تم انتداب السيد(ة) <span className='infoContrat'>{fullName}</span> للعمل بشركة ليشغل خطة <span className='infoContrat'>{arPosition}</span>، وبهذه الصفة يكون عليه تأدية المهام حسب المسمى الوظيفي للشركة

           قائمة المهام هذه ليست شاملة ويمكن استكمالها وفقًا لاحتياجات الشركة

            <br /><span className='TitleSouligne'> الفصل الثاني: مدة العقد </span><br />


            ابرم هذا العقد لمدة محدودة تبتدئ من <span className='infoContrat'>{traveldate} </span>الموافق لتاريخ السفر للموقع وينتهي يوم<span className='infoContrat'>{endTravelDate}</span> الموافق لتاريخ العودة لتونس.<br></br>
            يتجدد هدا العقد ضمنيا بنفس الفصول أسفله لمدة مطابقة لمدة الإقامة المطبوعة على جواز سفر الأجير حتى في صورة تجديدها وهنا لا يجوز للأجير خلال هده الفترة العمل مع منافسي وحرفاء الشركة أو مغادرة موقع الحظيرة دون إذن كتابي.
            وفي حال سجل غياب الأجير في موقع الحظيرة وفي المسكن التابع لموقع الحظيرة وفي أي مكان أخر تابع لموقع الحظيرة فانه في الحال يتم إعلام أقرب مركز أمنى أو عسكري بغياب الأجير من دون سابق إعلام وإنهاء فاعلية الإقامة من قبل الكفيل وعدم تحمل أي مسؤولية جراء مغادرة الأجير موقع الحظيرة بهذه الطريقة ويعتبر هذا العقد ملغى ويتحمل الأجير جميع التتبعات القانونية.


            <br /><span className='TitleSouligne'>الفصل الثالث: مدة التجربة </span><br />
            <p>

              يباشر السيد(ة)<span className='infoContrat'>{fullName}</span>هذه المهام بمقر موقع الحظيرة للشركة الكائن ب<span className='infoContrat'>{arDestination}</span> مع التزامه بالتحاقه بأي موقع حظيرة أخر تابع للشركة في نفس البلد الأجنبي خلال مدة العقد امتثالا لمتطلبات عمل الشركة دلك.
            </p>
            <span className='TitleSouligne'>الفصل الرابع: الأجر</span>
            <p>
              يحصل الأجير، مقابل ما يؤديه من مهام، على اجر يومي<span className='infoContrat'>{dailyRate}</span>
              على كل يوم عمل بموقع الحظيرة خارج حدود التراب التونسي منقسم بين اجر شهري ومنحة غربة.
              في حالة تجديد هدا العقد يطبق على الأجير قاعدة التناوب التالية


              <br></br>
              *	 ما يفوق أو يساوي 90 يوم عمل بمقر موقع الحظيرة يقابله 21 يوم راحة خالصة الأجر  <br></br>
              *	 ما بين ما يفوق أو يساوي 60 يوم واقل من 90 يوم عمل بمقر موقع الحظيرة يقابله 14 يوم راحة خالصة الأجر <br></br>
              *	ما بين ما يفوق أو يساوي 30 يوم واقل من 60 يوم عمل بمقر موقع الحظيرة يقابله 7 أيام راحة خالصة الأجر <br></br>
              *	  ما اقل من 30 يوم عمل بمقر موقع الحظيرة لا يقابلها أيام راحة خالصة الأجر <br></br>
              يمكن للشركة تسجيل تأخير في خلاص منحة الغربة بسبب تأخر خلاص من طرف حرفائها أو تأخر في تحويل الخلاص من الخارج ولكن هدا التأخير لا يمكن أن يتعدى الشهر ولا يمكنه أن يؤثر على السير العادي للعمل.

            </p>


            <span className='TitleSouligne'>لفصل الخامس: التناوب والتسليم</span>
            <p>

             
في صورة تجديد هدا العقد وجب على الأجير احترام بشكل قطعي قواعد التناوب الخاصة بالشركة والمتمثلة في على   <span style={{fontWeight:"bold"}}> الأقل في 90</span> يوم عمل متواصلة بموقع الحظيرة دون انقطاع بالنسبة للإطارات والمشرفين كما يخضع الأجير للشروط الاتي ذكرها 
 <br></br>* يلتزم الأجير بالمواظبة على الحضور واحترام توقيت العمل وعدم مغادرة الموقع قبل المدة حتى في الأعياد وادا تبين تعدد الغيابات دون مبرر شرعي فللشركة حق فسخ العقد من طرفها دون المطالبة بتعويضات أو غرامة من الأجير بعد التنبيه عليه بأي وسيلة تترك أثرا كتابيا في الالتحاق بالعمل في مدة لا تتجاوز 24 ساعة.   
 <br></br>*  في حالة كسر قاعدة التناوب يعرض الأجير نفسه إلى خصم قيمة 15يوم من منحة الغربة إلا في حالات خاصة قاهرة يبررها الأجير وتقيمها الشركة وترخص له الشركة كتابيا 





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

export default ContratA3Page1;
