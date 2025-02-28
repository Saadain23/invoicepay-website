import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from '@/styles/LocaleSwitcher.module.css';

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale, locales } = router;
  const t = useTranslations('Common');

  // Handle locale switch
  const switchLocale = (newLocale) => {
    router.push(router.asPath, router.asPath, { locale: newLocale });
  };

  return (
    <div className={styles['locale-switcher']}>
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`${styles['locale-switcher-button']} ${
            locale === loc ? styles.active : ''
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LocaleSwitcher;
