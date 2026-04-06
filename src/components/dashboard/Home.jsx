export default function Home({ transactions }) {

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      totalIncome += t.amount;
    } else {
      totalExpense += t.amount;
    }
  });

  const balance = totalIncome - totalExpense;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <div className="bg-slate-800 p-5 rounded-xl shadow-md">
        <p className="text-gray-400 text-sm">Total Balance</p>
        <h3 className="text-xl font-bold mt-1">
          ₹{balance}
        </h3>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl shadow-md">
        <p className="text-gray-400 text-sm">Total Income</p>
        <h3 className="text-xl font-bold mt-1 text-green-400">
          ₹{totalIncome}
        </h3>
      </div>

      <div className="bg-slate-800 p-5 rounded-xl shadow-md">
        <p className="text-gray-400 text-sm">Total Expense</p>
        <h3 className="text-xl font-bold mt-1 text-red-400">
          ₹{totalExpense}
        </h3>
      </div>

    </div>
  );
}