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
      "name": "Apa itu SEO dan mengapa penting bagi bisnis di Bekasi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SEO, atau Optimasi Mesin Pencari, adalah metode untuk meningkatkan posisi website di mesin pencari, mempermudah pelanggan menemukan bisnis Anda. Ini sangat penting bagi perusahaan yang beroperasi di Bekasi, karena dengan penerapan SEO yang tepat, bisnis Anda bisa lebih mudah ditemukan oleh audiens lokal yang mencari produk atau layanan di area Bekasi, baik itu di pusat kota atau kawasan sekitarnya."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana SEO dapat meningkatkan bisnis saya di Bekasi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dengan menggunakan layanan SEO, Anda dapat meningkatkan peringkat website Anda di hasil pencarian mesin pencari. SEO yang efektif memastikan situs web Anda muncul di depan orang-orang yang mencari layanan atau produk yang relevan di area Bekasi, yang bisa meningkatkan jumlah pengunjung dan berpotensi mendongkrak penjualan serta mendapatkan pelanggan baru."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja faktor utama yang mendukung kesuksesan SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beberapa faktor utama dalam SEO yang sukses meliputi pemilihan kata kunci yang relevan, optimasi on-page (di halaman), dan membangun backlink berkualitas. Selain itu, penting untuk memastikan bahwa situs web Anda responsif terhadap perangkat mobile dan memuat dengan cepat. Terutama untuk SEO lokal, yang sangat krusial untuk membuat bisnis Anda mudah ditemukan oleh pelanggan yang berada di sekitar Bekasi."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa lama waktu yang dibutuhkan untuk melihat hasil dari SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hasil dari SEO umumnya bisa mulai terlihat dalam waktu 3 hingga 6 bulan, namun itu tergantung pada banyak faktor, seperti tingkat persaingan industri dan lokasi. Sebagai contoh, jika Anda menjalankan bisnis di Bekasi yang memiliki tingkat persaingan tinggi, perubahan positif bisa lebih cepat terlihat dibandingkan dengan area yang lebih sedikit pesaing."
      }
    },
    {
      "@type": "Question",
      "name": "Berapa biaya untuk layanan SEO di Bekasi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Biaya untuk layanan SEO bervariasi tergantung pada jenis layanan yang dibutuhkan dan tujuan spesifik bisnis Anda. Di Bekasi, biaya ini dipengaruhi oleh tingkat persaingan di pasar lokal. Secara umum, biaya layanan SEO bisa disesuaikan dengan anggaran dan tujuan pemasaran Anda, sehingga fleksibel sesuai dengan skala dan cakupan proyek yang ingin dicapai."
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
                        Apa itu SEO dan mengapa penting bagi bisnis di Bekasi?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        SEO, atau Optimasi Mesin Pencari, adalah metode untuk meningkatkan posisi website di mesin pencari, mempermudah pelanggan menemukan bisnis Anda. Ini sangat penting bagi perusahaan yang beroperasi di Bekasi, karena dengan penerapan SEO yang tepat, bisnis Anda bisa lebih mudah ditemukan oleh audiens lokal yang mencari produk atau layanan di area Bekasi, baik itu di pusat kota atau kawasan sekitarnya.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Bagaimana SEO dapat meningkatkan bisnis saya di Bekasi?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Dengan menggunakan layanan SEO, Anda dapat meningkatkan peringkat website Anda di hasil pencarian mesin pencari. SEO yang efektif memastikan situs web Anda muncul di depan orang-orang yang mencari layanan atau produk yang relevan di area Bekasi, yang bisa meningkatkan jumlah pengunjung dan berpotensi mendongkrak penjualan serta mendapatkan pelanggan baru.
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
                        Beberapa faktor utama dalam SEO yang sukses meliputi pemilihan kata kunci yang relevan, optimasi on-page (di halaman), dan membangun backlink berkualitas. Selain itu, penting untuk memastikan bahwa situs web Anda responsif terhadap perangkat mobile dan memuat dengan cepat. Terutama untuk SEO lokal, yang sangat krusial untuk membuat bisnis Anda mudah ditemukan oleh pelanggan yang berada di sekitar Bekasi.
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
                        Hasil dari SEO umumnya bisa mulai terlihat dalam waktu 3 hingga 6 bulan, namun itu tergantung pada banyak faktor, seperti tingkat persaingan industri dan lokasi. Sebagai contoh, jika Anda menjalankan bisnis di Bekasi yang memiliki tingkat persaingan tinggi, perubahan positif bisa lebih cepat terlihat dibandingkan dengan area yang lebih sedikit pesaing.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Berapa biaya untuk layanan SEO di Bekasi?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Biaya untuk layanan SEO bervariasi tergantung pada jenis layanan yang dibutuhkan dan tujuan spesifik bisnis Anda. Di Bekasi, biaya ini dipengaruhi oleh tingkat persaingan di pasar lokal. Secara umum, biaya layanan SEO bisa disesuaikan dengan anggaran dan tujuan pemasaran Anda, sehingga fleksibel sesuai dengan skala dan cakupan proyek yang ingin dicapai.
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
