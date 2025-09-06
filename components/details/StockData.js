import { addFavourite, removeFavourite, isFavourite } from "@/lib/favourites";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";

const StockData = ({ stockData }) => {
  const { symbol, company, latestPrice } = stockData;
  const [favourite, setFavourite] = useState(false);

  useEffect(() => {
    if (stockData?.symbol) {
      setFavourite(isFavourite(stockData.symbol));
    }
  }, [stockData]);

  const toggleFavourite = () => {
    if (favourite) {
      removeFavourite(stockData.symbol);
      setFavourite(false);
    } else {
      addFavourite({ symbol: stockData.symbol, company: stockData.company });
      setFavourite(true);
    }
  };
  const hasPriceData = latestPrice &&
    (latestPrice.close || latestPrice.close === 0) &&
    Object.keys(latestPrice).length > 0;

  return (
    <div className="flex-1 bg-slate-800 p-6 rounded-lg shadow">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl text-white font-bold">{symbol}</h2>
          <p className="text-white">{company}</p>
        </div>

        <button onClick={toggleFavourite} className="text-3xl hover:opacity-80 transition cursor-pointer ">
          {favourite ? <AiFillHeart className="text-red-500 " /> : <AiOutlineHeart className="text-white" />}
        </button>
      </div>

      {hasPriceData ? (
        <div className="mt-4">
          <p className="text-xl text-white font-semibold">₹{latestPrice.close || "NA"}</p>
          <p className={`text-sm ${latestPrice.change >= 0 ? "text-green-500" : "text-red-500"}`}>
            {latestPrice.change} ({latestPrice.percent}%)
          </p>
        </div>
      ) : (<p className="text-gray-400 text-md my-4">
        Pricing data unavailable
      </p>)}
    </div>
  );
};

export default StockData;
