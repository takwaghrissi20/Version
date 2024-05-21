import { light } from '@mui/material/styles/createPalette';
import React,{useEffect,useState} from 'react';
import { useIntl } from 'react-intl';
import image from "../../../assets/icon/logo-with-name.png"


const ContratB1Page1= ({fullName,passportNumber,passportSubmitdate,arResidenceAdress,companyType,traveldate, 
  endTravelDate,arDestination,lastId,positionfieledarabe}) => {
  const { messages } = useIntl();
  const currentYear = new Date().getFullYear();


  return (
  <div className='page1'>
<div className='ContratPage'>
<div className='HeaderContrat' style={{ display: 'flex' }}>
  <div className='HeaderContratPage'>
    <p dir="rtl" className="TitleGeneral">عقد شغل لمدة محدودة</p>
  </div>
  <img src={image} alt="logo" style={{ alignSelf: 'flex-end',marginRight:"1rem",width:"120px"}} />

</div>

{/*End Header*/}
{/*tABLEAU de ref*/}
<div className='table'>
  <div className='HeaderContratPage'>   
  </div>

  <table class="zui-table">
      <thead>
        <tr>
          <th> G-E-{lastId}-{currentYear }</th>
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
{/*EndtABLEAU de ref*/}
<div dir="rtl">
<style jsx>{`
            .contrat-page1 {
              font-family: 'Arial', sans-serif;
              font-size: 20px;
              line-height: 1.6;
              text-align: justify;
              color:black; /* Couleur du texte */
              background-color: #fff; /* Couleur de fond */
              padding: 20px;
              
            }
           
          `}</style>
      <div className="contrat-page1">
     
      <span className='SousTitlepage1'> بين الممضيين أسفله </span> <br></br>
شركة <span className='Title'>GLOBAL ENGINEERING FOR TECHNICAL SERVICES </span>شركة ذات مسؤولية محدودة مقرها الاجتماعي طريق المهدية كلم 1.5 عمارة كليوباترا الطابق 4 شقة A4.1 –صفاقس معرفها الجبائي <span className='SousTitlepage1'>D 1398080 </span>ومرسمة بالسجل الوطني للمؤسسات تحت عدد B087962015
من ناحية بوصفها المؤجر
السيد(ة)<span style={{fontWeight:"bold",color:"#001f5d"}}>{fullName}</span> صاحب(ة) جواز سفر عدد <span style={{fontWeight:"bold",color:"#001f5d"}}> {passportNumber}  </span> والمؤرخ بتونس بتاريخ <span style={{fontWeight:"bold",color:"#001f5d"}}>{passportSubmitdate}</span> والقاطن ب <span style={{fontWeight:"bold",color:"#001f5d",paddingLeft:"3px"}}>{arResidenceAdress}</span>
من ناحية أخرى بوصفه(ها) الأجير
<br></br> <span className='SousTitlepage1'> تم الاتفاق على ما يلي  </span><br></br> 
<span className='TitleSouligne'>الفصل الأول   الموضوع</span><br></br>
بمقتضى هذا، تم انتداب السيد(ة) <span style={{fontWeight:"bold",color:"#001f5d",paddingLeft:"5px"}}>{fullName}</span>للعمل بشركة ليشغل خطة   <span style={{fontWeight:"bold",color:"#001f5d"}}>{positionfieledarabe}</span>, وبهذه الصفة يكون عليه تأدية المهام حسب المسمى الوظيفي للشركة 
<span style={{fontWeight:"bold",color:"#001f5d",paddingLeft:"5px"}}>{companyType}</span>قائمة المهام هذه ليست شاملة ويمكن استكمالها وفقًا لاحتياجات الشركة
<br></br> <span className='TitleSouligne'>الفصل الثاني: مدة العقد </span><br></br>
ابرم هذا العقد لمدة محدودة تبتدئ من <span style={{fontWeight:"bold",color:"#001f5d"}}>{traveldate}</span> الموافق لتاريخ السفر للموقع وينتهي يوم  <span style={{fontWeight:"bold",color:"#001f5d"}}>{endTravelDate}</span> الموافق لتاريخ. العودة لتونس. 
يتجدد هدا العقد ضمنيا بنفس الفصول أسفله لمدة مطابقة لمدة الإقامة المطبوعة على جواز سفر الأجير حتى في صورة تجديدها وهنا لا يجوز للأجير خلال هده الفترة العمل مع منافسي وحرفاء الشركة أو مغادرة موقع الحظيرة دون إذن كتابي. 
وفي حال سجل غياب الأجير في موقع الحظيرة وفي المسكن التابع لموقع الحظيرة وفي أي مكان أخر تابع لموقع الحظيرة فانه في الحال يتم إعلام أقرب مركز أمنى أو عسكري بغياب الأجير من دون سابق إعلام وإنهاء فاعلية الإقامة من قبل الكفيل وعدم تحمل أي مسؤولية جراء مغادرة الأجير موقع الحظيرة بهذه الطريقة ويعتبر هذا العقد ملغى ويتحمل الأجير جميع التتبعات القانونية. 
<br></br><span className='TitleSouligne'>الفصل الثالث: مكان العمل </span><br></br>
يباشر السيد(ة)<span style={{fontWeight:"bold",color:"#001f5d"}}>{fullName}</span> هذه المهام بمقر موقع الحظيرة للشركة الكائن ب <span style={{fontWeight:"bold",color:"#001f5d"}}>{arDestination}</span> مع التزامه بالتحاقه بأي موقع حظيرة أخر تابع للشركة في نفس البلد الأجنبي خلال مدة العقد امتثالا لمتطلبات عمل الشركة دلك.   
<br></br><span className='TitleSouligne'>الفصل الرابع: الأجر</span> 
<br></br><span className='TitleSouligne'>الفصل الخامس: التناوب والتسليم</span> 

      </div>
    </div>

 











</div>
<div dir="rtl" >
<p className="stylepage">صفحة 1</p>
</div>






   </div>
  );
};

export default  ContratB1Page1;
