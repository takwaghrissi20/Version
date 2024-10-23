
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";
import { Col, Row } from "antd"
const ContratE3Page1 = ({ fullName, passportNumber, passportSubmitdate, arResidenceAdress, companyType,
  traveldate, endTravelDate, arDestination, lastId, positionfieledarabe, dailyRate, duration,
  joinDate, finishDate, CIN, cinDate, arPosition, salary,
  
}) => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();
  console.log("CIN", CIN)
  console.log("cinDate", cinDate)
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
                <td style={{ fontSize: "30px" }}>E3</td>
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
            <span className='infoImportant'>من ناحية بوصفها صاحب الخدمة.</span><br></br>

            شركة <span className='infoContrat'>{companyType}</span>  شركة ذات مسؤولية محدودة  مقرها الاجتماعي ............................معرفها الجبائي ....................و مرسمة  بالسجل الوطني للمؤسسات تحت عدد.. في شخص ممثلها القانوني بصفة الوكيل السيد <span className='infoContrat'>{fullName}</span> صاحب بطاقة التعريف الوطنية عدد <span className='infoContrat'>{CIN}</span>
            و المؤرخة بتونس بتاريخ<span className='infoContrat'>{cinDate}</span> والقاطن ب<span className='infoContrat'>{arResidenceAdress} </span>
            <span className='infoImportant'>من ناحية بوصفها صاحب الخدمة.</span>


            <br /><span className='TitleSouligne'>	الفصل الأول: الموضوع</span><br />


            بموجب هدا العقد يشغل الطرف الثاني خطة<span className='infoContrat'> {arPosition} </span>صلب الشركة الطرف الأول للعقد وتتمثل المهام بالتحديد و المتفق عليها في الاستمارة الوظيفية .
            يلتزم الطرف الثاني بتسخير السيد <span className='infoContrat'>{fullName} </span>صاحب بطاقة التعريف الوطنية عدد<span className='infoContrat'> {CIN} </span> و المؤرخة بتونس بتاريخ <span className='infoContrat'>{cinDate}</span> و القاطن ب<span className='infoContrat'> {arResidenceAdress} </span>  بإسداء الخدمة دون سواه ولا يمكن تعويضه أو تغييره سواء لمدة محدودة أو لبقية هدا العقد إلا باتفاق كتابي بين الطرفين



            <br /><span className='TitleSouligne'>	الفصل الثاني: مدة العقد</span><br />

            حددت مدة تنفيذ العقد ب <span className='infoContrat'>{duration}</span> سنة تبتدئ من <span className='infoContrat'>{joinDate} </span>وتنتهي في<span className='infoContrat'>{finishDate} </span>قابلة للتجديد ضمنيا كما يمكن فسخ هدا العقد قبل نهايته من قبل أحد الأطراف مع وجوب إعلام الطرف الأخر قبل شهر بأي وسيلة تترك أثرا كتابيا.
            كما يلتزم الطرف الثاني بإسداء خدماته بالمواظبة بالحضور اليومي والمطابق لتوقيت العمل الإداري للشركة الطرف الأول للعقد ودلك طيلة سريان مفعول هدا العقد
            في حالة الغياب عن العمل بسبب المرض يلتزم الطرف الثاني بالاستظهار بشهادة طبية في اجل 48 ساعة عكس دلك يعتبر غياب غير مبرر. <br></br>

            <span className='TitleSouligne'>		الفصل الثالث: مكان العمل</span><br></br>
            يلتزم الطرف الثاني بإسداء خدماته بمقر الشركة
            الطرف الأول للعقد مع إمكانية اللجوء إلى تنقلات داخل أو خارج التراب التونسي حسب مقتضيات العمل.


            <span className='TitleSouligne'>	الفصل الرابع: المقابل المادي </span><br></br>



            قدرت قيمة هدا العقد ب <span className='infoContrat'>{salary}</span> في يوم عمل صافي خال من الأداء كما يتمتع الطرف الثاني بمنحة الغربة تقدر ب <span className='infoContrat'>{dailyRate}</span>في اليوم في صورة التنقل خارج حدود الوطن تكون غير خاضعة للادءات
            يتم الخلاص على أساس فاتورة يصدرها الطرف الثاني للعقد لحساب الطرف الأول ويتم سدادها (الفاتورة) في اجل أقصاه 5 أيام من تاريخ إصدارها
            و كل غياب عن يوم عمل دون مبرر قانوني يخصم من المقابل اليومي.
            لا يمكن للطرف الثاني المطالبة بمنح أو امتيازات أو معاليم أخرى خارج إطار هدا العقد <br></br>
            <span className='TitleSouligne'>
              الفصل الخامس: السرية والأمانة
            </span><br />
            <p>


              يلتزم الطرف الثاني بواجب حفظ السر المهني و أن لا يفشي أي معلومات سواء تجارية أو فنية أو علمية أو مالية أو قانونية أو شخصية أو غيرها من المعلومات التي تخص الشركة و يبقى هدا الواجب عام و دائم دون تحديد مدة و حتى بعد نهاية هدا العقد
              كما يلتزم الطرف الثاني بالحفاظ على جميع الأدوات و المعدات المقدمة من الطرف الأول سواء في شكل امتيازات عينية أو أدوات لانجاز الخدمة
              كما لا يحق للطرف الثاني التعامل أو التعاقد مع حرفاء و منافسي الشركة الطرف الأول للعقد <br></br>
              <span className='TitleSouligne'>
                الفصل السادس: أسباب فسخ العقد
              </span><br />


              يعتبر هدا العقد ملغى في إحدى الحالات التالية
              <br></br>*الإخلال بإحدى فصول هدا العقد من طرف احد الأطراف و لا يمكن للطرف المخل المطالبة بغرامة أو تعويض
              <br></br> *
              حدوث أخطاء مهنية جسيمة تضر بمصالح الطرف الأخر للعقد و لا يمكن للطرف المخطئ المطالبة بغرامة أو تعويض


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

export default ContratE3Page1;
