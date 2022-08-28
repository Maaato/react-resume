import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { POPPINS_FONT_B64 } from '../Utils/Constants';

export const GenerateCV = ({ email, location, telephone, social }) => {
  const [infoNodes, setInfoNodes] = useState([]);
  const [infoNodesText, setInfoNodesText] = useState([]);
  const [socialNodes, setSocialNodes] = useState([]);
  const [socialNodesText, setSocialNodesText] = useState([]);

  console.log({ email, location, telephone, social });
  const generateResume = async () => {
    prepareResume();
    const rootCV = document.getElementById('bd-container');
    const canvasCV = await html2canvas(rootCV).catch((e) => console.error(e));
    const imageCV = canvasCV.toDataURL('image/png');
    const pdf = new jsPDF({ format: [430, 255] });
    pdf.addImage(imageCV, 'PNG', 0, 0);
    pdf.addFileToVFS('poppins-Medium.ttf', POPPINS_FONT_B64);
    pdf.addFont('poppins-Medium.ttf', 'POPPINS_FONT_B64', 'normal');
    pdf.setFont('POPPINS_FONT_B64');
    pdf.setTextColor(document.body.classList.contains('dark-theme') ? '#b5c4db' : '#4c566a');
    pdf.setFontSize(11);

    pdf.text(location, 15, 72);
    pdf.text(email, 15, 82);
    pdf.text(telephone, 15, 92);

    const starterPositionX = 15;
    let starterPositionY = 406;
    social.forEach((socialProp) => {
      pdf.textWithLink(socialProp.label, starterPositionX, starterPositionY, {
        url: socialProp.url,
      });
      starterPositionY += 10;
    });
    rollbackResume();
    pdf.save('resume.pdf');
  };

  const prepareResume = () => {
    Array.from(document.getElementsByClassName('social__link')).forEach(
      (socialElement) =>
        socialElement.childNodes.forEach((iconElement) => {
          if (iconElement.textContent.trim().length > 0) {
            setSocialNodes(socialNodes.push(iconElement));
            setSocialNodesText(socialNodesText.push(iconElement.textContent));
            iconElement.textContent = null;
          }
        })
    );
    Array.from(document.getElementsByClassName('home__address')).map(
      (infoElement) =>
        infoElement.childNodes.forEach((iconElement) =>
          iconElement.childNodes.forEach((element) => {
            if (element.textContent.trim().length > 0) {
              console.log(element.textContent);
              setInfoNodes(infoNodes.push(element));
              setInfoNodesText(infoNodesText.push(iconElement.textContent));
              element.textContent = null;
            }
          })
        )
    );
    document.getElementById('resume__options').style.display = 'none';
    document.getElementById('resume__generate').style.display = 'none';
  };

  const rollbackResume = () => {
    console.log({ infoNodes, infoNodesText, socialNodes, socialNodesText });
    infoNodes.forEach((e, i) => (e.textContent = infoNodesText[i]));
    socialNodes.forEach((e, i) => (e.textContent = socialNodesText[i]));
    setInfoNodes([]);
    setInfoNodesText([]);
    setSocialNodes([]);
    setSocialNodesText([]);
    document.getElementById('resume__options').style.display = 'block';
    document.getElementById('resume__generate').style.display = 'inline-grid';
  };

  return (
    <div className='generate__container' id='resume__generate'>
      <button href='#' className='generate__btn' onClick={generateResume}>
        Download CV
      </button>
    </div>
  );
};
