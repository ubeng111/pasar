const path = require('path');

module.exports = {
  // Mengonfigurasi opsi SASS
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  // Menambahkan trailingSlash untuk URL dengan garis miring di akhir
  trailingSlash: true,  // Aktifkan garis miring di akhir URL

  // Konfigurasi redirect untuk menambahkan garis miring di akhir URL
  async redirects() {
    return [
      {
        source: '/jasa-seo/:city',   // Jika ada URL tanpa garis miring
        destination: '/jasa-seo/:city/', // Redirect ke URL yang diakhiri garis miring
        permanent: true,  // Redirect bersifat permanen (301)
      },
    ];
  },

  // Konfigurasi rewrites untuk menangani routing URL yang benar
  async rewrites() {
    return [
      {
        source: '/jasa-seo-:city',  // Menangani URL dengan '-'
        destination: '/jasa-seo/:city',  // Mengarahkan ke '/jasa-seo/[city]'
      },
    ];
  },
};
