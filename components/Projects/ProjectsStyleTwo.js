import React from "react";
import Link from "next/link";

const ProjectsStyleTwo = () => {
  return (
    <>
      <section className="portfolio-section">
        <div className="container">
          <div className="section-title">
            <span>Portfolio</span>
            <h3>Our Project For Client</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/1.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project/">Branding</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/2.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Marketing</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/3.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">SEO</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/4.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Web Design</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/5.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Web Development</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/6.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">Digital Marketing</Link>
                  </h3>
                </div>
              </div>

              <div className="single-portfolio-box">
                <div className="portfolio-image">
                  <Link href="/single-project">
                    <img src="/images/portfolio/7.png" alt="image" />
                  </Link>
                </div>
                <div className="portfolio-hover-content">
                  <h3>
                    <Link href="/single-project">IT Marketing</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsStyleTwo;
