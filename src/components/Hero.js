import styles from '@/styles/HeroA.module.css'
import { useRouter } from 'next/router'
import PhoneCall from './PhoneCall'

const Hero = ({ translations }) => {
  const router = useRouter()
  const currentLang = router.query.lang || 'fi'

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <h1>{translations.Hero.title1} <span style={{ color: 'var(--secondary)' }}>{translations.Hero.title2}</span> {translations.Hero.title3} <span style={{ color: 'var(--secondary)' }}>{translations.Hero.title4}</span></h1>
            <div className={styles.buttonGroup}>
              <button className={styles.startButton} onClick={() => window.location.href = 'https://app.invoicepay.fi/register'}>
                {translations.Hero.startButton} <span className={styles.shimmer}></span>
              </button>
              <button className={styles.contactButton} onClick={() => window.location.href = `/${currentLang}/contact-us`}>
                {translations.Hero.contactButton}
              </button>
            </div>
            <PhoneCall translations={translations.PhoneCall} />
          </div>

          <div className={styles.heroImage}>
            <img src="/images/mobile.png" alt="Mobile App" width={240} height={440} />
          </div>

          <div className={styles.heroText}>
            <p>{translations.Hero.description}</p>
            <div className={styles.storeButtons}>
              <a style={{ marginLeft: "-10px" }} href="#" className={styles.storeLink}>
                <img src="/images/appstore.webp" alt="App Store" width={180} height={68} />
              </a>
              <a href="#" className={styles.storeLink}>
                <img src="/images/playstore.webp" alt="Play Store" width={180} height={65} />
              </a>
            </div>

          </div>
        </div>

        <div className={styles.featureBoxes}>
          <div className={styles.featureBox} style={{ backgroundColor: 'var(--light)' }}>
            <span className={styles.featureNumber}>1</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48">
              <path d="M184 48l144 0c4.4 0 8 3.6 8 8l0 40L176 96l0-40c0-4.4 3.6-8 8-8zm-56 8l0 40L64 96C28.7 96 0 124.7 0 160l0 96 192 0 128 0 192 0 0-96c0-35.3-28.7-64-64-64l-64 0 0-40c0-30.9-25.1-56-56-56L184 0c-30.9 0-56 25.1-56 56zM512 288l-192 0 0 32c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-32L0 288 0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-128z" />
            </svg>
            <h3>{translations.Hero.features.work.title}</h3>
            <p>{translations.Hero.features.work.description}</p>
          </div>
          <div className={styles.featureBox} style={{ backgroundColor: 'var(--primary)', color: 'var(--light)' }}>
            <span className={styles.featureNumber}>2</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48" fill="currentColor">
              <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 192 0 0-64L96 256zM240 416l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
            <h3>{translations.Hero.features.invoice.title}</h3>
            <p>{translations.Hero.features.invoice.description}</p>
          </div>
          <div className={styles.featureBox} style={{ backgroundColor: 'var(--light)' }}>
            <span className={styles.featureNumber}>3</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48">
              <path d="M14 2.2C22.5-1.7 32.5-.3 39.6 5.8L80 40.4 120.4 5.8c9-7.7 22.3-7.7 31.2 0L192 40.4 232.4 5.8c9-7.7 22.3-7.7 31.2 0L304 40.4 344.4 5.8c7.1-6.1 17.1-7.5 25.6-3.6s14 12.4 14 21.8V488c0 9.4-5.5 17.9-14 21.8s-18.5 2.5-25.6-3.6L304 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L192 471.6l-40.4 34.6c-9 7.7-22.3 7.7-31.2 0L80 471.6 39.6 506.2c-7.1 6.1-17.1 7.5-25.6 3.6S0 497.4 0 488V24C0 14.6 5.5 6.1 14 2.2zM96 144c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96zM80 352c0 8.8 7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96c-8.8 0-16 7.2-16 16zM96 240c-8.8 0-16 7.2-16 16s7.2 16 16 16H288c8.8 0 16-7.2 16-16s-7.2-16-16-16H96z" />
            </svg>
            <h3>{translations.Hero.features.expenses.title}</h3>
            <p>{translations.Hero.features.expenses.description}</p>
          </div>
          <div className={styles.featureBox} style={{ backgroundColor: 'var(--secondary)', color: 'var(--light)' }}>
            <span className={styles.featureNumber}>4</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="currentColor">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <h3>{translations.Hero.features.payment.title}</h3>
            <p>{translations.Hero.features.payment.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
