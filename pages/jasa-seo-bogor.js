import React from "react";
import Head from "next/head"; // Import Head dari Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bogor/MainBanner"; // Ganti Bandung dengan Bogor
import Features from "../components/Bogor/Features"; // Ganti Bandung dengan Bogor
import AboutContent from "../components/Bogor/AboutContent"; // Ganti Bandung dengan Bogor
import ServicesCard from "../components/Bogor/ServicesCard"; // Ganti Bandung dengan Bogor
import WhyChooseUs from "../components/Bogor/WhyChooseUs"; // Ganti Bandung dengan Bogor
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bogor/AnalysisFormContent"; // Ganti Bandung dengan Bogor
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bogor/FaqSection"; // Ganti Bandung dengan Bogor
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Mengganti Service dengan Product
    "name": "Jasa SEO Bogor", // Nama layanan
    "description": "Layanan SEO terbaik di Bogor untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5, // Nilai rating (angka, bukan string)
      "bestRating": 5,  // Nilai rating terbaik (misalnya 5)
      "ratingCount": 2566 // Jumlah rating (angka, bukan string)
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Bogor",
      "priceCurrency": "IDR",
      "lowPrice": 750000, // Harga terendah (angka, bukan string)
      "highPrice": 33600000, // Harga tertinggi (angka, bukan string)
      "offerCount": 1000, // Jumlah tawaran yang tersedia (angka, bukan string)
      "url": "https://pasar.web.id/jasa-seo-bogor" // URL penawaran
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
        <title>Jasa SEO Bogor Profesional Murah Terbaik - Pasar.Web.id</title> {/* Ganti Bandung dengan Bogor */}
        <meta
          name="description"
          content="Jasa SEO Bogor dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Ganti Bandung dengan Bogor
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bogor - Tingkatkan Visibilitas Website Anda di Google" /> {/* Ganti Bandung dengan Bogor */}
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Bogor dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google." // Ganti Bandung dengan Bogor
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bogor" /> {/* Ganti Bandung dengan Bogor */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bogor" /> {/* Ganti Bandung dengan Bogor */}

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
