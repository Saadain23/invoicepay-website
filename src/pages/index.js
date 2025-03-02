import Head from "next/head";
import Image from "next/image";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";


export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
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

