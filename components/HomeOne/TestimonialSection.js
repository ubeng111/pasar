import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const TestimonialSection = () => {
  return (
    <>
      <section className="testimonial-section ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="testimonial-content-area">
                <span>Testimonial</span>
                <h3>What Our Client Say</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus.Lorem is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </div>
            </div>

            <div className="col-lg-8">
              <Swiper
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Autoplay, Pagination]}
                className="testimonial-slides"
              >
                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/client-image/1.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>R.Mortein</h3>
                      <span>Product Manager</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse gravida.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/client-image/2.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Edward Bold</h3>
                      <span>CEO & Founder</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse gravida.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/client-image/3.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Mahindra jhon</h3>
                      <span>Ceo & Sustainable designer</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse gravida.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/client-image/4.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Lee Munroe</h3>
                      <span>Underwriter</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse gravida.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="testimonial-single-item">
                    <div className="testimonial-image">
                      <img src="/images/client-image/3.jpg" alt="image" />
                    </div>
                    <div className="testimonial-content-text">
                      <h3>Meg Lanning</h3>
                      <span>Agent Manager</span>
                      <div className="icon">
                        <i className="flaticon-quote"></i>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse gravida.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
