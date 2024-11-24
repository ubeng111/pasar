import { useRouter } from 'next/router';
import Head from 'next/head';  // Ensure to import Head for meta data
import { cities } from "../../components/Cianjur/cities";  // Correct path to cities
import NavbarTwo from "../../components/Cianjur/NavbarTwo";  // Import necessary components
import MainBanner from "../../components/Cianjur/MainBanner";
import AnalysisFormContent from "../../components/Cianjur/AnalysisFormContent";
import AboutContent from "../../components/Cianjur/AboutContent";
import ServicesCard from "../../components/Cianjur/ServicesCard";
import WhyChooseUs from "../../components/Cianjur/WhyChooseUs";
import Features from "../../components/Cianjur/Features";
import FaqSection from "../../components/Cianjur/FaqSection";
import Footer from "../../components/Cianjur/Footer";

const Index = ({ city }) => {
  const router = useRouter();
  const currentCity = cities.find((c) => c.slug === city); // Dynamic city content

  if (!currentCity) {
    return (
      <div>
        <h1>City Not Found</h1>
        <p>The city you requested could not be found.</p>
      </div>
    ); // Handle if city is not found
  }

  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Jasa SEO ${currentCity.name}`, // Corrected string interpolation
    "description": `Layanan SEO terbaik di ${currentCity.name} untuk meningkatkan peringkat website Anda di Google.`, // Corrected string interpolation
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
      "name": `Layanan Jasa SEO ${currentCity.name}`, // Corrected string interpolation
      "priceCurrency": "IDR",
      "lowPrice": 750000,
      "highPrice": 33600000,
      "offerCount": 1000,
      "url": `https://pasar.web.id/jasa-seo-${currentCity.slug}` // Corrected string interpolation
    }
  };

  return (
    <>
      <Head>
        <title>Jasa SEO {currentCity.name} Profesional Murah Terbaik - Pasar.Web.id</title>
        <meta name="description" content={`Jasa SEO ${currentCity.name} dari Pasar.Web.id untuk membantu meningkatkan peringkat website Anda di Google.`} /> {/* Corrected string interpolation */}
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
      <AnalysisFormContent city={currentCity.name} />
      <FaqSection city={currentCity.name} />
      <Footer />
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
