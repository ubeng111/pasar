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
                <span>Kenapa Memilih Kami</span>
                <h3>Jasa SEO yang Meningkatkan Visibilitas Bisnis Anda</h3>
                <p>
                  Dengan pengalaman bertahun-tahun di industri SEO, kami membantu bisnis Anda mencapai potensi maksimalnya. Kami berkomitmen untuk mengembangkan strategi SEO yang tepat dan terukur, agar website Anda menonjol di halaman hasil pencarian dan menarik lebih banyak pelanggan.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Strategi SEO yang Dirancang Khusus untuk Anda</h4>
                  <p>
                    Setiap bisnis memiliki kebutuhan unik, itulah sebabnya kami merancang strategi SEO yang disesuaikan dengan tujuan spesifik Anda. Dari analisis mendalam hingga implementasi yang tepat, kami pastikan website Anda mendapat perhatian yang pantas di dunia digital.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Profesional SEO yang Mengerti Kebutuhan Pasar Anda</h4>
                  <p>
                    Tim kami terdiri dari profesional SEO berpengalaman yang memiliki pemahaman mendalam tentang pasar lokal maupun global. Kami memastikan setiap langkah SEO yang kami ambil selaras dengan tren dan kebutuhan audiens Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Pendekatan Berkelanjutan dengan Hasil yang Terukur</h4>
                  <p>
                    Kami tidak hanya fokus pada hasil jangka pendek, tetapi juga berusaha membangun keberlanjutan untuk bisnis Anda. Dengan pendekatan SEO yang terus berkembang, kami memastikan website Anda tetap relevan dan kompetitif dalam pasar yang terus berubah.
                  </p>
                </div>

                <div className="choose-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="choose-warp">
                {/* You can add an image or graphic here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
