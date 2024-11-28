import React from "react";

const ServicesCard = () => {
  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title">
            <span>Jasa Kami</span>
            <h3>Bagaimana Kami Dapat Meningkatkan Bisnis Anda di Bali?</h3>
          </div>

          <div className="row justify-content-center">
            {/* SEO Service */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>Optimasi Mesin Pencari (SEO)</h3>
                <p>
                  Optimalkan kehadiran digital bisnis Anda dengan strategi SEO yang terfokus pada pasar Bali. Kami membantu website Anda mendapatkan peringkat terbaik di mesin pencari, menarik lebih banyak pengunjung dari daerah Bali dan sekitarnya.
                </p>
              </div>
            </div>

            {/* Social Media Strategy */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>Strategi Media Sosial</h3>
                <p>
                  Bangun kesadaran merek yang kuat di Bali dengan menggunakan platform media sosial yang tepat. Kami membantu Anda membangun komunitas dan meningkatkan interaksi dengan audiens melalui Facebook, Instagram, dan LinkedIn.
                </p>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>Analitik Data Real-Time</h3>
                <p>
                  Mengambil keputusan berbasis data adalah kunci sukses. Kami menyediakan data analitik real-time yang memberikan wawasan mengenai kinerja website Anda, memungkinkan Anda untuk merencanakan langkah selanjutnya secara lebih cermat di pasar Bali.
                </p>
              </div>
            </div>

            {/* Online Media Management */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-application"></i>
                </div>
                <h3>Manajemen Kehadiran Online</h3>
                <p>
                  Kelola reputasi online bisnis Anda di Bali dengan layanan manajemen yang memastikan konsistensi pesan dan interaksi di seluruh platform. Kami membantu menciptakan citra yang profesional di dunia digital, baik di website maupun media sosial.
                </p>
              </div>
            </div>

            {/* Reporting & Analysis */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Laporan & Analisis SEO</h3>
                <p>
                  Kami menyediakan laporan mendalam mengenai kinerja SEO Anda, termasuk peringkat keyword, trafik, dan analisis lainnya. Semua ini dirancang untuk membantu Anda memahami hasil dan strategi apa yang paling efektif di pasar Bali.
                </p>
              </div>
            </div>

            {/* Penalty Recovery */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-data-recovery"></i>
                </div>
                <h3>Pemulihan Penalti SEO</h3>
                <p>
                  Apakah website Anda terkena penalti Google? Kami memiliki solusi untuk membantu Anda pulih dan mendapatkan kembali peringkat tinggi dengan mengidentifikasi dan mengatasi masalah yang menyebabkan penalti.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="gambar dekoratif 1" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="gambar dekoratif 2" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="gambar dekoratif 3" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="gambar dekoratif 4" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="gambar dekoratif 5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
