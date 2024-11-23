import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="choose-content-area">
                <span>Mengapa Memilih Kami</span>
                <h3>Pengalaman Digital yang Luar Biasa</h3>
                <p>
                  Kami menawarkan solusi digital terbaik yang dirancang khusus untuk
                  membantu bisnis Anda berkembang. Dengan pengalaman bertahun-tahun
                  dalam SEO dan pembuatan website, kami fokus pada hasil yang dapat
                  diukur dan layanan yang memuaskan.
                </p>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Proses Kerja Terstruktur</h4>
                  <p>
                    Kami memiliki proses yang jelas dan terstruktur untuk memastikan
                    bahwa setiap proyek dikelola dengan efisien dan tepat waktu.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Tim yang Berkomitmen</h4>
                  <p>
                    Tim kami terdiri dari ahli SEO dan pengembang web berpengalaman
                    yang berdedikasi untuk memberikan solusi terbaik untuk bisnis
                    Anda.
                  </p>
                </div>

                <div className="choose-text">
                  <i className="flaticon-check-mark"></i>
                  <h4>Dukungan 24/7</h4>
                  <p>
                    Kami memberikan dukungan penuh selama 24 jam sehari, 7 hari
                    seminggu, untuk memastikan website Anda selalu berjalan dengan
                    baik dan optimasi SEO yang terus diperbarui.
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
              <div className="choose-image">
                <img src="/images/choose-image.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
