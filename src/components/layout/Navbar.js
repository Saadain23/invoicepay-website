import Link from 'next/link';
import { useState } from 'react';
import styles from '@/styles/Navbar.module.css';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navbar');
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            YourLogo
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
            <Link href="/" className={styles.navLink}>
              {t('home')}
            </Link>
            <Link href="/testimonials" className={styles.navLink}>
              {t('testimonials')}
            </Link>
            <Link href="/features" className={styles.navLink}>
              {t('features')}
            </Link>
            <Link href="/pricing" className={styles.navLink}>
              {t('pricing')}
            </Link>
            <Link href="/faq" className={styles.navLink}>
              {t('faq')}
            </Link>
            <div className={styles.authButtons}>
              <div style={{color: 'red'}}>Test LocaleSwitcher</div>
              <LocaleSwitcher />
              <Link href="/login" className={styles.loginBtn}>
                {t('login')}
              </Link>
              <Link href="/register" className={styles.registerBtn}>
                {t('register')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default,
    },
  };
}