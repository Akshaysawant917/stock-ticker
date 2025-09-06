import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
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

