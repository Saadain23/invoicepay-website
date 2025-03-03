import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className={styles.contactUs}>
      <div className={styles.container}>
        <h1 className={styles.sectionTitle}>Contact Us</h1>
        <div className={styles.contactGrid}>
          {/* Contact Form */}
          <div className={styles.contactFormCard}>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
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
                <i className="fas fa-envelope"></i>
                <div>
                  <h3>sales@invoicepay.fi</h3>
                  <p>Email Us</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h3>+358 50 123 4567</h3>
                  <p>Call Us</p>
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
