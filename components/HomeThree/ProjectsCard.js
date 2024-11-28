import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";

const ProjectsCard = () => {
  return (
    <>
      <div className="project-section">
        <div className="container-fluid">
          <div className="section-title">
            <span>Projects</span>
            <h3>Our Projects For Client</h3>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 4,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="projects-slider"
          >
            <SwiperSlide>
              <div className="single-project-box">
                <img src="/images/project/1.jpg" alt="image" />
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">
                      Search Enginee Optimization
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <img src="/images/project/2.jpg" alt="image" />
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">
                      Opertray Division
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <img src="/images/project/3.jpg" alt="image" />
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">
                      Tremely Designs
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <img src="/images/project/4.jpg" alt="image" />
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">
                      Plainst Tech
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <img src="/images/project/5.jpg" alt="image" />
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">
                      Maindex Solutions
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <img src="/images/project/6.jpg" alt="image" />
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">
                      Email Campaign Design
                    </Link>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
