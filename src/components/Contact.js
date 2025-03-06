import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = ({ translations }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>{translations.Contact.title}</h1>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.contactFormCard}>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">{translations.Contact.name}</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">{translations.Contact.email}</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">{translations.Contact.subject}</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">{translations.Contact.message}</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>{translations.Contact.sendMessage}</button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <div className={styles.companyInfo}>
                <h2>InvoicePay</h2>
                <p>1234567-8</p>
              </div>
              <div className={styles.infoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <div>
                  <h3>sales@invoicepay.fi</h3>
                  <p>{translations.Contact.emailUs}</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3>+358 50 123 4567</h3>
                  <p>{translations.Contact.callUs}</p>
                </div>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.9310024687054!2d24.93844!3d60.16784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDEwJzA0LjIiTiAyNMKwNTYnMTguNCJF!5e0!3m2!1sfi!2sfi!4v1234567890!5m2!1sfi!2sfi" 
                width="100%" 
                height="300" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy"
                title="location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
