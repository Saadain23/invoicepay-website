import { useState } from 'react';
import styles from '@/styles/NavbarA.module.css';
import Link from 'next/link';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { useRouter } from 'next/router';
import MobileMenu from '@/components/layout/MobileMenu';

const NavbarA = ({translations}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentLang = router.query.lang || 'fi';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="/logo.png" alt="InvoicePay Logo" width={180} height={55} />
        </div>
        
        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <a href={`/${currentLang}`}>{translations.Navbar?.home}</a>
          <a href={`/${currentLang}/#testimonials`}>{translations.Navbar?.testimonials}</a>
          <a href={`/${currentLang}/#features`}>{translations.Navbar?.features}</a>
          <a href={`/${currentLang}/#pricing`}>{translations.Navbar?.pricing}</a>
          <a href={`/${currentLang}/#faq`}>{translations.Navbar?.faq}</a>
          <LocaleSwitcher />
        </div>
        
        <div className={styles.authButtons}>
          <Link href="https://app.invoicepay.fi/login" className={styles.loginBtn}>{translations.Navbar?.login}</Link>
          <Link href="https://app.invoicepay.fi/register" className={styles.registerBtn}>{translations.Navbar?.register}</Link>
        </div>

        <button 
          className={styles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isOpen} 
          translations={translations} 
          currentLang={currentLang} 
          onClose={() => setIsOpen(false)} 
        />
      </div>
    </nav>
  );
};

export default NavbarA;