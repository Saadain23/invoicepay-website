import styles from '@/styles/NavDropdown.module.css';

const NavDropdown = ({ currentLang, translations }) => {
  return (
    <div className={styles.dropdown}>
      <a href={`/${currentLang}/#services`} className={styles.dropdownTrigger}>
        {translations.Navbar?.services}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          className={styles.dropdownArrow}
        >
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </a>
      <div className={styles.dropdownContent}>
        <a href={`/${currentLang}/#forFreelancers`}>{translations.Navbar?.forFreelancers}</a>
        <a href={`/${currentLang}/#forStartups`}>{translations.Navbar?.forStartups}</a>
        <a href={`/${currentLang}/#forConstruction`}>{translations.Navbar?.forConstruction}</a>
      </div>
    </div>
  );
};

export default NavDropdown;