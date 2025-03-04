import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";

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
    </main>
  );
}

export default App;
