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
                    <h1>Jasa SEO Bekasi untuk Meningkatkan Bisnis Anda</h1>
                    <p>
                      Perbaiki peringkat situs web Anda di mesin pencari dengan layanan SEO terbaik kami. Kami membantu bisnis lokal di Bekasi
                      untuk lebih mudah ditemukan dan berkembang pesat di dunia digital.
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
                    <h1>Strategi Pemasaran Digital yang Tepat untuk Bisnis Anda</h1>
                    <p>
                      Dapatkan solusi pemasaran digital yang efektif, termasuk SEO dan optimasi media sosial. Kami membantu bisnis di Bekasi
                      untuk bersaing lebih kuat di dunia digital dan menarik lebih banyak pelanggan.
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
