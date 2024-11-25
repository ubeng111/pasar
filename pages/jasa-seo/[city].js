import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head'; // Ensure to import Head for meta data
import { cities } from "../../components/Cianjur/cities"; // Correct path to cities
import NavbarTwo from "../../components/Cianjur/NavbarTwo"; // Import necessary components
import MainBanner from "../../components/Cianjur/MainBanner";
import AnalysisFormContent from "../../components/Cianjur/AnalysisFormContent";
import AboutContent from "../../components/Cianjur/AboutContent";
import ServicesCard from "../../components/Cianjur/ServicesCard";
import WhyChooseUs from "../../components/Cianjur/WhyChooseUs";
import Features from "../../components/Cianjur/Features";
import FaqSection from "../../components/Cianjur/FaqSection";
import PricingContent from "../../components/Cianjur/PricingContent";
import Footer from "../../components/Cianjur/Footer";

const Index = ({ city }) => {
  const router = useRouter();
  const currentCity = cities.find((c) => c.slug === city); // Dynamic city content
  const [status, setStatus] = useState(null); // To store indexing status

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
    "name": `Jasa SEO ${currentCity.name}`, 
    "description": `Layanan SEO terbaik di ${currentCity.name} untuk meningkatkan peringkat website Anda di Google.`,
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
      "name": `Layanan Jasa SEO ${currentCity.name}`,
      "priceCurrency": "IDR",
      "lowPrice": 750000,
      "highPrice": 33600000,
      "offerCount": 1000,
      "url": `https://pasar.web.id/jasa-seo-${currentCity.slug}`
    }
  };

  useEffect(() => {
    if (currentCity) {
      // Membuat URL dinamis berdasarkan kota
      const pageUrl = `https://pasar.web.id/jasa-seo-${currentCity.slug}`;

      // Fungsi untuk mengindeks URL
      const indexPage = async () => {
        try {
          const response = await fetch('/api/index-google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: pageUrl,  // URL yang ingin diindeks
              type: 'URL_UPDATED',  // Jenis pemberitahuan (bisa 'URL_UPDATED' atau 'URL_REMOVED')
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

      // Panggil fungsi indexPage untuk mengindeks URL
      indexPage();
    }
  }, [currentCity]); // Jalankan efek saat currentCity sudah ada

  return (
    <>
      <Head>
        <title>Jasa SEO Murah {currentCity.name} | Garansi Halaman #1 Google | Bulanan | Tahunan </title>
        <meta name="description" content={`Jasa SEO ${currentCity.name} dari Pasar.Web.id untuk membantu meningkatkan peringkat website Anda di Google.`} />
        {/* Inject JSON-LD for structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </Head>

      <NavbarTwo />
      <MainBanner city={currentCity.name} />
      <Features city={currentCity.name} />
      <AboutContent city={currentCity.name} />
      <ServicesCard city={currentCity.name} />
      <WhyChooseUs city={currentCity.name} />
      <PricingContent city={currentCity.name} />
      <AnalysisFormContent city={currentCity.name} />
      <FaqSection city={currentCity.name} />
      <Footer />

      {/* Status Indeks */}
      <div>
        <p>{status}</p>
      </div>
    </>
  );
};

// Fetch city data dynamically using getServerSideProps
export async function getServerSideProps({ params }) {
  const { city } = params;

  // Handle case where the city is missing or invalid
  if (!city) {
    return { notFound: true };
  }

  return { props: { city } };
}

export default Index;
