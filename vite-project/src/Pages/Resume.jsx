import React from 'react';
import '../styles/Resume.css';
import resumePDF from '../assets/Tristan_Lea.pdf';
import resumePNG from '../assets/Tristan_Lea.png'; 

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Tristan_Lea_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <img src={resumePNG} alt="Tristan Lea's Resume" className="resume-image" />
      <button onClick={downloadResume} className="download-btn">Download Resume as PDF</button>
    </div>
  );
}

export default Resume;