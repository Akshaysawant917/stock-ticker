const StockData = ({ stockData }) => {
  const { symbol, company, latestPrice } = stockData;

  return (
    <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">{symbol}</h2>
      <p className="text-gray-700">{company}</p>
      {latestPrice && (
        <div className="mt-4">
          <p className="text-xl font-semibold">₹{latestPrice.close}</p>
          <p className={`text-sm ${latestPrice.change >= 0 ? "text-green-500" : "text-red-500"}`}>
            {latestPrice.change} ({latestPrice.percent}%)
          </p>
        </div>
      )}
    </div>
  );
};

export default StockData;
