import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";

const MainBanner = () => {
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
                    <h1>Jasa SEO Terbaik di Bali untuk Tingkatkan Bisnis Anda</h1>
                    <p>
                      Optimalkan peringkat website Anda di mesin pencari dengan layanan SEO profesional di Bali. Kami menyediakan strategi yang tepat untuk membantu bisnis Anda lebih mudah ditemukan secara online.
                    </p>
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
                    <h1>Strategi Digital Marketing SEO di Bali yang Efektif</h1>
                    <p>
                      Dapatkan hasil maksimal dengan layanan pemasaran digital yang mencakup SEO dan media sosial. Kami membantu bisnis di Bali untuk lebih kompetitif dan menonjol di dunia digital.
                    </p>
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
