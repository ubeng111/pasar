import React, { Component } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure AOS CSS is imported

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
        // Initialize AOS after the component mounts
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: true, // Animation happens only once
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
                                onClick={(e) => this.openTabSection(e, 'basic')}
                                data-aos="fade-up"
                            >
                                Paket Basic
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'profesional')}
                                data-aos="fade-up"
                            >
                                Paket Profesional
                            </li>
                            <li
                                onClick={(e) => this.openTabSection(e, 'ultimate')}
                                data-aos="fade-up"
                            >
                                Paket Ultimate
                            </li>
                        </ul>

                        <div className="tab-content">
                            {/* Paket Basic */}
                            <div id="basic" className="tabs-item" style={{ display: 'block' }} data-aos="fade-up">
                                <div className="row justify-content-center">
                                    {/* BASIC WEB 1 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>BASIC WEB 1</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>431.250</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain WEB.ID | SCH.ID | OR.ID</li>
                                                <li>SSD Hosting 1 GB</li>
                                                <li>Bandwidth 5GB/bln</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 0</li>
                                                <li>Design BASIC 1</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BASIC WEB 2 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>BASIC WEB 2</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>718.750</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 2 GB</li>
                                                <li>Bandwidth 10GB/bln</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 0</li>
                                                <li>Design BASIC 2</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* BASIC WEB 3 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>BASIC WEB 3</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>1.063.750</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 3 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 1</li>
                                                <li>Design BASIC 3</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Paket Profesional */}
                            <div id="profesional" className="tabs-item" style={{ display: 'none' }} data-aos="fade-up">
                                <div className="row justify-content-center">
                                    {/* WEB PROFESIONAL */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Paket Web Super Pro</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>1.357.000</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 5 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 3</li>
                                                <li>Design PRO 1</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* WEB PROFESIONAL 2 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>Paket Web PowerBoost</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>2.242.500</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 7 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 4</li>
                                                <li>Design PRO 2</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* WEB PROFESIONAL 3 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>Paket Web Prime</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>3.128.000</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 10 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 6</li>
                                                <li>Design PRO 3</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Paket Ultimate */}
                            <div id="ultimate" className="tabs-item" style={{ display: 'none' }} data-aos="fade-up">
                                <div className="row justify-content-center">
                                    {/* ULTIMATE WEB 1 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-f6f5fb">
                                            <div className="pricing-header">
                                                <h3>Ultimate Web 1</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>5.000.000</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 20 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 10</li>
                                                <li>Design Ultimate 1</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ULTIMATE WEB 2 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-ed0678">
                                            <div className="pricing-header">
                                                <h3>Ultimate Web 2</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>7.000.000</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 30 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 20</li>
                                                <li>Design Ultimate 2</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ULTIMATE WEB 3 */}
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                        <div className="single-pricing-box bg-edfbf8">
                                            <div className="pricing-header">
                                                <h3>Ultimate Web 3</h3>
                                            </div>
                                            <div className="price">
                                                <strong>Rp</strong>
                                                <span>9.000.000</span>
                                            </div>
                                            <ul className="pricing-features">
                                                <li>Domain COM</li>
                                                <li>SSD Hosting 50 GB</li>
                                                <li>Bandwidth Unlimited</li>
                                                <li>Free SSL</li>
                                                <li>Email Domain 30</li>
                                                <li>Design Ultimate 3</li>
                                            </ul>
                                            <div className="price-btn">
                                                <Link href="/contact" className="price-btn-one">
                                                    <i className="fa fa-arrow-right"></i> Pesan Sekarang
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
