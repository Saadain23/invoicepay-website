import Head from "next/head";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";


export default function Home({ translations }) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{translations.Home.title}</title>
        <meta name="description" content={translations.Home.description} />
        <meta name="keywords" content={translations.Home.keywords} />

        <meta property="og:title" content={translations.Home.og.title} />
        <meta property="og:description" content={translations.Home.og.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicepay.fi" />
      </Head>
      <Hero translations={translations} />
      <Testimonials translations={translations} />
      <Pricing translations={translations} />
      <Features translations={translations} />
      <FAQ translations={translations} />
      <CTA translations={translations} />
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
