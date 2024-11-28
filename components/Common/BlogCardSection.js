import React from "react";
import Link from "next/link";

const BlogCardSection = () => {
  return (
    <>
      <section className="blog-section pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span>Blog</span>
            <h3>Baca Proyek Terbaru Kami</h3>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <Link href="/single-blog">
                    <img src="/images/blog/1.png" alt="image" />
                  </Link>
                </div>

                <div className="single-blog-item">
                  <ul className="date">
                    <li>02</li>
                    <li>Januari</li>
                  </ul>

                  <ul className="blog-list">
                    <li>
                      <Link href="/blog">
                        <i className="fa fa-user-alt"></i> Oleh admin
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i> 3 Komentar
                    </li>
                  </ul>

                  <div className="blog-content">
                    <Link href="/single-blog">
                      <h3>Solusi Pemasaran Startup untuk Pemilik Bisnis</h3>
                    </Link>
                    <p>
                      Di sini, kami mengatasi tantangan bisnis dengan solusi
                      pemasaran yang inovatif dan efektif untuk startup.
                    </p>
                  </div>

                  <div className="blog-btn">
                    <Link href="/single-blog" className="blog-btn-one">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <Link href="/single-blog">
                    <img src="/images/blog/2.png" alt="image" />
                  </Link>
                </div>

                <div className="single-blog-item">
                  <ul className="date">
                    <li>03</li>
                    <li>Januari</li>
                  </ul>

                  <ul className="blog-list">
                    <li>
                      <Link href="/blog">
                        <i className="fa fa-user-alt"></i> Oleh admin
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i> 3 Komentar
                    </li>
                  </ul>

                  <div className="blog-content">
                    <Link href="/single-blog">
                      <h3>Bagaimana Meningkatkan Agen Pemasaran Digital Anda</h3>
                    </Link>
                    <p>
                      Pelajari strategi pemasaran yang dapat membantu meningkatkan
                      visibilitas dan pertumbuhan agen pemasaran digital Anda.
                    </p>
                  </div>

                  <div className="blog-btn">
                    <Link href="/single-blog" className="blog-btn-one">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <div className="blog-image">
                  <Link href="/single-blog">
                    <img src="/images/blog/3.png" alt="image" />
                  </Link>
                </div>

                <div className="single-blog-item">
                  <ul className="date">
                    <li>03</li>
                    <li>Januari</li>
                  </ul>

                  <ul className="blog-list">
                    <li>
                      <Link href="/blog">
                        <i className="fa fa-user-alt"></i> Oleh admin
                      </Link>
                    </li>
                    <li>
                      <i className="far fa-comments"></i> 3 Komentar
                    </li>
                  </ul>

                  <div className="blog-content">
                    <Link href="/single-blog">
                      <h3>Solusi Kreatif untuk Meningkatkan Bisnis Anda!</h3>
                    </Link>
                    <p>
                      Temukan bagaimana solusi kreatif dapat meningkatkan efisiensi
                      dan daya saing bisnis Anda di pasar.
                    </p>
                  </div>

                  <div className="blog-btn">
                    <Link href="/single-blog" className="blog-btn-one">
                      Baca Selengkapnya
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogCardSection;
