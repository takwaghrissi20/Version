import { light } from '@mui/material/styles/createPalette';
import React from 'react';
import { useIntl } from 'react-intl';
import image from "../../../assets/icon/logo-with-name.png";

const ContratB1Page3 = () => {
  const { messages } = useIntl();

  return (
    <div style={{ bordertop: "3px solid #32a1ce" }}>
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
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre */
              }

              @media print {
                .contrat-page2 {
                  color: #000; /* Couleur du texte pour l'impression */
                  background-color: #fff; /* Couleur de fond pour l'impression */
                  -webkit-print-color-adjust: exact; /* Ajustement des couleurs pour l'impression */
                }
                .logo {
                  max-width: 100%; /* Assurez-vous que l'image s'adapte bien à la page imprimée */
                  height: auto;
                }
                .zui-table, .zui-table th, .zui-table td {
                  border: 1px solid #000; /* Bordure noire pour la table lors de l'impression */
                }
                .page2, .ContratPage, .HeaderContrat, .HeaderContratPage, .table {
                  margin: 0;
                  padding: 0;
                }
              }
            `}</style>
            <div className="contrat-page2">
            <ul>
            -	احتساب يوم مرض نصف يوم عمل
              -	احتساب يوم العمل خلال الراحة الأسبوعية يوم عمل مضاعف القيمة
              -	احتساب يوم الإضراب يوم غياب
              </ul>
              <span className='TitleSouligne'>
              الفصل السابع: التزامات الأجير داخل موقع الحظيرة

              </span>
             
             
              يلتزم الأجير داخل الموقع بالقواعد التالية
              <ul>
              الامتثال التام لأوامر المشرفين على الموقع الأعلى رتبة منه واحترام النظام الهرمي للعملة للشركة وحفظ مقامات جميع المتدخلين والحفاظ على القيمة الاعتبارية للشركة لدى جميع المتدخلين وفي صورة الإخلال بهدا وجب على الأجير تقديم مبرراته كتابيا وانتظار قرار إدارة الشركة للبت فيها.
              -	المحافظة على جميع ممتلكات الشركة داخل الموقع سواء كانت التي بعهدته الشخصية أو المتواجدة للعموم لإنجاز المشروع وإرجاعها للشركة فور إنهاء مهامه ويعتبر أي ضرر أو إتلاف أو سرقة أو فقدان للمعدات بعهدته هو المسؤول عنها مسؤولية تامة
              -	 كل الخسائر والأضرار بموقع الحظيرة أو بمقر السكن أو بالمطعم التي ثبت تورط الأجير فيها يتحمل جميع نتائجها الأجير مع إلزامه بجبر الأضرار وإمكانية اعتبارها مدعاة لفسخ هدا العقد حسب تقدير الشركة مع عدم المطالبة الأجير بتعويض أو غرامة
              -	عدم الدخول في أي نوع من العلاقات الشخصية مع عملاء أو منافسي الشركة خصوصا علاقة شغليه أو مهنية والإخلال بهذا يؤدي إلى فسخ هدا العقد مباشرة وتتبع الأجير قضائيا
              -	   في صورة قطع هدا العقد في وقت سابق لأوانه وجب إعلام الطرف الأخر بأي إثر كتابي قبل شهر مع وجوب تامين الأجير مدة لا تقل ل 7 أيام لتمرير مهامه لمن سيعوضه تحتسب من تاريخ وصول المعوض
              -	 يتعهد الأجير بعدم المشاركة في أي إضراب داخل الموقع وكذلك الامتناع عن إثارة مشاكل أو شغب فيما يخص السكن أو الأكل.
             
                </ul>
            
             
              الفصل الثامن: السرية والأمانة
              يلتزم الأجير بواجب حفظ السر المهني وألا يفشي أي معلومات سواء تجارية أو فنية أو علمية أو مالية أو قانونية أو شخصية أو غيرها من المعلومات التي تخص الشركة ويبقى هدا الواجب عام ودائم دون تحديد مدة وحتى بعد نهاية هدا العقد
              الفصل التاسع: التزام الصحة والسلامة والبيئة
              يلتزم الأجير بما يلي
              -	احترام قواعد الصحة داخل الموقع.
              -	 احترام قواعد الصحة والسلامة المهنية
              -	 المساهمة في حماية البيئة والحيط.
              الفصل العاشر: أسباب فسخ العقد
              يعتبر هدا العقد ملغى في إحدى الحالات التالية
              -	الإخلال بإحدى فصول هدا العقد من طرف أحد الأطراف ولا يمكن للطرف المخل المطالبة بغرامة أو تعويض
              -	حدوث أخطاء مهنية جسيمة تضر بمصالح الطرف الأول للعقد ولا يمكن للطرف المخطئ المطالبة بغرامة أو تعويض
              الفصل الحادي عشر: في حل النزاعات
              يصرح الطرفان أنهما قبلا هدا العقد وشروطه والتزما العمل بمقتضاه وفي صورة حدوث نزاعات بين الطرفين يكون الالتجاء للمصالحة الودية التي تكون مرحلة ملزمة للطرفين وفي صورة الوصول إلى الاتفاق يتم تحرير محضر في الغرض وفي صورة فشل المصالحة فانه يتم تحرير محضر فشل المحاولة الصلحية في الغرض ثم يتم الالتجاء للقضاء ويكون النظر فيها من طرف محاكم صفاقس 1 فقط.

              حرر بصفاقس في نظيرين بتاريخ .................

              الطرف الاول شركة                                                                                      الطرف الثاني الأجير
              STE GLOBAL ENGINEERING
              FOR TECHNICAL SERVICES
              في شخص ممثلها القانوني أو من ينوبه


            </div>
          </div>
        </div>
        <div dir="rtl">
          <p className="stylepage">صفحة 3</p>
        </div>
      </div>
    </div>
  );
};

export default ContratB1Page3;
