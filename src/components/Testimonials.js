import React from 'react';
import styles from '@/styles/Testimonials.module.css';

const Testimonials = ({ translations }) => {
  const testimonials = translations.Testimonials.items;

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles['section-title']}>
          <h2>{translations.Testimonials.title}</h2>
        </div>
        <div className={styles['testimonial-carousel']}>
          <div className={styles['testimonial-cards']}>
            {testimonials.map((testimonial, index) => (
              <div className={styles['testimonial-card']} key={index}>
                <div className={styles['testimonial-author']}>
                  <div className={styles['testimonial-avatar']}>
                    <img src={`/images/review${index + 1}.webp`} alt={testimonial.name} />
                  </div>
                  <div className={styles['testimonial-info']}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <p className={styles['testimonial-text']}>{testimonial.text}</p>
              </div>
            ))}
            {/* Duplicate testimonials for smooth infinite scroll */}
            {testimonials.map((testimonial, index) => (
              <div className={styles['testimonial-card']} key={`duplicate-${index}`}>
                <div className={styles['testimonial-author']}>
                  <div className={styles['testimonial-avatar']}>
                    <img src={`/images/review${index + 1}.webp`} alt={testimonial.name} />
                  </div>
                  <div className={styles['testimonial-info']}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
                <p className={styles['testimonial-text']}>{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
