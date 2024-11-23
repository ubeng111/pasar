import React from "react";
import Head from "next/head";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/Jakarta/MainBanner";
import Features from "../components/Jakarta/Features";
import AboutContent from "../components/Jakarta/AboutContent";
import ServicesCard from "../components/Jakarta/ServicesCard";
import WhyChooseUs from "../components/Jakarta/WhyChooseUs";
import Testimonials from "../components/Common/Testimonials";
import AnalysisFormContent from "../components/Jakarta/AnalysisFormContent";
import PartnerLogos from "../components/Common/PartnerLogos";
import FaqSection from "../components/Jakarta/FaqSection";
import PricingContent from "../components/PricingPlans/PricingContent";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Jasa SEO Jakarta",
    "description": "Layanan SEO terbaik di Jakarta untuk meningkatkan peringkat website Anda di Google.",
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "bestRating": 5,
      "ratingCount": 5122
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": "Layanan Jasa SEO Jakarta",
      "priceCurrency": "IDR",
      "lowPrice": 750000,
      "highPrice": 33600000,
      "offerCount": 1000,
      "url": "https://pasar.web.id/jasa-seo-jakarta"
    }
  };

  return (
    <>
      <Head>
        <title>Jasa SEO Jakarta Profesional Murah Terbaik - Pasar.Web.id</title>
        <meta
          name="description"
          content="Jasa SEO Jakarta dari Pasar.Web.id untuk membantu bisnis Anda mencapai peringkat tertinggi di mesin pencari Google."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jasa SEO Jakarta - Tingkatkan Visibilitas Website Anda di Google" />
        <meta
          property="og:description"
          content="Dapatkan layanan SEO profesional terbaik di Jakarta dari Pasar.Web.id. Gunakan teknik SEO terbaru untuk membawa website Anda ke peringkat teratas di Google."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/logo.png" />
        <meta property="og:url" content="https://pasar.web.id/jasa-seo-jakarta" />
        <link rel="canonical" href="https://pasar.web.id/jasa-seo-jakarta" />
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
