import { useState } from 'react';
import '../styles/Header.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function Header() {
  const [fontStyle, setFontStyle] = useState('Arial');
  const [colorScheme, setColorScheme] = useState('black')

  function handleSetFontStyle(e) {
    setFontStyle(e.target.value);

    const previewPanel = document.querySelector('.preview-panel')
    previewPanel.style.fontFamily = e.target.value;
  }

  function handleSetColorScheme(e) {
    setColorScheme(e.target.value)

    const personalInfo = document.querySelector('.personal-info')
    personalInfo.style.backgroundColor = colorScheme
  }

  function downloadPDF() {
    const element = document.querySelector('.preview-panel');
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
  
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
  
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
  
      pdf.save('download.pdf');
    });
  }

  return (
    <header>
      <h1>Customize</h1>
      <div>
        <span>Font Style: </span>
        <select value={fontStyle} onChange={handleSetFontStyle}>
          <option value="Arial">Arial</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>

      <div>
        <label htmlFor="color">Select Color Scheme:</label>
        <input type="color" id="color" value={colorScheme} onChange={handleSetColorScheme} />
      </div>

      <button onClick={downloadPDF}><i className="fa-regular fa-file-pdf"></i></button>
    </header>
  );
}
