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
                  <Link href="/single-service">Layanan SEO Profesional dan Terpercaya</Link>
                </h3>
                <p>
                  Layanan SEO kami dirancang untuk meningkatkan peringkat website Anda di mesin pencari seperti Google. Kami fokus pada pendekatan yang berbasis hasil, dengan teknik-teknik terbaru untuk meningkatkan visibilitas dan otoritas situs Anda, membantu bisnis Anda berkembang di Bali dan sekitarnya.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Analisis Kompetitor SEO yang Terperinci</Link>
                </h3>
                <p>
                  Dengan pendekatan analisis kompetitor yang mendalam, kami membantu Anda memahami keunggulan dan kelemahan pesaing di pasar Bali. Hal ini memungkinkan kami untuk merancang strategi SEO yang lebih tajam dan tepat sasaran, yang memberi Anda keunggulan dalam pencarian Google.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/single-service">Integrasi SEO dengan Pemasaran Media Sosial</Link>
                </h3>
                <p>
                  Memperkuat kehadiran media sosial Anda sangat penting untuk meningkatkan SEO. Kami menyediakan layanan pemasaran media sosial yang selaras dengan strategi SEO, membantu bisnis Anda menjangkau audiens yang lebih luas di Bali, dan meningkatkan interaksi yang mendukung peringkat mesin pencari.
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
