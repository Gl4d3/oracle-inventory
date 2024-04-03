// Import required modules
const express = require('express');
const app = express();
const uploadRoute = require('../routes/upload'); // Import route handler

// Middleware (optional)
app.use(express.json()); // Parse JSON data from requests

// Route handlers
app.use('/upload', uploadRoute); // Use the upload route handler

// Start the server
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000
app.listen(port, () => console.log(`Server listening on port ${port}`)); // Start the server and log a message

//END

// Main function
// async function main() {
//     try{
//         // Get Object Storage Client
//         const objectStorageClient = await getObjectStorageClient();

//         // Analyze document
//         const analysisResponse = await analyzeDocument(objectStorageClient, bucketName, documentName);

//         console.log("Document upload successful!");
//     } 
    
//     catch (error) {
//         console.error("Error occurred:", error);
//     }
// }

// main();
