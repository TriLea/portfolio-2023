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

//second idea using library

// import React from 'react';
// import { Document, Page } from 'react-pdf';
// import pdfFile from '.././assets/Tristan_Lea.pdf';
// import '../styles/Resume.css';

// const Resume = () => {
//   const [numPages, setNumPages] = React.useState(null);

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//   };

//   return (
//     <div className="resume-container">
//       <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
//         {Array.from({ length: numPages }, (_, index) => (
//           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//         ))}
//       </Document>
//       <button
//         onClick={() => window.open(pdfFile, "_blank")}
//         className="download-btn"
//       >
//         Download Resume
//       </button>
//     </div>
//   );
// };

// export default Resume;
