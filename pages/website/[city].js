import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { cities } from "../../components/Website/cities";
import dynamic from 'next/dynamic';

// Dynamic imports untuk komponen
const NavbarTwo = dynamic(() => import("../../components/Website/NavbarTwo"));
const MainBanner = dynamic(() => import("../../components/Website/MainBanner"));
const ServicesCard = dynamic(() => import("../../components/Website/ServicesCard"));
const ProjectsCard = dynamic(() => import("../../components/Website/ProjectsCard"));
const WhyChooseUs = dynamic(() => import("../../components/Website/WhyChooseUs"));
const PricingContent = dynamic(() => import("../../components/Website/PricingContent"));
const AnalysisFormContent = dynamic(() => import("../../components/Website/AnalysisFormContent"));
const FaqSection = dynamic(() => import("../../components/Website/FaqSection"));
const Footer = dynamic(() => import("../../components/Website/Footer"));

// Fungsi untuk membersihkan nama kota
const sanitizeCityName = (cityName) => {
  return cityName
    .replace(/<!--[\s\S]*?-->/g, '') // Menghapus semua komentar HTML
    .replace(/&[a-zA-Z]+;/g, '')    // Menghapus entitas HTML
    .replace(/[^a-zA-Z0-9\s]/g, '') // Hanya huruf, angka, dan spasi
    .replace(/\s+/g, ' ')           // Menghapus spasi berlebih
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

  // Schema untuk SEO
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Jasa Pembuatan Website ${sanitizedCityName}`,
    "description": `Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern dan fungsional.`,
    "url": `https://pasar.web.id/website-${currentCity.slug}`,
    "image": `https://pasar.web.id/images/about-image2.jpg`
  };

  const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": `Layanan Pembuatan Website ${sanitizedCityName}`,
    "priceCurrency": "IDR",
    "price": 431000,
    "url": `https://pasar.web.id/website-${currentCity.slug}`,
    "priceValidUntil": "2025-12-31",
    "availability": "http://schema.org/InStock",
    "image": `https://pasar.web.id/images/about-image2.jpg`
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
        <meta
          name="description"
          content={`Jasa pembuatan website terbaik di ${sanitizedCityName}, desain modern dan fungsional, harga mulai 400 ribuan. Hubungi sekarang!`}
        />
        <link rel="canonical" href={`https://pasar.web.id/website-${currentCity.slug}`} />
        <meta name="robots" content="index, follow" /> {/* Menambahkan tag robots */}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }} />
      </Head>

      <NavbarTwo />
      <MainBanner city={sanitizedCityName} />
      <ServicesCard city={sanitizedCityName} />
      <ProjectsCard />
      <WhyChooseUs city={sanitizedCityName} />
      <PricingContent city={sanitizedCityName} />
      <AnalysisFormContent city={sanitizedCityName} />
      <FaqSection city={sanitizedCityName} />
      <Footer />
    </>
  );
};

// Menggunakan getStaticProps untuk ISR
export async function getStaticPaths() {
  // Mengambil slug dari daftar kota
  const paths = cities.map((city) => ({
    params: { city: city.slug },
  }));

  return {
    paths,
    fallback: 'false', // Gunakan blocking agar halaman dirender terlebih dahulu jika belum ada cache
  };
}

export async function getStaticProps({ params }) {
  const { city } = params;
  const currentCity = cities.find((c) => c.slug === city);

  if (!currentCity) {
    return { notFound: true };
  }

  return {
    props: { city: currentCity.slug },
    revalidate: 3600, // Regenerasi halaman setiap 1 jam
  };
}

export default Index;
