import styles from '@/styles/HeroB.module.css'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <h1>Finland's <span style={{color: 'var(--secondary)'}}>easiest</span> invoicing service for <span style={{color: 'var(--secondary)'}}>Light entrepreneurs</span></h1>
            <button className={styles.startButton}>
              Start Free <span className={styles.shimmer}></span>
            </button>
          </div>
          
          <div className={styles.heroImage}>
            <img src="/images/mobile.png" alt="Mobile App" width={440} height={500} />
          </div>

          <div className={styles.heroText}>
            <p>InvoicePay makes light entrepreneurship effortless. Invoice in minutes without registering a company. Work freely on your terms – we'll handle the rest. Sign up for free or Download our app now!</p>
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
            <img src="/images/work.png" alt="Do the work" width={100} height={100} />
            <h3>Do the work</h3>
            <p>Focus on your work and let us handle the rest</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: '#7D54B8'}}>
            <img src="/images/invoice_3d.webp" alt="Send invoice" width={88} height={90} />
            <h3>Send an invoice</h3>
            <p>Create an invoice in minutes and send it to your client</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: 'var(--light)'}}>
            <img src="/images/expense.webp" alt="Record expenses" width={100} height={100} />
            <h3>Record expenses</h3>
            <p>Record mileage, meal and other expenses</p>
          </div>
          <div className={styles.featureBox} style={{backgroundColor: '#FF6FA3'}}>
            <img src="/images/salary.png" alt="Get paid" width={100} height={100} />
            <h3>Get paid</h3>
            <p>Money in your bank account within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
