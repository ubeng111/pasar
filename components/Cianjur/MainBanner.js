import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS for animations

const MainBanner = ({ city }) => {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (optional)
      easing: 'ease-in-out', // Animation easing (optional)
      once: true, // Trigger animation once (optional)
    });
  }, []);

  // Customize the content dynamically based on the city
  const title = `Jasa SEO Murah ${city} | Garansi Halaman #1 Google | Bulanan | Tahunan`;
  const description = `Optimalkan peringkat website Anda di mesin pencari dengan layanan SEO profesional di ${city}. Kami menyediakan strategi yang tepat untuk membantu bisnis Anda lebih mudah ditemukan secara online.`;

  const titleTwo = `Strategi Digital Marketing SEO di ${city} yang Efektif`;
  const descriptionTwo = `Dapatkan hasil maksimal dengan layanan pemasaran digital yang mencakup SEO dan media sosial. Kami membantu bisnis di ${city} untuk lebih kompetitif dan menonjol di dunia digital.`;

  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Navigation]}
        className="home-slides"
      >
        {/* Slide Pertama */}
        <SwiperSlide>
          <div className="main-banner-item" data-aos="fade-down"> {/* Apply AOS Fade-down effect */}
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>{title}</h1> {/* Only in the first slide */}
                    <p>{description}</p>
                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        Pelajari Lebih Lanjut
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide Kedua - Tanpa H1 */}
        <SwiperSlide>
          <div className="main-banner-item item-two" data-aos="fade-down"> {/* Apply AOS Fade-down effect */}
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <p>{descriptionTwo}</p> {/* Only description in second slide */}
                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        Pelajari Lebih Lanjut
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
