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
                  <Link href="/single-service">Layanan SEO Berkualitas Tinggi</Link>
                </h3>
                <p>
                  Kami menghadirkan layanan SEO profesional untuk membantu website Anda meraih peringkat terbaik di mesin pencari. Manfaatkan jasa SEO kami untuk meningkatkan visibilitas dan eksposur bisnis Anda, terutama di Bandung.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Studi Kompetitor SEO yang Mendalam</Link>
                </h3>
                <p>
                  Dengan melakukan studi kompetitor SEO yang komprehensif, kami membantu Anda memahami persaingan pasar di Bandung dan merancang strategi SEO yang lebih efektif untuk mencapai hasil yang lebih baik di Google.
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
                  Kami menawarkan layanan pemasaran media sosial yang terintegrasi dengan strategi SEO. Meningkatkan kehadiran bisnis Anda di platform sosial merupakan bagian penting dalam memperkuat optimasi SEO dan menarik audiens dari Bandung serta daerah sekitarnya.
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
