import { google } from 'googleapis';

export default async function handler(req, res) {
  // Pastikan hanya menerima POST request
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = process.env;

  // Pastikan GOOGLE_PRIVATE_KEY diubah agar newline (\n) diproses dengan benar
  const privateKey = GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');  // Mengganti \\n dengan karakter newline yang sebenarnya

  if (!GOOGLE_CLIENT_EMAIL || !privateKey) {
    return res.status(500).json({ error: 'Missing environment variables for Google Auth' });
  }

  // Setup autentikasi Google API menggunakan JWT
  const auth = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    privateKey,
    ['https://www.googleapis.com/auth/indexing'],  // Scope untuk Indexing API
    null
  );

  const indexing = google.indexing({ version: 'v3', auth });

  const { url } = req.body;  // Ambil URL dari body request

  // Verifikasi bahwa URL disertakan dalam request body
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    // Pastikan request body menggunakan payload yang benar
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED'  // Ganti dengan 'URL_DELETED' jika ingin menghapus URL
      }
    });

    return res.status(200).json({
      message: 'URL submitted successfully',
      data: response.data,
    });
  } catch (error) {
    console.error('Error submitting URL to Google:', error);
    return res.status(500).json({ error: 'Failed to submit URL to Google Indexing API' });
  }
}
