import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Pastikan AOS CSS sudah diimpor

const MainBanner = ({ city }) => {
  // Customize the content dynamically based on the city
  const title = `Jasa Pembuatan Website Profesional di ${city} untuk Tingkatkan Bisnis Anda`;
  const description = `Kami menyediakan layanan pembuatan website profesional di ${city} yang dapat membantu bisnis Anda memiliki kehadiran online yang kuat dan efektif. Dapatkan website yang menarik, fungsional, dan mudah ditemukan.`; 

  const titleTwo = `Website Custom dan Desain Profesional di ${city}`;
  const descriptionTwo = `Buat website yang sesuai dengan kebutuhan bisnis Anda dengan desain custom yang menarik. Kami membantu bisnis di ${city} untuk mendapatkan website yang efektif dan mudah digunakan.`; 

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam ms
    });
  }, []);

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
          <div className="main-banner-item">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content" data-aos="fade-up">
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

        {/* Slide Kedua */}
        <SwiperSlide>
          <div className="main-banner-item item-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content" data-aos="fade-up">
                    {/* Menampilkan hanya deskripsi yang berbeda */}
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
