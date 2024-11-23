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
                  <Link href="/single-service">Mendorong Transformasi Digital melalui SEO</Link>
                </h3>
                <p>
                  Kami siap mendukung bisnis di Bekasi untuk meraih posisi puncak di mesin pencari Google. Layanan SEO kami akan meningkatkan visibilitas situs web Anda, memastikan bisnis Anda ditemukan oleh pelanggan yang tepat, kapan pun mereka mencarikannya.
                  Mari maksimalkan potensi digital bisnis Anda bersama kami!
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-analytics"></i>
                </div>
                <h3>
                  <Link href="/single-service">Strategi SEO Terbaik untuk Bisnis Anda</Link>
                </h3>
                <p>
                  Melalui analisis mendalam terhadap pesaing Anda, kami merancang strategi SEO yang lebih tepat sasaran dan efektif. Kami membantu bisnis di Bekasi tidak hanya untuk mengalahkan pesaing lokal, tetapi juga untuk meraih pasar yang lebih luas. Jadilah yang terdepan dengan solusi SEO yang terukur dan strategis.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-features-item-two">
                <div className="icon">
                  <i className="flaticon-laptop"></i>
                </div>
                <h3>
                  <Link href="/single-service">Pemasaran Media Sosial yang Terkelola dengan Baik</Link>
                </h3>
                <p>
                  SEO bukan hanya tentang website Anda, kami juga menawarkan layanan pemasaran media sosial untuk memperkuat kehadiran digital bisnis Anda di platform sosial. Dengan meningkatkan interaksi dan keterlibatan, Anda dapat memperluas jangkauan pasar, terutama di Bekasi dan daerah sekitarnya, serta membangun hubungan yang lebih dekat dengan audiens Anda.
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
