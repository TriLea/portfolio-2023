import React from 'react';
import '../styles/Resume.css';
import resume from '.././assets/Tristan_Lea.pdf';

const Resume = () => {
  const downloadResume = () => {
    window.location.href = resume;
  };

  return (
    <div className="resume-container">
      <img src="resume" alt="My Resume" className="resume-image"/>
      <button onClick={downloadResume} className="download-btn">Download Resume</button>
    </div>
  );
} 

export default Resume;
