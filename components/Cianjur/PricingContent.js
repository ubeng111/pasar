import React, { Component } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

class PricingContent extends Component {
    // Inisialisasi AOS
    componentDidMount() {
        AOS.init({
            duration: 1000, // Durasi animasi dalam milidetik
            once: true, // Animasi hanya akan terjadi sekali
        });
    }

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

    render() {
        return (
            <section className="pricing-section ptb-100">
                <div className="container">
                    <div className="section-title" data-aos="fade-up">
                        <span>Harga Paket</span>
                        <h3>Solusi Terbaik untuk Klien Kami</h3>
                    </div>

                    <div className="tab pricing-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'monthly')}
                                data-aos="fade-up"
                            >
                                Bulanan
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'yearly')}
                                data-aos="fade-up"
                            >
                                Tahunan
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/* Paket Bulanan */}
                            <div id="monthly" className="tabs-item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Optimasi SEO Basic</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>750.000</span>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Optimasi Meta</li>
                                                <li><i className='flaticon-check-mark'></i> Optimasi Page Speed</li>
                                                <li><i className='flaticon-check-mark'></i> Optimasi Ukuran Gambar & Alt</li>
                                                <li><i className='flaticon-check-mark'></i> Optimasi Copywriting</li>
                                                <li><i className='flaticon-check-mark'></i> Link Building</li>
                                                <li><i className='flaticon-check-mark'></i> Setting Schema</li>
                                                <li><i className='flaticon-check-mark'></i> Setting Sitemap</li>
                                                <li><i className='flaticon-check-mark'></i> Google & Bing Indexing</li>
                                                <li><i className='flaticon-check-mark'></i> Tanpa Kontrak</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEO Longtail Keyword */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>SEO Longtail Keyword</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>900.000</span> <small>per Bulan</small>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Semua SEO Basic</li>
                                                <li><i className='flaticon-check-mark'></i> Analisa Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> Target Longtail Keyword (4 - 6 Kata)</li>
                                                <li><i className='flaticon-check-mark'></i> Target Indexing 20+ Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> 1 Backlink Berkualitas</li>
                                                <li><i className='flaticon-check-mark'></i> 3 Artikel SEO</li>
                                                <li><i className='flaticon-check-mark'></i> Laporan Bulanan</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEO Focus Keyword */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>SEO Focus Keyword</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>2.800.000</span> <small>per Bulan</small>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Semua SEO Basic</li>
                                                <li><i className='flaticon-check-mark'></i> Analisa Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> Target Focus Keyword (2 - 4 Kata)</li>
                                                <li><i className='flaticon-check-mark'></i> Target Indexing 20+ Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> 3 Backlink Berkualitas</li>
                                                <li><i className='flaticon-check-mark'></i> 10 Artikel SEO</li>
                                                <li><i className='flaticon-check-mark'></i> Laporan Bulanan</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Paket Tahunan */}
                            <div id="yearly" className="tabs-item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Optimasi SEO Basic</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>8.400.000</span> <small>per Tahun</small>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Optimasi Meta</li>
                                                <li><i className='flaticon-check-mark'></i> Optimasi Page Speed</li>
                                                <li><i className='flaticon-check-mark'></i> Optimasi Ukuran Gambar & Alt</li>
                                                <li><i className='flaticon-check-mark'></i> Optimasi Copywriting</li>
                                                <li><i className='flaticon-check-mark'></i> Link Building</li>
                                                <li><i className='flaticon-check-mark'></i> Setting Schema</li>
                                                <li><i className='flaticon-check-mark'></i> Setting Sitemap</li>
                                                <li><i className='flaticon-check-mark'></i> Google & Bing Indexing</li>
                                                <li><i className='flaticon-check-mark'></i> Tanpa Kontrak</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEO Longtail Keyword */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>SEO Longtail Keyword</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>10.800.000</span> <small>per Tahun</small>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Semua SEO Basic</li>
                                                <li><i className='flaticon-check-mark'></i> Analisa Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> Target Longtail Keyword (4 - 6 Kata)</li>
                                                <li><i className='flaticon-check-mark'></i> Target Indexing 20+ Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> 1 Backlink Berkualitas</li>
                                                <li><i className='flaticon-check-mark'></i> 3 Artikel SEO</li>
                                                <li><i className='flaticon-check-mark'></i> Laporan Bulanan</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    Mulai Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* SEO Focus Keyword */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>SEO Focus Keyword</h3>
                                            </div>

                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span style={{ fontSize: '24px', marginLeft: '5px' }}>33.600.000</span> <small>per Tahun</small>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><i className='flaticon-check-mark'></i> Semua SEO Basic</li>
                                                <li><i className='flaticon-check-mark'></i> Analisa Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> Target Focus Keyword (2 - 4 Kata)</li>
                                                <li><i className='flaticon-check-mark'></i> Target Indexing 20+ Keyword</li>
                                                <li><i className='flaticon-check-mark'></i> 3 Backlink Berkualitas</li>
                                                <li><i className='flaticon-check-mark'></i> 10 Artikel SEO</li>
                                                <li><i className='flaticon-check-mark'></i> Laporan Bulanan</li>
                                            </ul>

                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    Mulai Sekarang
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