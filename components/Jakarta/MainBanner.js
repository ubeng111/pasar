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
                    <h1>Jasa SEO Jakarta untuk Meningkatkan Bisnis Anda</h1>
                    <p>
                      Tingkatkan peringkat website Anda di mesin pencari dengan layanan SEO terbaik. Kami membantu bisnis lokal agar lebih
                      mudah ditemukan dan berkembang di dunia digital.
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
                    <h1>Solusi Digital Marketing yang Efektif</h1>
                    <p>
                      Dapatkan strategi pemasaran digital yang efektif untuk bisnis Anda, termasuk SEO dan media sosial. Kami membantu bisnis
                      agar lebih kompetitif di dunia maya.
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
