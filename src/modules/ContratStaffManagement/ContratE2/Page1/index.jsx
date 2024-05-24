
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";
import { Col, Row } from "antd"
const ContratE2Page1 = ({ fullName, passportNumber, passportSubmitdate, arResidenceAdress, companyType,
  traveldate, endTravelDate, arDestination, lastId, positionfieledarabe, salary, dailyRate, duration,
  joinDate, finishDate, arPosition


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
                <td style={{ fontSize: "30px" }}>E2</td>
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

            <br /><span className='TitleSouligne'> الفصل الثاني: مدة العقد –المراجعة-التراجع </span><br />

            ابرم هذا العقد بتاريخ <span className='infoContrat'>{joinDate}</span> ولمدة غير محدودة.<br></br>
            وعملا<span style={{ fontWeight: "bold" }}>الفصل 3 من الاتفاقية المشتركة الإطارية</span> بأحكام  لا يمكن طلب
            التراجع أو طلب المراجعة أو إعادة النظر في كامل هذا العقد أو جزء منه من طرف أحد المتعاقدين إلا بعد انقضاء مدة 3 أعوام كاملة ابتداء من انطلاقه ثم بعد مدة هده 3 أعوام فالتراجع أو المطالبة بإعادة النظر في هدا العقد لا يمكن القيام بأحد الطريقتين إلا بعد انقضاء عامين مدنيين ودلك عن طريق رسالة مضمونة الوصول مع الإعلام بالبلوغ.
            <br /> <span className='TitleSouligne'>الفصل الثالث: مدة التجربة </span>  <br></br>
            عملا<span style={{ fontWeight: "bold" }}>بأحكام الفصل 10 من الاتفاقية المشتركة الإطارية </span>  يخضع الأجير لفترة تجربة مدتها سنة تنطلق من بداية
            العقد وقابلة للتجديد مرة واحدة لنفس المدة في صورة سوء نتائج التجربة الأولى.
            خلال فترة أو فترتي التجربة يمكن إيقاف العمل بهذا العقد ودلك بمجرد إعلام التبليغ


            <br /><span className='TitleSouligne'>الفصل الرابع: مكان العمل  </span><br />
            <p>

              يباشر السيد(ة)<span className='infoContrat'>{fullName}</span> هذه المهام بمقر الشركة المذكور أعلاه.
            </p>

            <span className='TitleSouligne'>الفصل الخامس: الأجر</span>
            <p>
              يحصل الأجير، مقابل ما يؤديه من مهام، على اجر شهري أساسي قدره <span className='infoContrat'>{salary}</span>
              وعملا بالفصل 49 من الاتفاقية المشتركة الإطارية يمكن إسناد منحة إنتاجية مبنية على مقاييس الإنتاج المحددة من قبل إدارة الشركة.

            </p>
            <span className='TitleSouligne'>
              الفصل السادس: توقيت العمل والعطل</span>
            <p>

              يلتزم الأجير بالمواظبة بالحضور واحترم توقيت العمل الإداري للشركة والموزع على <span style={{ fontWeight: "bold" }}>نظام 48 ساعة عمل أسبوعيا</span>.
              وعملا <span style={{ fontWeight: "bold" }}>بالفصل 30 من الاتفاقية المشتركة الإطارية</span>  يتمتع الأجير بعطلة خالصة الأجر كل سنة قدرت بيوم ونصف على كل شهر عمل فعلي يتمتع بها حسب النظام الداخلي للشركة. <br></br>


              <span className='TitleSouligne'>
                الفصل السابع: الغياب
              </span><br />
              <p dir="rtl">

                وفقاً  <span style={{ fontWeight: "bold" }}>لفصل 23 من الاتفاقية المشتركة الإطارية </span> ، لن يتم التسامح مع أي غياب دون الحصول على إذن مسبق من إدارة الشركة
                يتم لفت انتباه إدارة الشركة إلى حالات الغياب بسبب حدث عرضي، مثل الوفاة أو الحادث أو المرض الخطير للزوج أو الأصل أو السليل، في أسرع وقت ممكن وعلى أبعد تقدير في غضون يومين ويجب أن تكون مدة هذا الغياب مرتبطة بالأحداث التي حفزتهم وفي حالة الغياب المتوقع، لا يجوز للعامل التغيب إلا بعد الحصول على إذن مسبق من إدارة الشركة .
              </p>


            </p>

            <span className='TitleSouligne'>الفصل الثامن: في الانتفاع بدورات تكوينية</span>
            <p>

              مع تطبيق  <span style={{ fontWeight: "bold" }}>  أحكام الفصل 43 من الاتفاقية المشتركة الإطارية </span>
              في حال تمتع الأجير بدورة تكوينية متخصصة سواء فرديا أو جماعيا يلتزم الأجير بالاستمرار في العمل لدى الشركة
              لمدة لا تقل على 5 سنوات في صورة تمتعه بإحدى الدورات التكوينية التي تنظمها الشركة وفي صورة الإخلال  يجبر الأجير على تعويض الشركة عن جميع مصاريف الدورة التكوينية التي تمتع بها الأجير .
            </p>

            <span className='TitleSouligne'>
              الفصل التاسع: السرية والأمانة
            </span><br />

          </div>
        </div>
      </div>
      {/* <div dir="rtl">
        <p className="stylepage">صفحة 1</p>
      </div> */}
    </div>
  );
};

export default ContratE2Page1;
