import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Pastikan AOS CSS sudah diimpor
import Image from "next/image";  // Import Image from Next.js

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

            {/* banner-image */}
            <div className="banner-image">
              <Image 
                src="/images/slider-bg22.webp" 
                alt={`Jasa Pembuatan Website Profesional ${city}`} 
                width={1920} 
                height={1080} 
                layout="responsive" 
                loading="lazy" 
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner-item item-two">
            <div className="d-table">
              <div className="d-table-cell">
                <div className="container">
                  <div className="main-banner-content" data-aos="fade-up">
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

            {/* Banner Image */}
            <div className="banner-image">
              <Image 
                src="/images/slider-bg1.webp" 
                alt={`Website Custom dan Desain Profesional di ${city}`} 
                width={1920} 
                height={1080} 
                layout="responsive" 
                loading="lazy" 
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
