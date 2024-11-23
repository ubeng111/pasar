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
      "name": "Apa itu jasa SEO dan bagaimana cara kerjanya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jasa SEO adalah layanan yang membantu meningkatkan peringkat website di mesin pencari seperti Google. Proses ini melibatkan berbagai teknik, seperti riset kata kunci, optimasi on-page, dan peningkatan pengalaman pengguna untuk memastikan website Anda lebih mudah ditemukan oleh calon pelanggan yang mencari produk atau layanan terkait."
      }
    },
    {
      "@type": "Question",
      "name": "Mengapa bisnis di Bali membutuhkan jasa SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bisnis di Bali perlu memanfaatkan SEO untuk memastikan website mereka muncul di hasil pencarian saat pelanggan mencari produk atau layanan di area tersebut. SEO membantu meningkatkan jumlah pengunjung yang relevan, yang berpotensi meningkatkan konversi dan penjualan, khususnya di pasar lokal yang sangat kompetitif."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara memilih jasa SEO yang tepat untuk bisnis saya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pilih penyedia jasa SEO yang berpengalaman dalam meningkatkan peringkat website dengan teknik yang sesuai dengan pedoman Google. Mereka harus memiliki portofolio yang dapat dibuktikan dan mampu menawarkan strategi yang terukur, seperti riset kata kunci mendalam, analisis kompetitor, dan pengoptimalan konten untuk audiens target."
      }
    },
    {
      "@type": "Question",
      "name": "Apa perbedaan antara SEO umum dan SEO untuk bisnis di Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO untuk bisnis di Bali lebih terfokus pada optimasi yang relevan untuk pasar lokal. Ini termasuk riset kata kunci yang menargetkan audiens di Bali, serta pengoptimalan Google My Business dan taktik SEO lokal lainnya untuk meningkatkan visibilitas di area tersebut. Teknik ini sangat penting untuk bisnis yang menginginkan pengunjung yang lebih dekat dengan lokasi mereka."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO pada website bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biasanya, hasil dari SEO bisa mulai terlihat dalam waktu 3 hingga 6 bulan, meskipun ini bergantung pada berbagai faktor, termasuk tingkat persaingan industri, kualitas website, dan efektivitas strategi SEO yang diterapkan. Di Bali, jika SEO dilakukan dengan baik, Anda bisa mulai melihat hasil yang lebih cepat, terutama dengan pasar yang lebih fokus."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya untuk menggunakan jasa SEO Bali?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya jasa SEO bervariasi tergantung pada kompleksitas layanan yang dibutuhkan, persaingan di industri Anda, dan ukuran website Anda. Penyedia jasa SEO biasanya menawarkan paket yang dapat disesuaikan dengan anggaran Anda, yang meliputi analisis, optimasi SEO on-page dan off-page, serta pembuatan konten yang relevan dan berkualitas."
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
            <h3>Pertanyaan yang Sering Diajukan tentang SEO di Bali</h3>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="faq-accordion">
                <Accordion preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa itu jasa SEO dan bagaimana cara kerjanya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Jasa SEO adalah layanan yang membantu meningkatkan peringkat website di mesin pencari seperti Google. Proses ini melibatkan berbagai teknik, seperti riset kata kunci, optimasi on-page, dan peningkatan pengalaman pengguna untuk memastikan website Anda lebih mudah ditemukan oleh calon pelanggan yang mencari produk atau layanan terkait.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Mengapa bisnis di Bali membutuhkan jasa SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Bisnis di Bali perlu memanfaatkan SEO untuk memastikan website mereka muncul di hasil pencarian saat pelanggan mencari produk atau layanan di area tersebut. SEO membantu meningkatkan jumlah pengunjung yang relevan, yang berpotensi meningkatkan konversi dan penjualan, khususnya di pasar lokal yang sangat kompetitif.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Bagaimana cara memilih jasa SEO yang tepat untuk bisnis saya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Pilih penyedia jasa SEO yang berpengalaman dalam meningkatkan peringkat website dengan teknik yang sesuai dengan pedoman Google. Mereka harus memiliki portofolio yang dapat dibuktikan dan mampu menawarkan strategi yang terukur, seperti riset kata kunci mendalam, analisis kompetitor, dan pengoptimalan konten untuk audiens target.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa perbedaan antara SEO umum dan SEO untuk bisnis di Bali?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO untuk bisnis di Bali lebih terfokus pada optimasi yang relevan untuk pasar lokal. Ini termasuk riset kata kunci yang menargetkan audiens di Bali, serta pengoptimalan Google My Business dan taktik SEO lokal lainnya untuk meningkatkan visibilitas di area tersebut. Teknik ini sangat penting untuk bisnis yang menginginkan pengunjung yang lebih dekat dengan lokasi mereka.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO pada website bisnis?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biasanya, hasil dari SEO bisa mulai terlihat dalam waktu 3 hingga 6 bulan, meskipun ini bergantung pada berbagai faktor, termasuk tingkat persaingan industri, kualitas website, dan efektivitas strategi SEO yang diterapkan. Di Bali, jika SEO dilakukan dengan baik, Anda bisa mulai melihat hasil yang lebih cepat, terutama dengan pasar yang lebih fokus.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya untuk menggunakan jasa SEO Bali?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya jasa SEO bervariasi tergantung pada kompleksitas layanan yang dibutuhkan, persaingan di industri Anda, dan ukuran website Anda. Penyedia jasa SEO biasanya menawarkan paket yang dapat disesuaikan dengan anggaran Anda, yang meliputi analisis, optimasi SEO on-page dan off-page, serta pembuatan konten yang relevan dan berkualitas.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img src="/images/faq-image.png" alt="FAQ tentang SEO di Bali" />
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
