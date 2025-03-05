import styles from '@/styles/MobileMenu.module.css';
import Link from 'next/link';
import LocaleSwitcher from '@/components/LocaleSwitcher';

const MobileMenu = ({ isOpen, translations, currentLang, onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.menuLinks}>
        <a href={`/${currentLang}`} onClick={handleLinkClick}>{translations.Navbar?.home}</a>
        <a href={`/${currentLang}/#testimonials`} onClick={handleLinkClick}>{translations.Navbar?.testimonials}</a>
        <a href={`/${currentLang}/#features`} onClick={handleLinkClick}>{translations.Navbar?.features}</a>
        <a href={`/${currentLang}/#pricing`} onClick={handleLinkClick}>{translations.Navbar?.pricing}</a>
        <a href={`/${currentLang}/#faq`} onClick={handleLinkClick}>{translations.Navbar?.faq}</a>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <LocaleSwitcher onLanguageChange={handleLinkClick} />
        </div>
      </div>
      
      <div className={styles.authButtons}>
        <Link href="https://app.invoicepay.fi/login" className={styles.loginBtn} onClick={handleLinkClick}>
          {translations.Navbar?.login}
        </Link>
        <Link href="https://app.invoicepay.fi/register" className={styles.registerBtn} onClick={handleLinkClick}>
          {translations.Navbar?.register}
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;