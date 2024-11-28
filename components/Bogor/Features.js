import React from "react";
import Link from "next/link";

const Features = () => {
  return (
    <>
      <div className="features-section bg-color">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-seo"></i>
                </div>
                <h3>
                  <Link href="/single-service">Transformasi Digital dengan SEO</Link>
                </h3>
                <p>
                  Kami hadir untuk membantu bisnis di Bogor meraih puncak pencarian Google. Layanan SEO kami akan meningkatkan visibilitas website Anda
                  secara signifikan, memastikan bisnis Anda tampil di depan pelanggan yang tepat, kapan saja mereka mencarinya.
                  Mari optimalkan potensi digital bisnis Anda bersama kami!
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Strategi SEO yang Mumpuni</Link>
                </h3>
                <p>
                  Dengan menganalisis kompetitor Anda secara mendalam, kami menyusun strategi SEO yang lebih tajam dan efektif. Kami membantu bisnis di
                  Bogor untuk tidak hanya mengungguli pesaing lokal, tetapi juga mengoptimalkan website Anda untuk menembus pasar yang lebih luas.
                  Jadilah yang terdepan dengan solusi SEO yang tepat dan terukur.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/single-service">Pemasaran Media Sosial yang Terintegrasi</Link>
                </h3>
                <p>
                  Optimasi SEO bukan hanya tentang website Anda. Kami juga menawarkan layanan pemasaran media sosial untuk membantu memperkuat kehadiran
                  digital bisnis Anda di platform sosial. Dengan meningkatkan interaksi dan keterlibatan, Anda dapat memperluas jangkauan pasar, terutama
                  di Bogor dan sekitarnya, menciptakan hubungan lebih dekat dengan audiens.
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
