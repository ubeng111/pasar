import React from "react"; 
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>            
      <footer className="footer-section pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-area">
                <div className="footer-heading">
                  <h3>Tentang Kami</h3>
                </div>

                <p>
                  Kami adalah agensi digital yang mengkhususkan diri dalam pembuatan website profesional. 
                  Misi kami adalah membantu bisnis kecil dan menengah memiliki website yang menarik, responsif, 
                  dan dapat meningkatkan kehadiran online mereka.
                </p>

                <ul className="footer-social">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" className="bg-3955bc">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank" className="bg-1da1f2">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank" className="bg-004dff">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" className="bg-0273af">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-item-area">
                <div className="footer-heading">
                  <h3>Area Layanan</h3>
                </div>

                <ul className="footer-quick-links">
                  <li>
                    <Link href="/jasa-pembuatan-website-surabaya">Surabaya</Link>
                  </li>
                  <li>
                    <Link href="/jasa-pembuatan-website-bandung">Bandung</Link>
                  </li>
                  <li>
                    <Link href="/jasa-pembuatan-website-bogor">Bogor</Link>
                  </li>
                  <li>
                    <Link href="/jasa-pembuatan-website-jakarta">Jakarta</Link>
                  </li>
                  <li>
                    <Link href="/jasa-pembuatan-website-bali">Bali</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="mb-30">
                <div className="footer-heading">
                  <h3>Kontak Kami</h3>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-call-answer"></i>
                  <h3>Telepon</h3>
                  <span>08986871468</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-envelope"></i>
                  <h3>Email</h3>
                  <span>support@webdesign.com</span>
                </div>

                <div className="footer-info-contact">
                  <i className="flaticon-placeholder-filled-point"></i>
                  <h3>Alamat</h3>
                  <span>Jl. Raya Cipanas, Cianjur, Jawa Barat</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="default-animation">
          <div className="shape-img1">
            <img src="/images/shape/12.svg" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/13.svg" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/14.png" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/15.png" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/2.png" alt="image" />
          </div>
        </div>
      </footer>

      {/* Copyright footer */}
      <div className="copyright-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p>
                © {currentYear} Pasar Web Design. All Rights Reserved by{" "}
                <a href="https://pasar.web.id/" target="_blank">
                  Pasar Web Design
                </a>
              </p>
            </div>

            <div className="col-lg-6">
              <ul>
                <li>
                  <Link href="/terms-conditions">Syarat & Ketentuan</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Kebijakan Privasi</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
