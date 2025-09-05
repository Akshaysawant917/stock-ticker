import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StockTicker from "@/components/StockTicker";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <StockTicker />
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
