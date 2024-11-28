import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonial-section ptb-100">
        <div className="container">
          <div className="section-title">
            <span>Testimonial</span>
            <h3>Apa Kata Klien Kami</h3>
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
                    "Dengan bantuan jasa SEO yang kami pilih, website bisnis kami berhasil naik
                    peringkat di Google. Kami kini mendapatkan lebih banyak pelanggan lokal."
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
                    "Layanan SEO yang diberikan sangat profesional. Dengan strategi yang tepat,
                    peringkat website kami meningkat pesat dan kami mulai mendapatkan lebih banyak
                    pengunjung."
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
                  <h3>Mahindra Jhon</h3>
                  <span>Ceo & Sustainable Designer</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "Kami bekerja dengan tim SEO untuk meningkatkan visibilitas bisnis kami secara
                    online. Peringkat kami di mesin pencari semakin tinggi, dan kami menerima
                    lebih banyak permintaan dari klien lokal."
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
                    "Setelah bekerja dengan tim SEO, website kami lebih mudah ditemukan dan kami
                    mendapatkan lebih banyak klien. Kami sangat puas dengan hasil yang diberikan."
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-single-item">
                <div className="testimonial-image">
                  <img src="/images/client-image/1.jpg" alt="image" />
                </div>

                <div className="testimonial-content-text">
                  <h3>Meg Lanning</h3>
                  <span>Agent Manager</span>
                  <div className="icon">
                    <i className="flaticon-quote"></i>
                  </div>
                  <p>
                    "Tim SEO membantu meningkatkan visibilitas bisnis kami di dunia digital.
                    Website kami mendapat lebih banyak pengunjung dan kami mendapatkan banyak
                    klien baru."
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
