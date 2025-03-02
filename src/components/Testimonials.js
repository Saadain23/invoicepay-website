import React from 'react';
import styles from '@/styles/Testimonials.module.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Matti Virtanen",
      role: "IT-consultant",
      text: "Invoicing and tax reporting work automatically. I can focus fully on my work.",
      image: "/api/placeholder/50/50"
    },
    {
      name: "Laura Korhonen",
      role: "Photographer",
      text: "I invoice directly from my phone. I recommend it to all freelancers!",
      image: "/api/placeholder/50/50"
    },
    {
      name: "Mikko Nieminen",
      role: "Webshop owner",
      text: "The webshop integration saved me a lot of time. Excellent customer service!",
      image: "/api/placeholder/50/50"
    },
    {
      name: "Anna Mäkelä",
      role: "Graphic designer",
      text: "Quick responses to questions and the service keeps getting better.",
      image: "/api/placeholder/50/50"
    },
    {
      name: "Juha Saarinen",
      role: "Sales representative",
      text: "Mileage claims are easy to record on my phone.",
      image: "/api/placeholder/50/50"
    }
  ];

  return (
    <section className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles['section-title']}>
          <h2>Testimonials</h2>
        </div>
        <div className={styles['testimonial-carousel']}>
          <div className={styles['testimonial-cards']}>
            {testimonials.map((testimonial, index) => (
              <div className={styles['testimonial-card']} key={index}>
                <div className={styles['testimonial-author']}>
                  <div className={styles['testimonial-avatar']}>
                    <img src={testimonial.image} alt={testimonial.name} />
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
                    <img src={testimonial.image} alt={testimonial.name} />
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
