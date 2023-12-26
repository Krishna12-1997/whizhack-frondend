import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PdfDisplayComponent = ({ pdfUrl }) => {
  const [pdfData, setPdfData] = useState(null);

  useEffect(() => {
    // Fetch the PDF data from the backend
    axios.get(pdfUrl, { responseType: 'arraybuffer' })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' });
        setPdfData(URL.createObjectURL(blob));
      })
      .catch((error) => console.error('Error fetching PDF:', error));
  }, [pdfUrl]);

  return (
    <div>
      {pdfData && (
        <iframe
          title="PDF Viewer"
          src={pdfData}
          width="100%"
          height="500px"
          frameBorder="0"
        />
      )}
    </div>
  );
};

export default PdfDisplayComponent;
