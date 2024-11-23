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
      "name": "Apa itu SEO dan mengapa penting untuk bisnis di Cianjur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO (Search Engine Optimization) adalah proses untuk mengoptimalkan sebuah website agar mendapatkan peringkat lebih tinggi di hasil pencarian mesin pencari. Ini penting untuk bisnis di Cianjur agar meningkatkan visibilitas online, menarik pelanggan lokal, dan mengembangkan bisnis."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana layanan SEO dapat membantu bisnis saya di Cianjur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Layanan SEO dapat membantu bisnis di Cianjur dengan meningkatkan peringkat website di mesin pencari, menambah trafik organik, dan meningkatkan pengalaman pengguna. SEO lokal memastikan bisnis Anda terlihat oleh orang-orang yang mencari layanan relevan di area Anda."
      }
    },
    {
      "@type": "Question",
      "name": "Apa faktor kunci untuk kesuksesan SEO di Cianjur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faktor kunci untuk kesuksesan SEO di Cianjur termasuk optimasi kata kunci, daftar bisnis lokal, SEO on-page, backlink berkualitas, dan responsivitas terhadap perangkat mobile. Website yang teroptimasi dengan baik dapat membantu menarik lebih banyak pelanggan lokal dan meningkatkan penjualan."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO bagi bisnis di Cianjur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hasil SEO dapat bervariasi, tetapi biasanya bisnis di Cianjur dapat mulai melihat perbaikan yang signifikan dalam waktu 3-6 bulan. Hal ini tergantung pada tingkat persaingan di industri dan efektivitas strategi SEO yang diterapkan."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya layanan SEO untuk bisnis di Cianjur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya layanan SEO di Cianjur bervariasi tergantung pada ruang lingkup pekerjaan, tingkat persaingan di industri Anda, dan tingkat layanan yang diberikan. Sebaiknya Anda meminta penawaran harga yang disesuaikan dengan kebutuhan bisnis Anda."
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
                        Apa itu SEO dan mengapa penting untuk bisnis di Cianjur?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO (Search Engine Optimization) adalah proses untuk mengoptimalkan sebuah website agar mendapatkan peringkat lebih tinggi di hasil pencarian mesin pencari. Ini penting untuk bisnis di Cianjur agar meningkatkan visibilitas online, menarik pelanggan lokal, dan mengembangkan bisnis.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Bagaimana layanan SEO dapat membantu bisnis saya di Cianjur?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Layanan SEO dapat membantu bisnis di Cianjur dengan meningkatkan peringkat website di mesin pencari, menambah trafik organik, dan meningkatkan pengalaman pengguna. SEO lokal memastikan bisnis Anda terlihat oleh orang-orang yang mencari layanan relevan di area Anda.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa faktor kunci untuk kesuksesan SEO di Cianjur?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Faktor kunci untuk kesuksesan SEO di Cianjur termasuk optimasi kata kunci, daftar bisnis lokal, SEO on-page, backlink berkualitas, dan responsivitas terhadap perangkat mobile. Website yang teroptimasi dengan baik dapat membantu menarik lebih banyak pelanggan lokal dan meningkatkan penjualan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa lama waktu yang dibutuhkan untuk melihat hasil SEO bagi bisnis di Cianjur?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Hasil SEO dapat bervariasi, tetapi biasanya bisnis di Cianjur dapat mulai melihat perbaikan yang signifikan dalam waktu 3-6 bulan. Hal ini tergantung pada tingkat persaingan di industri dan efektivitas strategi SEO yang diterapkan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya layanan SEO untuk bisnis di Cianjur?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya layanan SEO di Cianjur bervariasi tergantung pada ruang lingkup pekerjaan, tingkat persaingan di industri Anda, dan tingkat layanan yang diberikan. Sebaiknya Anda meminta penawaran harga yang disesuaikan dengan kebutuhan bisnis Anda.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="faq-image">
                <img src="/images/faq-image.png" alt="image" />
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
