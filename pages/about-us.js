import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet untuk mengatur title dan meta
import NavbarTwo from "../components/Website/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import AboutContent from "../components/AboutUs/AboutContent";
import FeaturesArea from "../components/HomeTwo/FeaturesArea";
import ServicesContent from "../components/Common/ServicesContent";
import PricingContent from "../components/PricingPlans/PricingContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

const AboutUs = () => {
  return (
    <>
      {/* Menambahkan Helmet untuk mengatur title dan meta description */}
      <Helmet>
        <title>Tentang Kami | Pasar.web.id</title>  {/* Ganti dengan nama perusahaan Anda */}
        <meta
          name="description"
          content="Pelajari lebih lanjut tentang perusahaan kami, misi, visi, dan nilai-nilai yang kami anut untuk memberikan solusi terbaik bagi pelanggan kami."
        />
      </Helmet>

      <NavbarTwo />

      <PageBanner
        pageTitle="Tentang Kami"
        breadcrumbTextOne="Beranda"
        breadcrumbTextTwo="Tentang Kami"
        breadcrumbUrl="/"
      />

      <AboutContent />

      <FeaturesArea />

      <ServicesContent />

      <PricingContent />

      <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
