import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import Link from "next/link";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS for animations
import Image from 'next/image'; // Import next/image for optimized images

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
        <SwiperSlide>
          <div className="main-banner-item" data-aos="fade-down"> {/* Apply AOS Fade-down effect */}
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
            {/* Example image with next/image */}
            <Image 
              src="/images/banner-image1.jpg" // Adjust path as needed
              alt="Banner Image" 
              width={1200} // Set appropriate width
              height={500} // Set appropriate height
              layout="responsive" // Optional: Use responsive layout for better scaling
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="main-banner-item item-two" data-aos="fade-down"> {/* Apply AOS Fade-down effect */}
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
            {/* Example image with next/image */}
            <Image 
              src="/images/banner-image2.jpg" // Adjust path as needed
              alt="Banner Image" 
              width={1200} // Set appropriate width
              height={500} // Set appropriate height
              layout="responsive" // Optional: Use responsive layout for better scaling
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
