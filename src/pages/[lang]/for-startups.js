import Head from "next/head";
import ForStartups from "@/components/ForStartups";
import ChatWidget from "@/components/chat/ChatWidget";

export default function ForStartupsPage({ translations }) {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{translations.ForStartups.meta.title}</title>
        <meta name="description" content={translations.ForStartups.meta.description} />
        <meta name="keywords" content={translations.ForStartups.meta.keywords} />

        <meta property="og:title" content={translations.ForStartups.meta.og.title} />
        <meta property="og:description" content={translations.ForStartups.meta.og.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicepay.fi" />
      </Head>
      <ForStartups translations={translations} />
      <ChatWidget translations={translations.ChatBox} />

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
