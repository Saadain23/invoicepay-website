import { useState, useEffect } from 'react';
import styles from '@/styles/NavDropdown.module.css';

const NavDropdown = ({ currentLang, translations }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevent event from bubbling to document
    setIsOpen(!isOpen);
  };

  // Add useEffect to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(`.${styles.dropdown}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${isOpen ? styles.active : ''}`}>
      <a className={styles.dropdownTrigger} onClick={toggleDropdown}>
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
        <a href={`/${currentLang}/for-freelancers`} onClick={handleLinkClick}>{translations.Navbar?.forFreelancers}</a>
        <a href={`/${currentLang}/for-startups`} onClick={handleLinkClick}>{translations.Navbar?.forStartups}</a>
        <a href={`/${currentLang}/for-construction`} onClick={handleLinkClick}>{translations.Navbar?.forConstruction}</a>
        <a href={`/${currentLang}/for-restaurants`} onClick={handleLinkClick}>{translations.Navbar?.forRestaurants}</a>
        <a href={`/${currentLang}/for-stores`} onClick={handleLinkClick}>{translations.Navbar?.forStores}</a>
      </div>
    </div>
  );
};

export default NavDropdown;