// import { useRouter } from "next/router";
import { fetchStockDetails, fetchPriceDetails } from "@/lib/fetchStock";
import StockData from "@/components/StockData";
import StockChart from "@/components/StockChart";

const StockDetails = ({ stockData }) => {
  // console.log("data here", stockData);

  return (
<div className="flex flex-col md:flex-row gap-6 p-8">
  <div className="md:w-1/3 w-full">
    <StockData stockData={stockData} />
  </div>

  <div className="md:w-2/3 w-full">
    <StockChart priceData={stockData?.price} />
  </div>
</div>


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

    latestPrice = priceRes[0]
  } catch (err) {
    console.error("Price fetch failed:", err);
  }
  if (stockData) stockData.price = latestPrice;

  return { props: { stockData } };
}


export default StockDetails;
