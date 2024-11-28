// components/WhatsAppButton.js
import React, { useState } from "react";
import styles from "../styles/whatsappButton.module.css"; // Menggunakan CSS Modules

const WhatsAppButton = () => {
  const [hover, setHover] = useState(false); // Menangani efek hover
  const whatsappUrl = "https://wa.me/628986871468"; // Link WhatsApp untuk nomor 085938573419

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton} // Gunakan kelas CSS module
      onMouseEnter={() => setHover(true)} // Set hover ke true saat mouse masuk
      onMouseLeave={() => setHover(false)} // Set hover ke false saat mouse keluar
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
      <span>Chat with us</span> {/* Teks yang muncul di samping ikon */}
    </a>
  );
};

export default WhatsAppButton;
