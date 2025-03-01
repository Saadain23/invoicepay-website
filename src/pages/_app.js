import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';
import { useEffect } from "react";
import { useRouter } from "next/router";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Load translations manually for static export
const resources = {
  en: require("../../public/locales/en/common.json"),
  fi: require("../../public/locales/fi/common.json"),
};

function App({ Component, pageProps }) {
  const { locale } = useRouter();

  useEffect(() => {
    i18n.use(initReactI18next).init({
      resources,
      lng: locale || "fi", // Default to Finnish
      fallbackLng: "fi",
      interpolation: { escapeValue: false },
    });
  }, [locale]);

  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
