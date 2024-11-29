import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zxx">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" href="/images/favicon.png" />

          {/* Menambahkan CDN Font Awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          />

          {/* Menambahkan CDN Flaticon (opsional) */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/flaticon/4.2.0/font/flaticon.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
