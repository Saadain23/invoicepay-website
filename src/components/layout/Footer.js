import styles from '@/styles/Footer.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Footer({ translations }) {
  const router = useRouter();
  const currentLang = router.query.lang || 'fi';

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerLogo}>
              <img src="/logo_on_primary.png" alt="InvoicePay Logo" width={180} height={58} />
            </div>
            <p className={styles.footerText}>
              {translations.Footer?.description}
            </p>
            <div className={styles.footerContact}>
              <p><i className="fas fa-envelope" style={{ color: 'var(--secondary)' }}></i> 
              <a href="mailto:asiakaspalvelu@invoicepay.fi">asiakaspalvelu@invoicepay.fi</a></p>
              <p><i className="fas fa-phone" style={{ color: 'var(--secondary)' }}></i> 
              <a href="tel:+358123453456">+358 12 345 3456</a></p>
            </div>
            <div className={styles.footerSocial}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          
          <div>
            <h3 className={styles.footerHeading}>{translations.Footer?.sections.pages.title}</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/#hero">{translations.Footer?.sections.pages.links.home}</a></li>
              <li><a href="/#testimonials">{translations.Footer?.sections.pages.links.testimonials}</a></li>
              <li><a href="/#features">{translations.Footer?.sections.pages.links.features}</a></li>
              <li><a href="/#pricing">{translations.Footer?.sections.pages.links.pricing}</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerHeading}>{translations.Footer?.sections.company.title}</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href={`/${currentLang}/privacy-policy`}>
                  {translations.Footer?.sections.company.links.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/contact-us`}>
                  {translations.Footer?.sections.company.links.contact}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {translations.Footer?.copyright} · <Link href={`/${currentLang}/privacy-policy`}>{translations.Footer?.sections.company.links.privacyPolicy}</Link></p>
        </div>
      </div>
    </footer>
  );
}
