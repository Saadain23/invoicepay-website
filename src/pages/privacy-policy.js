import Head from "next/head";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage() {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy Policy | InvoicePay</title>
        <meta name="description" content="Read InvoicePay's privacy policy to understand how we collect, use, and protect your personal information. Learn about your data rights and our commitment to privacy." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal data, data privacy, InvoicePay privacy" />

        <meta property="og:title" content="Privacy Policy | InvoicePay" />
        <meta property="og:description" content="Learn how InvoicePay protects your personal information and ensures compliance with GDPR and EU data protection laws." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicepay.fi" />
      </Head>
      <PrivacyPolicy />
    </>
  );
}

