import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import Image from "next/image"; // Impor komponen Image dari Next.js

const WhyChooseUs = ({ city }) => {
  useEffect(() => {
    // Inisialisasi AOS setelah komponen dimuat
    AOS.init({
      duration: 1000,  // Durasi animasi dalam milidetik
      once: true,      // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <>
      <div className="choose-section pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12" data-aos="fade-up">
              <div className="choose-content-warp">
                <span>Kenapa Memilih Kami</span>
                <h3 data-aos="fade-up">Jasa SEO Terpercaya untuk Meningkatkan Bisnis Anda di {city}</h3>
                <p data-aos="fade-up">
                  Kami menawarkan layanan SEO profesional yang dirancang untuk meningkatkan visibilitas website Anda di mesin pencari. Dengan pendekatan berbasis data dan pengalaman bertahun-tahun, kami membantu bisnis Anda di {city} mencapai peringkat terbaik dan menarik lebih banyak pengunjung.
                </p>

                <div className="choose-text" data-aos="fade-up">
                  <i className="flaticon-check-mark"></i>
                  <h4>Strategi SEO yang Terbukti dan Terukur di {city}</h4>
                  <p>
                    Kami menggunakan metode SEO yang telah terbukti efektif untuk mendongkrak peringkat website Anda. Mulai dari riset kata kunci yang mendalam hingga optimasi on-page dan off-page, kami selalu mengutamakan hasil yang berkelanjutan untuk bisnis Anda di {city}.
                  </p>
                </div>

                <div className="choose-text" data-aos="fade-up">
                  <i className="flaticon-check-mark"></i>
                  <h4>Tim SEO Profesional dengan Pengalaman Luas di {city}</h4>
                  <p>
                    Dengan pengalaman bertahun-tahun, tim SEO kami memiliki keahlian dalam memajukan peringkat website dengan mengikuti tren dan algoritma terbaru dari mesin pencari. Kami bekerja keras untuk memastikan bisnis Anda tetap unggul di pasar digital di {city}.
                  </p>
                </div>

                <div className="choose-text" data-aos="fade-up">
                  <i className="flaticon-check-mark"></i>
                  <h4>Pelayanan 24/7 untuk Menjamin Kepuasan Anda di {city}</h4>
                  <p>
                    Kami menyediakan dukungan pelanggan yang responsif dan tersedia sepanjang waktu. Tim kami siap membantu Anda kapan saja, memastikan bisnis Anda di {city} selalu mendapat perhatian di dunia digital yang dinamis.
                  </p>
                </div>

                <div className="choose-btn" data-aos="fade-up">
                  <Link href="/about-us" className="default-btn-one">
                    Pelajari Lebih Lanjut
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12" data-aos="fade-up">
              <div className="choose-warp">
                {/* Contoh penggunaan komponen Image */}
                <Image
                  src="/images/team/5.jpg"  // Ganti dengan path gambar yang sesuai
                  alt="Jasa SEO"
                  width={500}                   // Sesuaikan lebar gambar
                  height={300}                  // Sesuaikan tinggi gambar
                  data-aos="fade-up"           // Jika ingin animasi AOS
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
