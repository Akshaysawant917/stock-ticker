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

  const hasData = data.length > 0;
  //   console.log(data);



  return (

    <div className="bg-slate-800 h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md p-3 sm:p-4 md:p-6 lg:p-8 flex justify-center items-center">
      {hasData ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" minTickGap={40} tick={{ fill: "#ffffff" }} />
            <YAxis domain={["auto", "auto"]} tick={{ fill: "#ffffff" }} />
            <Tooltip labelFormatter={(label) => label} />
            <Line type="monotone" dataKey="close" stroke="#3b82f6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-gray-400 text-lg">No data available</p>
      )}
    </div>
  );
};

export default StockChart;
