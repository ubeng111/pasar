import { useRouter } from 'next/router'; 
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities"; // Updated import path
import dynamic from 'next/dynamic'; // Import dynamic untuk komponen dinamis

// Dynamic imports untuk komponen besar
const NavbarTwo = dynamic(() => import("../../components/Website/NavbarTwo"));
const MainBanner = dynamic(() => import("../../components/Website/MainBanner"));
const ServicesCard = dynamic(() => import("../../components/Website/ServicesCard"));
const ProjectsCard = dynamic(() => import("../../components/Website/ProjectsCard"));
const WhyChooseUs = dynamic(() => import("../../components/Website/WhyChooseUs"));
const PricingContent = dynamic(() => import("../../components/Website/PricingContent"));
const AnalysisFormContent = dynamic(() => import("../../components/Website/AnalysisFormContent"));
const FaqSection = dynamic(() => import("../../components/Website/FaqSection"));
const Footer = dynamic(() => import("../../components/Website/Footer"));

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
    "@type": "Product",
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
      "ratingCount": 4546
    },
    "offers": {
      "@type": "AggregateOffer",
      "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
      "priceCurrency": "IDR",
      "lowPrice": 431000,
      "highPrice": 9000000,
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
  }, [currentCity.slug]);

  return (
    <>
      <Head>
        <title>Jasa Pembuatan Website {sanitizedCityName} | Desain Modern & Fungsional</title>
        <meta name="description" content={`Jasa pembuatan website terbaik di ${sanitizedCityName} Desain modern, fungsional, harga mulai 400 ribuan. Hubungi Pasar.Web.id sekarang!.`} />
        
        {/* Add meta keywords */}
        <meta name="keywords" content={`jasa website ${sanitizedCityName}, website murah ${sanitizedCityName}, desain website, web developer, pembuatan website di ${sanitizedCityName}, pembuatan website profesional, jasa desain website di ${sanitizedCityName}, web development ${sanitizedCityName}, pembuatan website bisnis ${sanitizedCityName}, jasa bikin web ${sanitizedCityName}, pembuatan website modern, harga website ${sanitizedCityName}, website untuk usaha, jasa pembuatan website di ${sanitizedCityName}, pembuatan website murah ${sanitizedCityName}, jasa pembuatan website terbaik, pembuatan website di ${sanitizedCityName} Indonesia, jasa pembuatan website e-commerce, desain website profesional, pengembangan website, pembuatan website responsive, pengembangan web, jasa website profesional, pembuatan website personal, website marketing, pembuatan aplikasi web, website untuk startup, jasa website murah, pembuatan website untuk bisnis kecil, pengembangan website untuk UKM, jasa pembuatan website perusahaan, desain web kreatif, desain website responsif, pengembangan website custom, pembuatan website SEO friendly ${sanitizedCityName}`} />
        
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

      {/* Komponen yang dimuat dinamis */}
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
