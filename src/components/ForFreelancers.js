import styles from '@/styles/Privacy.module.css';

const ForFreelancers = ({ translations }) => {
  const t = translations.ForFreelancers;

  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.container}>
        {/* Main Title */}
        <h1>{t.title}</h1>
        
        {/* Last Updated Section */}
        <p className={styles.lastUpdated}>{t.lastUpdated}</p>

        {/* Policy Content */}
        <div className={styles.policyContent}>
          {Object.entries(t.sections).map(([key, section]) => (
            <section key={key}>
              {/* Section Title */}
              <h2>{section.title}</h2>
              
              {/* Section Description */}
              {section.description && <p>{section.description}</p>}
              
              {/* Intro Section */}
              {section.intro && (
                <>
                  <h3>Introduction</h3>
                  <p>{section.intro}</p>
                </>
              )}

              {/* Items List */}
              {section.items && Array.isArray(section.items) ? (
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === 'string' ? (
                        item
                      ) : (
                        <>
                          <strong>{item.title}:</strong> {item.content}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : null}

              {/* Contact Email */}
              {section.email && (
                <p>
                  <a href={`mailto:${section.email}`}>{section.email}</a>
                </p>
              )}

              {/* Additional Information */}
              {section.info && <p>{section.info}</p>}
              
              {/* Notes */}
              {section.note && <p><strong>Note:</strong> {section.note}</p>}
              
              {/* Contact Info */}
              {section.contact && <p><strong>Contact:</strong> {section.contact}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForFreelancers;
