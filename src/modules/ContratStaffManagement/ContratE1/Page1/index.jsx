
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../../assets/icon/logo-with-name.png";
import {Col,Row} from "antd"
const ContratE1Page1 = ({ fullName, passportNumber, passportSubmitdate, arResidenceAdress, companyType,
  traveldate, endTravelDate, arDestination, lastId, positionfieledarabe, salary, dailyRate, duration,
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
                <td style={{ fontSize: "30px" }}>E1</td>
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
            بمقتضى هذا، تم انتداب السيد(ة)<span className='infoContrat'>{fullName}</span> للعمل بشركة ليشغل خطة <span className='infoContrat'>{arPosition}</span>، وبهذه الصفة يكون عليه تأدية المهام حسب المسمى الوظيفي للشركة

            قائمة المهام هذه ليست شاملة ويمكن استكمالها وفقًا لاحتياجات الشركة

            <br /><span className='TitleSouligne'> الفصل الثاني: مدة العقد </span><br />
            ابرم هذا العقد لمدة<span className='infoContrat'>{duration}</span>أشهر/سنة تبتدئ في <span className='infoContrat'>{joinDate} </span>وتنتهي في <span className='infoContrat'>{finishDate}</span>, و يمكن تجديده لنفس المدة المذكورة و بالشروط الواردة أسفل هذا الفصل إذا احتفظ العامل بعمله إلى حين انقضاء العقد و طبق ما يتطلبه سير عمل الشركة.

            <br /><span className='TitleSouligne'>الفصل الثالث: مكان العمل </span><br />
            <p>

              يباشر السيد(ة)<span className='infoContrat'>{fullName}</span> هذه المهام بمقر الشركة المذكور أعلاه.
            </p>
            <span className='TitleSouligne'>الفصل الرابع: الأجر</span>
           <p>

            وعملا<span style={{fontWeight:"bold"}}>بالفصل 49 من الاتفاقية المشتركة الإطارية  </span> 
             يمكن إسناد منحة إنتاجية مبنية على مقاييس الإنتاج المحددة من قبل إدارة الشركة.    


           </p>

            <span className='TitleSouligne'>الفصل الخامس: توقيت العمل والعطل</span>
            <p>
            يلتزم الأجير بالمواظبة بالحضور واحترم توقيت العمل الإداري للشركة والموزع على نظام<span style={{fontWeight:"bold"}}> 48 ساعة عمل أسبوعيا.</span>
           وعملا بالفصل 30 من الاتفاقية المشتركة الإطارية يتمتع الأجير بعطلة خالصة الأجر كل سنة قدرت <span style={{fontWeight:"bold"}}>بيوم ونصف </span>  على كل شهر عمل فعلي يتمتع بها حسب النظام الداخلي للشركة. <br></br>
        
           <span className='TitleSouligne'>
              لفصل السادس: الغياب
            </span><br />
            <p dir="rtl">

              <span style={{ fontWeight: "bold" }}>لفصل 23 من الاتفاقية المشتركة الإطارية</span>، لن يتم التسامح مع أي غياب دون الحصول على إذن مسبق من إدارة الشركة
              يتم لفت انتباه إدارة الشركة إلى حالات الغياب بسبب حدث عرضي، مثل الوفاة أو الحادث أو المرض الخطير للزوج أو الأصل أو السليل، في أسرع وقت ممكن وعلى أبعد تقدير في غضون يومين ويجب أن تكون مدة هذا الغياب مرتبطة بالأحداث التي حفزتهم وفي حالة الغياب المتوقع، لا يجوز للعامل التغيب إلا بعد الحصول على إذن مسبق من إدارة الشركة .      
            </p>
          

            </p>
            
            <span className='TitleSouligne'>الفصل السابع: في الانتفاع بدورات تكوينية</span>
            <p>

              مع تطبيق  <span style={{ fontWeight: "bold" }}>  أحكام الفصل 43 من الاتفاقية المشتركة الإطارية </span>
              في حال تمتع الأجير بدورة تكوينية متخصصة سواء فرديا أو جماعيا يلتزم الأجير بالاستمرار في العمل لدى الشركة
              لمدة لا تقل على 5 سنوات في صورة تمتعه بإحدى الدورات التكوينية التي تنظمها الشركة وفي صورة الإخلال  يجبر الأجير على تعويض الشركة عن جميع مصاريف الدورة التكوينية التي تمتع بها الأجير .
            </p>

            <span className='TitleSouligne'>
              الفصل الثامن: السرية والأمانة
            </span><br />
            عملا <span style={{ fontWeight: "bold" }}>بالفصل 45 من الاتفاقية المشتركة الإطارية </span> يلتزم الأجير بالمحافظة على جميع ممتلكات الشركة داخل الموقع سواء كانت التي بعهدته الشخصية أو المتواجدة للعموم وإرجاعها للشركة فور إنهاء مهامه ويعتبر أي ضرر أو إتلاف أو سرقة أو فقدان للمعدات بعهدته هو المسؤول عنها مسؤولية تامة مع إلزامه بجبر الأضرار وإمكانية اعتبارها مدعاة لفسخ هذا العقد حسب تقدير الشركة مع عدم المطالبة الأجير بتعويض أو غرامة <br></br>يلتزم الأجير بواجب حفظ السر المهني وألا يفشي أي معلومات سواء تجارية أو فنية أو علمية أو مالية أو قانونية أو شخصية أو غيرها من المعلومات التي تخص الشركة ويبقى هدا الواجب عام ودائم دون تحديد مدة وحتى بعد نهاية هدا العقد    
          </div>
        </div>
      </div>
      {/* <div dir="rtl">
        <p className="stylepage">صفحة 1</p>
      </div> */}
    </div>
  );
};

export default ContratE1Page1;
