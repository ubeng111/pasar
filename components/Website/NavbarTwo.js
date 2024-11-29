import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

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

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area navbar-two">
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
                      <i className="fa fa-home"></i> Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      <i className="fa fa-info-circle"></i> About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                    >
                      <i className="fa fa-cogs"></i> Services
                    </Link>
                  </li>

                  {/* Removed Projects and Blog */}
                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      <i className="fa fa-envelope"></i> Contact
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
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}
      >
        <div className="search-inner">
          <button
            className="close-btn"
            onClick={handleToggleSearchModal}
          >
            <i className="fa fa-times"></i>
          </button>
          <form className="search-form">
            <input
              type="text"
              className="search-input"
              placeholder="Search here..."
            />
            <button type="submit" className="search-submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
