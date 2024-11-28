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
                <h3>Kami adalah Tim Pakar SEO Bekasi</h3>

                <p>
                  Kami adalah tim profesional yang berdedikasi untuk memberikan layanan SEO terbaik di Bekasi, membantu bisnis Anda tumbuh dan berkembang di era digital.
                </p>

                <p>
                  Kami memahami betul pentingnya optimasi mesin pencari (SEO) untuk meningkatkan visibilitas dan daya saing bisnis Anda. Dengan pengalaman yang luas di industri SEO, kami telah membantu banyak perusahaan di Bekasi dan wilayah sekitarnya untuk meraih posisi teratas di hasil pencarian Google, serta meningkatkan traffic pengunjung ke website mereka.
                </p>

                <p>
                  Tim kami mengimplementasikan strategi SEO yang telah terbukti efektif, mulai dari penelitian kata kunci yang sesuai dengan pasar Bekasi hingga optimasi teknis baik di halaman (on-page) maupun di luar halaman (off-page). Kami berkomitmen untuk memberikan hasil terbaik bagi setiap klien yang kami bantu.
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
