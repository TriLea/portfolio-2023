import React from 'react';
import '../styles/Resume.css';

const Resume = () => {
  const downloadResume = () => {
    window.location.href = "/path/to/your/resume.png";
  };

  return (
    <div className="resume-container">
      <img src="/path/to/your/resume.png" alt="My Resume" className="resume-image"/>
      <button onClick={downloadResume} className="download-btn">Download Resume</button>
    </div>
  );
}

export default Resume;
