import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Pastikan untuk mengimpor CSS AOS

const AboutContent = ({ city }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya akan terjadi sekali
    });
  }, []);

  return (
    <div className="about-section pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-warp-image" data-aos="fade-up">
              {/* Menampilkan gambar yang telah dipindahkan ke folder public */}
              <img
                src="/images/blog-details/3.webp"
                alt="Tentang Kami"
                className="img-fluid" // Pastikan gambar responsif
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-warp pl-15" data-aos="fade-up">
              <span>Tentang Kami</span>
              <h2>Spesialis Pembuatan Website di {city}</h2> {/* Judul dinamis berdasarkan kota */}

              <p data-aos="fade-up">
                Di {city}, kami adalah tim yang fokus pada pembuatan website profesional untuk berbagai kebutuhan bisnis. Dari website perusahaan, toko online (e-commerce), hingga platform khusus yang dapat disesuaikan dengan kebutuhan Anda. Kami menciptakan solusi website yang tidak hanya menarik, tetapi juga efektif dan ramah pengguna.
              </p>

              <p data-aos="fade-up">
                Kami tahu pentingnya memiliki website yang tidak hanya tampil baik, tetapi juga dapat berfungsi dengan optimal. Tim kami ahli dalam pengembangan website menggunakan teknologi terbaru, baik itu dengan menggunakan CMS seperti WordPress, platform e-commerce seperti Shopify, atau website custom berbasis React dan Next.js untuk performa tinggi.
              </p>

              <p data-aos="fade-up">
                Kami juga memastikan website yang kami bangun responsif di semua perangkat, memiliki kecepatan akses yang cepat, dan dioptimalkan untuk SEO sehingga bisnis Anda dapat ditemukan oleh calon pelanggan di {city} dan seluruh Indonesia.
              </p>

              <p data-aos="fade-up">
                Dengan pengalaman bertahun-tahun dalam industri ini, kami memahami bagaimana membangun website yang tidak hanya menarik perhatian, tetapi juga dapat meningkatkan konversi dan membantu bisnis Anda berkembang di dunia digital.
              </p>

              <div className="about-btn" data-aos="fade-up">
                {/* Mengubah link menuju halaman dengan dynamic routing */}
                <Link href={`/jasa-pembuatan-website/${city.toLowerCase()}`} className="default-btn-one">
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
