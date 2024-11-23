import React from "react";
import Head from "next/head"; // Import Head dari Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bali/MainBanner"; // Ganti Surabaya dengan Bali
import Features from "../components/Bali/Features"; // Ganti Surabaya dengan Bali
import AboutContent from "../components/Bali/AboutContent"; // Ganti Surabaya dengan Bali
import ServicesCard from "../components/Bali/ServicesCard"; // Ganti Surabaya dengan Bali
import WhyChooseUs from "../components/Bali/WhyChooseUs"; // Ganti Surabaya dengan Bali
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bali/AnalysisFormContent"; // Ganti Surabaya dengan Bali
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bali/FaqSection"; // Ganti Surabaya dengan Bali
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  // Skema JSON-LD untuk Aggregate Rating
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Mengganti Service dengan Product
    "name": "Jasa SEO Bali", // Nama layanan
    "description": "Layanan SEO terbaik di Bali untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5, // Nilai rating (angka, bukan string)
      "bestRating": 5,  // Nilai rating terbaik (angka, bukan string)
      "ratingCount": 4172 // Jumlah rating (angka, bukan string)
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Bali",
      "priceCurrency": "IDR",
      "lowPrice": 750000, // Harga terendah (angka, bukan string)
      "highPrice": 33600000, // Harga tertinggi (angka, bukan string)
      "offerCount": 1000, // Jumlah tawaran yang tersedia (angka, bukan string)
      "url": "https://pasar.web.id/jasa-seo-bali" // URL penawaran
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Bali Profesional Murah Terbaik - Pasar.Web.id</title> {/* Ganti Surabaya dengan Bali */}
        <meta
          name="description"
          content="Jasa SEO Bali dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Ganti Surabaya dengan Bali
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bali - Tingkatkan Visibilitas Website Anda di Google" /> {/* Ganti Surabaya dengan Bali */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Bali dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Ganti Surabaya dengan Bali
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bali" /> {/* Ganti Surabaya dengan Bali */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bali" /> {/* Ganti Surabaya dengan Bali */}
      </Head>

      {/* Schema.org untuk Aggregate Rating menggunakan dangerouslySetInnerHTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

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
