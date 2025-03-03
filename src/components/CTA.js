import styles from '../styles/CTA.module.css';

const CTA = ({ translations }) => {
  return (
    <section className={styles.cta}>
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <h2>{translations.CTA.title}</h2>
          <p>{translations.CTA.description}</p>
          <a href="https://app.invoicepay.fi/register" className={styles.btn}>{translations.CTA.button}</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
