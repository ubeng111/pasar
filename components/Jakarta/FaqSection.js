import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

// Menambahkan schema markup untuk FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu SEO dan mengapa penting untuk bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) adalah proses meningkatkan visibilitas website di hasil pencarian mesin pencari. SEO membantu bisnis agar lebih mudah ditemukan oleh calon pelanggan, yang sangat penting di pasar digital yang kompetitif saat ini. Dengan SEO, bisnis dapat menarik lebih banyak trafik organik dan mencapai audiens lokal, terutama di kota besar seperti Jakarta."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana layanan SEO dapat membantu bisnis saya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Layanan SEO membantu bisnis dengan meningkatkan peringkat website di mesin pencari, meningkatkan jumlah pengunjung organik, dan menyempurnakan pengalaman pengguna. SEO lokal sangat penting, karena dapat memastikan bisnis Anda muncul di hasil pencarian saat orang mencari layanan atau produk di sekitar area tertentu."
      }
    },
    {
      "@type": "Question",
      "name": "Apa faktor kunci untuk kesuksesan SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kesuksesan SEO bergantung pada beberapa faktor, seperti pemilihan kata kunci yang tepat, konten yang relevan, struktur website yang baik, backlink berkualitas, dan desain yang responsif di perangkat mobile. Optimasi ini membantu website Anda tampil lebih baik di hasil pencarian dan memberikan pengalaman yang lebih baik bagi pengunjung."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO bagi bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hasil SEO umumnya mulai terlihat dalam 3 hingga 6 bulan, tergantung pada tingkat persaingan di industri dan area geografis. Di kota besar yang sangat kompetitif seperti Jakarta, Anda mungkin akan melihat hasil lebih cepat, terutama jika strategi SEO dilakukan dengan tepat."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya layanan SEO untuk bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya layanan SEO sangat bervariasi tergantung pada berbagai faktor, seperti tingkat kompetisi industri, ukuran bisnis, dan jenis layanan yang dibutuhkan. Secara umum, biaya SEO dapat disesuaikan dengan anggaran dan tujuan bisnis Anda, baik untuk meningkatkan visibilitas lokal atau memperluas jangkauan pasar."
      }
    }
  ]
};

const FaqSection = () => {
  return (
    <>
      <section className="faq-section ptb-100">
        <div className="container">
          <div className="faq-area-content">
            <span>FAQ</span>
            <h3>Pertanyaan yang Sering Diajukan</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa itu SEO dan mengapa penting untuk bisnis?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO (Search Engine Optimization) adalah proses meningkatkan visibilitas website di hasil pencarian mesin pencari. SEO membantu bisnis agar lebih mudah ditemukan oleh calon pelanggan, yang sangat penting di pasar digital yang kompetitif saat ini. Dengan SEO, bisnis dapat menarik lebih banyak trafik organik dan mencapai audiens lokal, terutama di kota besar seperti Jakarta.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Bagaimana layanan SEO dapat membantu bisnis saya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Layanan SEO membantu bisnis dengan meningkatkan peringkat website di mesin pencari, meningkatkan jumlah pengunjung organik, dan menyempurnakan pengalaman pengguna. SEO lokal sangat penting, karena dapat memastikan bisnis Anda muncul di hasil pencarian saat orang mencari layanan atau produk di sekitar area tertentu.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa faktor kunci untuk kesuksesan SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Kesuksesan SEO bergantung pada beberapa faktor, seperti pemilihan kata kunci yang tepat, konten yang relevan, struktur website yang baik, backlink berkualitas, dan desain yang responsif di perangkat mobile. Optimasi ini membantu website Anda tampil lebih baik di hasil pencarian dan memberikan pengalaman yang lebih baik bagi pengunjung.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO bagi bisnis?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Hasil SEO umumnya mulai terlihat dalam 3 hingga 6 bulan, tergantung pada tingkat persaingan di industri dan area geografis. Di kota besar yang sangat kompetitif seperti Jakarta, Anda mungkin akan melihat hasil lebih cepat, terutama jika strategi SEO dilakukan dengan tepat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya layanan SEO untuk bisnis?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya layanan SEO sangat bervariasi tergantung pada berbagai faktor, seperti tingkat kompetisi industri, ukuran bisnis, dan jenis layanan yang dibutuhkan. Secara umum, biaya SEO dapat disesuaikan dengan anggaran dan tujuan bisnis Anda, baik untuk meningkatkan visibilitas lokal atau memperluas jangkauan pasar.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img src="/images/faq-image.png" alt="FAQ tentang SEO" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup untuk FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      ></script>
    </>
  );
};

export default FaqSection;
