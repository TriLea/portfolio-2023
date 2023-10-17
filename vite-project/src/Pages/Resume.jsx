import React from 'react';
import '../styles/Resume.css'; // for the styles

const ResumePage = () => {
  const downloadResume = () => {
    window.location.href = "/path/to/your/resume.png"; // Modify with the correct path to your resume.png
  };

  return (
    <div className="resume-container">
      <img src="/path/to/your/resume.png" alt="My Resume" className="resume-image"/>
      <button onClick={downloadResume} className="download-btn">Download Resume</button>
    </div>
  );
}

export default ResumePage;
