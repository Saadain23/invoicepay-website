import Head from "next/head";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Script from 'next/script';


export default function Home() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>InvoicePay - Simple invoicing solution for Light Entrepreneurs | InvoicePay</title>
        <meta name="description" content="InvoicePay is a simple invoicing solution for freelancers and entrepreneurs. Handle invoicing, mileage claims 2024 and accounting hassle-free. Start for free (free invoicing) today!" />
        <meta name="keywords" content="invoicing, invoicing solution, freelancer, entrepreneur, accounting, free invoicing, mileage claims, accounting hassle-free" />

        <meta property="og:title" content="InvoicePay - Simple invoicing solution for your business"/>
        <meta property="og:description" content="Simple and reliable invoicing solution for freelancers and entrepreneurs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicepay.fi" />

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
      </Head>
      <Hero />
      <Testimonials />
      <Pricing />
      <Features />
      <FAQ />
      <CTA />
    </>
  );
}

