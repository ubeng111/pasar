import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="neemo-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img src="/images/logo.png" alt="logo" />
              </Link>

              {/* Toggle navigation */}
              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Home Demo - 1
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/index2/"
                          className={`nav-link ${
                            currentPath == "/index2/" && "active"
                          }`}
                        >
                          Home Demo - 2
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/index3/"
                          className={`nav-link ${
                            currentPath == "/index3/" && "active"
                          }`}
                        >
                          Home Demo - 3
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      About us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                    >
                      Services <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-service/"
                          className={`nav-link ${
                            currentPath == "/single-service/" && "active"
                          }`}
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/projects/"
                      className={`nav-link ${
                        currentPath == "/projects/" && "active"
                      }`}
                    >
                      Projects <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/projects/"
                          className={`nav-link ${
                            currentPath == "/projects/" && "active"
                          }`}
                        >
                          Projects
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects-two/"
                          className={`nav-link ${
                            currentPath == "/projects-two/" && "active"
                          }`}
                        >
                          Projects Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-project/"
                          className={`nav-link ${
                            currentPath == "/single-project/" && "active"
                          }`}
                        >
                          Project Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Blog <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-blog/"
                          className={`nav-link ${
                            currentPath == "/single-blog/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Pages <i className="fa-solid fa-plus"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/features/"
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          className={`nav-link ${
                            currentPath == "/pricing/" && "active"
                          }`}
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 error
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-options">
                <div className="option-item">
                  <i
                    className="search-btn fa fa-search"
                    onClick={handleToggleSearchModal}
                  ></i>
                </div>

                <div className="burger-menu" onClick={handleToggleSidebarModal}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div className={`sidebar-modal ${isActiveSidebarModal ? "" : "active"}`}>
        <div className="sidebar-modal-inner">
          <span
            className="close-btn sidebar-modal-close-btn"
            onClick={handleToggleSidebarModal}
          >
            <i className="fas fa-times"></i>
          </span>

          <div className="sidebar-about-area">
            <div className="title">
              <h2>About Us</h2>
              <p>
                We believe brand interaction is key to communication. Real
                innovations and positive customer experience are the heart of
                successful communication. No fake products and services. The
                customer is king, their lives and needs are the inspiration.
              </p>
            </div>
          </div>

          {/* Instagram feed */}
          <div className="sidebar-instagram-feed">
            <h2>Instagram</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/1.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/2.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/3.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/4.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/5.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/6.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/7.jpg" alt="image" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <img src="/images/instagram-image/8.jpg" alt="image" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sidebar-contact-area">
            <div className="contact-info">
              <div className="contact-info-content">
                <h2>
                  <span className="info">+088 130 629 8615</span>
                  <span className="or">OR</span>
                  <span className="info">info@neemo.com</span>
                </h2>

                <ul className="social">
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default Navbar;
