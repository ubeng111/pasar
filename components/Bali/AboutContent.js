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
                <h3>Kami Adalah Tim Ahli SEO Bali</h3>

                <p>
                  Sebagai tim ahli SEO yang berbasis di Bali, kami berkomitmen untuk meningkatkan visibilitas dan peringkat website Anda di mesin pencari seperti Google. Dengan pendekatan yang berbasis data dan strategi terukur, kami membantu bisnis dari berbagai sektor untuk meraih kesuksesan digital.
                </p>

                <p>
                  Kami memahami pentingnya kehadiran online yang kuat di pasar yang semakin kompetitif. Oleh karena itu, kami menggunakan teknik SEO terbaru untuk memastikan website Anda mendapatkan trafik yang relevan dan konversi yang optimal.
                </p>

                <p>
                  Layanan kami mencakup riset kata kunci, optimasi on-page, optimasi kecepatan situs, serta strategi backlink yang efektif. Kami juga fokus pada peningkatan pengalaman pengguna (UX) untuk memastikan pengunjung merasa nyaman dan mudah menavigasi website Anda.
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
