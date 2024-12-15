import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities";
import dynamic from 'next/dynamic';

const NavbarTwo = dynamic(() => import("../../components/Website/NavbarTwo"));
const MainBanner = dynamic(() => import("../../components/Website/MainBanner"));
const ProductCard = dynamic(() => import("../../components/Website/ServicesCard"));  // Renaming to ProductCard
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

  // JSON-LD schema untuk Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "image": "https://pasar.web.id/images/logo.png",
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
    "priceRange": "IDR 431,000 - IDR 9,000,000", // Rentang harga
    "sameAs": [
      "https://www.facebook.com/pasarwebid",
      "https://www.instagram.com/pasarwebid"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "bestRating": 5,
      "ratingCount": 4546
    }
  };

  // JSON-LD schema untuk Product (menampilkan produk)
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "productID": "website-service-id",  // You can define your product ID or SKU here
    "category": "Web Design & Development",
    "manufacturer": {  // Replaced provider with manufacturer
      "@type": "Organization",
      "name": "Pasar.Web.id",
      "url": `https://pasar.web.id/website-${currentCity.slug}`,
      "logo": {
        "@type": "ImageObject",
        "url": "https://pasar.web.id/images/logo.png"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "431000",  // Update as per the actual price
      "url": `https://pasar.web.id/website-${currentCity.slug}`,
      "priceValidUntil": "2025-12-31"
    },
    "image": "https://pasar.web.id/images/logo.png",
    "description": `Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern dan fungsional untuk membangun website bisnis Anda.`
  };

  // JSON-LD schema untuk Open Graph (Product)
  const openGraphSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `https://pasar.web.id/website-${currentCity.slug}`,
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "description": `Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern, fungsional, harga mulai 400 ribuan. Hubungi Pasar.Web.id sekarang!`,
    "image": "https://pasar.web.id/images/logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "Pasar.Web.id",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pasar.web.id/images/logo.png"
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
        
        {/* JSON-LD Structured Data for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(openGraphSchema) }} />
      </Head>

      {/* Komponen yang dimuat dinamis */}
      <NavbarTwo />
      <MainBanner city={sanitizedCityName} />
      <ProductCard city={sanitizedCityName} />  {/* Changed to ProductCard */}
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
