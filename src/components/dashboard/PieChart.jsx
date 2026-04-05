import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f59e0b", "#ef4444", "#a855f7"];

const getCategoryData = (transactions) => {
  const map = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(map).map((key) => ({
    name: key,
    value: map[key],
  }));
};

export default function SpendingChart({ transactions }) {
  const data = getCategoryData(transactions);
  // const data = transactions;
  console.log(data);

  return (
    <div className="bg-slate-800 p-4 rounded-xl h-80">
      <h2 className="mb-4 font-semibold">Spending Breakdown</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
            
          (<Pie 
          data={data} 
          dataKey="value" 
          outerRadius={100} label>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>)
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}