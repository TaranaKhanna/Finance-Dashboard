export default function Insights({ transactions }) {

  let totalIncome = 0;
  let totalExpense = 0;
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;

      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const savings = totalIncome - totalExpense;
  let topCategory = "N/A";
  let max = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > max) {
      max = categoryMap[key];
      topCategory = key;
    }
  }

  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="bg-slate-700 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">
            Highest Spending
          </p>
          <p className="text-lg font-bold text-white">
            {topCategory}
          </p>
          <p className="text-sm text-gray-300">
            ₹{max}
          </p>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">
            Income vs Expense
          </p>
          <p className="text-green-400 text-sm">
            Income: ₹{totalIncome}
          </p>
          <p className="text-red-400 text-sm">
            Expense: ₹{totalExpense}
          </p>
        </div>

        <div className="bg-slate-700 p-4 rounded-lg">
          <p className="text-gray-400 text-sm">
            Savings
          </p>
          <p
            className={`text-lg font-bold ${
              savings >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ₹{savings}
          </p>

          <p className="text-sm text-gray-300 mt-1">
            {savings > 0
              ? "Good job saving money 🎉"
              : "Spending exceeds income ⚠️"}
          </p>
        </div>

      </div>
    </div>
  );
}