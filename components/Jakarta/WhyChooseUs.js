import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <div className="choose-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-warp">
                <span>Why Choose Us</span>
                <h3>Exceptional Jasa SEO di Jakarta</h3>
                <p>
                  Kami menawarkan jasa SEO terbaik untuk membantu bisnis Anda tampil lebih menonjol di mesin pencari. Dengan pengalaman dan strategi yang terbukti, kami memastikan website Anda mendapatkan peringkat yang lebih baik dan lebih banyak pengunjung.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Proses Kerja yang Terbukti Efektif</h4>
                  <p>
                    Kami menggunakan metode SEO yang telah terbukti untuk meningkatkan visibilitas website Anda, dari riset kata kunci hingga optimasi teknis, dengan fokus pada hasil yang optimal untuk bisnis Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Tim Profesional yang Berdedikasi</h4>
                  <p>
                    Tim kami terdiri dari ahli SEO berpengalaman dan berdedikasi tinggi yang memahami dinamika pasar digital, siap membantu Anda meraih tujuan SEO bisnis Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Support 24/7 untuk Klien Kami</h4>
                  <p>
                    Kami memberikan dukungan penuh 24/7 untuk memastikan kebutuhan SEO Anda selalu terlayani dengan cepat dan efektif, memastikan bisnis Anda berkembang di pasar digital.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Temukan Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-warp"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
