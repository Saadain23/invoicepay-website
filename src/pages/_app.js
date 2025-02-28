import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import Layout from "@/components/layout/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  // Add a fallback if messages or locale are undefined
  const messages = pageProps.messages || {};
  const locale = pageProps.locale || 'fi'; // Use your default locale

  return (
    <NextIntlClientProvider 
      messages={messages}
      locale={locale}
    >
      <main className={`${inter.variable} font-sans`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </NextIntlClientProvider>
  );
}
