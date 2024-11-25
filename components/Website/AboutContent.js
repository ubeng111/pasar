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
              <h3>Spesialis Pembuatan Website Terpercaya di {city}</h3> {/* Judul dinamis berdasarkan kota */}

              <p>
                Di {city}, kami adalah tim yang ahli dalam pembuatan website profesional untuk bisnis Anda. Kami menawarkan layanan pembuatan website yang mudah digunakan, responsif, dan menarik, dengan desain yang disesuaikan dengan kebutuhan bisnis lokal di {city}.
              </p>

              <p>
                Dalam dunia digital yang semakin berkembang, memiliki website yang efektif dan representatif sangat penting untuk kesuksesan bisnis Anda. Kami memahami tantangan yang dihadapi oleh bisnis lokal di {city}, dan kami berkomitmen untuk memberikan solusi digital yang memudahkan Anda untuk menjangkau pelanggan baru.
              </p>

              <p>
                Tim kami berpengalaman dalam pembuatan berbagai jenis website, mulai dari website bisnis sederhana hingga website e-commerce yang kompleks. Kami juga memastikan bahwa website yang kami buat cepat, ramah pengguna (user-friendly), dan dioptimalkan untuk mesin pencari (SEO) sehingga dapat membantu Anda mendapatkan visibilitas yang lebih baik di dunia maya.
              </p>

              <div className="about-btn">
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
