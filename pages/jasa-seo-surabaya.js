import React from "react";
import Head from "next/head"; // Import Head dari Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Surabaya/MainBanner"; // Ganti Jakarta dengan Surabaya
import Features from "../components/Surabaya/Features"; // Ganti Jakarta dengan Surabaya
import AboutContent from "../components/Surabaya/AboutContent"; // Ganti Jakarta dengan Surabaya
import ServicesCard from "../components/Surabaya/ServicesCard"; // Ganti Jakarta dengan Surabaya
import WhyChooseUs from "../components/Surabaya/WhyChooseUs"; // Ganti Jakarta dengan Surabaya
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Surabaya/AnalysisFormContent"; // Ganti Jakarta dengan Surabaya
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Surabaya/FaqSection"; // Ganti Jakarta dengan Surabaya
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Mengganti Service dengan Product
    "name": "Jasa SEO Surabaya", // Nama layanan tetap Surabaya
    "description": "Layanan SEO terbaik di Surabaya untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5, // Nilai rating sebagai angka bukan string
      "bestRating": 5,  // Nilai rating terbaik (misalnya 5)
      "ratingCount": 4172 // Jumlah rating, angka bukan string
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Surabaya", // Nama layanan tetap Surabaya
      "priceCurrency": "IDR",
      "lowPrice": 3399000, // Harga terendah, angka bukan string
      "highPrice": 10199000, // Harga tertinggi, angka bukan string
      "offerCount": 1000, // Jumlah tawaran yang tersedia, angka bukan string
      "url": "https://pasar.web.id/jasa-seo-surabaya" // URL penawaran tetap Surabaya
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Surabaya Profesional Murah Terbaik - Pasar.Web.id</title> {/* Ganti Jakarta dengan Surabaya */}
        <meta
          name="description"
          content="Jasa SEO Surabaya dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Ganti Jakarta dengan Surabaya
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Surabaya - Tingkatkan Visibilitas Website Anda di Google" /> {/* Ganti Jakarta dengan Surabaya */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Surabaya dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Ganti Jakarta dengan Surabaya
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-surabaya" /> {/* Ganti Jakarta dengan Surabaya */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-surabaya" /> {/* Ganti Jakarta dengan Surabaya */}

        {/* Schema.org untuk Aggregate Rating */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </Head>

      <NavbarTwo />
      <MainBanner />
      <Features />
      <AboutContent />
      <ServicesCard />
      <WhyChooseUs />
      <AnalysisFormContent />
      <PricingContent />
      <Testimonials />
      <FaqSection />
      <div className="pb-100">
        <PartnerLogos />
      </div>
      <Footer />
    </>
  );
};

export default Index;
