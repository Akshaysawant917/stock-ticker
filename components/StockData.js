const StockData = ({ stockData }) => {
  const { symbol, company, latestPrice } = stockData;
  const hasPriceData = latestPrice &&
    (latestPrice.close || latestPrice.close === 0) &&
    Object.keys(latestPrice).length > 0;

  return (
    <div className="flex-1 bg-slate-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl text-white font-bold">{symbol}</h2>
      <p className="text-white">{company}</p>
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
