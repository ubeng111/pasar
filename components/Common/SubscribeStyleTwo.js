import React from "react";

const SubscribeStyleTwo = () => {
  return (
    <>
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-area-content">
            <div className="subscribe-content">
              <span className="sub-title">Mulai Sekarang!</span>
              <h2>Dapatkan berita terbaru hanya melalui newsletter ini</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Masukkan email Anda"
                  name="EMAIL"
                  required
                />
                <button type="submit">Berlangganan</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeStyleTwo;
