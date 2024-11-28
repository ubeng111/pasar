import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Pastikan untuk mengimpor AOS CSS

const Features = ({ city }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: true, // Animasi hanya akan terjadi sekali
    });
  }, []);

  return (
    <>
      <div className="features-section bg-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  Layanan SEO Berkualitas Tinggi di {city}
                </h3>
                <p>
                  Kami menghadirkan layanan SEO profesional untuk membantu website Anda meraih peringkat terbaik di mesin pencari. Manfaatkan jasa SEO kami untuk meningkatkan visibilitas dan eksposur bisnis Anda, terutama di {city}.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  Studi Kompetitor SEO yang Mendalam di {city}
                </h3>
                <p>
                  Dengan melakukan studi kompetitor SEO yang komprehensif, kami membantu Anda memahami persaingan pasar di {city} dan merancang strategi SEO yang lebih efektif untuk mencapai hasil yang lebih baik di Google.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  Optimasi Media Sosial untuk SEO di {city}
                </h3>
                <p>
                  Kami menawarkan layanan pemasaran media sosial yang terintegrasi dengan strategi SEO. Meningkatkan kehadiran bisnis Anda di platform sosial merupakan bagian penting dalam memperkuat optimasi SEO dan menarik audiens dari {city} serta daerah sekitarnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;