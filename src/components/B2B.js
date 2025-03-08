import styles from '@/styles/B2B.module.css'
import { useRouter } from 'next/router'

const B2B = ({ translations }) => {
  const router = useRouter()
  const currentLang = router.query.lang || 'fi'

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <div className={styles.heroTitle}>
                <h1>{translations.B2B.hero.title1} <span style={{color: 'var(--secondary)'}}>{translations.B2B.hero.title2}</span> {translations.B2B.hero.title3} <span style={{color: 'var(--secondary)'}}>{translations.B2B.hero.title4}</span></h1>
                <p className={styles.heroDescription}>{translations.B2B.hero.description}</p>
                <button className={styles.contactButton} onClick={() => window.location.href = `/${currentLang}/contact-us`}>
                  {translations.B2B.hero.contactButton}
                </button>
              </div>
            </div>
            
            <div className={styles.heroRight}>
              <div className={styles.heroImage}>
                <img src="/images/mobile.webp" alt="Mobile App" width={440} height={500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{translations.B2B.howItWorks.title}</h2>
          <div className={styles.featureBoxes}>
            <div className={styles.featureBox} style={{backgroundColor: 'var(--light)'}}>
              <span className={styles.featureNumber}>1</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="currentColor">
                <path d="M64 256l0-96 160 0 0 96L64 256zm0 64l160 0 0 96L64 416l0-96zm224 96l0-96 160 0 0 96-160 0zM448 256l-160 0 0-96 160 0 0 96zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/>
              </svg>
              <h3>{translations.B2B.howItWorks.sendPayroll}</h3>
              <p>{translations.B2B.howItWorks.sendPayrollDescription}</p>
            </div>
            <div className={styles.featureBox} style={{backgroundColor: 'var(--primary)', color: 'var(--light)'}}>
              <span className={styles.featureNumber}>2</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="48" height="48" fill="currentColor">
                <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM80 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm16 96l192 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32L96 352c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zm0 32l0 64 192 0 0-64L96 256zM240 416l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
              </svg>
              <h3>{translations.B2B.howItWorks.invoice}</h3>
              <p>{translations.B2B.howItWorks.invoiceDescription}</p>
            </div>
            <div className={styles.featureBox} style={{backgroundColor: 'var(--light)'}}>
              <span className={styles.featureNumber}>3</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="48" height="48" fill="currentColor">
                <path d="M48.1 240c-.1 2.7-.1 5.3-.1 8l0 16c0 2.7 0 5.3 .1 8L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l28.3 0C89.9 419.9 170 480 264 480l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0c-57.9 0-108.2-32.4-133.9-80L256 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-143.8 0c-.1-2.6-.2-5.3-.2-8l0-16c0-2.7 .1-5.4 .2-8L256 240c17.7 0 32-14.3 32-32s-14.3-32-32-32l-125.9 0c25.7-47.6 76-80 133.9-80l24 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-24 0C170 32 89.9 92.1 60.3 176L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l16.1 0z"/>
              </svg>
              <h3>{translations.B2B.howItWorks.pay}</h3>
              <p>{translations.B2B.howItWorks.payDescription}</p>
            </div>
            <div className={styles.featureBox} style={{backgroundColor: 'var(--secondary)', color: 'var(--light)'}}>
              <span className={styles.featureNumber}>4</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="currentColor">
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
              </svg>
              <h3>{translations.B2B.howItWorks.weHandle}</h3>
              <p>{translations.B2B.howItWorks.weHandleDescription}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container" id="features">
          <h2 className={styles.sectionTitle}>{translations.B2B.features.title}</h2>
          <div className={styles.featuresContent}>
            <div className={styles.featuresLeft}>
              <img src="/images/b2b.webp" alt="Features" width={300} height={300} />
            </div>
            <div className={styles.featuresRight}>
              <div className={styles.featuresList}>
                {translations.B2B.features.items.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <svg className={styles.checkmark} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
                      <path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default B2B
