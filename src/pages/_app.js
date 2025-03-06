import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import CookieConsent from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function App({ Component, pageProps }) {
  const { translations = {} } = pageProps;

  return (
    <main className={`${inter.variable} font-sans`}>
      <Layout translations={translations}>
        <Component {...pageProps} />
      </Layout>
      <CookieConsent />
    </main>
  );
}

export default App;
