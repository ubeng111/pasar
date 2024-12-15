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

  // JSON-LD schema untuk Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "image": "https://pasar.web.id/images/logo.png", // Gambar bisnis lokal
    "telephone": "+62 898 6871 468", // Ganti dengan nomor telepon yang sesuai
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Contoh Alamat No. 123",
      "addressLocality": sanitizedCityName,
      "addressRegion": "ID",
      "postalCode": "12345",
      "addressCountry": "ID"
    },
    "url": `https://pasar.web.id/website-${currentCity.slug}`,
    "priceRange": "IDR 431000 - 9000000", // Rentang harga layanan
    "sameAs": [
      "https://www.facebook.com/pasarwebid", // URL social media yang relevan
      "https://www.instagram.com/pasarwebid"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 5,
      "bestRating": 5,
      "ratingCount": 4546
    }
  };

  // JSON-LD schema untuk Service (Menampilkan layanan/penawaran)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "serviceType": "Web Design & Development",
    "provider": {
      "@type": "Organization",
      "name": "Pasar.Web.id",
      "url": `https://pasar.web.id/website-${currentCity.slug}`,
      "logo": {
        "@type": "ImageObject",
        "url": "https://pasar.web.id/images/logo.png"
      }
    },
    "priceRange": "IDR 431000 - 9000000",
    "areaServed": {
      "@type": "Place",
      "name": sanitizedCityName
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "IDR",
      "price": "431000",
      "url": `https://pasar.web.id/website-${currentCity.slug}`
    }
  };

  // JSON-LD schema untuk Open Graph (Jasa SEO)
  const openGraphSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": `https://pasar.web.id/website-${currentCity.slug}`,
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "description": `Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern dan fungsional untuk membangun website bisnis Anda.`,
    "image": "https://pasar.web.id/images/logo.png", // URL gambar thumbnail
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

    submitToIndexingAPI();
  }, [currentCity.slug]);

  return (
    <>
      <Head>
        <title>Jasa Pembuatan Website {sanitizedCityName} | Desain Modern & Fungsional</title>
        <meta name="description" content={`Jasa pembuatan website terbaik di ${sanitizedCityName} Desain modern, fungsional, harga mulai 400 ribuan. Hubungi Pasar.Web.id sekarang!.`} />
        
        {/* Canonical Link */}
        <link rel="canonical" href={`https://pasar.web.id/website-${currentCity.slug}`} />
        
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        
        {/* Service Schema for offers */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        
        {/* Open Graph WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(openGraphSchema),
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
