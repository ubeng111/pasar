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
            {/* Menambahkan gambar */}
            <img 
              src="/images/ubeng1.webp" 
              alt="Tentang Kami" 
              className="img-fluid" 
              data-aos="fade-up" 
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-warp pl-15" data-aos="fade-up">
              <span>Tentang Kami</span>
              <h3>Spesialis SEO Terpercaya di {city}</h3> {/* Judul dinamis berdasarkan kota */}

              <p data-aos="fade-up">
                Di {city}, kami adalah tim ahli yang fokus pada optimasi SEO untuk bisnis Anda. Kami memahami bahwa SEO adalah kunci untuk meningkatkan visibilitas online, menarik pengunjung, dan mengonversi pengunjung menjadi pelanggan. Dengan layanan SEO yang terarah, kami membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari.
              </p>

              <p data-aos="fade-up">
                Kami menawarkan berbagai layanan SEO, termasuk optimasi on-page, optimasi off-page, riset kata kunci, dan analisis kompetitor. Tim kami berpengalaman dalam menggunakan teknik SEO terbaru yang sesuai dengan algoritma mesin pencari, sehingga situs Anda akan lebih mudah ditemukan oleh calon pelanggan di {city} dan seluruh Indonesia.
              </p>

              <p data-aos="fade-up">
                Kami juga mengutamakan kecepatan situs, pengalaman pengguna yang optimal, dan penggunaan strategi yang berkelanjutan untuk memastikan bahwa website Anda tidak hanya tampil menarik, tetapi juga efektif dalam menarik perhatian pasar yang tepat.
              </p>

              <p data-aos="fade-up">
                Dengan pengalaman bertahun-tahun dalam industri SEO, kami telah membantu banyak bisnis meningkatkan posisi mereka di mesin pencari dan meraih kesuksesan dalam dunia digital.
              </p>

              <div className="about-btn" data-aos="fade-up">
                {/* Mengubah link menuju halaman dengan dynamic routing */}
                <Link href={`/jasa-seo/${city.toLowerCase()}`} className="default-btn-one">
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
