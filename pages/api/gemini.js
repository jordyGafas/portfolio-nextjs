const formidable = require('formidable');
import fs from 'fs';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';

// Disable body parser to handle form-data
export const config = {
  api: {
    bodyParser: false,
  },
};

// Initialize GoogleGenerativeAI with your API_KEY
const genAI = new GoogleGenerativeAI("AIzaSyATRtylab5HNuoGDty7x-0Z0WAWM54cVrk");

// Get the specific generative model
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash', // Specify the model you want to use
});

const fileManager = new GoogleAIFileManager("AIzaSyATRtylab5HNuoGDty7x-0Z0WAWM54cVrk");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const form = new formidable.IncomingForm();
  form.uploadDir = './'; // Set a temporary directory for uploads
  form.keepExtensions = true; // Keep the original file extension

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Form parsing error:', err);
      return res.status(500).json({ error: 'Error parsing the form' });
    }

    console.log('Parsed files:', files);

    const file = files.file;
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded or file field missing' });
    }

    // Handle file object
    const fileObj = Array.isArray(file) ? file[0] : file;
    console.log('File object:', fileObj);

    // Ensure file has a path and mime type
    if (!fileObj.filepath || !fileObj.mimetype) {
      return res.status(500).json({ error: 'File path or mime type is undefined' });
    }

    const filePath = fileObj.filepath;
    const mimeType = fileObj.mimetype;

    try {
      // Upload the file using GoogleAIFileManager
      const uploadResult = await fileManager.uploadFile(filePath, {
        mimeType,
        displayName: 'Uploaded Image', // Set a descriptive display name
      });

      console.log(`Uploaded file ${uploadResult.file.displayName} as: ${uploadResult.file.uri}`);

      // Generate content using the model and the URI reference for the uploaded file
      const result = await model.generateContent([
        {
          fileData: {
            mimeType: uploadResult.file.mimeType,
            fileUri: uploadResult.file.uri,
          },
        },
        { text: 'Describe the image with a creative description.' },
      ]);

      // Handle the response of generated text
      res.status(200).json({ response: result });
    } catch (error) {
      console.error('Error handling file:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
}
