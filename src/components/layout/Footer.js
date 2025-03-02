import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <div className={styles.footerLogo}>
              <img src="../logo.png" alt="InvoicePay Logo" width={180} height={58} />
            </div>
            <p className={styles.footerText}>
              We simplify invoicing and payroll for freelancers and entrepreneurs without business id. Modern invoicing, seamless payroll, and hassle-free accounting in one place.
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
            <h3 className={styles.footerHeading}>Pages</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/#hero">Home</a></li>
              <li><a href="/#testimonials">Testimonials</a></li>
              <li><a href="/#features">Features</a></li>
              <li><a href="/#pricing">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.footerHeading}>Company</h3>
            <ul className={styles.footerLinks}>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 InvoicePay. All rights reserved. · <a href="/privacy-policy">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}
