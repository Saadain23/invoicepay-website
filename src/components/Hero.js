import styles from '@/styles/HeroA.module.css'
import { useRouter } from 'next/router'

const Hero = ({ translations }) => {
  const router = useRouter()
  const currentLang = router.query.lang || 'fi'

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <h1>{translations.Hero.title1} <span style={{color: 'var(--secondary)'}}>{translations.Hero.title2}</span> {translations.Hero.title3} <span style={{color: 'var(--secondary)'}}>{translations.Hero.title4}</span></h1>
            <div className={styles.buttonGroup}>
              <button className={styles.startButton} onClick={() => window.location.href = 'https://app.invoicepay.fi/register'}>
                {translations.Hero.startButton} <span className={styles.shimmer}></span>
              </button>
              <button className={styles.contactButton} onClick={() => window.location.href = `/${currentLang}/contact-us`}>
                {translations.Hero.contactButton}
              </button>
            </div>
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
            <i className="fas fa-briefcase fa-3x"></i>
            <h3>{translations.Hero.features.work.title}</h3>
            <p>{translations.Hero.features.work.description}</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: 'var(--primary)', color: 'var(--light)'}}>
            <i className="fas fa-file-invoice fa-3x"></i>
            <h3>{translations.Hero.features.invoice.title}</h3>
            <p>{translations.Hero.features.invoice.description}</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: 'var(--light)'}}>
            <i className="fas fa-receipt fa-3x"></i>
            <h3>{translations.Hero.features.expenses.title}</h3>
            <p>{translations.Hero.features.expenses.description}</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: 'var(--secondary)', color: 'var(--light)'}}>
            <i className="fas fa-wallet fa-3x"></i>
            <h3>{translations.Hero.features.payment.title}</h3>
            <p>{translations.Hero.features.payment.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
