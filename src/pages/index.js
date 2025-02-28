import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
      </Head>
    </>
  );
}

export async function getStaticProps({ locale }) {
  // Ensure locale falls back to default if undefined
  const selectedLocale = locale || 'fi';
  
  return {
    props: {
      messages: {
        ...require(`../locales/${selectedLocale}.json`),
      },
      locale: selectedLocale, // Pass the locale to the page props
    },
  };
}