import fs from 'fs';
import path from 'path';
import { cities } from '../../components/Website/cities'; // File `cities.js` dengan data kota
import { format } from 'date-fns';

export default async function handler(req, res) {
  try {
    console.log('Memulai pembuatan sitemap...');

    const sitemapDir = path.resolve('./public/sitemaps');
    const hostname = 'https://pasar.web.id';
    const currentDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");

    // Buat direktori sitemap jika belum ada
    await fs.promises.mkdir(sitemapDir, { recursive: true });

    // Konfigurasi batas URL per file sitemap
    const URL_LIMIT = 10000;

    // Kumpulkan semua URL
    let urls = [];

    // Halaman statis
    const staticPages = [
      '/',
      '/about',
      '/contact',
      '/sitemap',
      '/services',
      '/faq',
    ];

    staticPages.forEach((page) => {
      urls.push(`
        <url>
          <loc>${hostname}${page}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `);
    });

    // Halaman berdasarkan daftar kota
    cities.forEach((city) => {
      urls.push(`
        <url>
          <loc>${hostname}/jasa-seo-${city.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `);

      urls.push(`
        <url>
          <loc>${hostname}/website-${city.slug}</loc>
          <lastmod>${currentDate}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `);
    });

    // Membagi URL menjadi beberapa file sitemap
    let sitemapIndex = [];
    let sitemapFiles = [];
    for (let i = 0; i < urls.length; i += URL_LIMIT) {
      const chunk = urls.slice(i, i + URL_LIMIT);
      const fileName = `sitemap-${sitemapFiles.length + 1}.xml`;
      const filePath = path.join(sitemapDir, fileName);

      const sitemapContent = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${chunk.join('\n')}
        </urlset>
      `.trim();

      await fs.promises.writeFile(filePath, sitemapContent);
      sitemapFiles.push(fileName);

      sitemapIndex.push(`
        <sitemap>
          <loc>${hostname}/sitemaps/${fileName}</loc>
          <lastmod>${currentDate}</lastmod>
        </sitemap>
      `);
    }

    // Membuat file sitemap index
    const sitemapIndexContent = `
      <?xml version="1.0" encoding="UTF-8"?>
      <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${sitemapIndex.join('\n')}
      </sitemapindex>
    `.trim();

    const sitemapIndexPath = path.join(sitemapDir, 'sitemap.xml');
    await fs.promises.writeFile(sitemapIndexPath, sitemapIndexContent);

    console.log('Sitemap index berhasil dibuat:', sitemapIndexPath);

    // Kirim hasil sitemap index sebagai response
    res.setHeader('Content-Type', 'application/xml');
    res.status(200).send(sitemapIndexContent);
  } catch (error) {
    console.error('Terjadi kesalahan saat membuat sitemap:', error);
    res.status(500).send('Terjadi kesalahan saat membuat sitemap');
  }
}
