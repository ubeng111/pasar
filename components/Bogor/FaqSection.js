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
      "name": "Apa itu SEO dan mengapa penting bagi bisnis di Bogor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO, atau Optimasi Mesin Pencari, adalah teknik untuk meningkatkan peringkat situs web agar lebih mudah ditemukan oleh calon pelanggan di mesin pencari seperti Google. Ini penting bagi bisnis, terutama di kota-kota besar seperti Bogor, karena dengan SEO yang tepat, bisnis Anda bisa lebih mudah ditemukan oleh pelanggan lokal yang mencari produk atau layanan yang relevan di area Bogor, mulai dari pusat kota hingga daerah sekitarnya."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana SEO dapat meningkatkan bisnis saya di Bogor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Layanan SEO membantu bisnis Anda dengan meningkatkan posisi website di halaman hasil pencarian mesin pencari. Dengan SEO yang baik, situs web Anda akan lebih mudah diakses oleh orang-orang yang mencari layanan atau produk yang relevan dengan bisnis Anda di area Bogor. Hal ini akan meningkatkan jumlah pengunjung ke situs Anda dan berpotensi meningkatkan penjualan serta pelanggan."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja faktor utama yang mendukung kesuksesan SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beberapa faktor kunci dalam SEO yang efektif mencakup pemilihan kata kunci yang tepat, optimasi pada halaman situs (SEO on-page), serta mendapatkan backlink berkualitas. Selain itu, penting juga untuk memastikan bahwa situs web responsif terhadap perangkat mobile dan memuat dengan cepat. Terlebih lagi, SEO lokal sangat berperan dalam memastikan bahwa bisnis Anda mudah ditemukan oleh pelanggan yang berada di sekitar Bogor."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil dari SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Waktu yang diperlukan untuk melihat hasil dari SEO bervariasi tergantung pada banyak faktor, seperti tingkat persaingan di industri dan lokasi. Umumnya, bisnis dapat mulai melihat perubahan positif dalam 3 hingga 6 bulan. Misalnya, jika Anda menjalankan bisnis di daerah Bogor yang sangat kompetitif, hasilnya mungkin akan lebih cepat terlihat dibandingkan dengan lokasi yang memiliki sedikit pesaing."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya untuk layanan SEO di Bogor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya untuk layanan SEO sangat bergantung pada jenis layanan yang diberikan dan kebutuhan khusus bisnis Anda. Untuk bisnis yang beroperasi di daerah Bogor, biaya ini juga dipengaruhi oleh seberapa kompetitif pasar lokalnya. Umumnya, biaya dapat disesuaikan dengan tujuan pemasaran dan anggaran yang tersedia untuk SEO, sehingga bisa sangat fleksibel tergantung pada skala dan cakupan proyek."
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
                        Apa itu SEO dan mengapa penting bagi bisnis di Bogor?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO, atau Optimasi Mesin Pencari, adalah teknik untuk meningkatkan peringkat situs web agar lebih mudah ditemukan oleh calon pelanggan di mesin pencari seperti Google. Ini penting bagi bisnis, terutama di kota-kota besar seperti Bogor, karena dengan SEO yang tepat, bisnis Anda bisa lebih mudah ditemukan oleh pelanggan lokal yang mencari produk atau layanan yang relevan di area Bogor, mulai dari pusat kota hingga daerah sekitarnya.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Bagaimana SEO dapat meningkatkan bisnis saya di Bogor?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Layanan SEO membantu bisnis Anda dengan meningkatkan posisi website di halaman hasil pencarian mesin pencari. Dengan SEO yang baik, situs web Anda akan lebih mudah diakses oleh orang-orang yang mencari layanan atau produk yang relevan dengan bisnis Anda di area Bogor. Hal ini akan meningkatkan jumlah pengunjung ke situs Anda dan berpotensi meningkatkan penjualan serta pelanggan.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Apa saja faktor utama yang mendukung kesuksesan SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Beberapa faktor kunci dalam SEO yang efektif mencakup pemilihan kata kunci yang tepat, optimasi pada halaman situs (SEO on-page), serta mendapatkan backlink berkualitas. Selain itu, penting juga untuk memastikan bahwa situs web responsif terhadap perangkat mobile dan memuat dengan cepat. Terlebih lagi, SEO lokal sangat berperan dalam memastikan bahwa bisnis Anda mudah ditemukan oleh pelanggan yang berada di sekitar Bogor.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa lama waktu yang dibutuhkan untuk melihat hasil dari SEO?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Waktu yang diperlukan untuk melihat hasil dari SEO bervariasi tergantung pada banyak faktor, seperti tingkat persaingan di industri dan lokasi. Umumnya, bisnis dapat mulai melihat perubahan positif dalam 3 hingga 6 bulan. Misalnya, jika Anda menjalankan bisnis di daerah Bogor yang sangat kompetitif, hasilnya mungkin akan lebih cepat terlihat dibandingkan dengan lokasi yang memiliki sedikit pesaing.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya untuk layanan SEO di Bogor?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya untuk layanan SEO sangat bergantung pada jenis layanan yang diberikan dan kebutuhan khusus bisnis Anda. Untuk bisnis yang beroperasi di daerah Bogor, biaya ini juga dipengaruhi oleh seberapa kompetitif pasar lokalnya. Umumnya, biaya dapat disesuaikan dengan tujuan pemasaran dan anggaran yang tersedia untuk SEO, sehingga bisa sangat fleksibel tergantung pada skala dan cakupan proyek.
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
