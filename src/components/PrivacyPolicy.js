import styles from '@/styles/Privacy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.privacyPolicy}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Effective Date: 26.02.2025</p>

        <div className={styles.policyContent}>
          <section>
            <h2>1. Introduction</h2>
            <p>Welcome to InvoicePay, an invoicing and payroll solution designed for light entrepreneurs in Finland. We are committed to protecting your privacy and ensuring the security of your personal data. This Privacy Policy outlines how we collect, use, store, and protect your personal information in compliance with the General Data Protection Regulation (GDPR) and applicable EU data protection laws.</p>
          </section>

          <section>
            <h2>2. Data Controller</h2>
            <p>InvoicePay, located in Finland, is the data controller responsible for processing your personal data. If you have any questions or concerns regarding your personal data, you may contact us at:<br />
                <a href="mailto:support@invoicepay.fi">support@invoicepay.fi</a>
            </p>
          </section>

          
          <section>
            <h2>3. Information We Collect</h2>
            <p>We collect and process the following types of personal information:</p>
            <ul>
              <li>Identifying Information: Name, personal identification number (hetu)</li>
              <li>Contact Information: Email, phone number</li>
              <li>Authentication Information: Email, password</li>
              <li>Financial Information: Tax information, bank account number</li>
              <li>Business Information: Customer information, billing information</li>
              <li>Verification Information: Documents for verifying identity (if required)</li>
              <li>Expense Information: Expense claims and related documents</li>
            </ul>
          </section>

          <section>
            <h2>4. Purpose of Processing</h2>
            <p>We process personal information for the following purposes:</p>
            <ul>
                <li><strong>User Identification:</strong> Name and personal identification number are needed for user identification and tax information retrieval from authorities (e.g., Tax Administration).</li>
                <li><strong>Communication:</strong> Email and phone number are used for important notifications, reports, marketing campaigns, and customer support.</li>
                <li><strong>Authentication and Security:</strong> Email and password are needed for account management and secure login.</li>
                <li><strong>Payroll Calculation:</strong> Tax information is retrieved from the Tax Administration and used only for payroll calculation.</li>
                <li><strong>Billing:</strong> Customer information is processed for correct billing and sending.</li>
                <li><strong>Payroll Payments:</strong> Bank account information is used for payroll payment to the user's account.</li>
                <li><strong>Identity Verification:</strong> If a user is required to provide identity verification or other documents, they are used only for identity verification.</li>
                <li><strong>Expense Handling:</strong> If a user reports expenses and attaches documents, the information is processed for claiming and verifying vero-free expense claims.</li>
            </ul>
          </section>

          <section>
            <h2>5. Legal Basis for Processing</h2>
            <p>The processing of personal information is based on the following legal bases:</p>
            <ul>
                <li><strong>Performance of Contract:</strong> Processing is necessary for the performance of our invoicing and payroll services.</li>
                <li><strong>Compliance with Laws:</strong> Compliance with Finnish and EU tax laws.</li>
                <li><strong>Legitimate Interest:</strong> Petitioning, security, and customer service.</li>
                <li><strong>Consent:</strong> Marketing communications if the user has given consent.</li>
            </ul>
          </section>

          <section>
            <h2>6. Retention of Personal Information</h2>
            <p>We retain personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with legal obligations, and to resolve possible disputes. Retention periods may vary depending on legal requirements.</p>
          </section>

          <section>
            <h2>7. Sharing and Third Parties</h2>
            <p>We may share personal information with the following parties:</p>
            <ul>
                <li><strong>Authorities:</strong> For compliance with Finnish and EU tax laws (e.g., Tax Administration for tax information).</li>
                <li><strong>Payment Service Providers:</strong> For payroll payment processing.</li>
                <li><strong>Service Providers:</strong> Those assisting us in providing our services (e.g., cloud storage, customer service tools).</li>
                <li><strong>Legal or Regulatory Authorities:</strong> If required by law or to protect our interests.</li>
            </ul>
            <p>We do not sell or rent your personal information to third parties.</p>
          </section>

          <section>
            <h2>8. Security</h2>
            <p>We use appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration. These measures include encryption, access control, and secure data storage.</p>
          </section>

          <section>
            <h2>9. User Rights</h2>
            <p>Under GDPR, you have the following rights:</p>
            <ul>
                <li>Access to Information: You can request access to your personal information.</li>
                <li>Correction of Information: You can request correction of inaccurate or incomplete information.</li>
                <li>Deletion of Information: You can request deletion of your information, unless law requires its retention.</li>
                <li>Restriction of Processing: You can request restriction of processing of your information in certain situations.</li>
                <li>Data Transferability: You can request transfer of your information to another service provider.</li>
                <li>Withdrawal of Consent: You can withdraw consent given for marketing communications at any time.</li>
            </ul>
            <p>To exercise these rights, you may contact us at [Insert Contact Information].</p>
          </section>

          <section>
            <h2>10. International Transfers</h2>
            <p>If we transfer your personal information outside the European Economic Area (EEA), we ensure appropriate safeguards, such as standard contractual clauses (SCC), to ensure the security of the transfer.</p>
          </section>

          <section>
            <h2>11. Cookies and Tracking</h2>
            <p>We may use cookies and similar tracking technologies for improving user experience and website traffic analysis. You can manage cookie settings in your browser.</p>
          </section>

          <section>
            <h2>12. Privacy Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes on our website or through other communication channels. We recommend that users review this policy regularly.</p>
          </section>


          <section>
            <h2>13. Contact Information</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
            <p>[Insert Contact Information]</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
