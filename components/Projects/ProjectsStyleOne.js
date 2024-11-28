import React from "react";
import Link from "next/link";

const ProjectsStyleOne = () => {
  return (
    <>
      <section className="project-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Projects</span>
            <h3>Our Projects For Client</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/1.jpg" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">Branding</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/2.jpg" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">Marketing</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/3.jpg" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">SEO</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/4.jpg" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">Web Design</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/5.jpg" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">Web Development</Link>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-project-box">
                <Link href="/single-project">
                  <img src="/images/project/6.jpg" alt="image" />
                </Link>
                <div className="project-hover-content">
                  <h3>
                    <Link href="/single-project">Digital marketing</Link>
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

export default ProjectsStyleOne;
