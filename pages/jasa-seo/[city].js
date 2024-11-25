import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Cianjur/cities"; // Correct path to cities
import NavbarTwo from "../../components/Cianjur/NavbarTwo";
import MainBanner from "../../components/Cianjur/MainBanner";
import AnalysisFormContent from "../../components/Cianjur/AnalysisFormContent";
import AboutContent from "../../components/Cianjur/AboutContent";
import ServicesCard from "../../components/Cianjur/ServicesCard";
import WhyChooseUs from "../../components/Cianjur/WhyChooseUs";
import Features from "../../components/Cianjur/Features";
import FaqSection from "../../components/Cianjur/FaqSection";
import PricingContent from "../../components/Cianjur/PricingContent";
import Footer from "../../components/Cianjur/Footer";

// Sanitasi nama kota untuk menghindari karakter yang tidak diinginkan
const sanitizeCityName = (cityName) => {
  return cityName
    .replace(/<!--.*?-->/g, '')   // Menghapus komentar HTML
    .replace(/&.*;/g, '')         // Menghapus entitas HTML
    .replace(/[^a-zA-Z0-9\s]/g, '') // Menghapus karakter non-alphanumeric
    .trim(); // Menghapus spasi ekstra
};

const Index = ({ city }) => {
  const router = useRouter();
  const currentCity = cities.find((c) => c.slug === city);

  // Sanitasi nama kota
  const sanitizedCityName = currentCity ? sanitizeCityName(currentCity.name) : '';

  const [status, setStatus] = useState(null);

  // If city is not found
  if (!currentCity) {
    return (
      <div>
        <h1>City Not Found</h1>
        <p>The city you requested could not be found.</p>
      </div>
    );
  }

  // JSON-LD structured data for SEO
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Jasa SEO ${sanitizedCityName}`, 
    "description": `Layanan SEO terbaik di ${sanitizedCityName} untuk meningkatkan peringkat website Anda di Google.`,
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
      "name": `Layanan Jasa SEO ${sanitizedCityName}`,
      "priceCurrency": "IDR",
      "lowPrice": 750000,
      "highPrice": 33600000,
      "offerCount": 1000,
      "url": `https://pasar.web.id/jasa-seo-${currentCity.slug}`
    }
  };

  useEffect(() => {
    if (currentCity) {
      const pageUrl = `https://pasar.web.id/jasa-seo-${currentCity.slug}`;

      const indexPage = async () => {
        try {
          const response = await fetch('/api/index-google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: pageUrl,
              type: 'URL_UPDATED',
            }),
          });

          const result = await response.json();
          if (response.ok) {
            setStatus('URL successfully indexed');
          } else {
            setStatus(`Error: ${result.error}`);
          }
        } catch (error) {
          console.error('Error during indexing:', error);
          setStatus('Error indexing the URL');
        }
      };

      indexPage();
    }
  }, [currentCity]);

  return (
    <>
      <Head>
        <title>Jasa SEO Murah {sanitizedCityName} | Garansi Halaman #1 Google | Bulanan | Tahunan</title>
        <meta name="description" content={`Jasa SEO ${sanitizedCityName} dari Pasar.Web.id untuk membantu meningkatkan peringkat website Anda di Google.`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
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

      {/* Status Indeks */}
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
    return { notFound: true };
  }

  return { props: { city: currentCity.slug } };
}

export default Index;
