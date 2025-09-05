import { useEffect, useState } from "react";

const StockTicker = () => {
  const [tickerData, setTickerData] = useState([]);

  useEffect(() => {
    async function fetchTicker() {
      try {
        const res = await fetch(
          "https://portal.tradebrains.in/api/assignment/index/NIFTY/movers/"
        );
        const data = await res.json();
        console.log("ticker API data:", data);

        // merge gainers + losers
        const combined = [...(data.gainers || []), ...(data.losers || [])];
        setTickerData(combined);
      } catch (err) {
        console.error("Failed to fetch ticker:", err);
      }
    }
    fetchTicker();
  }, []);

  if (!tickerData.length) return null;

  return (
    <div className="w-full bg-gray-900 text-white py-2 overflow-hidden sticky top-0 z-50">
      <div className="animate-marquee flex gap-8 whitespace-nowrap">
        {tickerData.concat(tickerData).map((item, idx) => (
          <span
            key={idx}
            className={`text-sm ${
              item.percent >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {item.symbol}: ₹{item.close} ({item.percent.toFixed(2)}%)
          </span>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;
