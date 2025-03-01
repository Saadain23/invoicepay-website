import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="InvoicePay Logo" width={180} height={58} />
        </Link>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/testimonials" className={styles.navLink}>Testimonials</Link>
          <Link href="/features" className={styles.navLink}>Features</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="/faq" className={styles.navLink}>FAQ</Link>
        </div>

        <div className={styles.authButtons}>
          <Link href="/login" className={styles.loginBtn}>Login</Link>
          <Link href="/register" className={styles.registerBtn}>Register</Link>
        </div>
      </div>
    </nav>
  );
}
