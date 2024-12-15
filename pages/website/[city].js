import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities";
import dynamic from 'next/dynamic';

const NavbarTwo = dynamic(() => import("../../components/Website/NavbarTwo"));
const MainBanner = dynamic(() => import("../../components/Website/MainBanner"));
const ServicesCard = dynamic(() => import("../../components/Website/ServicesCard"));
const ProjectsCard = dynamic(() => import("../../components/Website/ProjectsCard"));
const WhyChooseUs = dynamic(() => import("../../components/Website/WhyChooseUs"));
const PricingContent = dynamic(() => import("../../components/Website/PricingContent"));
const AnalysisFormContent = dynamic(() => import("../../components/Website/AnalysisFormContent"));
const FaqSection = dynamic(() => import("../../components/Website/FaqSection"));
const Footer = dynamic(() => import("../../components/Website/Footer"));

const sanitizeCityName = (cityName) => {
  return cityName
    .replace(/<!--.*?-->/g, '')
    .replace(/&.*;/g, '')
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim();
};

const Index = ({ city }) => {
  const router = useRouter();
  const currentCity = cities.find((c) => c.slug === city);
  const sanitizedCityName = currentCity ? sanitizeCityName(currentCity.name) : '';

  const [status, setStatus] = useState(null);

  if (!currentCity) {
    return (
      <div>
        <h1>City Not Found</h1>
        <p>The city you requested could not be found.</p>
      </div>
    );
  }

  // Combined JSON-LD schema for WebPage, Local Business, and Product
  const combinedSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "description": `Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern dan fungsional untuk membangun website bisnis Anda.`,
    "url": `https://pasar.web.id/website-${currentCity.slug}`,
    "image": "https://pasar.web.id/images/logo.png",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
      "telephone": "+62 898 6871 468",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Contoh Alamat No. 123",
        "addressLocality": sanitizedCityName,
        "addressRegion": "ID",
        "postalCode": "12345",
        "addressCountry": "ID"
      },
      "url": `https://pasar.web.id/website-${currentCity.slug}`,
      "priceRange": "IDR 431,000 - IDR 9,000,000",
      "sameAs": [
        "https://www.facebook.com/pasarwebid",
        "https://www.instagram.com/pasarwebid"
      ],
      "product": {
        "@type": "Product",
        "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
        "description": `Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern dan fungsional untuk membangun website bisnis Anda.`,
        "brand": {
          "@type": "Brand",
          "name": "Pasar.Web.id"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 5,
          "bestRating": 5,
          "ratingCount": 2566
        },
        "offers": {
          "@type": "AggregateOffer",
          "name": `Layanan Pembuatan Website ${sanitizedCityName}`,
          "priceCurrency": "IDR",
          "lowPrice": 431000,
          "highPrice": 9000000,
          "offerCount": 1000,
          "url": `https://pasar.web.id/website-${currentCity.slug}`,
          "priceValidUntil": "2025-12-31"
        },
        "productID": "website-service-id",
        "image": "https://pasar.web.id/images/logo.png"
      }
    }
  };

  useEffect(() => {
    const submitToIndexingAPI = async () => {
      try {
        const res = await fetch('/api/indexing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: `https://pasar.web.id/website-${currentCity.slug}` }),
        });
        const data = await res.json();
        console.log('Indexing Response:', data);
      } catch (error) {
        console.error('Error submitting URL:', error);
      }
    };
    submitToIndexingAPI();
  }, [currentCity.slug]);

  return (
    <>
      <Head>
        <title>Jasa Pembuatan Website {sanitizedCityName} | Desain Modern & Fungsional</title>
        <meta name="description" content={`Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern, fungsional, harga mulai 400 ribuan. Hubungi Pasar.Web.id sekarang!`} />
        <link rel="canonical" href={`https://pasar.web.id/website-${currentCity.slug}`} />
        
        {/* Combined JSON-LD Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }} />
      </Head>

      {/* Komponen yang dimuat dinamis */}
      <NavbarTwo />
      <MainBanner city={sanitizedCityName} />
      <ServicesCard city={sanitizedCityName} />
      <ProjectsCard />
      <WhyChooseUs city={sanitizedCityName} />
      <PricingContent city={sanitizedCityName} />
      <AnalysisFormContent city={sanitizedCityName} />
      <FaqSection city={sanitizedCityName} />
      <Footer />

      <div>
        <p>{status}</p>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { city } = params;
  const currentCity = cities.find((c) => c.slug === city);

  if (!currentCity) {
    return { notFound: true }; // Mengembalikan halaman 404 jika kota tidak ditemukan
  }

  return {
    props: { city: currentCity.slug },
  };
}

export default Index;
