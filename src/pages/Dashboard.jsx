import BalanceChart from "../components/dashboard/BalanceChart"
import SpendingChart from "../components/dashboard/PieChart"
import Transactions from "../components/transactions/Transactions"
import { transactions } from "../data/userData"
import Sidebar from "../components/layout/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-900 text-white w-full mt-15">
        <Sidebar />

        <div className="flex-1 overflow-y-auto p-6">

        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Summary */}
        <BalanceChart transactions={transactions["b@gmail.com"]} />

        {/* Pie chart */}
        <SpendingChart transactions={transactions["b@gmail.com"]} />

        {/* Transactions */}
        <Transactions transactions={transactions["b@gmail.com"]} />

        <div id="transactions" className="mt-10">Transactions</div>
        <div id="insights" className="mt-10">Insights</div>
        </div>
    </div>
  )
}

export default Dashboard