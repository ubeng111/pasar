import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet untuk mengatur title dan meta
import NavbarTwo from "../components/Layouts/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  return (
    <>
      {/* Menambahkan Helmet untuk mengatur title dan meta description */}
      <Helmet>
  <meta name="description" content="Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami." />
  <meta property="og:title" content="Contact Us | pasar.web.id" />
  <meta property="og:description" content="Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami." />
  <meta property="og:image" content="https://pasar.web.id/images/contact-og-image.jpg" />
  <meta name="twitter:title" content="Contact Us | pasar.web.id" />
  <meta name="twitter:description" content="Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami." />
  <meta name="twitter:image" content="https://pasar.web.id/images/contact-twitter-image.jpg" />
</Helmet>


      <NavbarTwo />

      <PageBanner
        pageTitle="Contact"
        breadcrumbTextOne="Home"
        breadcrumbTextTwo="Contact Us"
        breadcrumbUrl="/"
      />

      <ContactForm />

      <SubscribeStyleTwo />

      <Footer />
    </>
  );
};

export default Contact;
