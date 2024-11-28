import Head from 'next/head';  // Impor Head dari next/head
import Link from 'next/link';
import { cities } from '../components/Cianjur/cities';  // Pastikan path ke cities.js benar
import NavbarTwo from '../components/Cianjur/NavbarTwo';  // Path yang benar ke NavbarTwo
import Footer from '../components/Cianjur/Footer';  // Path yang benar ke Footer
import styles from '../styles/sitemap.module.css';  // Impor CSS Module
import { useState } from 'react';

const ITEMS_PER_PAGE = 100; // Jumlah item per halaman (100 link per halaman)
const COLUMNS = 5; // Jumlah kolom dalam satu baris

const Sitemap = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Menghitung jumlah halaman yang diperlukan
  const totalPages = Math.ceil(cities.length / ITEMS_PER_PAGE);

  // Menentukan indeks kota yang akan ditampilkan pada halaman ini
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentCities = cities.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fungsi untuk membagi kota menjadi beberapa kolom (5 kolom per baris)
  const splitIntoColumns = (citiesList) => {
    const columns = Array(COLUMNS).fill().map(() => []);  // Membuat array kosong untuk 5 kolom

    citiesList.forEach((city, index) => {
      columns[index % COLUMNS].push(city);  // Membagi kota ke dalam kolom secara merata
    });

    return columns;
  };

  const columns = splitIntoColumns(currentCities);

  return (
    <>
      <Head>
        <title>Sitemap - Layanan Jasa SEO Kota</title>
        <meta name="description" content="Temukan berbagai layanan jasa SEO untuk kota-kota di Indonesia. Halaman Sitemap ini menyediakan daftar kota yang dapat Anda pilih untuk mengoptimalkan SEO bisnis Anda." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sitemap - Layanan Jasa SEO Kota" />
        <meta property="og:description" content="Daftar lengkap kota yang menawarkan layanan jasa SEO untuk membantu bisnis Anda mendapatkan peringkat lebih tinggi di mesin pencari." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com/sitemap" />
      </Head>

      <NavbarTwo />
      <div>
        <h1>Layanan Jasa SEO Kota</h1>

        {/* Kontainer untuk 5 kolom */}
        <div className={styles.container}>
          {columns.map((column, index) => (
            <ul key={index} className={styles.column}>
              {column.map((city) => (
                <li key={city.slug}>
                  <Link href={`/jasa-seo-${city.slug}`}>{city.name}</Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Navigasi Halaman */}
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            &laquo; Sebelumnya
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button onClick={handleNextPage} disabled={currentPage === totalPages}>
            Berikutnya &raquo;
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Sitemap;
