import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities";
import dynamic from 'next/dynamic';

// Dynamic imports untuk komponen
const NavbarTwo = dynamic(() => import("../../components/Website/NavbarTwo"));
const MainBanner = dynamic(() => import("../../components/Cianjur/MainBanner"));
const Features = dynamic(() => import("../../components/Cianjur/Features"));
const AboutContent = dynamic(() => import("../../components/Cianjur/AboutContent"));
const ServicesCard = dynamic(() => import("../../components/Cianjur/ServicesCard"));
const WhyChooseUs = dynamic(() => import("../../components/Cianjur/WhyChooseUs"));
const PricingContent = dynamic(() => import("../../components/Cianjur/PricingContent"));
const AnalysisFormContent = dynamic(() => import("../../components/Cianjur/AnalysisFormContent"));
const FaqSection = dynamic(() => import("../../components/Cianjur/FaqSection"));
const Footer = dynamic(() => import("../../components/Cianjur/Footer"));

// Constants
const SITE_NAME = "Pasar.Web.id";
const SITE_URL = "https://pasar.web.id";

// Sanitasi nama kota
const sanitizeCityName = (name) => {
  return name
    .replace(/<!--.*?-->/g, '')   // Menghapus komentar HTML
    .replace(/&.*;/g, '')         // Menghapus entitas HTML
    .replace(/[^a-zA-Z0-9\s]/g, '') // Hapus karakter non-alphanumeric
    .trim();
};

// Sanitasi slug
const sanitizeSlug = (slug) => {
  return slug
    .toLowerCase()
    .replace(/\s+/g, '-')          // Ganti spasi dengan -
    .replace(/[^a-z0-9-]/g, '');   // Hapus karakter non-alphanumeric dan -
};

// Validasi URL
const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const Index = ({ city }) => {
  const router = useRouter();
  const currentCity = cities.find((c) => c.slug === city);

  // Jika kota tidak ditemukan
  if (!currentCity) {
    return (
      <div>
        <h1>City Not Found</h1>
        <p>The city you requested could not be found.</p>
      </div>
    );
  }

  // Nama kota yang telah disanitasi
  const sanitizedCityName = sanitizeCityName(currentCity.name);

  const [status, setStatus] = useState(null);

  // Structured Data JSON-LD
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Jasa SEO ${sanitizedCityName}`,
    "description": `Layanan SEO terbaik di ${sanitizedCityName} untuk meningkatkan peringkat website Anda di Google.`,
    "brand": { "@type": "Brand", "name": SITE_NAME },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "bestRating": 5,
      "ratingCount": 2566
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "IDR",
      "lowPrice": 750000,
      "highPrice": 33600000,
      "offerCount": 1000,
      "url": `${SITE_URL}/jasa-seo-${currentCity.slug}`
    }
  };

  useEffect(() => {
    const submitToIndexingAPI = async () => {
      const pageURL = `${SITE_URL}/jasa-seo-${currentCity.slug}`;

      if (!isValidURL(pageURL)) {
        console.error("Invalid URL:", pageURL);
        return;
      }

      try {
        const res = await fetch('/api/indexing', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: pageURL }),
        });

        const data = await res.json();
        console.log('Indexing Response:', data);
      } catch (error) {
        console.error('Error submitting URL:', error.message);
      }
    };

    submitToIndexingAPI();
  }, [currentCity.slug]);

  return (
    <>
      <Head>
        <title>Jasa SEO {sanitizedCityName} | Garansi Halaman #1 Google</title>
        <meta
          name="description"
          content={`Jasa SEO terbaik di ${sanitizedCityName} dari ${SITE_NAME} untuk tingkatkan peringkat website Anda di Google.`}
        />
        <link rel="canonical" href={`${SITE_URL}/jasa-seo-${currentCity.slug}`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />
      </Head>

      <NavbarTwo />
      <MainBanner city={sanitizedCityName} />
      <Features city={sanitizedCityName} />
      <AboutContent city={sanitizedCityName} />
      <ServicesCard city={sanitizedCityName} />
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

// Server-side rendering untuk memuat data
export async function getServerSideProps({ params }) {
  const { city } = params;
  const cleanSlug = sanitizeSlug(city);
  const currentCity = cities.find((c) => c.slug === cleanSlug);

  if (!currentCity) {
    return { notFound: true };
  }

  return { props: { city: cleanSlug } };
}

export default Index;
