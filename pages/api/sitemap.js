import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { cities } from '../../components/Website/cities'; // Import daftar kota Anda
import { format } from 'date-fns';

const MAX_URLS_PER_SITEMAP = 10000; // Batas URL per sitemap (10000 per file)

// Fungsi untuk menangani pembuatan sitemap
export default async function handler(req, res) {
  try {
    console.log('Sitemap generation started');

    // Cek apakah cities ada dan merupakan array
    if (!cities || !Array.isArray(cities)) {
      console.error('Cities data is missing or invalid');
      return res.status(500).send('Cities data is missing or invalid');
    }

    let currentSitemapCount = 0;
    let currentStream = null;
    const sitemapIndexUrls = []; // Daftar untuk sitemap index

    // Fungsi untuk menambahkan URL ke sitemap
    const addUrlToSitemap = (url, changefreq, priority, lastmod) => {
      if (!currentStream) {
        // Buat sitemap baru jika stream belum ada
        console.log(`Creating new sitemap stream for sitemap-${currentSitemapCount}.xml`);

        // Buat stream untuk sitemap
        currentStream = new SitemapStream({ hostname: 'https://pasar.web.id' });

        // Tentukan lokasi file sitemap di folder public/sitemaps/
        const sitemapFilePath = path.resolve('./public/sitemaps', `sitemap-${currentSitemapCount}.xml`);
        console.log(`Writing sitemap to: ${sitemapFilePath}`);

        // Buat write stream ke file
        const writeStream = fs.createWriteStream(sitemapFilePath);
        currentStream.pipe(writeStream);

        // Menambahkan log jika stream berhasil ditulis
        writeStream.on('finish', () => {
          console.log(`Sitemap file written successfully: ${sitemapFilePath}`);
        });

        // Menangani error dalam penulisan file
        writeStream.on('error', (err) => {
          console.error('Error writing sitemap file:', err);
        });
      }

      // Tambahkan URL ke sitemap
      currentStream.write({ url, changefreq, priority, lastmod });

      // Jika jumlah URL dalam sitemap mencapai batas, buat sitemap baru
      if (currentStream.writableLength >= MAX_URLS_PER_SITEMAP) {
        currentStream.end(); // Akhiri stream untuk sitemap saat ini
        sitemapIndexUrls.push({
          loc: `https://pasar.web.id/sitemaps/sitemap-${currentSitemapCount}.xml`,
          lastmod: new Date().toISOString(),
        });

        currentSitemapCount++; // Tambah penghitung sitemap
        currentStream = null; // Reset stream
      }
    };

    // Daftar halaman statis
    const staticPages = [
      '/',
      '/about',
      '/contact',
      '/sitemap',
      '/services',
      '/faq',
    ];

    // Menambahkan URL halaman statis ke sitemap
    staticPages.forEach(page => {
      addUrlToSitemap(page, 'daily', 1.0, format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));
    });

    // Menambahkan URL berdasarkan daftar kota ke sitemap
    cities.forEach(city => {
      const cityUrl = `/jasa-seo-${city.slug}`;
      addUrlToSitemap(cityUrl, 'weekly', 0.8, format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));

      const websiteUrl = `/website-${city.slug}`;
      addUrlToSitemap(websiteUrl, 'weekly', 0.8, format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));
    });

    // Jika masih ada sitemap yang belum ditutup, tutup stream
    if (currentStream) {
      currentStream.end();
      sitemapIndexUrls.push({
        loc: `https://pasar.web.id/sitemaps/sitemap-${currentSitemapCount}.xml`,
        lastmod: new Date().toISOString(),
      });
    }

    // Membuat sitemap index yang berisi link ke semua file sitemap
    const sitemapIndexStream = new SitemapStream({ hostname: 'https://pasar.web.id' });
    sitemapIndexStream.write({ urls: sitemapIndexUrls });
    sitemapIndexStream.end();

    // Menulis sitemap index ke file
    const sitemapIndexFilePath = path.resolve('./public/sitemaps', 'sitemap-index.xml');
    const writeStream = fs.createWriteStream(sitemapIndexFilePath);
    sitemapIndexStream.pipe(writeStream);

    console.log('Sitemap Index created at:', sitemapIndexFilePath);

    // Kirimkan response ke API setelah sitemap selesai dibuat
    writeStream.on('finish', async () => {
      // Kirimkan sitemap index sebagai response API
      const sitemapIndexXML = await streamToPromise(sitemapIndexStream);
      res.setHeader('Content-Type', 'application/xml');
      res.status(200).send(sitemapIndexXML.toString());
    });

  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).send('Server error');
  }
}
