import React, { useEffect } from "react";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Image from 'next/image';  // Impor Image dari Next.js

const FaqSection = ({ city }) => {
  const router = useRouter();

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Definisikan generateFaqSchema
  const generateFaqSchema = (city) => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Apa yang dimaksud dengan layanan SEO dan bagaimana cara kerjanya?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Layanan SEO (Search Engine Optimization) adalah serangkaian teknik yang diterapkan pada website untuk meningkatkan visibilitasnya di hasil pencarian mesin pencari, seperti Google."
          }
        },
        {
          "@type": "Question",
          "name": `Kenapa bisnis perlu menggunakan jasa SEO di ${city}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `SEO membantu bisnis di ${city} agar lebih mudah ditemukan oleh pelanggan yang mencari produk atau layanan yang relevan dengan apa yang ditawarkan.`
          }
        },
        {
          "@type": "Question",
          "name": "Apa manfaat utama yang diperoleh bisnis setelah menggunakan jasa SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dengan menggunakan jasa SEO, bisnis akan meningkatkan peringkat di mesin pencari, menarik lebih banyak pengunjung, serta meningkatkan peluang konversi dan penjualan."
          }
        },
        {
          "@type": "Question",
          "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil dari layanan SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waktu yang dibutuhkan untuk melihat hasil SEO bisa bervariasi, namun umumnya dapat terlihat dalam 3 hingga 6 bulan tergantung pada kompetisi dan optimasi yang dilakukan."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah SEO hanya berlaku untuk website bisnis besar saja?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tidak, SEO dapat diterapkan pada semua jenis website, baik itu bisnis kecil, menengah, atau besar, untuk meningkatkan visibilitas dan daya saing mereka di mesin pencari."
          }
        },
        {
          "@type": "Question",
          "name": `Apakah SEO dapat membantu bisnis saya bersaing dengan kompetitor lokal di ${city}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Ya, SEO sangat penting untuk bisnis lokal. Dengan teknik SEO yang tepat, bisnis Anda dapat lebih mudah ditemukan oleh calon pelanggan yang mencari produk atau layanan yang relevan di ${city}.`
          }
        },
        {
          "@type": "Question",
          "name": "Apa saja teknik yang digunakan dalam SEO untuk meningkatkan peringkat website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teknik SEO meliputi optimasi on-page (seperti penggunaan kata kunci, meta tag, dan struktur URL), optimasi off-page (seperti backlink), dan peningkatan pengalaman pengguna di website."
          }
        }
      ]
    };
  };

  return (
    <>
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content" data-aos="fade-up">
            <span>FAQ</span>
            <h3>Pertanyaan yang Sering Diajukan tentang SEO di {city}</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-up">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa yang dimaksud dengan layanan SEO dan bagaimana cara kerjanya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Layanan SEO (Search Engine Optimization) adalah serangkaian teknik yang diterapkan pada website untuk meningkatkan visibilitasnya di hasil pencarian mesin pencari, seperti Google.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Kenapa bisnis perlu menggunakan jasa SEO di {city}?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO membantu bisnis di {city} agar lebih mudah ditemukan oleh pelanggan yang mencari produk atau layanan yang relevan dengan apa yang ditawarkan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa manfaat utama yang diperoleh bisnis setelah menggunakan jasa SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Dengan menggunakan jasa SEO, bisnis akan meningkatkan peringkat di mesin pencari, menarik lebih banyak pengunjung, serta meningkatkan peluang konversi dan penjualan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa lama waktu yang dibutuhkan untuk melihat hasil dari layanan SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Waktu yang dibutuhkan untuk melihat hasil SEO bisa bervariasi, namun umumnya dapat terlihat dalam 3 hingga 6 bulan tergantung pada kompetisi dan optimasi yang dilakukan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apakah SEO hanya berlaku untuk website bisnis besar saja?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Tidak, SEO dapat diterapkan pada semua jenis website, baik itu bisnis kecil, menengah, atau besar, untuk meningkatkan visibilitas dan daya saing mereka di mesin pencari.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apakah SEO dapat membantu bisnis saya bersaing dengan kompetitor lokal di {city}?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Ya, SEO sangat penting untuk bisnis lokal. Dengan teknik SEO yang tepat, bisnis Anda dapat lebih mudah ditemukan oleh calon pelanggan yang mencari produk atau layanan yang relevan di {city}.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa saja teknik yang digunakan dalam SEO untuk meningkatkan peringkat website?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Teknik SEO meliputi optimasi on-page (seperti penggunaan kata kunci, meta tag, dan struktur URL), optimasi off-page (seperti backlink), dan peningkatan pengalaman pengguna di website.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up">
              <div className="faq-image">
                {/* Gunakan komponen Image dari Next.js */}
                <Image 
                  src="/images/faq-image.png" 
                  alt="FAQ tentang SEO untuk Bisnis Lokal" 
                  width={500}   // Tentukan lebar gambar
                  height={300}  // Tentukan tinggi gambar
                  layout="responsive"  // Layout responsif
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
          __html: JSON.stringify(generateFaqSchema(city)),
        }}
      ></script>
    </>
  );
};

// Fungsi getServerSideProps untuk mendapatkan parameter kota dari URL
export async function getServerSideProps({ params }) {
  const { city } = params;

  return {
    props: {
      city: city || "bandung", // Default ke Bandung jika tidak ada kota
    },
  };
}

export default FaqSection;
