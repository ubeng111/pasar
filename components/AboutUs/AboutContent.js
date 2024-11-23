import React from "react";

const AboutContent = () => {
  return (
    <>
      <section className="about-section pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-image.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-area-content">
                <span>Tentang Kami</span>
                <h3>Kami adalah Tim Profesional dari Agensi SEO</h3>
                <strong>
                  Kami menawarkan layanan SEO dan pembuatan website untuk membantu bisnis Anda berkembang secara online.
                </strong>
                <p>
                  Dengan pengalaman bertahun-tahun, tim kami berfokus pada pengoptimalan mesin pencari dan pembuatan website profesional yang tidak hanya menarik tetapi juga efektif dalam meningkatkan kinerja bisnis Anda. Kami percaya bahwa setiap bisnis memiliki potensi untuk tumbuh di dunia digital, dan kami hadir untuk mewujudkannya.
                </p>
              </div>

              <div className="row">
                <div className="col-lg-6 col-6 col--6">
                  <div className="single-fun-facts">
                    <h3>
                      1,165
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Proyek Selesai</p>
                  </div>
                </div>

                <div className="col-lg-6 col-6 col-6">
                  <div className="single-fun-facts">
                    <h3>
                      2,665
                      <span className="sign-icon">+</span>
                    </h3>
                    <p>Klien Puas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;
