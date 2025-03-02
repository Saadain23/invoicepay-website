import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";

export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <Hero />
    </>
  );
}

