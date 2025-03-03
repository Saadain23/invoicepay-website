import Head from "next/head";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage({ translations }) {

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
      <PrivacyPolicy translations={translations} />
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const translations = require(`../../locales/${params.lang}.json`)
    return { props: { translations } }
  } catch {
    return { props: { translations: require('../../locales/fi.json') } }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'en' } },
      { params: { lang: 'fi' } },
    ],
    fallback: false
  }
}
