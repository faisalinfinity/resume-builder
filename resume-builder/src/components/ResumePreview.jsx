import React, { useRef } from 'react';

import ReactToPdf from 'react-to-pdf';
import Resume from './Resume';

const ResumePreview = ({ref1,ref2,ref3}) => {
  const previewRef = useRef();
  return (
      <div  className="resume-container" ref={previewRef}>
      <Resume ref1={ref1} ref2={ref2} ref3={ref3} />
      </div>
  
  );
};

// Rest of the code...

export default ResumePreview;
