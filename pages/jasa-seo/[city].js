import { useRouter } from 'next/router'; 
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities"; // Path ke cities yang benar
import dynamic from 'next/dynamic';  // Import dynamic untuk komponen dinamis

// Dynamic import untuk komponen besar
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
    const submitToIndexingAPI = async () => {
      try {
        // Kirimkan URL halaman dinamis ke API route
        const res = await fetch('/api/indexing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: `https://pasar.web.id/jasa-seo-${currentCity.slug}` }),
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
        <title>Jasa SEO Murah {sanitizedCityName} | Garansi Halaman #1 Google | Bulanan | Tahunan</title>
        <meta name="description" content={`Jasa SEO ${sanitizedCityName} dari Pasar.Web.id untuk membantu meningkatkan peringkat website Anda di Google.`} />

        {/* Canonical Link */}
        <link rel="canonical" href={`https://pasar.web.id/jasa-seo-${currentCity.slug}`} />

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

      {/* Status Indeks (Not used anymore) */}
      <div>
        <p>{status}</p>
      </div>
    </>
  );
};

// Menggunakan getServerSideProps untuk data fetching di server-side
export async function getServerSideProps({ params }) {
  const { city } = params;
  const currentCity = cities.find((c) => c.slug === city);

  if (!currentCity) {
    return { notFound: true }; // Mengembalikan halaman 404 jika kota tidak ditemukan
  }

  return {
    props: { city: currentCity.slug }, // Mengirimkan slug kota ke komponen
  };
}

export default Index;