import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Col } from 'antd';
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import fontkit from '@pdf-lib/fontkit';

import {
  StyledScrumBoardDetailTitle,
} from './index.styled';

const Contratsivp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fullName = location.state ? location.state.fullName : '';

  const arResidenceAdress=location.state ? location.state.arResidenceAdress : null;
  const CIN=location.state ? location.state.CIN : null;
  const positionfieledarabe=location.state ? location.state.positionfieledarabe : null;
  const salary=location.state ? location.state. salary : null;
  const joinDate=location.state ? location.state.joinDate : null;
  const finishDate=location.state ? location.state. finishDate : null;
  const dailyRate=location.state ? location.state.dailyRate : null;
  const onGoToBack = () => {
    navigate(-1);
  };

  const fillPDF = async () => {
    try {
      // Charger le fichier PDF existant
      const existingPdfBytes = await fetch('/ContactSIVP/CIVP.pdf').then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
  
      // Register fontkit
      pdfDoc.registerFontkit(fontkit);
  
      // Intégrer une police personnalisée (exemple avec Amiri-Regular.ttf)
      const customFontBytes = await fetch('/Amiri/Amiri-Regular.ttf').then(res => res.arrayBuffer());
      const customFont = await pdfDoc.embedFont(customFontBytes);
  
      const form = pdfDoc.getForm();
const nameField = form.getTextField('name');
const CIN1 = form.getTextField('CIN');
// const adress = form.getTextField('text_6hbly');
const position = form.getTextField('position');
const salaryCIVP = form.getTextField('salary');
const datework = form.getTextField('datework');
const endwork = form.getTextField('endDate');

// Vérifiez que le champ existe
if (!nameField) {
  throw new Error('Le champ de texte "name" n\'existe pas dans le PDF.');
}

// Définir le texte du champ avec le nom complet
nameField.setText(fullName);
CIN1.setText(String(CIN));

// // adress.setText(arResidenceAdress);
// position.setText(positionfieledarabe);
// salaryCIVP.setText(salary);
// datework.setText(joinDate);
// endwork.setText(finishDate);

      
      // Utiliser la police personnalisée pour l'apparence du champ de texte
      nameField.updateAppearances(customFont);
  
      // Enregistrer le PDF rempli et le télécharger
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      saveAs(blob, 'CIVP_filled.pdf');
    } catch (error) {
      console.error('Erreur lors du remplissage du PDF :', error);
    }
  };
  

  return (
    <div>
      <StyledScrumBoardDetailTitle onClick={onGoToBack}>
        Add Employee  Staff Management
      </StyledScrumBoardDetailTitle>
      &gt; CONTRACT SIVP.pdf
      <div style={{ margin: "20px", textAlign: 'right' }}>
        <Col>
          <Button
            type="primary"
            size="large"
            style={{ margin: '0 20px', verticalAlign: 'middle' }}
            onClick={fillPDF}
          >
            <IoCloudDownloadOutline style={{ marginRight: '8px' }} />
            Download PDF
          </Button>
        </Col>
      </div>
    </div>
  );
};

export default Contratsivp;
