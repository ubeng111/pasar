// pages/api/sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { cities } from '../../components/Cianjur/cities';  // Path yang benar

export default async function handler(req, res) {
  try {
    console.log('Sitemap generation started');
    
    // Cek apakah cities ada dan merupakan array
    if (!cities || !Array.isArray(cities)) {
      console.error('Cities data is missing or invalid');
      return res.status(500).send('Cities data is missing or invalid');
    }

    console.log('Cities:', cities);  // Log cities untuk verifikasi

    // Membuat stream untuk sitemap
    const smStream = new SitemapStream({ hostname: 'https://pasar.web.id' });

    // Loop melalui cities dan tambahkan ke sitemap
    cities.forEach(city => {
      smStream.write({
        url: `/jasa-seo-${city.slug}`,  // URL dinamis berdasarkan slug
        changefreq: 'weekly',
        priority: 0.8,
      });
    });

    smStream.end();  // Akhiri stream sitemap

    // Convert stream menjadi sitemap XML
    const sitemap = await streamToPromise(smStream);
    
    // Kirimkan sitemap sebagai response dengan header XML
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemap.toString());
  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).send('Server error');
  }
}
