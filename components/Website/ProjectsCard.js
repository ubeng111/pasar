import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";  // Import Image from Next.js

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
                <Image
                  src="/images/project/download (1).jfif"
                  alt="Project 1"
                  width={600}  // Set width
                  height={300} // Set height
                  objectFit="cover" // Ensures the image covers the space while maintaining aspect ratio
                />
                <div className="project-hover-content">
                  <h3>Project 1</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <Image
                  src="/images/project/download (2).jfif"
                  alt="Project 2"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="project-hover-content">
                  <h3>Project 2</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <Image
                  src="/images/project/download (3).jfif"
                  alt="Project 3"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="project-hover-content">
                  <h3>Project 3</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <Image
                  src="/images/project/download (4).jfif"
                  alt="Project 4"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="project-hover-content">
                  <h3>Project 4</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <Image
                  src="/images/project/download (5).jfif"
                  alt="Project 5"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="project-hover-content">
                  <h3>Project 5</h3>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-project-box">
                <Image
                  src="/images/project/download (6).jfif"
                  alt="Project 6"
                  width={600}
                  height={300}
                  objectFit="cover"
                />
                <div className="project-hover-content">
                  <h3>Project 6</h3>
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
