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
        "text": "Jasa SEO adalah layanan yang membantu meningkatkan visibilitas website di mesin pencari seperti Google. Proses ini melibatkan berbagai teknik, mulai dari riset kata kunci hingga optimasi teknis dan pembuatan konten berkualitas. SEO bertujuan untuk memastikan website Anda mudah ditemukan oleh calon pelanggan yang mencari produk atau layanan yang relevan."
      }
    },
    {
      "@type": "Question",
      "name": "Mengapa bisnis di Surabaya membutuhkan jasa SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bisnis di Surabaya perlu memanfaatkan SEO untuk memastikan bahwa mereka muncul di hasil pencarian ketika calon pelanggan mencari produk atau layanan di area tersebut. SEO membantu meningkatkan jumlah pengunjung yang datang ke website, yang berpotensi meningkatkan penjualan dan visibilitas bisnis Anda di pasar yang sangat kompetitif."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara memilih jasa SEO yang tepat untuk bisnis saya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pilih penyedia jasa SEO yang memiliki pengalaman dalam meningkatkan peringkat website di mesin pencari, serta mengerti cara membuat konten yang relevan dan berkualitas. Pastikan mereka menggunakan teknik SEO yang sesuai dengan pedoman Google dan dapat menunjukkan hasil yang telah dicapai dengan klien sebelumnya."
      }
    },
    {
      "@type": "Question",
      "name": "Apa perbedaan antara SEO biasa dan SEO untuk bisnis di Surabaya?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Perbedaan utama terletak pada pengoptimalan website untuk audiens yang lebih spesifik. Untuk bisnis di Surabaya, strategi SEO lebih difokuskan pada kata kunci yang relevan dengan pasar setempat dan membuat website lebih mudah ditemukan oleh calon pelanggan yang berada di kota ini. Selain itu, teknik yang digunakan akan lebih menyesuaikan dengan kebutuhan pasar Surabaya."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO pada website bisnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hasil SEO biasanya mulai terlihat dalam 3 hingga 6 bulan, tergantung pada tingkat persaingan industri dan kualitas strategi yang diterapkan. Di kota besar seperti Surabaya, jika strategi SEO dilakukan dengan baik, hasil bisa lebih cepat terlihat."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya untuk menggunakan jasa SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya jasa SEO bervariasi tergantung pada berbagai faktor, termasuk tingkat persaingan di industri, ukuran bisnis, dan jenis layanan yang dibutuhkan. Biaya dapat disesuaikan dengan anggaran dan tujuan bisnis Anda, dengan harga yang biasanya mencakup analisis, optimasi on-page dan off-page, serta pembuatan konten berkualitas."
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
            <h3>Pertanyaan yang Sering Diajukan tentang SEO di Surabaya</h3>
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
                        Jasa SEO adalah layanan yang membantu meningkatkan visibilitas website di mesin pencari seperti Google. Proses ini melibatkan berbagai teknik, mulai dari riset kata kunci hingga optimasi teknis dan pembuatan konten berkualitas. SEO bertujuan untuk memastikan website Anda mudah ditemukan oleh calon pelanggan yang mencari produk atau layanan yang relevan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Mengapa bisnis di Surabaya membutuhkan jasa SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Bisnis online perlu memanfaatkan SEO untuk memastikan bahwa mereka muncul di hasil pencarian ketika calon pelanggan mencari produk atau layanan di area tersebut. SEO membantu meningkatkan jumlah pengunjung yang datang ke website, yang berpotensi meningkatkan penjualan dan visibilitas bisnis Anda di pasar yang sangat kompetitif.
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
                        Pilih penyedia jasa SEO yang memiliki pengalaman dalam meningkatkan peringkat website di mesin pencari, serta mengerti cara membuat konten yang relevan dan berkualitas. Pastikan mereka menggunakan teknik SEO yang sesuai dengan pedoman Google dan dapat menunjukkan hasil yang telah dicapai dengan klien sebelumnya.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa perbedaan antara SEO biasa dan SEO untuk bisnis di Surabaya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Perbedaan utama terletak pada pengoptimalan website untuk audiens yang lebih spesifik. Untuk bisnis di Surabaya, strategi SEO lebih difokuskan pada kata kunci yang relevan dengan pasar setempat dan membuat website lebih mudah ditemukan oleh calon pelanggan yang berada di kota ini. Selain itu, teknik yang digunakan akan lebih menyesuaikan dengan kebutuhan pasar Surabaya.
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
                        Hasil SEO biasanya mulai terlihat dalam 3 hingga 6 bulan, tergantung pada tingkat persaingan industri dan kualitas strategi yang diterapkan. Di kota besar seperti Surabaya, jika strategi SEO dilakukan dengan baik, hasil bisa lebih cepat terlihat.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya untuk menggunakan jasa SEO Surabaya?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya jasa SEO bervariasi tergantung pada berbagai faktor, termasuk tingkat persaingan di industri, ukuran bisnis, dan jenis layanan yang dibutuhkan. Biaya dapat disesuaikan dengan anggaran dan tujuan bisnis Anda, dengan harga yang biasanya mencakup analisis, optimasi on-page dan off-page, serta pembuatan konten berkualitas.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img src="/images/faq-image.png" alt="FAQ tentang SEO di Surabaya" />
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
