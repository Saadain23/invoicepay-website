import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '@/styles/LocaleSwitcher.module.css';

const languages = [
  { code: 'en', name: 'English', flag: '/images/en.png' },
  { code: 'fi', name: 'Suomi', flag: '/images/fi.png' },
  { code: 'sv', name: 'Svenska', flag: '/images/sv.png' },
];

export default function LocaleSwitcher() {
  const router = useRouter();
  const currentLang = router.query.lang || 'fi';
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.localeSwitcher} onClick={toggleDropdown}>
      <button className={styles.localeButton}>
        <img
          src={languages.find(lang => lang.code === currentLang)?.flag}
          alt={currentLang}
          width={32}
          height={32}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map(({ code, name, flag }) => (
            code !== currentLang && (
              <Link
                key={code}
                href={`/${code}/${router.pathname.replace('[lang]', '').replace(/^\/+/, '')}`}
                className={styles.dropdownItem}
              >
                <div style={{ marginRight: "8px" }}>
                  <img src={flag} alt={name} width={32} height={32} className={styles.flagIcon} />
                </div>
                <span className={styles.languageName}>{name}</span>
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}