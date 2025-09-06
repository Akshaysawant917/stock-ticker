import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";
import StockTicker from "@/components/global/StockTicker";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="sticky top-0 z-50">
        <StockTicker />
        <Navbar />
      </div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black opacity-70 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
