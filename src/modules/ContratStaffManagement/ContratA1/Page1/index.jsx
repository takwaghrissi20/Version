
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";

const ContratA1Page1 = ({ fullName, passportNumber, passportSubmitdate, arResidenceAdress, companyType,
  traveldate, endTravelDate, arDestination, lastId, positionfieledarabe, salary, dailyRate,
  joinDate, finishDate, arPosition


}) => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <div className='page1'>
      <div className='ContratPage'>
        {/* <div className="page">
          <img src={image} alt="logo" className="logo" />
        </div> */}
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
                <td style={{ fontSize: "30px" }}>A1</td>
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

            <br /><span className='TitleSouligne'>الفصل الثاني: مدة العقد</span><br />

            ابرم هذا العقد لمدة
            أشهر/سنة تبتدئ في <span className='infoContrat'>{joinDate}</span> وتنتهي في <span className='infoContrat'>{finishDate}</span>, ويمكن تجديده لنفس المدة المذكورة و بالشروط الواردة أسفل هذا الفصل إذا احتفظ العامل بعمله إلى حين انقضاء العقد و طبق ما يتطلبه سير عمل الشركة.

            <br /><span className='TitleSouligne'>الفصل الثالث: مكان العمل</span><br />
            يباشر السيد(ة) <span className='infoContrat'>{fullName}</span> هذه المهام بمقر الشركة المذكور أعلاه وبأحد مواقع الحظيرة التابعة لنشاط الشركة إذا اقتضت ظروف العمل ذلك ودون رفض للأجير.
            <br /><span className='TitleSouligne'>الفصل الرابع: الأجر</span>

            <br></br>حصل الأجير، مقابل ما يؤديه من مهام، <span style={{ fontWeight: "bold" }}>اجر شهري صافي قدره </span> <span className='infoContrat'>{salary} <br></br></span>



            وعملا<span style={{ fontWeight: "bold" }}> بالفصل 49 من الاتفاقية المشتركة الإطارية </span> يمكن إسناد منحة إنتاجية مبنية على مقاييس الإنتاج المحددة من قبل إدارة الشركة.<br></br>
            <p>
              كما يحق للأجير منحة غربة تقدر ب

              <span className='infoContrat'>{dailyRate}</span>

              صافي على كل يوم عمل بموقع الحظيرة خارج حدود التراب التونسي مع أيام عطلة خالصة الأجر على أساس الأجر الشهري تحتسب على أساس القاعدة التالية <br></br>
              *	 ما يفوق أو يساوي 90 يوم عمل بمقر موقع الحظيرة يقابله 21 يوم راحة خالصة الأجر  <br></br>
              *	 ما بين ما يفوق أو يساوي 60 يوم واقل من 90 يوم عمل بمقر موقع الحظيرة يقابله 14 يوم راحة خالصة الأجر <br></br>
              *	ما بين ما يفوق أو يساوي 30 يوم واقل من 60 يوم عمل بمقر موقع الحظيرة يقابله 7 أيام راحة خالصة الأجر <br></br>
              *	  ما اقل من 30 يوم عمل بمقر موقع الحظيرة لا يقابلها أيام راحة خالصة الأجر <br></br>
              يمكن للشركة تسجيل تأخير في خلاص منحة الغربة بسبب تأخر خلاص من طرف حرفائها أو تأخر في تحويل الخلاص من الخارج ولكن هدا التأخير لا يمكن أن يتعدى الشهر ولا يمكنه أن يؤثر على السير العادي للعمل.

            </p>


            <span className='TitleSouligne'>الفصل الخامس: : توقيت العمل والعطل   </span>
            <p>

              يلتزم الأجير بالمواظبة بالحضور واحترم توقيت العمل الإداري للشركة والموزع على نظام<span style={{ fontWeight: "bold" }}>  48 ساعة عمل أسبوعيا</span> .<br></br>
              وعملا<span style={{ fontWeight: "bold" }}> بالفصل 30</span>  من الاتفاقية المشتركة الإطارية يتمتع الأجير بعطلة خالصة الأجر كل سنة قدرت <span style={{ fontWeight: "bold" }}>بيوم ونصف على كل شهر</span> عمل فعلي يتمتع بها حسب النظام الداخلي للشركة.
              في العمل داخل موقع الحظيرة يلتزم الأجير بتقديم إجمالي<span style={{ fontWeight: "bold" }}>10 ساعات عمل يوميا  </span> في الموقع باحتساب 01 ساعة غداء ويخضع للقواعد التالي
              *	استراحتين قصيرتين ب 15 دقيقة يوميا في العاشرة صباحا وفي الساعة الثالثة بعد الظهر
              * احتساب السفر ذهابا وإيابا يوم عمل <br></br>
              * احتساب تعليق ظرفي أو وقتي للعمل عمل فعلي<br></br>
              * احتساب يوم مرض نصف يوم عمل <br></br>
              احتساب يوم العمل خلال الراحة الأسبوعية يوم عمل مضاعف القيمة *<br></br>
              *احتساب يوم الإضراب يوم غياب سواء كان الإضراب شرعي أو غير شرعي<br></br>


            </p>
          </div>
        </div>
      </div>
      <div dir="rtl">
        <p className="stylepage">صفحة 1</p>
      </div>
    </div>
  );
};

export default ContratA1Page1;
