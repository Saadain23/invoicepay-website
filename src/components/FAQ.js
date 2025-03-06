import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = ({ translations }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>{translations.FAQ.title1} <span>{translations.FAQ.title2}</span></h2>
          <p>{translations.FAQ.description}</p>
        </div>
        
        <div className={styles.faqWrapper}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIllustration}>
              <img src="/images/chat.webp" alt="FAQ Helper Character" width="400" height="400"/>
            </div>

            <div className={styles.faqQuestions}>
              {translations.FAQ.items.map((item, index) => (
                <div 
                  key={index} 
                  className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                >
                  <div 
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3>{item.question}</h3>
                    <button className={styles.faqToggle}>
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                    </button>
                  </div>
                  <div className={styles.faqAnswer}>
                    {typeof item.answer === 'string' ? (
                      <p>{item.answer}</p>
                    ) : (
                      <>
                        <p>{item.answer.text}</p>
                        <ul>
                          {item.answer.list.map((listItem, i) => (
                            <li key={i}>{listItem}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
