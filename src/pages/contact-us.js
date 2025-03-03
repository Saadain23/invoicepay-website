import Head from "next/head";
import Contact from "@/components/Contact";

export default function ContactUs() {

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contact Us | InvoicePay - Invoice Management Service</title>
        <meta name="description" content="Contact InvoicePay's team. We help you with invoicing, freelancing, and any questions related to the service." />
        <meta name="keywords" content="contact us, customer service, contact information, InvoicePay, invoicing service" />

        <meta property="og:title" content="Contact Us | InvoicePay" />
        <meta property="og:description" content="Contact InvoicePay's team. We help you with invoicing, freelancing, and any questions related to the service." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://invoicepay.fi" />
      </Head>
      <Contact />
    </>
  );
}

