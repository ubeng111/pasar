import React from "react";

const spinText = (text) => {
  const regex = /\{([^\}]+)\}/g;
  return text.replace(regex, (match, p1) => {
    const options = p1.split("|");
    return options[Math.floor(Math.random() * options.length)];
  });
};

const Features = ({ city }) => {
  return (
    <>
      <div className="features-section bg-color">
        <div className="container">
          <div className="row justify-content-center">
            {/* First Feature */}
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="fas fa-laptop-code"></i> {/* Ikon web design dari Font Awesome */}
                </div>
                <h3>{spinText(`Layanan Pembuatan Website {Profesional|Berkualitas|Terpercaya} di {city}`)}</h3>
                <p>
                  Kami menawarkan layanan pembuatan website yang responsif dan menarik untuk bisnis Anda di {city}. Dengan desain yang modern dan fungsionalitas yang sesuai dengan kebutuhan bisnis, website Anda akan memberikan pengalaman pengguna yang luar biasa.
                </p>
              </div>
            </div>

            {/* Second Feature */}
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="fas fa-shopping-cart"></i> {/* Ikon e-commerce dari Font Awesome */}
                </div>
                <h3>{spinText(`Pembuatan Website {E-commerce|Toko Online|Platform Jual Beli} di {city}`)}</h3>
                <p>
                  Kami menyediakan solusi pembuatan website e-commerce di {city}, memungkinkan bisnis Anda untuk menjual produk secara online. Dengan sistem pembayaran yang aman dan fitur keranjang belanja yang mudah digunakan, website e-commerce Anda siap untuk berkembang.
                </p>
              </div>
            </div>

            {/* Third Feature */}
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="fas fa-mobile-alt"></i> {/* Ikon responsif design dari Font Awesome */}
                </div>
                <h3>{spinText(`Desain Website {Responsif|Modern|Fleksibel} untuk Semua Perangkat`)}</h3>
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
