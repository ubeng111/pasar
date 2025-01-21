import React from "react";
import Head from "next/head"; // Impor Head dari Next.js
import NavbarTwo from "../components/Website/NavbarTwo";
import MainBanner from "../components/HomeThree/MainBanner";
import Features from "../components/HomeThree/Features";
import AboutContent from "../components/HomeThree/AboutContent";
import ServicesCard from "../components/HomeThree/ServicesCard";
import WhyChooseUs from "../components/HomeThree/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/HomeThree/AnalysisFormContent";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/HomeThree/FaqSection";
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Mengganti Service dengan Product
    "name": "Jasa SEO Profesional Indonesia", // Nama layanan
    "description": "Layanan SEO terbaik di Indonesia untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5", // Nilai rating
      "bestRating": "5",  // Nilai rating terbaik (misalnya 5)
      "ratingCount": "7189" // Jumlah rating
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Profesional Indonesia",
      "priceCurrency": "IDR",
      "lowPrice": "750000", // Harga terendah
      "highPrice": "33600000", // Harga tertinggi
      "offerCount": "1000", // Jumlah tawaran yang tersedia
      "url": "https://pasar.web.id", // URL penawaran
    }
  };

  return (
    <>
      {/* Menambahkan Title dan Meta Description */}
      <Head>
      <meta name="robots" content="index, follow" /> {/* Menambahkan tag robots */}
        <meta name="google-site-verification" content="YZ0Oul8XC-Linh3djeSvZODJEnEA5_8g68V8SKnLvdI" />
        <title>Jasa SEO Profesional Terbaik di Indonesia - Pasar.Web.id</title>
        <meta
          name="description"
          content="Layanan SEO terbaik di Indonesia untuk meningkatkan peringkat website Anda di Google. Solusi optimal untuk bisnis Anda."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Profesional - Meningkatkan Peringkat Website Anda" />
        <meta
          property="og:description"
          content="Dapatkan layanan SEO terbaik di Indonesia. Tingkatkan peringkat website Anda di Google dengan teknik SEO terbaru."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Ganti dengan URL gambar yang sesuai */}
        <meta property="og:url" content="https://pasar.web.id" />
        <link rel="canonical" href="https://pasar.web.id" />

        {/* Schema.org untuk Aggregate Rating menggunakan dangerouslySetInnerHTML */}
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
