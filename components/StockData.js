const StockData = ({ stockData }) => {
  const { symbol, company, latestPrice } = stockData;

  return (
    <div className="flex-1 bg-slate-800 p-6 rounded-lg shadow">
      <h2 className="text-2xl text-white font-bold">{symbol}</h2>
      <p className="text-white">{company}</p>
      {latestPrice && (
        <div className="mt-4">
          <p className="text-xl text-white font-semibold">₹{latestPrice.close}</p>
          <p className={`text-sm ${latestPrice.change >= 0 ? "text-green-500" : "text-red-500"}`}>
            {latestPrice.change} ({latestPrice.percent}%)
          </p>
        </div>
      )}
    </div>
  );
};

export default StockData;
