import React from 'react';
import Link from 'next/link';

const AboutContent = ({ city }) => {
  return (
    <div className="about-section pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-warp-image">
              {/* Gambar tetap seperti semula */}
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="about-warp pl-15">
              <span>Tentang Kami</span>
              <h3>Spesialis SEO Website Terpercaya di {city}</h3> {/* Judul dinamis berdasarkan kota */}

              <p>
                Di {city}, kami adalah tim yang fokus pada optimasi mesin pencari (SEO) untuk membantu bisnis Anda berkembang secara digital. Kami menggunakan metode yang terbukti efektif, menggabungkan teknik SEO terbaru untuk memastikan website Anda mendapatkan peringkat terbaik di Google dan mesin pencari lainnya.
              </p>

              <p>
                Dalam era digital yang semakin maju, memiliki kehadiran yang kuat di dunia maya sangat penting. Kami tahu betul tantangan yang dihadapi bisnis lokal {city} dan kami menggunakan pengetahuan mendalam tentang algoritma pencarian untuk menarik pelanggan lebih banyak dari {city} maupun seluruh Indonesia.
              </p>

              <p>
                Tim kami ahli dalam berbagai teknik SEO Wordpress, mulai dari riset kata kunci yang sangat relevan, hingga penerapan strategi SEO yang bersifat teknis dan konten. Kami juga mengoptimalkan pengalaman pengguna (UX), memastikan kecepatan situs yang optimal, dan menggunakan backlink yang berkualitas tinggi untuk meningkatkan otoritas situs web Anda. Semua ini kami lakukan untuk memberikan hasil yang nyata dan meningkatkan pendapatan bisnis Anda.
              </p>

              <div className="about-btn">
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
