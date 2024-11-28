import React, { useState } from "react";
import ContactInfo from "./ContactInfo";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Terima Kasih!",
    text: "Pesan Anda berhasil dikirim dan akan segera kami balas.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
  serviceType: "",  // Menambahkan jenis layanan
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text, serviceType } = contact;
      const payload = { name, email, number, subject, text, serviceType };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="contact-area ptb-100">
        {/* Informasi Kontak */}
        <ContactInfo />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="contact-text">
                <h3>Hubungi Kami</h3>
                <p>
                  Kami spesialis dalam layanan SEO yang akan membantu bisnis Anda
                  untuk lebih mudah ditemukan di mesin pencari dan membuat website
                  yang menarik dan user-friendly.
                </p>
                <p>
                  Apakah Anda ingin meningkatkan peringkat website Anda atau
                  membutuhkan website baru? Kami siap membantu!
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/" target="_blank">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nama"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Nomor Telepon"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subjek"
                        className="form-control"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        placeholder="Tulis pesan Anda..."
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <select
                        name="serviceType"
                        className="form-control"
                        value={contact.serviceType}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Pilih Layanan
                        </option>
                        <option value="SEO">Layanan SEO</option>
                        <option value="Website">Pembuatan Website</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <div className="send-btn">
                      <button type="submit" className="send-btn-one">
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
