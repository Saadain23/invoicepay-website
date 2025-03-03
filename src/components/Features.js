import styles from '../styles/Features.module.css';

const Features = ({ translations }) => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>{translations.Features.title1} <span>{translations.Features.title2}</span></h2>
          <p>{translations.Features.description}</p>
        </div>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#582a98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                <line x1="12" y1="18" x2="12" y2="18.01"></line>
              </svg>
            </div>
            <h3>{translations.Features.cards.mobileApp.title}</h3>
            <p>{translations.Features.cards.mobileApp.description}</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#582a98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3>{translations.Features.cards.professionalInvoicing.title}</h3>
            <p>{translations.Features.cards.professionalInvoicing.description}</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#582a98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
            </div>
            <h3>{translations.Features.cards.authentication.title}</h3>
            <p>{translations.Features.cards.authentication.description}</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#582a98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
                </svg>
            </div>
            <h3>{translations.Features.cards.salaryPayments.title}</h3>
            <p>{translations.Features.cards.salaryPayments.description}</p>
          </div>
            
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#582a98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
            </div>
            <h3>{translations.Features.cards.expenseTracking.title}</h3>
            <p>{translations.Features.cards.expenseTracking.description}</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#582a98" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            </div>
            <h3>{translations.Features.cards.reporting.title}</h3>
            <p>{translations.Features.cards.reporting.description}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
