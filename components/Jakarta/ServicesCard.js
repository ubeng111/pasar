import React from "react";

const ServicesCard = () => {
  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title">
            <span>Jasa Kami</span>
            <h3>Bagaimana Kami Dapat Membantu Anda?</h3>
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
                  Meningkatkan visibilitas website Anda dan menarik lebih banyak lalu lintas organik dengan strategi SEO profesional. Kami mengoptimalkan situs Anda agar mendapatkan peringkat terbaik di mesin pencari, dengan fokus pada pasar lokal.
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
                  Manfaatkan kekuatan media sosial untuk berinteraksi dengan audiens Anda dan membangun kesadaran merek. Kami membantu bisnis Anda berkembang di platform seperti Facebook, Instagram, dan LinkedIn, dengan fokus pada audiens lokal.
                </p>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>Data Real-Time & Analitik</h3>
                <p>
                  Ambil keputusan yang lebih baik dengan analitik data real-time. Kami melacak, mengukur, dan melaporkan kinerja website Anda untuk membantu mengoptimalkan strategi agar lebih efektif di pasar lokal.
                </p>
              </div>
            </div>

            {/* Online Media Management */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-application"></i>
                </div>
                <h3>Manajemen Media Online</h3>
                <p>
                  Kami mengelola reputasi online Anda, memastikan konsistensi pesan dan interaksi di seluruh saluran digital, mulai dari konten website hingga profil media sosial, dengan penekanan pada audiens di wilayah setempat.
                </p>
              </div>
            </div>

            {/* Reporting & Analysis */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Pelaporan & Analisis SEO</h3>
                <p>
                  Dapatkan laporan dan analisis mendalam tentang kinerja SEO Anda. Kami melacak peringkat, lalu lintas, dan metrik penting lainnya untuk memastikan strategi SEO Anda efektif di pasar target Anda.
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
                  Jika website Anda terkena penalti dari mesin pencari, kami akan membantu Anda memulihkannya dengan mengidentifikasi masalah dan mengembalikan peringkat sesuai pedoman Google, dengan fokus pada pasar lokal.
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
