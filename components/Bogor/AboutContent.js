import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
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
                <h3>Kami adalah Tim Pakar SEO Bogor</h3>

                <p>
                  Kami adalah tim profesional yang berfokus memberikan jasa SEO terbaik di Bogor untuk membantu bisnis Anda berkembang di dunia digital.
                </p>

                <p>
                  Kami mengerti pentingnya optimasi mesin pencari (SEO) untuk meningkatkan visibilitas bisnis Anda. Dengan pengalaman bertahun-tahun di industri SEO, kami telah membantu banyak klien di Bogor dan sekitarnya untuk mencapai peringkat yang lebih tinggi di Google dan menarik lebih banyak pengunjung ke website mereka.
                </p>

                <p>
                  Tim kami mengimplementasikan strategi SEO yang efektif dan terbukti berhasil, mulai dari penelitian kata kunci yang relevan dengan pasar Bogor hingga optimasi teknis di halaman (on-page) dan di luar halaman (off-page). Kami selalu berkomitmen untuk memberikan hasil terbaik bagi setiap klien yang kami bantu.
                </p>

                <div className="about-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
