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
                <h3>Jasa SEO Terpercaya untuk Bisnis Anda</h3>
                <p>
                  Kami menyediakan layanan SEO profesional yang dapat membantu bisnis Anda mendapatkan peringkat tinggi di mesin pencari. Dengan pengalaman yang luas dan pendekatan yang terukur, kami memastikan website Anda lebih mudah ditemukan dan lebih banyak dikunjungi.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Strategi SEO Terbukti Efektif</h4>
                  <p>
                    Menggunakan teknik SEO yang telah terbukti, kami fokus pada strategi yang akan meningkatkan peringkat website Anda. Dari riset kata kunci yang mendalam hingga optimasi teknis, kami pastikan hasil maksimal untuk bisnis Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Tim SEO Berpengalaman dan Terpercaya</h4>
                  <p>
                    Tim ahli SEO kami memiliki pengalaman bertahun-tahun dalam meningkatkan peringkat website di mesin pencari. Kami memahami tren pasar dan siap mendukung tujuan bisnis Anda di dunia digital.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Dukungan Penuh 24/7 untuk Kepuasan Anda</h4>
                  <p>
                    Kami memberikan layanan pelanggan terbaik, dengan dukungan penuh yang tersedia 24 jam sehari, 7 hari seminggu. Kami selalu siap membantu bisnis Anda berkembang di pasar digital yang kompetitif.
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
