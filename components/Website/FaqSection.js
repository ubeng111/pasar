import React, { useEffect } from "react"; 
import { useRouter } from "next/router";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from "react-accessible-accordion";
import { 
  FaQuestionCircle, 
  FaRegClock, 
  FaCogs, 
  FaServer, 
  FaDesktop, 
  FaTools, 
  FaMobileAlt, 
  FaWrench, 
  FaNetworkWired, 
  FaRegMoneyBillAlt 
} from "react-icons/fa";  // Mengimpor ikon dari react-icons
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Image from "next/image"; // Import komponen Image dari Next.js

const faqSchema = (city) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa yang dimaksud dengan layanan pembuatan website dan bagaimana cara kerjanya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Layanan pembuatan website mencakup perancangan dan pengembangan website yang sesuai dengan kebutuhan bisnis Anda di ${city}. Proses ini meliputi desain web, pengembangan fungsionalitas, dan pengujian untuk memastikan website berjalan dengan baik di berbagai perangkat.`
      }
    },
    {
      "@type": "Question",
      "name": `Kenapa bisnis perlu menggunakan jasa pembuatan website di ${city}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Website yang baik membantu bisnis di ${city} untuk terlihat profesional, memudahkan pelanggan mengakses informasi tentang produk atau layanan Anda, serta meningkatkan kredibilitas dan kepercayaan pelanggan. Dengan memiliki website, bisnis Anda bisa lebih mudah ditemukan secara online.`
      }
    },
    {
      "@type": "Question",
      "name": `Apa yang harus dipertimbangkan saat memilih penyedia jasa pembuatan website di ${city} yang tepat?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Pastikan penyedia jasa pembuatan website di ${city} memiliki portofolio yang relevan, pengalaman dalam pembuatan website sesuai industri Anda, serta pemahaman yang baik tentang teknologi web dan desain responsif. Pilih penyedia jasa yang dapat menawarkan solusi yang disesuaikan dengan kebutuhan bisnis Anda.`
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk membuat website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Waktu pembuatan website tergantung pada kompleksitas proyek. Biasanya, pembuatan website sederhana dapat memakan waktu 2-4 minggu, sementara website dengan fitur kompleks atau kustomisasi lebih lanjut bisa memakan waktu lebih lama."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah jasa pembuatan website juga menyediakan layanan pemeliharaan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Banyak penyedia jasa pembuatan website juga menawarkan layanan pemeliharaan untuk memastikan website Anda tetap berfungsi dengan baik dan up-to-date, termasuk pembaruan keamanan, perbaikan bug, dan peningkatan fungsionalitas."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah saya perlu hosting dan domain untuk website saya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, untuk membuat website berfungsi secara online, Anda memerlukan layanan hosting untuk menyimpan file website Anda dan nama domain untuk alamat website. Penyedia jasa pembuatan website biasanya juga menawarkan layanan hosting dan registrasi domain."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah desain website harus responsif?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desain responsif sangat penting agar website Anda dapat diakses dengan baik di berbagai perangkat, mulai dari desktop hingga smartphone. Ini juga membantu meningkatkan peringkat SEO dan pengalaman pengguna."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara mengelola konten website setelah selesai dibuat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Penyedia jasa pembuatan website biasanya memberikan akses ke sistem manajemen konten (CMS) seperti WordPress, sehingga Anda dapat mengelola dan memperbarui konten website secara mandiri tanpa perlu keterampilan pengkodean."
      }
    }
  ]
});

const FaqSection = ({ city }) => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);

  // Fungsi untuk memilih ikon berdasarkan nama pertanyaan
  const getIconForQuestion = (question) => {
    switch (question) {
      case "Apa yang dimaksud dengan layanan pembuatan website dan bagaimana cara kerjanya?":
        return <FaCogs className="faq-icon" />;
      case `Kenapa bisnis perlu menggunakan jasa pembuatan website di ${city}?`:
        return <FaDesktop className="faq-icon" />;
      case `Apa yang harus dipertimbangkan saat memilih penyedia jasa pembuatan website di ${city} yang tepat?`:
        return <FaTools className="faq-icon" />;
      case "Berapa lama waktu yang dibutuhkan untuk membuat website?":
        return <FaRegClock className="faq-icon" />;
      case "Apakah jasa pembuatan website juga menyediakan layanan pemeliharaan?":
        return <FaWrench className="faq-icon" />;
      case "Apakah saya perlu hosting dan domain untuk website saya?":
        return <FaNetworkWired className="faq-icon" />;
      case "Apakah desain website harus responsif?":
        return <FaMobileAlt className="faq-icon" />;
      case "Bagaimana cara mengelola konten website setelah selesai dibuat?":
        return <FaRegMoneyBillAlt className="faq-icon" />;
      default:
        return <FaQuestionCircle className="faq-icon" />;
    }
  };

  return (
    <>
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content" data-aos="fade-up">
            <span>FAQ</span>
            <h3>Pertanyaan yang Sering Diajukan tentang Jasa Pembuatan Website di {city}</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  {faqSchema(city).mainEntity.map((faq, index) => (
                    <AccordionItem key={index} uuid={String(index)}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {/* Menambahkan ikon sesuai pertanyaan */}
                          {getIconForQuestion(faq.name)} {faq.name}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{faq.acceptedAnswer.text}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <div className="faq-image">
                <Image 
                  src="/images/tab/2.jpg" 
                  alt="FAQ tentang Pembuatan Website untuk Bisnis"
                  width={500} 
                  height={500} // Tentukan ukuran gambar sesuai kebutuhan
                  layout="responsive" // Menjaga proporsi gambar
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup untuk FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(city)),
        }}
      ></script>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { city } = params;
  return {
    props: {
      city: city || 'bandung', // Default ke Bandung jika tidak ada kota
    },
  };
}

export default FaqSection;
