require('dotenv').config();  // Memuat variabel lingkungan dari file .env

const { google } = require('googleapis');

// Mendapatkan kredensial dari .env
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY;

// Fungsi untuk autentikasi Google API
const authenticateGoogleAPI = async () => {
  const auth = new google.auth.JWT(
    clientEmail,
    null,
    privateKey,
    ['https://www.googleapis.com/auth/indexing'],  // Scope untuk Indexing API
    null
  );

  const indexing = google.indexing({ version: 'v3', auth });

  try {
    const response = await indexing.urlNotifications.list({});
    console.log('Authenticated successfully:', response.data);
  } catch (error) {
    console.error('Authentication failed:', error);
  }
};

authenticateGoogleAPI();
