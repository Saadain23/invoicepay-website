import styles from '../styles/Pricing.module.css';

const Pricing = ({ translations }) => {
  const checkmarkSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.pricingcontainer} >
        <div className={styles.sectionTitle}>
          <h2>{translations.Pricing.title}</h2>
          <p>{translations.Pricing.subtitle}</p>
        </div>

        <div className={styles.pricingPlans}>
          {/* Free Plan */}
          <div className={styles.pricingCard}>
            <h3>{translations.Pricing.freePlan.title}</h3>
            <div className={styles.pricingPrice}>
              {translations.Pricing.freePlan.price}
              <span>{translations.Pricing.freePlan.period}</span>
            </div>
            <p>{translations.Pricing.freePlan.description}</p>
            <div className={styles.pricingFeatures}>
              {translations.Pricing.freePlan.features.map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={`${styles.btn} ${styles.btnOutline}`}>
              {translations.Pricing.freePlan.button}
            </a>
          </div>

          {/* Percentage Plan */}
          <div className={styles.pricingCard}>
            <h3>{translations.Pricing.percentagePlan.title}</h3>
            <div className={styles.pricingPrice}>
              {translations.Pricing.percentagePlan.price}
              <span>{translations.Pricing.percentagePlan.period}</span>
            </div>
            <p>{translations.Pricing.percentagePlan.description}</p>
            <div className={styles.pricingFeatures}>
              {translations.Pricing.percentagePlan.features.map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={`${styles.btn} ${styles.btnOutline}`}>
              {translations.Pricing.percentagePlan.button}
            </a>
          </div>

          {/* Monthly Plan */}
          <div className={`${styles.pricingCard}`}>
            <h3>{translations.Pricing.monthlyPlan.title}</h3>
            <div className={styles.pricingPrice}>
              {translations.Pricing.monthlyPlan.price}
              <span>{translations.Pricing.monthlyPlan.period}</span>
            </div>
            <p>{translations.Pricing.monthlyPlan.description}</p>
            <div className={styles.pricingFeatures}>
              {translations.Pricing.monthlyPlan.features.map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={`${styles.btn} ${styles.btnOutline}`}>
              {translations.Pricing.monthlyPlan.button}
            </a>
          </div>

          {/* Yearly Plan */}
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <h3>{translations.Pricing.yearlyPlan.title}</h3>
            <div className={styles.pricingPrice}>
              {translations.Pricing.yearlyPlan.price}
              <span>{translations.Pricing.yearlyPlan.period}</span>
            </div>
            <p>{translations.Pricing.yearlyPlan.description}</p>
            <div className={styles.pricingFeatures}>
              {translations.Pricing.yearlyPlan.features.map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={styles.btn}>
              {translations.Pricing.yearlyPlan.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
