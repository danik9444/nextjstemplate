import Head from "next/head";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Brand - Innovative Solutions for Your Business</title>
        <meta name="description" content="Discover how our solutions can transform your business. Increase efficiency, save costs, and drive growth with our innovative platform." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}
