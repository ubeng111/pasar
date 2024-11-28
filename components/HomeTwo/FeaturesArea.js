import React from "react";

const FeaturesArea = () => {
  return (
    <>
      <section className="features-area pt-100 pb-70">
        <div className="container">
          <div className="features-title">
            <span>Fitur Unggulan</span>
            <h3>Ciptakan Layanan Luar Biasa dengan Alat Kami</h3>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-b5a2f8">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Konsultasi SEO</h3>
                <p>
                  Kami membantu Anda merencanakan strategi SEO yang tepat untuk meningkatkan peringkat website Anda di mesin pencari.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-f27e19">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>Analisis Kompetitor</h3>
                <p>
                  Menganalisis strategi pesaing Anda untuk merancang langkah-langkah yang lebih efektif dalam meningkatkan visibilitas digital.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-1db294">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>Pemasaran Media Sosial</h3>
                <p>
                  Meningkatkan kehadiran online Anda melalui strategi pemasaran media sosial yang tepat untuk menjangkau audiens yang lebih luas.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-features-item bg-e80d82">
                <div className="icon">
                  <i className="flaticon-analysis-1"></i>
                </div>
                <h3>Pertumbuhan yang Pesat</h3>
                <p>
                  Dengan kombinasi strategi SEO dan pemasaran digital, kami membantu bisnis Anda mengalami pertumbuhan yang signifikan dan berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="features-animation">
          <div className="shape-img1">
            <img src="/images/shape/8.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/5.png" alt="image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesArea;
