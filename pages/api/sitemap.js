import { SitemapStream, streamToPromise } from 'sitemap';
import { cities } from '../../components/Cianjur/cities';  // Pastikan path benar

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

    // Menambahkan halaman statis ke sitemap
    const staticPages = [
      '/',
      '/about',
      '/contact',
      '/sitemap',
      '/services',
      '/faq',
    ];

    // Set untuk melacak URL yang sudah dimasukkan ke sitemap
    const addedUrls = new Set();

    // Fungsi untuk menambahkan URL ke sitemap jika belum ada
    const addUrlToSitemap = (url, changefreq, priority, lastmod) => {
      if (!addedUrls.has(url)) {
        smStream.write({
          url,
          changefreq,
          priority,
          lastmod,
        });
        addedUrls.add(url);
      }
    };

    // Menambahkan halaman statis ke sitemap
    staticPages.forEach(page => {
      addUrlToSitemap(page, 'daily', 1.0, '2024-10-10T13:24:33.239Z');
    });

    // Loop melalui cities dan tambahkan ke sitemap
    cities.forEach(city => {
      const cityUrl = `/jasa-seo-${city.slug}`;
      addUrlToSitemap(cityUrl, 'weekly', 0.8, '2024-10-10T13:24:33.239Z');

      // Menambahkan URL website-:city ke sitemap
      const websiteUrl = `/website-${city.slug}`;
      addUrlToSitemap(websiteUrl, 'weekly', 0.8, '2024-10-10T13:24:33.239Z');
    });

    smStream.end();  // Akhiri stream sitemap

    // Convert stream menjadi sitemap XML
    const sitemap = await streamToPromise(smStream);
    
    // Kirimkan sitemap sebagai response dengan header XML
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemap.toString());
  } catch (err) {
    console.error('Error generating sitemap:', err);  // Log error lebih detail
    res.status(500).send('Server error');
  }
}
