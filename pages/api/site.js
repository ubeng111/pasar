import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { cities } from '../../components/Website/cities'; // Import daftar kota Anda
import { format } from 'date-fns';

// Set MAX_URLS_PER_SITEMAP to 40,000 URLs per sitemap
const MAX_URLS_PER_SITEMAP = 40000; // 40,000 URLs per sitemap

// Fungsi untuk menangani pembuatan sitemap
export default async function handler(req, res) {
  try {
    console.log('Sitemap generation started');

    // Cek apakah cities ada dan merupakan array
    if (!cities || !Array.isArray(cities)) {
      console.error('Cities data is missing or invalid');
      return res.status(500).send('Cities data is missing or invalid');
    }

    // Pastikan direktori sitemap tersedia
    const sitemapDir = path.resolve('./public/sitemaps');
    if (!fs.existsSync(sitemapDir)) {
      fs.mkdirSync(sitemapDir, { recursive: true });
    }

    let currentSitemapCount = 0;
    let currentStream = null;
    let urlCount = 0;
    const sitemapIndexUrls = []; // Daftar untuk sitemap index

    // Fungsi untuk menambahkan URL ke sitemap
    const addUrlToSitemap = (url, changefreq, priority, lastmod) => {
      if (!currentStream) {
        // Buat sitemap baru jika stream belum ada
        console.log(`Creating new sitemap stream for sitemap-${currentSitemapCount}.xml`);

        // Buat stream untuk sitemap
        currentStream = new SitemapStream({ hostname: 'https://pasar.web.id' });

        // Tentukan lokasi file sitemap di folder public/sitemaps/
        const sitemapFilePath = path.resolve(sitemapDir, `sitemap-${currentSitemapCount}.xml`);
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
      urlCount++;

      // Jika jumlah URL dalam sitemap mencapai batas, buat sitemap baru
      if (urlCount >= MAX_URLS_PER_SITEMAP) {
        currentStream.end(); // Akhiri stream untuk sitemap saat ini
        sitemapIndexUrls.push({
          loc: `https://pasar.web.id/sitemaps/sitemap-${currentSitemapCount}.xml`, // Menggunakan file XML
          lastmod: new Date().toISOString(),
        });

        currentSitemapCount++; // Tambah penghitung sitemap
        urlCount = 0; // Reset jumlah URL
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
        loc: `https://pasar.web.id/sitemaps/sitemap-${currentSitemapCount}.xml`, // Menggunakan file XML
        lastmod: new Date().toISOString(),
      });
    }

    // Membuat sitemap index yang berisi link ke semua file sitemap
    const sitemapIndexFilePath = path.resolve(sitemapDir, 'sitemap-index.xml');
    const writeStream = fs.createWriteStream(sitemapIndexFilePath);

    // Mulai menulis sitemap index
    writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    writeStream.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

    // Menambahkan setiap file sitemap ke sitemap index
    sitemapIndexUrls.forEach((sitemapUrl) => {
      writeStream.write(`  <sitemap>\n`);
      writeStream.write(`    <loc>${sitemapUrl.loc}</loc>\n`);
      writeStream.write(`  </sitemap>\n`);
    });

    // Menutup sitemap index
    writeStream.write('</sitemapindex>\n');
    writeStream.end();

    console.log('Sitemap Index created at:', sitemapIndexFilePath);

    // Kirimkan response ke API setelah sitemap selesai dibuat
    writeStream.on('finish', async () => {
      // Kirimkan sitemap index sebagai response API
      const sitemapIndexXML = await fs.promises.readFile(sitemapIndexFilePath, 'utf-8');
      res.setHeader('Content-Type', 'application/xml');
      res.status(200).send(sitemapIndexXML);
    });

  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).send('Server error');
  }
}
