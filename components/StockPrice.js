import React from 'react'

const StockPrice = ({ priceData }) => {
  return (
   <div className="bg-gray-50 p-4 rounded-lg shadow-md">
      <p>Open: ₹{priceData.open}</p>
      <p>High: ₹{priceData.high}</p>
      <p>Low: ₹{priceData.low}</p>
      <p>Prev Close: ₹{priceData.prev_close}</p>
      <p>Volume: {priceData.volume}</p>
      <p>Value: ₹{priceData.value}</p>
    </div>
  )
}

export default StockPrice
