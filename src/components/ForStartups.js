import styles from '@/styles/Privacy.module.css';

const ForStartups = ({ translations }) => {
  const t = translations.ForStartups;

  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>{t.title}</h1>

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
                  <h3>{section.intro.title}</h3>
                  <p>{section.intro.description}</p>
                </>
              )}

              {/* Why InvoicePay for Startups Section */}
              {section.whyInvoicePayForStartups && (
                <>
                  <h3>{section.whyInvoicePayForStartups.title}</h3>
                  <p>{section.whyInvoicePayForStartups.description}</p>
                </>
              )}

              {/* Invoicing Section */}
              {section.invoicing && (
                <>
                  <h3>{section.invoicing.title}</h3>
                  <p>{section.invoicing.description}</p>
                </>
              )}

              {/* Expenses Section */}
              {section.expenses && (
                <>
                  <h3>{section.expenses.title}</h3>
                  <p>{section.expenses.description}</p>
                </>
              )}

              {/* Payroll Section */}
              {section.payroll && (
                <>
                  <h3>{section.payroll.title}</h3>
                  <p>{section.payroll.description}</p>
                </>
              )}

              {/* Employee Management Section */}
              {section.employeeManagement && (
                <>
                  <h3>{section.employeeManagement.title}</h3>
                  <p>{section.employeeManagement.description}</p>
                </>
              )}

              {/* Scalability Section */}
              {section.scalability && (
                <>
                  <h3>{section.scalability.title}</h3>
                  <p>{section.scalability.description}</p>
                </>
              )}

            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForStartups;
