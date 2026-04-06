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
  let total = 0;

  transactions.forEach((t) => {
    if (t.type === "expense") {
      map[t.category] = (map[t.category] || 0) + t.amount;
      total += t.amount;
    }
  });
  let maxSpentCategory = "";
  let maxAmount = 0;
  for (let key in map) {
    if (map[key] > maxAmount) {
      maxAmount = map[key];
      maxSpentCategory = key;
    }
  };

  return {
    data: Object.keys(map).map((key) => ({
      name: key,
      value: map[key],
    })),
    total,
    maxSpentCategory,
    maxAmount,
  };
}

export default function SpendingChart({ transactions }) {
  const { data, total, maxSpentCategory, maxAmount } = getCategoryData(transactions);

  return (

    <div className="bg-slate-800 p-4 rounded-xl h-auto md:h-80">
      <h2 className="mb-4 font-semibold text-sm sm:text-base">
        Spending Breakdown
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 h-full pb-4 px-2 md:px-4">
        <div className="text-sm space-y-2 w-full md:w-1/2 text-center md:text-left">
          <p className="text-gray-400">Total Spent</p>
          <p className="text-lg md:text-xl font-bold text-white">
            ₹{total}
          </p>

          <p className="text-gray-400 mt-4">Most Spent On</p>
          <p className="text-base md:text-lg font-semibold text-green-400">
            {maxSpentCategory}
          </p>
          <p className="text-white">₹{maxAmount}</p>
        </div>

        <div className="w-full h-56 md:h-full md:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                outerRadius={window.innerWidth < 768 ? 70 : 100}
                label={window.innerWidth >= 768}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderRadius: "10px",
                  fontSize: "12px",
                  padding: "4px 8px",
                }}
                labelStyle={{ color: "black", fontWeight: 500 }}
                itemStyle={{
                  color: "white",
                  fontSize: "12px",
                  fontWeight: 500,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}