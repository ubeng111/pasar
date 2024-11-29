import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities"; // Updated import path
import NavbarTwo from "../../components/Website/NavbarTwo"; // Updated import path
import MainBanner from "../../components/Website/MainBanner"; // Updated import path
import AnalysisFormContent from "../../components/Website/AnalysisFormContent"; // Updated import path
import ServicesCard from "../../components/Website/ServicesCard"; // Updated import path
import WhyChooseUs from "../../components/Website/WhyChooseUs"; // Updated import path
import FaqSection from "../../components/Website/FaqSection"; // Updated import path
import PricingContent from "../../components/Website/PricingContent"; // Updated import path
import Footer from "../../components/Website/Footer"; // Updated import path
import ProjectsCard from "../../components/Website/ProjectsCard"; // Importing the ProjectsCard component

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

  // JSON-LD structured data for SEO (Jasa Pembuatan Website)
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "description": `Layanan pembuatan website profesional di ${sanitizedCityName} untuk membantu membangun website bisnis Anda dengan desain modern dan fungsional.`,
    "brand": {
      "@type": "Brand",
      "name": "Pasar.Web.id"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "bestRating": 5,
      "ratingCount": 566
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
      "priceCurrency": "IDR",
      "lowPrice": 1000000,
      "highPrice": 25000000,
      "offerCount": 1000,
      "url": `https://pasar.web.id/website-${currentCity.slug}`
    }
  };

  useEffect(() => {
    const submitToIndexingAPI = async () => {
      try {
        // Kirimkan URL halaman dinamis ke API route
        const res = await fetch('/api/indexing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: `https://pasar.web.id/website-${currentCity.slug}` }),
        });

        const data = await res.json();
        console.log('Indexing Response:', data);
      } catch (error) {
        console.error('Error submitting URL:', error);
      }
    };

    // Panggil fungsi hanya setelah halaman dimuat
    submitToIndexingAPI();
  }, [currentCity.slug]);  // Dependencies include the city slug

  return (
    <>
      <Head>
        <title>Jasa Pembuatan Website {sanitizedCityName} | Desain Modern & Fungsional</title>
        <meta name="description" content={`Jasa pembuatan website terbaik di ${sanitizedCityName} dari Pasar.Web.id untuk membantu membangun website bisnis Anda.`} />

        {/* Canonical Link */}
        <link rel="canonical" href={`https://pasar.web.id/website-${currentCity.slug}`} />

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </Head>

      <NavbarTwo />
      <MainBanner city={sanitizedCityName} />
      <ServicesCard city={sanitizedCityName} />
      <ProjectsCard /> {/* Adding ProjectsCard component here */}
      <WhyChooseUs city={sanitizedCityName} />
      <PricingContent city={sanitizedCityName} />
      <AnalysisFormContent city={sanitizedCityName} />
      <FaqSection city={sanitizedCityName} />
      <Footer />

      {/* Status Indeks (Not used anymore) */}
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
