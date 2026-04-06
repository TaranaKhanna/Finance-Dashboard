import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const getBalanceData = (transactions) => {
  let balance = 0;

  return transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((t) => {
      balance += t.type === "income" ? t.amount : -t.amount;

      return {
        date: t.date,
        balance,  
      };
    });
}

export default function BalanceChart({ transactions }) {
    const data = getBalanceData(transactions);

  return (
    <div className="bg-slate-800 p-4 pb-10 rounded-xl h-80 w-full">
      <h2 className="mb-4 font-semibold text-sm sm:text-base">Balance Trend</h2>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" />
          <XAxis dataKey="date" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />
          <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a", borderRadius: "10px", fontSize: "10px", padding: "4px 4px"
              }}
              labelStyle={{ color: "#94a3b8", fontWeight: 500 }}
              itemStyle={{ color: "white", fontSize: "12px" }}
            />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3b82f6"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
