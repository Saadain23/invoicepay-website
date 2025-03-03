import styles from '@/styles/Privacy.module.css';

const PrivacyPolicy = ({ translations }) => {
  const t = translations.PrivacyPolicy;

  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>{t.title}</h1>
        <p className={styles.lastUpdated}>{t.lastUpdated}</p>

        <div className={styles.policyContent}>
          {Object.entries(t.sections).map(([key, section]) => (
            <section key={key}>
              <h2>{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              
              {section.intro && (
                <>
                  <p>{section.intro}</p>
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
                </>
              )}

              {section.email && (
                <p>
                  <a href={`mailto:${section.email}`}>{section.email}</a>
                </p>
              )}

              {section.info && <p>{section.info}</p>}
              {section.note && <p>{section.note}</p>}
              {section.contact && <p>{section.contact}</p>}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
