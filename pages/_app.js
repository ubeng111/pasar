import "../styles/bootstrap.min.css";
import "../styles/fontawesome.min.css";
import "../styles/flaticon.css";
import "animate.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/whatsappButton.css"; // Import file CSS WhatsApp Button di sini

import Head from "next/head";
import GoTop from "../components/Layouts/GoTop";
import WhatsAppButton from "../components/WhatsAppButton"; // Import komponen WhatsAppButton

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pasar.web.id - SEO Digital & IT Agency/title/</title>
      </Head>

      <Component {...pageProps} />

      {/* Go Top Button */}
      <GoTop scrollStepInPx="100" delayInMs="15.50" />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}

export default MyApp;
