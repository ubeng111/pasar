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
                <h3>Jasa SEO Terpercaya untuk Meningkatkan Bisnis Anda</h3>
                <p>
                  Kami menawarkan layanan SEO profesional yang dirancang untuk meningkatkan visibilitas website Anda di mesin pencari. Dengan pendekatan berbasis data dan pengalaman bertahun-tahun, kami membantu bisnis Anda mencapai peringkat terbaik dan menarik lebih banyak pengunjung.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Strategi SEO yang Terbukti dan Terukur</h4>
                  <p>
                    Kami menggunakan metode SEO yang telah terbukti efektif untuk mendongkrak peringkat website Anda. Mulai dari riset kata kunci yang mendalam hingga optimasi on-page dan off-page, kami selalu mengutamakan hasil yang berkelanjutan untuk bisnis Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Tim SEO Profesional dengan Pengalaman Luas</h4>
                  <p>
                    Dengan pengalaman bertahun-tahun, tim SEO kami memiliki keahlian dalam memajukan peringkat website dengan mengikuti tren dan algoritma terbaru dari mesin pencari. Kami bekerja keras untuk memastikan bisnis Anda tetap unggul di pasar digital.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Pelayanan 24/7 untuk Menjamin Kepuasan Anda</h4>
                  <p>
                    Kami menyediakan dukungan pelanggan yang responsif dan tersedia sepanjang waktu. Tim kami siap membantu Anda kapan saja, memastikan bisnis Anda selalu mendapat perhatian di dunia digital yang dinamis.
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
              <div className="choose-warp"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
