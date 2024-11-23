import React, { useState } from 'react'; // Mengimpor useState
import FsLightbox from "fslightbox-react";
import Link from "next/link"; 
import Image from 'next/image';

const MainBanner = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={['https://www.youtube.com/watch?v=_ysd-zHamjk']}
      />

      <div className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="main-banner-content">
                    <h1>Digital Agency with Excellence Service</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      eiusmod tempor incididunt ut labore.
                    </p>

                    <div className="banner-btn">
                      <Link href="/about-us" className="default-btn-one">
                        More About Us
                      </Link>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn popup-youtube"
                      >
                        Watch Video <i className="flaticon-play-button"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="banner-image">
                    <Image
                      src="/images/saas-image/arrow.png"
                      className="animate__animated animate__fadeInLeft animate__delay-0.5s"
                      alt="arrow"
                      width={500}
                      height={500}
                      loading="lazy" // Memastikan gambar hanya dimuat saat dibutuhkan
                    />
                    {/* Gambar lainnya menggunakan Image */}
                    <Image
                      src="/images/saas-image/box1.png"
                      className="animate__animated animate__fadeInUp animate__delay-0.5s"
                      alt="box1"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                    {/* Tambahkan Image untuk gambar lainnya */}
                  </div>
                </div>
              </div>

              <div className="banner-bg-text">SEO</div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <Image src="/images/shape/1.png" alt="image" width={100} height={100} loading="lazy" />
        </div>
        <div className="shape-img2">
          <Image src="/images/shape/2.png" alt="image" width={100} height={100} loading="lazy" />
        </div>
        {/* Tambahkan Image untuk shape-img lainnya */}
      </div>
    </>
  );
};

export default MainBanner;
