import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const StockChart = ({ priceData }) => {
 const data = Array.isArray(priceData)
  ? [...priceData].reverse().map(item => ({
      ...item,
      time: new Date(item.date).toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
      })
    }))
  : [];

//   console.log(data);
  


  return (
    <div className="bg-gray-50 h-80 rounded-lg shadow-md p-8">
      <h2 className="text-lg font-semibold mb-2">Price Chart</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="time" minTickGap={40} />
          <YAxis domain={["auto", "auto"]}  />
          <Tooltip labelFormatter={(label) => label} />
          <Line type="monotone" dataKey="close" stroke="#3b82f6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
