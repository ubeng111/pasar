import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/Layouts/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Kebijakan Privasi"
        breadcrumbTextOne="Beranda"
        breadcrumbTextTwo="Kebijakan Privasi"
        breadcrumbUrl="/"
      />

      <div className="ptb-100">
        <div className="container">
          <h4>Pengenalan</h4>
          <p>
            Selamat datang di <strong>pasar.web.id</strong>. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda mengunjungi situs web kami atau menggunakan layanan pembuatan website dan SEO kami. Dengan menggunakan layanan kami, Anda setuju dengan praktik yang dijelaskan dalam kebijakan ini.
          </p>

          <h4>Informasi yang Kami Kumpulkan</h4>
          <p>
            Kami mengumpulkan informasi pribadi dan non-pribadi untuk menyediakan layanan pembuatan website dan SEO secara efektif. Jenis informasi yang kami kumpulkan meliputi:
          </p>
          <ul>
            <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, nama bisnis, informasi penagihan, dll.</li>
            <li><strong>Data Penggunaan Layanan:</strong> Informasi tentang bagaimana Anda berinteraksi dengan situs web kami atau layanan kami (misalnya, aktivitas Anda selama proyek pembuatan website atau SEO).</li>
            <li><strong>Data Teknis:</strong> Alamat IP, tipe browser, informasi perangkat, lokasi geografis, dan data teknis lainnya yang dikumpulkan secara otomatis saat Anda mengunjungi situs kami.</li>
          </ul>

          <h4>Bagaimana Kami Menggunakan Informasi Anda</h4>
          <p>
            Kami menggunakan informasi yang kami kumpulkan untuk berbagai tujuan, termasuk:
          </p>
          <ul>
            <li>Untuk menyediakan dan meningkatkan layanan pembuatan website dan SEO kami.</li>
            <li>Untuk berkomunikasi dengan Anda mengenai proyek, pembaruan, dan penawaran.</li>
            <li>Untuk menganalisis pola penggunaan situs dan meningkatkan fungsionalitas situs kami.</li>
            <li>Untuk memenuhi kewajiban hukum dan menyelesaikan sengketa, jika diperlukan.</li>
            <li>Untuk mengirimkan email pemasaran atau buletin (dengan persetujuan Anda).</li>
          </ul>

          <h4>Bagaimana Kami Melindungi Informasi Anda</h4>
          <p>
            Kami sangat memperhatikan privasi Anda dan menerapkan berbagai langkah keamanan untuk melindungi informasi pribadi Anda. Kami menggunakan enkripsi, server yang aman, dan protokol lainnya untuk mencegah akses yang tidak sah. Namun, perlu diketahui bahwa tidak ada metode transmisi data melalui internet yang dapat sepenuhnya aman. Kami tidak dapat menjamin keamanan absolut atas data Anda.
          </p>

          <h4>Hak Anda atas Data Anda</h4>
          <p>
            Sebagai pengguna, Anda memiliki beberapa hak terkait dengan informasi pribadi Anda, termasuk hak untuk:
          </p>
          <ul>
            <li>Akses informasi pribadi Anda dan meminta perbaikannya.</li>
            <li>Menghapus informasi pribadi Anda, sesuai dengan kewajiban hukum tertentu.</li>
            <li>Menolak pemrosesan data Anda untuk tujuan pemasaran.</li>
            <li>Menarik persetujuan Anda untuk pemrosesan data pribadi Anda kapan saja.</li>
          </ul>
          <p>
            Jika Anda ingin menggunakan hak-hak tersebut, silakan hubungi kami menggunakan informasi yang terdapat di bagian "Kontak Kami" di bawah.
          </p>

          <h4>Cookies dan Teknologi Pelacakan</h4>
          <p>
            Kami menggunakan cookies dan teknologi pelacakan serupa untuk meningkatkan pengalaman Anda di situs web kami. Cookies membantu kami menganalisis lalu lintas situs, mengingat preferensi pengguna, dan menyesuaikan konten. Dengan melanjutkan menggunakan situs web kami, Anda menyetujui penggunaan cookies seperti yang dijelaskan dalam <a href="/cookie-policy">Kebijakan Cookie</a> kami.
          </p>

          <h4>Perubahan pada Kebijakan Privasi ini</h4>
          <p>
            Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Jika ada perubahan, kami akan memposting kebijakan yang diperbarui di halaman ini dan merevisi tanggal "Diperbarui Terakhir" di bagian bawah. Kami mendorong Anda untuk memeriksa kebijakan ini secara berkala untuk tetap mengetahui bagaimana kami melindungi informasi Anda.
          </p>

          <h4>Kontak Kami</h4>
          <p>
            Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami atau penanganan data pribadi Anda, silakan hubungi kami:
          </p>
          <p>
            <strong>Email:</strong> support@pasar.web.id <br />
            <strong>Telepon:</strong> 0898-687168 <br />
            <strong>Alamat:</strong> Jl. Raya Cipanas, Cianjur, Jawa Barat, Indonesia
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicy;
