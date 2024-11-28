import React from "react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <>
      <div className="about-section pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-warp-image">
                {/* Gambar tetap seperti semula */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-warp pl-15">
                <span>Tentang Kami</span>
                <h3>Kami Adalah Tim Ahli SEO Surabaya </h3>

                <p>
                  Kami adalah tim ahli SEO yang berbasis di Surabaya, berkomitmen untuk membantu bisnis Anda meraih kesuksesan di dunia digital. Dengan pendekatan yang terukur dan berbasis hasil, kami menyediakan layanan SEO yang dapat mengoptimalkan visibilitas dan peringkat website Anda di mesin pencari seperti Google.
                </p>

                <p>
                  Di dunia yang semakin digital ini, kehadiran online yang kuat sangat penting. Kami memahami bagaimana algoritma mesin pencari bekerja dan kami memanfaatkan pengetahuan tersebut untuk membantu Anda mendapatkan lebih banyak pelanggan dari Surabaya dan seluruh Indonesia.
                </p>

                <p>
                  Layanan kami meliputi berbagai aspek SEO, dari riset kata kunci yang relevan hingga penerapan strategi SEO di luar halaman dan di halaman. Kami juga fokus pada optimasi kecepatan website, peningkatan pengalaman pengguna (UX), serta pengelolaan backlink berkualitas. Kami bekerja dengan tujuan untuk memberikan hasil yang nyata dan meningkatkan konversi untuk setiap klien yang kami bantu.
                </p>

                <div className="about-btn">
                  <Link href="/about-us" className="default-btn-one">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
