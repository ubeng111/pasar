import React, { Component } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Pastikan AOS CSS sudah diimpor

class PricingContent extends Component {

    openTabSection = (evt, tabName) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs-item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += "current";
    }

    componentDidMount() {
        // Inisialisasi AOS setelah komponen dipasang
        AOS.init({
            duration: 1000, // Durasi animasi dalam ms
            once: true, // Efek animasi hanya dijalankan sekali
        });
    }

    render() {
        return (
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span>Harga Paket</span>
                        <h3>Solusi Terbaik untuk Pembuatan Website</h3>
                    </div>

                    <div className="tab pricing-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'silver')}
                                data-aos="fade-up" // Menambahkan AOS fade-up pada tab
                            >
                                <i className="fa fa-silver"></i> Paket Silver
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'gold')}
                                data-aos="fade-up" // Menambahkan AOS fade-up pada tab
                            >
                                <i className="fa fa-gold"></i> Paket Gold
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/* Paket Silver */}
                            <div id="silver" className="tabs-item" data-aos="fade-up">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3><i className="fa fa-laptop"></i> Pembuatan Website Basic</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>5.000.000</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> 1 Halaman Website</li>
                                                <li><i className='flaticon-check-mark'></i> Desain Responsif</li>
                                                <li><i className='flaticon-check-mark'></i> SEO On-page dasar</li>
                                                <li><i className='flaticon-check-mark'></i> Integrasi Kontak Form</li>
                                                <li><i className='flaticon-check-mark'></i> Domain & Hosting 1 Tahun</li>
                                                <li><i className='flaticon-check-mark'></i> 1 Revisi Desain</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Paket Website Business */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3><i className="fa fa-building"></i> Pembuatan Website Business</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>8.500.000</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> 3 Halaman Website</li>
                                                <li><i className='flaticon-check-mark'></i> Desain Responsif</li>
                                                <li><i className='flaticon-check-mark'></i> SEO On-page & Off-page</li>
                                                <li><i className='flaticon-check-mark'></i> Integrasi Google Analytics</li>
                                                <li><i className='flaticon-check-mark'></i> Domain & Hosting 1 Tahun</li>
                                                <li><i className='flaticon-check-mark'></i> 2 Revisi Desain</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Paket Website E-commerce */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3><i className="fa fa-shopping-cart"></i> Pembuatan Website E-commerce</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>15.000.000</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Website E-commerce dengan 5 Produk</li>
                                                <li><i className='flaticon-check-mark'></i> Desain Responsif</li>
                                                <li><i className='flaticon-check-mark'></i> SEO On-page & Off-page</li>
                                                <li><i className='flaticon-check-mark'></i> Integrasi Pembayaran & Pengiriman</li>
                                                <li><i className='flaticon-check-mark'></i> Domain & Hosting 1 Tahun</li>
                                                <li><i className='flaticon-check-mark'></i> 3 Revisi Desain</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Paket Gold */}
                            <div id="gold" className="tabs-item" data-aos="fade-up">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3><i className="fa fa-gem"></i> Pembuatan Website Premium</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>25.000.000</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Website Full Custom</li>
                                                <li><i className='flaticon-check-mark'></i> Desain Responsif & Animasi</li>
                                                <li><i className='flaticon-check-mark'></i> SEO On-page & Off-page Lengkap</li>
                                                <li><i className='flaticon-check-mark'></i> Integrasi Google Analytics & Google Ads</li>
                                                <li><i className='flaticon-check-mark'></i> Domain & Hosting 1 Tahun</li>
                                                <li><i className='flaticon-check-mark'></i> 5 Revisi Desain</li>
                                                <li><i className='flaticon-check-mark'></i> Fitur Keamanan SSL</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Paket Website Corporate */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3><i className="fa fa-building"></i> Pembuatan Website Corporate</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>50.000.000</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Website Corporate dengan Fitur Kustom</li>
                                                <li><i className='flaticon-check-mark'></i> Desain Premium</li>
                                                <li><i className='flaticon-check-mark'></i> SEO On-page & Off-page Premium</li>
                                                <li><i className='flaticon-check-mark'></i> Integrasi CRM & Sistem Pembayaran</li>
                                                <li><i className='flaticon-check-mark'></i> Domain & Hosting 1 Tahun</li>
                                                <li><i className='flaticon-check-mark'></i> 10 Revisi Desain</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PricingContent;