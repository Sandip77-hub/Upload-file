import React, { useState } from 'react';
import axios from 'axios'; 

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadedVideo(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      try {
        const response = await axios.post('YOUR_BACKEND_ENDPOINT', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('File uploaded successfully:', response.data);
      } catch (error) {

        console.error('Error uploading file:', error);
      }
    } else {
      console.error('Please select a file first');
    }
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileChange} />
      {uploadedVideo && (
        <div className="uploaded-video">
          <video controls>
            <source src={uploadedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
