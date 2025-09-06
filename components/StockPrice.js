const StockPrice = ({ priceData }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl border border-gray-700">
      <h2 className="text-xl font-bold mb-4">Todays Stock Info</h2>
      <div className="grid grid-cols-2 gap-4 text-sm md:text-md">
        <div className="flex justify-between">
          <span className="text-gray-400">Open:</span>
          <span className="font-medium">₹{priceData?.open || "NA"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">High:</span>
          <span className="text-green-400 font-semibold">₹{priceData?.high || "NA"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Low:</span>
          <span className="text-red-400 font-semibold">₹{priceData?.low || "NA"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Prev Close:</span>
          <span className="font-medium">₹{priceData?.prev_close || "NA"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Volume:</span>
          <span className="font-medium">{priceData?.volume?.toLocaleString() || "NA"}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Value:</span>
          <span className="font-medium">₹{priceData?.value?.toLocaleString() || "NA"}</span>
        </div>
      </div>
    </div>
  );
};

export default StockPrice;
