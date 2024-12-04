import React, { useEffect } from "react";
import NavbarTwo from "../components/Website/NavbarTwo";
import PageBanner from "../components/Common/PageBanner";
import ContactForm from "../components/Contact/ContactForm";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import Footer from "../components/Layouts/Footer";

const Contact = () => {
  useEffect(() => {
    // Mengatur title menggunakan document.title
    document.title = "Contact Us | pasar.web.id";
    
    // Mengatur meta description langsung melalui JavaScript
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami."
      );
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = "description";
      newMeta.content = "Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami.";
      document.head.appendChild(newMeta);
    }

    // Mengatur meta tags lainnya jika perlu
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Contact Us | pasar.web.id");
    } else {
      const ogMeta = document.createElement('meta');
      ogMeta.setAttribute("property", "og:title");
      ogMeta.setAttribute("content", "Contact Us | pasar.web.id");
      document.head.appendChild(ogMeta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami."
      );
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", "Contact Us | pasar.web.id");
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Hubungi kami untuk pertanyaan, dukungan, atau informasi lebih lanjut. Kami siap membantu Anda dengan layanan terbaik kami."
      );
    }
  }, []);

  return (
    <>
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
