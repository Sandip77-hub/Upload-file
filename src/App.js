import React, { useState } from 'react';
import axios from 'axios'; // Make sure axios is installed in your project

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      try {
        // Replace 'YOUR_BACKEND_ENDPOINT' with your actual backend endpoint
        const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        // Handle success, e.g., show a success message
        console.log('File uploaded successfully:', response.data);
      } catch (error) {
        // Handle error, e.g., show an error message
        console.error('Error uploading file:', error);
      }
    } else {
      // Handle case where no file is selected
      console.error('Please select a file first');
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;

