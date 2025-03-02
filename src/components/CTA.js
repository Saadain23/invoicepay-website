import styles from '../styles/CTA.module.css';

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>Start invoicing today</h2>
          <p>Join the thousands of satisfied freelancers. Start for free and pay only when you get paid.</p>
          <a href="https://app.invoicepay.fi/register" className={styles.btn}>Start for free</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
