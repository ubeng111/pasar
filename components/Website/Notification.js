// components/Website/Notification.js
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './Notification.module.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);  // Menyimpan daftar notifikasi

  // Pesan yang akan muncul secara bergiliran
  const notificationMessages = [
    'Michael armi baru saja membeli Jasa Pembuatan Website!',
    'Fandhy Clavo baru saja membeli Jasa SEO!',
    'Budi Setiawan baru saja membeli Jasa Website!',
    'Heru Setiawan baru saja membeli Jasa SEO!',
    'Alvin Amalia baru saja membeli Jasa Pembuatan Website!',
    'Rina Amalia baru saja membeli Jasa SEO!',
    'Toni Santoso baru saja membeli Jasa Pembuatan Website!',
    'Joko Anwar baru saja membeli Jasa SEO!',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Ambil pesan acak dari daftar notifikasi
      const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];

      // Tambahkan notifikasi baru ke daftar
      setNotifications((prevNotifications) => {
        const newNotifications = [...prevNotifications, { id: Date.now(), message: randomMessage }];
        // Batasi jumlah notifikasi yang ditampilkan hingga 4 pesan
        if (newNotifications.length > 4) {
          newNotifications.shift();  // Hapus pesan pertama jika lebih dari 4
        }
        return newNotifications;
      });
    }, 5000); // Menampilkan setiap 5 detik

    // Cleanup interval ketika komponen dibersihkan
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.notificationContainer}>
      {notifications.map((notif) => (
        <div key={notif.id} className={styles.notification}>
          <FaShoppingCart className={styles.icon} />
          <div className={styles.message}>
            {/* Pisahkan pesan menjadi dua baris */}
            {notif.message.split(' ').slice(0, 6).join(' ')} <br />
            {notif.message.split(' ').slice(6).join(' ')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
