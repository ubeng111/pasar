require('dotenv').config();  // Make sure to load environment variables

const { google } = require('googleapis');

// Retrieve the client email and private key from environment variables
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');  // Handle newlines properly

async function testGoogleAuth() {
  try {
    const auth = new google.auth.JWT(
      clientEmail,
      null,
      privateKey,
      ['https://www.googleapis.com/auth/indexing'],  // API scope for indexing
      null
    );
    
    // Initialize the Google Indexing API
    const indexing = google.indexing({ version: 'v3', auth });
    
    // Attempt to list URL notifications (as a test)
    const response = await indexing.urlNotifications.list({});
    console.log('Authenticated successfully:', response.data);
  } catch (err) {
    console.error('Authentication failed:', err);
  }
}

testGoogleAuth();
