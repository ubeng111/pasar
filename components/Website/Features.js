import React from "react";

const Features = ({ city }) => {
  return (
    <>
      <div className="features-section bg-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-web-design"></i> {/* Ganti ikon sesuai kebutuhan */}
                </div>
                <h3>
                  Layanan Pembuatan Website Profesional di {city}
                </h3>
                <p>
                  Kami menawarkan layanan pembuatan website yang responsif dan menarik untuk bisnis Anda di {city}. Dengan desain yang modern dan fungsionalitas yang sesuai dengan kebutuhan bisnis, website Anda akan memberikan pengalaman pengguna yang luar biasa.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-ecommerce"></i> {/* Ganti ikon sesuai kebutuhan */}
                </div>
                <h3>
                  Pembuatan Website E-commerce di {city}
                </h3>
                <p>
                  Kami menyediakan solusi pembuatan website e-commerce di {city}, memungkinkan bisnis Anda untuk menjual produk secara online. Dengan sistem pembayaran yang aman dan fitur keranjang belanja yang mudah digunakan, website e-commerce Anda siap untuk berkembang.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-responsive"></i> {/* Ganti ikon sesuai kebutuhan */}
                </div>
                <h3>
                  Desain Website Responsif untuk Semua Perangkat
                </h3>
                <p>
                  Layanan pembuatan website kami di {city} fokus pada desain responsif, memastikan website Anda dapat diakses dengan optimal di semua perangkat, baik desktop, tablet, maupun smartphone.
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
