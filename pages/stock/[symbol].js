import Head from "next/head";
import { fetchStockDetails, fetchPriceDetails } from "@/lib/fetchStock";
import StockData from "@/components/StockData";
import StockChart from "@/components/StockChart";
import StockPrice from "@/components/StockPrice";

const StockDetails = ({ stockData }) => {
  // console.log("data here", stockData);

  return (
    <>
      <Head>
        <title>{stockData.company} Stock Price & Chart | Stock Tracker</title>
        <meta
          name="description"
          content={`Check live ${stockData.company} stock price, chart, volume, and market performance. Stay updated with real-time market insights.`}
        />
        <meta
          name="keywords"
          content={`${stockData.company},${stockData.symbol}, stock, share price, NSE, BSE, live chart, market data`}
        />
      </Head>
      <div className="flex flex-col md:flex-row gap-6 p-8">
        <div className="md:w-1/3 w-full">
          <StockData stockData={stockData} />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <StockChart priceData={stockData?.priceHistory} />
          <StockPrice priceData={stockData?.latestPrice} />
        </div>
      </div>

    </>
  );
};

export async function getServerSideProps(context) {
  const { symbol } = context.params;
  let stockData = null;
  let latestPrice = null;
  try {
    const stockRes = await fetchStockDetails(symbol);
    stockData = stockRes[0];
  } catch (err) {
    console.error("Stock details fetch failed:", err);
  }
  try {
    const priceRes = await fetchPriceDetails(symbol)
    // console.log("priceRes", priceRes);

    latestPrice = priceRes
  } catch (err) {
    console.error("Price fetch failed:", err);
  }
  if (stockData) {
    stockData.priceHistory = latestPrice;
    stockData.latestPrice = latestPrice[0];
  }


  return { props: { stockData } };
}


export default StockDetails;
