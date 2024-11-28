import React from "react";

const ServicesCard = () => {
  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title">
            <span>Jasa Kami</span>
            <h3>Bagaimana Kami Dapat Membantu Bisnis Anda?</h3>
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
                  Tingkatkan visibilitas website Anda di mesin pencari dengan layanan SEO yang disesuaikan. Kami membantu Anda meraih peringkat tinggi di hasil pencarian, dengan fokus pada pasar lokal Surabaya untuk memastikan bisnis Anda lebih mudah ditemukan.
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
                  Kami memanfaatkan media sosial untuk memperluas jangkauan dan meningkatkan kesadaran merek di platform seperti Facebook, Instagram, dan LinkedIn. Fokus kami adalah membantu bisnis Anda berkembang dan lebih terhubung dengan audiens lokal.
                </p>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>Analitik & Data Real-Time</h3>
                <p>
                  Gunakan data analitik real-time untuk mengoptimalkan keputusan bisnis Anda. Kami membantu memantau dan menganalisis kinerja website serta memberikan wawasan yang dapat meningkatkan efektivitas pemasaran di wilayah Anda.
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
                  Kami mengelola kehadiran online Anda dengan memastikan konsistensi pesan dan interaksi di seluruh platform digital. Dari website hingga media sosial, kami membantu bisnis Anda menjaga reputasi digital yang kuat.
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
                  Kami menyediakan laporan SEO yang mendalam, melacak kinerja website Anda, dan memastikan bahwa strategi SEO yang diterapkan efektif di pasar target Anda.
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
                  Jika website Anda terkena penalti dari Google atau mesin pencari lainnya, kami memiliki strategi untuk membantu Anda pulih. Kami menganalisis penyebab penalti dan bekerja untuk mengembalikan peringkat website Anda dengan aman.
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
