import styles from '@/styles/NavDropdown.module.css';

const NavDropdown = ({ currentLang, translations }) => {
  return (
    <div className={styles.dropdown}>
      <a className={styles.dropdownTrigger}>
        {translations.Navbar?.services}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className={styles.dropdownArrow}
        >
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </a>
      <div className={styles.dropdownContent}>
        <a href={`/${currentLang}/for-freelancers`}>{translations.Navbar?.forFreelancers}</a>
        <a href={`/${currentLang}/for-startups`}>{translations.Navbar?.forStartups}</a>
        <a href={`/${currentLang}/for-construction`}>{translations.Navbar?.forConstruction}</a>
        <a href={`/${currentLang}/for-restaurants`}>{translations.Navbar?.forRestaurants}</a>
        <a href={`/${currentLang}/for-stores`}>{translations.Navbar?.forStores}</a>

      </div>
    </div>
  );
};

export default NavDropdown;