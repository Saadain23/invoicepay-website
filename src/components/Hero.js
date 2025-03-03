import styles from '@/styles/HeroA.module.css'

const Hero = ({ translations }) => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <h1>{translations.Hero.title1} <span style={{color: 'var(--secondary)'}}>{translations.Hero.title2}</span> {translations.Hero.title3} <span style={{color: 'var(--secondary)'}}>{translations.Hero.title4}</span></h1>
            <button className={styles.startButton} onClick={() => window.location.href = 'https://app.invoicepay.fi/register'}>
              {translations.Hero.startButton} <span className={styles.shimmer}></span>
            </button>
          </div>
          
          <div className={styles.heroImage}>
            <img src="/images/mobile.webp" alt="Mobile App" width={440} height={500} />
          </div>

          <div className={styles.heroText}>
            <p>{translations.Hero.description}</p>
            <div className={styles.storeButtons}>
              <a href="#" className={styles.storeLink}>
                <img src="/images/appstore.png" alt="App Store" width={142} height={53} />
              </a>
              <a href="#" className={styles.storeLink}>
                <img src="/images/playstore.png" alt="Play Store" width={140} height={50} />
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.featureBoxes}>
          <div className={styles.featureBox} style={{backgroundColor: 'var(--light)'}}>
            <img src="/images/work.webp" alt="Do the work" width={100} height={100} />
            <h3>{translations.Hero.features.work.title}</h3>
            <p>{translations.Hero.features.work.description}</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: '#7D54B8'}}>
            <img src="/images/invoice_3d.webp" alt="Send invoice" width={88} height={90} />
            <h3>{translations.Hero.features.invoice.title}</h3>
            <p>{translations.Hero.features.invoice.description}</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: 'var(--light)'}}>
            <img src="/images/expense.webp" alt="Record expenses" width={100} height={100} />
            <h3>{translations.Hero.features.expenses.title}</h3>
            <p>{translations.Hero.features.expenses.description}</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: '#FF6FA3'}}>
            <img src="/images/salary.webp" alt="Get paid" width={100} height={100} />
            <h3>{translations.Hero.features.payment.title}</h3>
            <p>{translations.Hero.features.payment.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
