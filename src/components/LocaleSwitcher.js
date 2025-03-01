// components/LocaleSwitcher.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LocaleSwitcher = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { pathname, asPath, query } = router;

  return (
    <div className="locale-switcher">
      <Link
        href={{ pathname, query }}
        locale="en"
        scroll={false}
        className={router.locale === 'en' ? 'active' : ''}
      >
        English
      </Link>
      <span> | </span>
      <Link
        href={{ pathname, query }}
        locale="fi"
        scroll={false}
        className={router.locale === 'fi' ? 'active' : ''}
      >
        Suomi
      </Link>
    </div>
  );
};

export default LocaleSwitcher;