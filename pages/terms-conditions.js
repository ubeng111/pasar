import React from "react";
import Head from "next/head"; // Import Head from next/head
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const TermsConditions = () => {
  return (
    <>
      <Head>
        <title>Syarat & Ketentuan - Pasar.web.id</title>
        <meta
          name="description"
          content="Baca Syarat dan Ketentuan layanan kami yang mengatur penggunaan situs web dan layanan kami. Pastikan Anda memahami persyaratan sebelum menggunakan layanan kami."
        />
        <meta
          name="keywords"
          content="syarat dan ketentuan, penggunaan situs, kebijakan privasi, hak kekayaan intelektual, penggunaan cookie"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <NavbarTwo />

      <PageBanner
        pageTitle="Syarat & Ketentuan"
        breadcrumbTextOne="Beranda"
        breadcrumbTextTwo="Syarat & Ketentuan"
        breadcrumbUrl="/"
      />

      <div className="ptb-100">
        <div className="container">
          <h4>Pengantar</h4>
          <p>
            Syarat dan ketentuan ini mengatur penggunaan situs web dan layanan kami. Dengan mengakses dan menggunakan situs kami, Anda setuju untuk mematuhi semua syarat dan ketentuan yang tercantum di bawah ini. Jika Anda tidak setuju dengan salah satu syarat, Anda dilarang menggunakan layanan kami.
          </p>

          <h4>Penggunaan Situs Web</h4>
          <p>
            Anda setuju untuk menggunakan situs web kami hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Dilarang keras untuk menggunakan situs ini untuk aktivitas ilegal atau yang merugikan pihak lain. Kami berhak untuk membatasi akses atau menghapus konten yang melanggar ketentuan ini.
          </p>

          <h4>Hak Kekayaan Intelektual</h4>
          <p>
            Semua konten yang ada di situs ini, termasuk namun tidak terbatas pada teks, gambar, logo, dan desain, adalah hak milik kami atau pihak ketiga yang memberikan lisensi kepada kami. Anda tidak diperkenankan untuk menyalin, mengubah, atau mendistribusikan materi tanpa izin tertulis dari pemiliknya.
          </p>

          <h4>Keamanan dan Privasi</h4>
          <p>
            Kami sangat memperhatikan privasi dan keamanan data Anda. Data pribadi yang Anda berikan akan digunakan sesuai dengan kebijakan privasi kami. Kami berkomitmen untuk menjaga keamanan data pribadi Anda dan mengambil langkah-langkah yang wajar untuk melindunginya dari akses yang tidak sah.
          </p>

          <h4>Penggunaan Cookie</h4>
          <p>
            Kami menggunakan cookie untuk meningkatkan pengalaman pengguna di situs kami. Cookie adalah file kecil yang disimpan di perangkat Anda dan digunakan untuk mengingat preferensi atau aktivitas Anda saat menggunakan situs kami. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda, meskipun beberapa fitur situs mungkin tidak berfungsi dengan baik tanpa cookie.
          </p>

          <h4>Penafian</h4>
          <p>
            Kami berusaha untuk menjaga agar informasi di situs kami akurat dan terkini, namun tidak menjamin bahwa semua informasi bebas dari kesalahan. Kami tidak bertanggung jawab atas kerugian yang timbul akibat ketidakakuratan atau ketidaklengkapan informasi yang ada di situs kami.
          </p>

          <h4>Perubahan Syarat & Ketentuan</h4>
          <p>
            Kami berhak untuk mengubah atau memperbarui syarat dan ketentuan ini kapan saja. Setiap perubahan akan diposting di halaman ini dan berlaku segera setelah dipublikasikan. Kami menganjurkan Anda untuk memeriksa halaman ini secara berkala untuk mendapatkan informasi terbaru tentang syarat dan ketentuan penggunaan situs kami.
          </p>

          <h4>Hukum yang Berlaku</h4>
          <p>
            Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku di Indonesia. Setiap perselisihan yang timbul terkait dengan penggunaan situs ini akan diselesaikan di pengadilan yang berwenang di Indonesia.
          </p>

          <h4>Kontak Kami</h4>
          <p>
            Jika Anda memiliki pertanyaan atau membutuhkan klarifikasi mengenai syarat dan ketentuan ini, Anda dapat menghubungi kami melalui email di [email Anda] atau melalui formulir kontak yang tersedia di situs kami.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;
