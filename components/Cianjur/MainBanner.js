import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const MainBanner = ({ city }) => {
  // Customize the content dynamically based on the city
  const title = `Jasa SEO Profesional Terbaik di ${city} untuk Tingkatkan Bisnis Anda`;
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
        <SwiperSlide>
          <div className="main-banner-item">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>{title}</h1>
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

        <SwiperSlide>
          <div className="main-banner-item item-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content">
                    <h1>{titleTwo}</h1>
                    <p>{descriptionTwo}</p>
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
