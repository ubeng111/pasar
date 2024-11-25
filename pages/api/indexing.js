// pages/api/indexing.js
import { google } from 'googleapis';

export default async function handler(req, res) {
  // Pastikan hanya menerima POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

  // Setup autentikasi Google API menggunakan JWT
  const auth = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/indexing'],  // Scope untuk Indexing API
    null
  );

  const indexing = google.indexing({ version: 'v3', auth });

  const { url } = req.body;  // Ambil URL dari body request

  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Kirimkan URL untuk diindeks
    const response = await indexing.urlNotifications.publish({
      url,
      type: 'URL_UPDATED',  // Tipe URL: 'URL_UPDATED' atau 'URL_DELETED'
    });

    return res.status(200).json({ message: 'URL submitted successfully', data: response.data });
  } catch (error) {
    console.error('Error submitting URL to Google:', error);
    return res.status(500).json({ error: 'Failed to submit URL to Google Indexing API' });
  }
}
