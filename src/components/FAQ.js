import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is freelancing?",
      answer: "Freelancing is a flexible way to work entrepreneurially without setting up your own company. You handle your own clients, manage your schedule and set your own prices, while InvoicePay handles the administrative tasks, such as invoicing, taxes and payroll."
    },
    {
      question: "Who is freelancing for?",
      answer: {
        text: "Freelancing is ideal for:",
        list: [
          "Freelancers and creative professionals",
          "Service providers",
          "Students looking for additional income",
          "Full-time workers looking for a side hustle",
          "Retirees looking to stay active"
        ]
      }
    },
    {
      question: "How does InvoicePay invoicing work?",
      answer: "InvoicePay works as your invoicing partner. You send invoices to your clients through our platform, and we handle invoicing, taxes and payroll on your behalf. Your salary is paid directly to your bank account, including all necessary deductions."
    },
    {
      question: "How quickly can I start?",
      answer: "You can start invoicing immediately after registration. The setup takes less than 5 minutes - log in, add your bank details and you're ready to create invoices."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faq} id="faq">
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Frequently Asked <span>Questions</span></h2>
          <p>Find answers to common questions about freelancing and InvoicePay services</p>
        </div>
        
        <div className={styles.faqWrapper}>
          <div className={styles.faqGrid}>
            <div className={styles.faqIllustration}>
              <img src="/images/chat.png" alt="FAQ Helper Character" />
            </div>

            <div className={styles.faqQuestions}>
              {faqData.map((item, index) => (
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
