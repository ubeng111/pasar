import { google } from 'googleapis';

export default async function handler(req, res) {
  const projectId = process.env.GOOGLE_PROJECT_ID;
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');  // Pastikan newline benar

  // Pastikan kredensial tersedia
  if (!clientEmail || !privateKey) {
    return res.status(400).json({ error: 'Missing credentials' });
  }

  try {
    // Set up the JWT client for Google API
    const auth = new google.auth.JWT(
      clientEmail,
      null,
      privateKey,
      ['https://www.googleapis.com/auth/indexing'],
      null
    );

    // Initialize Google Indexing API
    const indexing = google.indexing({ version: 'v3', auth });

    // Pastikan menerima parameter URL yang ingin diindeks
    const { url, type } = req.body;  // 'url' dan 'type' dikirim dalam body request

    // Kirimkan URL yang ingin diindeks
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url,  // URL yang ingin diindeks
        type: type || 'URL_UPDATED',  // Default 'URL_UPDATED'
      },
    });

    // Kirim respons jika berhasil
    res.status(200).json({ message: 'URL successfully indexed', data: response.data });
  } catch (error) {
    // Tangani error
    console.error('Error indexing URL:', error);
    res.status(500).json({ error: 'Error indexing URL', details: error.message });
  }
}
