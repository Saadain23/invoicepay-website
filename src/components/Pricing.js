import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const checkmarkSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Clear and transparent Pricing</h2>
          <p>Choose the option that suits you best. No hidden costs, you only pay when you get paid.</p>
        </div>
        
        <div className={styles.pricingPlans}>
          {/* Free Plan */}
          <div className={styles.pricingCard}>
            <h3>Free plan</h3>
            <div className={styles.pricingPrice}>0€<span>/start</span></div>
            <p>Start invoicing immediately without a Finnish Business ID or commitment</p>
            <div className={styles.pricingFeatures}>
              {[
                'Free invoice creation and sending',
                'No Finnish Business ID required',
                'Email and e-invoices',
                'Customer register',
                'Invoice tracking',
                'Payment reminders',
                'Mobile app'
              ].map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={`${styles.btn} ${styles.btnOutline}`}>
              Start for free
            </a>
          </div>

          {/* Percentage Plan */}
          <div className={styles.pricingCard}>
            <h3>Percentage plan</h3>
            <div className={styles.pricingPrice}>3%<span>/per invoice</span></div>
            <p>Perfect for random invoicing and starting</p>
            <div className={styles.pricingFeatures}>
              {[
                '3% fee only from paid invoices',
                'Unlimited number of invoices',
                'Free invoice creation',
                'Insurance for YEL',
                'Expense tracking',
                'Tax reporting',
                'Fast payroll'
              ].map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={`${styles.btn} ${styles.btnOutline}`}>
              Start now
            </a>
          </div>

          {/* Monthly Plan */}
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <h3>Monthly Plan</h3>
            <div className={styles.pricingPrice}>29,99€<span>/month</span></div>
            <p>Perfect for regular invoicing and growing business</p>
            <div className={styles.pricingFeatures}>
              {[
                'Fixed 29,99€ monthly fee',
                'Unlimited number of invoices per month',
                'Free invoice creation',
                'Insurance for YEL',
                'Expense tracking',
                'Tax reporting',
                'Fast payroll'
              ].map((feature, index) => (
                <div key={index} className={styles.pricingFeature}>
                  {checkmarkSvg}
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <a href="https://app.invoicepay.fi/register" className={styles.btn}>
              Start now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
