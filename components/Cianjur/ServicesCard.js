import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const ServicesCard = ({ city }) => {
  useEffect(() => {
    // Inisialisasi AOS setelah komponen dimuat
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true,     // Animasi hanya akan terjadi sekali
    });
  }, []);

  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <span>Jasa Kami</span>
            <h3>Bagaimana Kami Membantu Meningkatkan Bisnis Anda di {city}?</h3>
          </div>

          <div className="row justify-content-center">
            {/* SEO Service */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-landing-page"></i>
                </div>
                <h3>Optimasi Mesin Pencari (SEO) di {city}</h3>
                <p>
                  Meningkatkan visibilitas dan peringkat website Anda di mesin pencari dengan solusi SEO yang sesuai. Kami berfokus pada strategi lokal untuk memastikan bisnis Anda mudah ditemukan oleh pelanggan di {city}.
                </p>
              </div>
            </div>

            {/* Social Media Strategy */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-goal"></i>
                </div>
                <h3>Strategi Media Sosial di {city}</h3>
                <p>
                  Kami memanfaatkan kekuatan media sosial untuk memperluas jangkauan merek dan meningkatkan keterlibatan dengan audiens. Kami fokus pada membangun hubungan kuat dengan pelanggan di {city} dan platform sosial untuk pertumbuhan bisnis Anda.
                </p>
              </div>
            </div>

            {/* Data & Analytics */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-contract"></i>
                </div>
                <h3>Analitik & Data Real-Time di {city}</h3>
                <p>
                  Gunakan data analitik untuk membuat keputusan yang lebih tepat. Kami membantu bisnis di {city} memantau performa website secara real-time dan memberikan wawasan yang dapat meningkatkan strategi pemasaran secara efektif.
                </p>
              </div>
            </div>

            {/* Online Media Management */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-application"></i>
                </div>
                <h3>Manajemen Media Online di {city}</h3>
                <p>
                  Kami mengelola kehadiran digital Anda untuk memastikan konsistensi dan kualitas pesan di berbagai saluran. Dari situs web hingga media sosial, kami menjaga reputasi online bisnis Anda tetap positif dan terjaga di {city}.
                </p>
              </div>
            </div>

            {/* Reporting & Analysis */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Pelaporan & Analisis SEO di {city}</h3>
                <p>
                  Kami menyediakan laporan mendalam terkait performa SEO website Anda. Dengan analisis yang terperinci, kami membantu Anda memahami efektivitas strategi SEO yang diterapkan di {city} dan mengoptimalkannya untuk hasil terbaik.
                </p>
              </div>
            </div>

            {/* Penalty Recovery */}
            <div className="col-lg-4 col-md-6 col-sm-6" data-aos="fade-up">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-data-recovery"></i>
                </div>
                <h3>Pemulihan Penalti SEO di {city}</h3>
                <p>
                  Jika website Anda terkena penalti dari mesin pencari, kami akan membantu mengidentifikasi penyebabnya dan mengembangkan rencana pemulihan yang aman. Kami bekerja untuk mengembalikan peringkat website Anda dan meningkatkan visibilitasnya di {city}.
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
