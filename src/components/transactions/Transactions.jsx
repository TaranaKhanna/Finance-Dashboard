import { useState } from "react";

export default function Transactions({ transactions }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filteredData = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : t.type === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <h2 className="text-lg font-semibold">Transactions</h2>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search category..."
            className="px-3 py-2 rounded-lg bg-slate-700 text-sm outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="px-3 py-2 rounded-lg bg-slate-700 text-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
      </div>

      {/* table for desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-400 border-b border-slate-600">
            <tr>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Category</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Type</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((t) => (
              <tr key={t.id} className="border-b border-slate-700">
                <td className="py-2">{t.date}</td>
                <td>{t.category}</td>
                <td
                  className={
                    t.type === "income"
                      ? "text-green-400"
                      : "text-red-400"
                  }
                >
                  ₹{t.amount}
                </td>
                <td className="capitalize">{t.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {filteredData.map((t) => (
          <div
            key={t.id}
            className="bg-slate-700 p-3 rounded-lg"
          >
            <div className="flex justify-between">
              <p className="font-medium">{t.category}</p>
              <p
                className={
                  t.type === "income"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                ₹{t.amount}
              </p>
            </div>

            <div className="text-sm text-gray-400 flex justify-between mt-1">
              <span>{t.date}</span>
              <span className="capitalize">{t.type}</span>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <p className="text-center text-gray-300 mt-4">
          No transactions found
        </p>
      )}
    </div>
  );
}