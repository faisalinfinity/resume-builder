import React, { useRef } from 'react';

import ReactToPdf from 'react-to-pdf';
import Resume from './Resume';

const ResumePreview = () => {
  const previewRef = useRef();

  const options = {
    scale: 0.5, // Adjust the scale value as needed
    filename: 'resume.pdf',
    // ... other options if required
  };

  return (
      <div  className="resume-container" ref={previewRef}>
      <Resume/>
      </div>
  
  );
};

// Rest of the code...

export default ResumePreview;
