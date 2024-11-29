import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Pastikan AOS CSS sudah diimpor

const ServicesCard = ({ city }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam ms
      once: true, // Efek animasi hanya dijalankan sekali
    });
  }, []);

  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span>Fitur & Keunggulan Kami</span>
            <h2>Solusi Lengkap untuk Website Profesional yang Meningkatkan Bisnis Anda di {city}</h2>
          </div>

          <div className="row justify-content-center">
            {/* Gratis Iklan Google (Bulan Pertama) */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fab fa-google"></i> {/* Ikon Google Ads */}
                </div>
                <h3>Gratis Iklan Google (Bulan Pertama)</h3>
                <p>
                  Dapatkan lebih banyak pengunjung dengan iklan Google gratis di bulan pertama. Kami akan membantu mempromosikan website Anda secara online, meningkatkan visibilitas dan jangkauan pasar di {city}, tanpa biaya tambahan di awal.
                </p>
              </div>
            </div>

            {/* Desain Interaktif & Profesional */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-paint-brush"></i> {/* Ikon desain */}
                </div>
                <h3>Desain Interaktif & Profesional</h3>
                <p>
                  Website Anda akan tampil modern, rapi, dan mudah digunakan. Desain yang responsif dan menarik akan meningkatkan pengalaman pengunjung serta membantu menciptakan kesan profesional yang mendalam bagi pelanggan di {city}.
                </p>
              </div>
            </div>

            {/* Gratis Desain Logo, Banner, & Artikel */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-cogs"></i> {/* Ikon branding */}
                </div>
                <h3>Gratis Desain Logo, Banner & Artikel</h3>
                <p>
                  Kami bantu Anda dengan branding yang kuat, termasuk desain logo, banner menarik, dan pembuatan artikel untuk kesan pertama yang maksimal di {city}. Semua untuk memperkuat identitas bisnis Anda.
                </p>
              </div>
            </div>

            {/* Tema Modern & Mobile-Friendly */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i> {/* Ikon mobile-friendly */}
                </div>
                <h3>Tema Modern & Mobile-Friendly</h3>
                <p>
                  Tampilan website tetap optimal di berbagai perangkat, dari desktop hingga smartphone. Kami pastikan website Anda responsif dan siap memberikan pengalaman terbaik di semua layar, baik untuk pelanggan di {city} maupun di luar kota.
                </p>
              </div>
            </div>

            {/* Garansi Keamanan dari Virus & Hacker */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-shield-alt"></i> {/* Ikon keamanan */}
                </div>
                <h3>Garansi Keamanan dari Virus & Hacker</h3>
                <p>
                  Website Anda akan aman dari ancaman virus dan hacker. Dengan proteksi tingkat tinggi, Anda bisa fokus mengembangkan bisnis Anda di {city} tanpa khawatir data atau sistem Anda terancam.
                </p>
              </div>
            </div>

            {/* Fitur WhatsApp Button & Contact Form */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fab fa-whatsapp"></i> {/* Ikon WhatsApp */}
                </div>
                <h3>Fitur WhatsApp Button & Contact Form</h3>
                <p>
                  Mudah dihubungi! Kami tambahkan fitur tombol WhatsApp dan formulir kontak langsung di website Anda, memungkinkan pengunjung untuk menghubungi Anda dengan cepat dan mudah, terutama bagi pelanggan di {city}.
                </p>
              </div>
            </div>

            {/* Panduan Kelola Website */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-book-open"></i> {/* Ikon tutorial */}
                </div>
                <h3>Panduan Lengkap untuk Kelola Website</h3>
                <p>
                  Kami menyediakan tutorial lengkap untuk memudahkan Anda mengelola dan mengoptimalkan website kapan saja. Anda akan diberikan panduan langkah demi langkah untuk menguasai platform website Anda, dengan fokus pada kebutuhan bisnis di {city}.
                </p>
              </div>
            </div>

            {/* Fitur SEO */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-search"></i> {/* Ikon SEO */}
                </div>
                <h3>Optimasi SEO Website</h3>
                <p>
                  Kami optimalkan website Anda dengan SEO terbaik, sehingga website Anda mudah ditemukan di mesin pencari seperti Google. Peringkat yang lebih tinggi berarti lebih banyak pengunjung, terutama dari {city} dan sekitarnya.
                </p>
              </div>
            </div>

            {/* Pengelolaan & Pemeliharaan Website */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3 shadow-lg rounded">
                <div className="icon">
                  <i className="fas fa-cogs"></i> {/* Ikon pemeliharaan */}
                </div>
                <h3>Pengelolaan & Pemeliharaan Website</h3>
                <p>
                  Kami juga menawarkan layanan pemeliharaan website untuk memastikan website Anda tetap aman, up-to-date, dan bebas masalah. Biarkan kami mengurus teknisnya, Anda fokus pada bisnis Anda di {city}.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="gambar dekoratif 1" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="gambar dekoratif 2" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="gambar dekoratif 3" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="gambar dekoratif 4" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="gambar dekoratif 5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
