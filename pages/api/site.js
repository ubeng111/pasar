import { SitemapStream } from 'sitemap';
import fs from 'fs';
import path from 'path';
import { cities } from '../../components/Website/cities'; // Import daftar kota
import { format } from 'date-fns';

const MAX_URLS_PER_SITEMAP = 4000; // Batas 4000 URL per sitemap

export default async function handler(req, res) {
  try {
    console.log('Sitemap generation started');

    if (!cities || !Array.isArray(cities)) {
      console.error('Cities data is missing or invalid');
      return res.status(500).send('Cities data is missing or invalid');
    }

    const sitemapDir = path.resolve('./public/sitemaps');
    if (!fs.existsSync(sitemapDir)) {
      fs.mkdirSync(sitemapDir, { recursive: true });
    }

    let currentSitemapCount = 0;
    let currentStream = null;
    let urlCount = 0;
    const sitemapIndexUrls = [];

    const addUrlToSitemap = (url, changefreq, priority, lastmod) => {
      if (!currentStream) {
        console.log(`Creating new sitemap stream for sitemap-${currentSitemapCount}.xml`);
        currentStream = new SitemapStream({ hostname: 'https://pasar.web.id' });

        const sitemapFilePath = path.resolve(sitemapDir, `sitemap-${currentSitemapCount}.xml`);
        console.log(`Writing sitemap to: ${sitemapFilePath}`);

        const writeStream = fs.createWriteStream(sitemapFilePath);
        currentStream.pipe(writeStream);

        writeStream.on('finish', () => {
          console.log(`Sitemap file written successfully: ${sitemapFilePath}`);
        });

        writeStream.on('error', (err) => {
          console.error('Error writing sitemap file:', err);
        });
      }

      currentStream.write({ url, changefreq, priority, lastmod });
      urlCount++;

      if (urlCount >= MAX_URLS_PER_SITEMAP) {
        currentStream.end();
        sitemapIndexUrls.push({
          loc: `https://pasar.web.id/sitemaps/sitemap-${currentSitemapCount}.xml`,
          lastmod: new Date().toISOString(),
        });

        currentSitemapCount++;
        urlCount = 0;
        currentStream = null;
      }
    };

    const staticPages = [
      '/about',
      '/contact',
      '/sitemap',
      '/services',
      '/faq',
    ];

    staticPages.forEach(page => {
      addUrlToSitemap(page, 'daily', 1.0, format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));
    });

    cities.forEach(city => {
      const citySlug = city.slug;
      addUrlToSitemap(`/jasa-seo-${citySlug}/`, 'weekly', 0.9, format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"));
      addUrlToSitemap(`/website-${citySlug}/`, 'weekly', 0.9, format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSXXX")); // Tambahan URL
    });

    if (currentStream) {
      currentStream.end();
      sitemapIndexUrls.push({
        loc: `https://pasar.web.id/sitemaps/sitemap-${currentSitemapCount}.xml`,
        lastmod: new Date().toISOString(),
      });
    }

    const sitemapIndexFilePath = path.resolve(sitemapDir, 'sitemap-index.xml');
    const writeStream = fs.createWriteStream(sitemapIndexFilePath);

    writeStream.write('<?xml version="1.0" encoding="UTF-8"?>\n');
    writeStream.write('<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n');

    sitemapIndexUrls.forEach((sitemapUrl) => {
      writeStream.write(`  <sitemap>\n`);
      writeStream.write(`    <loc>${sitemapUrl.loc}</loc>\n`);
      writeStream.write(`  </sitemap>\n`);
    });

    writeStream.write('</sitemapindex>\n');
    writeStream.end();

    console.log('Sitemap Index created at:', sitemapIndexFilePath);

    writeStream.on('finish', async () => {
      const sitemapIndexXML = await fs.promises.readFile(sitemapIndexFilePath, 'utf-8');
      res.setHeader('Content-Type', 'application/xml');
      res.status(200).send(sitemapIndexXML);
    });

  } catch (err) {
    console.error('Error generating sitemap:', err);
    res.status(500).send('Server error');
  }
}
