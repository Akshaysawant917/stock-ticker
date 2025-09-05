import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";

export default function Home() {
   return (
    <>
      <Head>
        <title>Stock Tracker | Real-time Market Insights</title>
        <meta
          name="description"
          content="Track live stock prices, charts, and detailed insights to make smarter investment decisions."
        />
        <meta name="keywords" content="stocks, trading, NSE, BSE, stock tracker, market insights" />
      </Head>

      <Hero />
      <WhyChooseUs />
    </>
  );
}

