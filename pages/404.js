import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <img src="/images/404.png" alt="error" />

                <h3>Halaman Tidak Ditemukan</h3>
                <p>
                  Halaman yang Anda cari mungkin telah dihapus, diganti namanya, atau sementara tidak tersedia.
                </p>

                <Link href="/" className="default-btn-one">
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
