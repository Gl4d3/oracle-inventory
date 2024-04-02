## OCI Invoice Analyzer: From Paper to JSON in a Flash!

This project lets you upload invoices and other documents to Oracle Cloud Infrastructure (OCI) Storage. It then leverages OCI's Document Analysis service to extract key data and deliver a JSON response. 

**Features:**

- Streamlined document upload experience
- Secure storage of documents in OCI Storage buckets
- Powerful document analysis powered by OCI
- User-friendly JSON response for easy data extraction

**Getting Started:**

1. **Prerequisites:** Have an OCI account with appropriate permissions for Object Storage and Document Analysis services.
2. **Set Up Environment Variables:** Replace the following placeholders in `oci.js` with your OCI credentials:
    - `OCI_TENANCY_ID`
    - `OCI_USER_ID`
    - `OCI_FINGERPRINT`
    - `OCI_PRIVATE_KEY_PATH`
3. **Run the Application:**
    - Install dependencies: `npm install`
    - Start the server: `node index.js`

**Usage:**

1. Open the application in your web browser (usually `http://localhost:3000`).
2. Enter the name of the OCI Storage bucket where you want to store your document.
3. Provide a descriptive name for the document you're uploading.
4. Select the document file to upload (e.g., PDF, DOCX).
5. Click "Upload" to submit the document.

**Response:**

Upon successful upload and analysis, you'll receive a JSON response containing extracted information from your document.

**Contributing:**

We welcome contributions to this project! Feel free to fork the repository and submit pull requests with enhancements or bug fixes.

**License:**

This project is licensed under the MIT License.  


**Disclaimer:** This is a basic example. Implement robust error handling and security measures in a production environment.
