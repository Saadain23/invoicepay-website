import { useState, useEffect } from 'react';
import styles from '../styles/CookieConsent.module.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <button
          onClick={handleClose}
          className={styles.closeButton}
        >
          ✕
        </button>
        <div className={styles.content}>
          <p>
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
            <a href="/privacy-policy" className={styles.link}>
              Learn more
            </a>
          </p>
        </div>
        <div className={styles.buttonGroup}>
          <button
            onClick={handleReject}
            className={styles.rejectButton}
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className={styles.acceptButton}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;