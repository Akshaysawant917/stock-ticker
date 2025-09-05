const StockChart = ({ priceData }) => {
  return (
    <div className="flex-1 flex flex-col gap-4">

      <div className="bg-gray-50 h-60 rounded-lg shadow-md flex items-center justify-center">
        <p>Chart</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <p>Open: ₹{priceData.open}</p>
        <p>High: ₹{priceData.high}</p>
        <p>Low: ₹{priceData.low}</p>
        <p>Prev Close: ₹{priceData.prev_close}</p>
        <p>Volume: {priceData.volume}</p>
        <p>Value: ₹{priceData.value}</p>
      </div>
    </div>
  );
};

export default StockChart;
