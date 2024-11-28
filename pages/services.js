import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet untuk mengatur title dan meta
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ServicesContent from "../components/Common/ServicesContent";
import WhyChooseUs from "../components/Common/WhyChooseUs";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import PartnerLogos from "../components/Common/PartnerLogos";
import Footer from "../components/Layouts/Footer";

const Services = () => {
  return (
    <>
      {/* Menambahkan Helmet untuk mengatur title dan meta description */}
      <Helmet>
        <title>Jasa SEO dan Pembuatan Website | Pasar.web.id</title> {/* Ganti dengan nama perusahaan Anda */}
        <meta
          name="description"
          content="Kami menawarkan jasa SEO profesional dan pembuatan website berkualitas untuk membantu bisnis Anda tumbuh secara online. Dapatkan solusi digital terbaik dengan layanan terkemuka kami."
        />
      </Helmet>

      <NavbarTwo />

      <PageBanner
        pageTitle="Services"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Services"
        breadcrumbUrl="/"
      />

      <ServicesContent />

      <WhyChooseUs />

      <SubscribeStyleTwo />

      <div className="ptb-100">
        <PartnerLogos />
      </div>

      <Footer />
    </>
  );
};

export default Services;
