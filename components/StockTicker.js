"use client";

import { useEffect, useState } from "react";
import { fetchMovers} from "@/lib/fetchStock";
import Marquee from "react-fast-marquee";

const StockTicker = () => {
  const [tickerData, setTickerData] = useState([]);

  useEffect(() => {
    async function fetchTicker() {
      try {
        const res = await fetchMovers()
        // const data = await res.json();
        const gainers = (res.gainers || []).map((item) => ({
          name: item.comp_name,
          close: item.close,
          percent: item.percent,
          type: "gainer",
        }));

        const losers = (res.losers || []).map((item) => ({
          name: item.comp_name,
          close: item.close,
          percent: item.percent,
          type: "loser",
        }));

        setTickerData([...gainers, ...losers]);
      } catch (err) {
        console.error("Failed to fetch ticker:", err);
      }
    }
    fetchTicker();
  }, []);

  if (tickerData.length === 0) return null;

  return (
    <div className="w-full bg-gray-900 text-white py-2 sticky top-0 z-50 border-b-[0.5px] border-gray-500">
      <Marquee gradient={false} speed={50} pauseOnHover>
        {tickerData.map((item, idx) => (
          <span key={idx} className="mx-6 text-sm">
            <span className="text-white">{item.name} </span>
            <span
              className={item.type === "gainer" ? "text-green-400" : "text-red-400"}
            >
              ₹{item.close} ({item.percent.toFixed(2)}%)
            </span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default StockTicker;
