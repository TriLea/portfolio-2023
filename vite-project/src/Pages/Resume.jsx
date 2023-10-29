import React from 'react';
import '../styles/Resume.css';
import resume from '.././assets/Tristan_Lea.pdf';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = resume;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-container">
      <iframe src={resume} title="My Resume" className="resume-image" />
      <button onClick={downloadResume} className="download-btn">Download Resume</button>
    </div>
  );
}

export default Resume;
