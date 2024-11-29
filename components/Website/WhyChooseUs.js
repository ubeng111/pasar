import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const WhyChooseUs = ({ city }) => {
  useEffect(() => {
    // Inisialisasi AOS setelah komponen dimuat
    AOS.init({
      duration: 1000,  // Durasi animasi dalam milidetik
      once: true,      // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <>
      <div className="choose-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12" data-aos="fade-up">
              <div className="choose-content-warp">
                <span>Kenapa Memilih Kami</span>
                <h3 data-aos="fade-up">Jasa Pembuatan Website Profesional untuk Bisnis Anda di {city}</h3>
                <p data-aos="fade-up">
                  Kami menawarkan layanan pembuatan website yang dirancang untuk menciptakan situs yang profesional dan mudah diakses. Dengan tim berpengalaman, kami membantu bisnis Anda di {city} memiliki website yang responsif dan menarik untuk pengunjung.
                </p>

                <div className="choose-text" data-aos="fade-up">
                  <i className="flaticon-check-mark"></i>
                  <h4>Desain Website yang Menarik dan Fungsional di {city}</h4>
                  <p>
                    Kami menciptakan desain website yang tidak hanya menarik tetapi juga fungsional, memastikan pengalaman pengguna yang optimal. Setiap elemen situs dirancang agar mudah digunakan dan sesuai dengan kebutuhan bisnis Anda di {city}.
                  </p>
                </div>

                <div className="choose-text" data-aos="fade-up">
                  <i className="flaticon-check-mark"></i>
                  <h4>Website Responsif untuk Semua Perangkat di {city}</h4>
                  <p>
                    Kami memastikan bahwa website yang kami buat dapat diakses dengan lancar di berbagai perangkat, dari desktop hingga mobile. Ini penting untuk memastikan pengunjung di {city} dapat menikmati pengalaman yang konsisten di semua platform.
                  </p>
                </div>

                <div className="choose-text" data-aos="fade-up">
                  <i className="flaticon-check-mark"></i>
                  <h4>Fitur Khusus untuk Memajukan Bisnis Anda di {city}</h4>
                  <p>
                    Kami menawarkan berbagai fitur tambahan untuk website Anda, seperti sistem manajemen konten, SEO on-page, integrasi dengan platform e-commerce, dan banyak lagi. Kami berfokus pada kebutuhan bisnis Anda di {city}.
                  </p>
                </div>

                <div className="choose-btn" data-aos="fade-up">
                  <Link href="/about-us" className="default-btn-one">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" data-aos="fade-up">
              <div className="choose-warp"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
