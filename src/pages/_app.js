import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import CookieConsent from "@/components/CookieConsent";
import Script from 'next/script';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }) {
  const { translations = {} } = pageProps;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YR399ZZPE3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YR399ZZPE3');
        `}
      </Script>
      <main className={`${inter.variable} font-sans`}>
        <Layout translations={translations}>
          <Component {...pageProps} />
        </Layout>
        <CookieConsent />
      </main>
    </>
  );
}

export default App;
