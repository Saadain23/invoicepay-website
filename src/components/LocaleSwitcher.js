import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '/images/en.png' },
  { code: 'fi', name: 'Suomi', flag: '/images/fi.png' },
];

const LocaleSwitcher = ({ onLanguageChange }) => {
  const router = useRouter();
  const currentLang = router.query.lang || 'fi';
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocaleChange = (locale) => {
    setIsOpen(false);
    router.push(router.pathname, router.asPath, { locale });
    if (onLanguageChange) {
      onLanguageChange();
    }
  };

  return (
    <div className="locale-switcher" onClick={toggleDropdown}>
      <button className="locale-button">
        <img 
          src={languages.find(lang => lang.code === currentLang)?.flag} 
          alt={currentLang} 
          width={26} 
          height={26} 
        />
      </button>
      {isOpen && (
        <div className="dropdown">
          {languages.map(({ code, name, flag }) => (
            code !== currentLang && (
              <Link 
                key={code} 
                href={`/${code}${router.pathname.replace('[lang]', '').replace(/^\/+/,'')}`} 
                className="dropdown-item"
                onClick={() => handleLocaleChange(code)}
              >
                <img src={flag} alt={name} width={26} height={26} className="flag-icon" />
              </Link>
            )
          ))}
        </div>
      )}
      <style jsx>{`
        .locale-switcher {
          position: relative;
          display: inline-block;
          cursor: pointer;
          z-index: 1000;
        }
        .locale-button {
          background: none;
          border: none;
          padding: 0;
        }
        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          border-radius: 6px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          padding: 8px;
          min-width: fit-content;
          display: flex;
          flex-direction: column;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 8px;
          text-decoration: none;
          color: black;
          transition: background 0.2s;
        }
        .dropdown-item:hover {
          background: #f5f5f5;
        }
        .flag-icon {
          width: 26px;
          height: 26px;
          object-fit: contain;
        }
      `}</style>
    </div>
  );
};

export default LocaleSwitcher;