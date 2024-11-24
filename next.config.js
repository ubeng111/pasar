module.exports = {
  // Konfigurasi redirect untuk mengganti '/' menjadi '-'
  async redirects() {
    return [
      {
        source: '/jasa-seo/:city',  // URL asal seperti /jasa-seo/cianjur
        destination: '/jasa-seo-:city',  // Redirect ke URL dengan tanda hubung, misalnya /jasa-seo-cianjur
        permanent: true,  // Redirect bersifat permanen (301)
      },
    ];
  },

  // Jika perlu rewrites untuk pengaturan routing dinamis
  async rewrites() {
    return [
      {
        source: '/jasa-seo-:city',  // Menangani URL seperti /jasa-seo-cianjur
        destination: '/jasa-seo/:city',  // Mengarahkan ke halaman dinamis /jasa-seo/[city]
      },
    ];
  },
};

