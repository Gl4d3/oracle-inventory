// import Dependencies
const { ObjectStorageClient, DocumentAnalysisClient } = require('oci-sdk');

// Read environment variable for OCI credentials
const config = {
    tenancyId: process.env.OCI_TENANCY_ID,
    userId: process.env.OCI_USER_ID,
    fingerprint: process.env.OCI_FINGERPRINT,
    privateKeyPath: process.env.OCI_PRIVATE_KEY_PATH
}

// Function to Create Object Storage Client (Optional)
async function getObjectStorageClient () {
    try{
        const client = new ObjectStorageClient(config);
        return client;
    } catch (error) {
        console.error('Error creating Object Storage Client', error);
        throw error;
    }
}

// Function to create a Document Analysis Client (Optional)
async function getDocumentAnalysisClient () {
    try{
        const client = new DocumentAnalysisClient(config);
        return client;
    } catch (error) {
        console.error('Error creating Document Analysis Client', error);
        throw error;
    }
}

// Function to upload a document to Object Storage
async function uploadDocument(client, documentName, documentData){
    try{
        const uploadResponse = await client.putObject({
            name: 'docu-bucket',
            body: documentData
        });
        console.log("Document uploaded successfully", uploadResponse);
     
        try{
            const analyzeDocumentResponse = await analyzeDocument(client, documentName);
            console.log("Document analysis successful", analyzeDocumentResponse.data);
            return analyzeDocumentResponse;
        }
        catch (error) {
            console.error('Error analyzing document', error);
            throw error;
        }    
       
    } catch (error) {
        console.error('Error uploading document', error);
        throw error;
    }
}

    // Function to analyze a document using DocumentAnalysisClient
async function analyzeDocument(client, documentName){
    try{
        const analyzeDocumentResponse = await client.analyzeDocument({
            bucketName: 'docu-bucket',
            documentName,
            features: ["KEY_VALUE_EXTRACTION"]
        });

        console.log("Document analysis successful", analyzeDocumentResponse.data);
        return analyzeDocumentResponse.data;
    }
    catch (error) {
        console.error('Error analyzing document', error);
        throw error;
    }
}

      
// Export functions
module.exports = {
    getObjectStorageClient,
    getDocumentAnalysisClient,
    uploadDocument,
    analyzeDocument
}