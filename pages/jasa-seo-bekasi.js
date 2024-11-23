import React from "react";
import Head from "next/head"; // Import Head from Next.js
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Bekasi/MainBanner"; // Replaced Bogor with Bekasi
import Features from "../components/Bekasi/Features"; // Replaced Bogor with Bekasi
import AboutContent from "../components/Bekasi/AboutContent"; // Replaced Bogor with Bekasi
import ServicesCard from "../components/Bekasi/ServicesCard"; // Replaced Bogor with Bekasi
import WhyChooseUs from "../components/Bekasi/WhyChooseUs"; // Replaced Bogor with Bekasi
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Bekasi/AnalysisFormContent"; // Replaced Bogor with Bekasi
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Bekasi/FaqSection"; // Replaced Bogor with Bekasi
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product", // Changed from Service to Product
    "name": "Jasa SEO Bekasi", // Updated to Bekasi
    "description": "Layanan SEO terbaik di Bekasi untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5, // Rating value (numeric, not string)
      "bestRating": 5,  // Best rating value (e.g., 5)
      "ratingCount": 2566 // Number of ratings (numeric, not string)
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Bekasi", // Updated to Bekasi
      "priceCurrency": "IDR",
      "lowPrice": 750000, // Lowest price (numeric, not string)
      "highPrice": 33600000, // Highest price (numeric, not string)
      "offerCount": 1000, // Available offers (numeric, not string)
      "url": "https://pasar.web.id/jasa-seo-bekasi" // Updated to Bekasi
    }
  };

  return (
    <>
      {/* Adding Title and Meta Description */}
      <Head>
        <title>Jasa SEO Bekasi Profesional Terbaik - Pasar.Web.id</title> {/* Updated title */}
        <meta
          name="description"
          content="Jasa SEO Bekasi dari Pasar.Web.id untuk membantu bisnis Anda meraih peringkat teratas di mesin pencari Google. Meningkatkan visibilitas, trafik, dan penjualan online Anda." // Updated description
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Bekasi - Maksimalkan Visibilitas Website Anda" /> {/* Updated og:title */}
        <meta
          property="og:description"
          content="Gunakan layanan SEO terbaik di Bekasi dari Pasar.Web.id. Terapkan teknik SEO mutakhir untuk membawa website Anda mendominasi mesin pencari Google." // Updated og:description
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" /> {/* Replace with the correct image URL */}
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-bekasi" /> {/* Updated og:url */}
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-bekasi" /> {/* Updated canonical link */}

        {/* Schema.org for Aggregate Rating */}
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
