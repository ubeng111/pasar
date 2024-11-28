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
                  <Link href="/single-service">Layanan SEO Terpercaya</Link>
                </h3>
                <p>
                  Kami hadir dengan layanan SEO terpercaya yang dapat membantu website Anda mencapai peringkat terbaik di mesin pencari.
                  Dengan pendekatan yang terukur, kami pastikan situs Anda lebih mudah ditemukan di Google, terutama bagi usaha yang berbasis di Surabaya.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Studi Analisis Persaingan SEO</Link>
                </h3>
                <p>
                  Dengan melakukan riset mendalam terhadap pesaing Anda, kami membantu Anda mendapatkan wawasan berharga mengenai strategi SEO yang lebih baik.
                  Kami pastikan hasil yang optimal dengan pendekatan yang disesuaikan, termasuk mengantar website Anda ke halaman pertama Google.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/single-service">Optimasi Media Sosial untuk SEO</Link>
                </h3>
                <p>
                  Kami juga menyediakan layanan untuk meningkatkan kehadiran online Anda melalui media sosial, yang sangat mendukung keberhasilan SEO Anda.
                  Meningkatkan interaksi dan visibilitas di platform sosial akan meningkatkan trafik organik ke situs Anda, terutama di kawasan Surabaya.
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
