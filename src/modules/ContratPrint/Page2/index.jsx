import { light } from '@mui/material/styles/createPalette';
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../assets/icon/logo-with-name.png";

const ContratB1Page2 = () => {
  const { messages } = useIntl();

  return (
    <div style={{ bordertop: "3px solid #32a1ce"}}>
      <div className='page2'>
        <div className='ContratPage'>
        <div className="page">
          <img src={image} alt="logo" className="logo" />
        </div>
          <div className='HeaderContrat' style={{ display: 'flex' }}>
            <div className='HeaderContratPage'>
              <p dir="rtl" className="TitleGeneral">عقد شغل لمدة محدودة</p>
            </div>

          </div>

    

          <div dir="rtl">
            <style jsx>{`
              .contrat-page2 {
                font-family: 'Arial', sans-serif;
                font-size: 20px;
                line-height: 1.6;
                text-align: justify;
                color: black; /* Couleur du texte */
                background-color: #fff; /* Couleur de fond */
                padding: 20px;
        
              }

              @media print {
                .contrat-page2 {
                  color: #000; 
                  background-color: #fff;
                  -webkit-print-color-adjust: exact; 
                }
                .zui-table, .zui-table th, .zui-table td {
                  border: 1px solid #000; 
                }
                .page2, .ContratPage, .HeaderContrat, .HeaderContratPage, .table {
                  margin: 0;
                  padding: 0;
                }
              }
            `}</style>
            <div className="contrat-page2">
              في صورة تجديد هذا العقد يلتزم الأجير باحترام بشكل قطعي قواعد التناوب الخاصة بالشركة والمتمثلة في على الأقل في 120 يوم عمل متواصلة بموقع الحظيرة دون انقطاع بالنسبة للعملة المختصين والتنفيذ التي تحتسب على أساس القاعدة التالية:
              <ul>
                <li>ما يفوق أو يساوي 90 يوم عمل بمقر موقع الحظيرة يقابله 21 يوم راحة.</li>
                <li>ما بين ما يفوق أو يساوي 60 يوم وأقل من 90 يوم عمل بمقر موقع الحظيرة يقابله 14 يوم راحة.</li>
                <li>ما بين ما يفوق أو يساوي 30 يوم وأقل من 60 يوم عمل بمقر موقع الحظيرة يقابله 7 أيام راحة.</li>
                <li>ما أقل من 30 يوم عمل بمقر موقع الحظيرة لا يقابلها أيام راحة.</li>
                <li>يمكن للأجير طلب تقليص مدة الراحة والعودة لموقع الحظيرة إذا توافقت مع متطلبات العمل بالموقع.</li>
              </ul>
              كما يخضع الأجير للشروط الآتية ذكرها:
              <ul>
                <li>يلتزم الأجير بالمواظبة على الحضور واحترام توقيت العمل وعدم مغادرة الموقع قبل المدة حتى في الأعياد.</li>
                <li>إذا تبين تعدد الغيابات دون مبرر شرعي فللشركة حق فسخ العقد من طرفها دون المطالبة بتعويضات أو غرامة.</li>
                <li>من الأجير بعد التنبيه عليه بأي وسيلة تترك أثراً كتابياً في الالتحاق بالعمل في مدة لا تتجاوز 24 ساعة.</li>
                <li>في حالة كسر قاعدة التناوب يعرض الأجير نفسه إلى عقوبات إلا في حالات خاصة قاهرة يبررها الأجير وتقيمها الشركة وترخص له الشركة كتابياً.</li>
                <li>خلال أيام الراحة الأسبوعية وإذا تطلبت ظروف العمل ذلك وجب على الأجير أن يكون متاحاً ويحتسب يوم عمل مضاعف الأجر.</li>
                <li>في حالة زيارة قصيرة لموقع الحظيرة خلال الراحة الأسبوعية يتمتع الأجير بإجازة خصوصية.</li>
                <li>وجب على الأجير تأمين عملية نقل وتسليم مهامه لمن سيعوضه وذلك حسب القوانين الداخلية للشركة وذلك في مدة لا تقل عن 7 أيام من تاريخ وصول المعوض لموقع الحظيرة.</li>
              </ul>
              <br /><span className='TitleSouligne'>الفصل السادس: توقيت العمل والعطل</span><br />
              في العمل داخل موقع الحظيرة يلتزم الأجير بتقديم إجمالي 10 ساعات عمل في الموقع باحتساب 01 ساعة غداء ويخضع للقواعد التالية:
              <ul>
                <li>استراحتان قصيرتان ب 15 دقيقة يومياً في العاشرة صباحاً وفي الساعة الثالثة بعد الظهر.</li>
                <li>احتساب السفر ذهاباً وإياباً يوم عمل.</li>
                <li>احتساب تعليق ظرفي أو وقتي للعمل عمل فعلي.</li>
                
              </ul>
            
            </div>
          </div>
        </div>
        <div dir="rtl">
          <p className="stylepage">صفحة 2</p>
        </div>
      </div>
    </div>
  );
};

export default ContratB1Page2;
