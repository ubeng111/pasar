import React from "react";

const ServicesCard = ({ city }) => {
  return (
    <>
      <div className="services-section pb-70 bg-ffffff">
        <div className="container">
          <div className="section-title">
            <span>Jasa Kami</span>
            <h3>Bagaimana Kami Membantu Meningkatkan Bisnis Anda di {city} dengan Website Profesional</h3>
          </div>

          <div className="row justify-content-center">
            {/* Jasa Pembuatan Website */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-website-design"></i>
                </div>
                <h3>Pembuatan Website Profesional di {city}</h3>
                <p>
                  Kami menyediakan layanan pembuatan website profesional untuk bisnis Anda di {city}. Dari desain yang menarik dan responsif hingga pengembangan fitur canggih, kami memastikan website Anda siap untuk menarik pelanggan dan meningkatkan kredibilitas bisnis Anda.
                </p>
              </div>
            </div>

            {/* Website E-Commerce */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-shopping-cart"></i>
                </div>
                <h3>Pembuatan Website E-Commerce di {city}</h3>
                <p>
                  Kami membantu Anda membangun platform e-commerce yang mudah digunakan, aman, dan terintegrasi dengan berbagai metode pembayaran. Dengan website e-commerce kami, bisnis Anda di {city} dapat menjangkau pasar yang lebih luas dan meningkatkan penjualan.
                </p>
              </div>
            </div>

            {/* Website Portofolio */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-portfolio"></i>
                </div>
                <h3>Pembuatan Website Portofolio di {city}</h3>
                <p>
                  Tampilkan karya terbaik Anda melalui website portofolio profesional. Kami membuat desain yang kreatif dan responsif, sehingga dapat menarik perhatian klien atau calon pelanggan di {city} dan di seluruh dunia.
                </p>
              </div>
            </div>

            {/* Website Bisnis Kecil */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-business"></i>
                </div>
                <h3>Pembuatan Website Bisnis Kecil di {city}</h3>
                <p>
                  Kami memahami kebutuhan bisnis kecil di {city}. Dengan paket pembuatan website terjangkau dan mudah dikelola, kami membantu Anda memulai dan mengembangkan kehadiran online bisnis Anda dengan solusi yang efektif.
                </p>
              </div>
            </div>

            {/* Optimasi SEO untuk Website */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>Optimasi SEO untuk Website di {city}</h3>
                <p>
                  Setiap website yang kami buat juga dilengkapi dengan optimasi SEO dasar untuk memastikan situs Anda mudah ditemukan di mesin pencari. Kami memastikan website Anda memiliki struktur SEO yang optimal untuk meningkatkan peringkat di {city} dan daerah lainnya.
                </p>
              </div>
            </div>

            {/* Pengelolaan dan Pemeliharaan Website */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-services-box bg-f3f3f3">
                <div className="icon">
                  <i className="flaticon-web-maintenance"></i>
                </div>
                <h3>Pengelolaan dan Pemeliharaan Website di {city}</h3>
                <p>
                  Kami tidak hanya membangun website, tetapi juga menawarkan layanan pemeliharaan dan pembaruan untuk memastikan website Anda tetap aman, cepat, dan up-to-date. Layanan ini membantu bisnis di {city} tetap kompetitif di dunia digital yang terus berkembang.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Shapes */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="gambar dekoratif 1" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="gambar dekoratif 2" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="gambar dekoratif 3" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="gambar dekoratif 4" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="gambar dekoratif 5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
