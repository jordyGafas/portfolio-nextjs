import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please select a file');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);

      // Let FormData generate the boundary string automatically
      const response = await fetch('/api/gemini', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setResponse(data.response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Upload Image to Gemini</h1>
      <form onSubmit={handleSubmit}>
      <input type="file" name="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      {response && <p>Response: {response}</p>}
    </div>
  );
};

export default UploadForm;