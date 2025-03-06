import Head from "next/head";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage({ translations }) {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{translations.PrivacyPolicy.meta.title}</title>
        <meta name="description" content={translations.PrivacyPolicy.meta.description} />
        <meta name="keywords" content={translations.PrivacyPolicy.meta.keywords} />

        <meta property="og:title" content={translations.PrivacyPolicy.meta.og.title} />
        <meta property="og:description" content={translations.PrivacyPolicy.meta.og.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicepay.fi" />
      </Head>
      <PrivacyPolicy translations={translations} />
    </>
  );
}

export async function getStaticProps({ params }) {
  const lang = params.lang || 'fi';
  try {
    const translations = require(`../../locales/${lang}.json`)
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
      { params: { lang: 'sv' } },
    ],
    fallback: false
  }
}
