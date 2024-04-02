// Import required modules
const express = require('express');
const multer = require('multer');
const { uploadDocument } = require('./oci');

// Create an instance of Express app
const app = express();

// Configure multer for file upload
const upload = multer(); // This makes the file available in req.file

// Handle POST request to /upload endpoint
app.post('/upload', upload.single('file'), async (req, res) => {
  const { file } = req;
  const { originalname: documentName, buffer: documentData } = file;

  // Create a new OCI client
  const client = new DocumentAnalysisClient(config);

  // Upload the file to OCI
  try {
    const uploadResponse = await uploadDocument(client, documentName, documentData);
    res.json({ message: 'File uploaded and analyzed successfully', uploadResponse });
  } catch (error) {
    console.error('Error uploading file to OCI', error);
    res.status(500).json({ error: 'Error uploading file to OCI' });
  }
});

// Start the server on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));