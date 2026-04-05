import SpendingChart from "../components/dashboard/PieChart"
import { transactions } from "../data/userData"

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-900 text-white w-full ml-60 rounded-2xl mt-15 right-0">

        <div className="flex-1 overflow-y-auto p-6">

        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Sections will come here */}
        <div id="summary">Summary</div>
        <div id="charts" className="mt-10">Charts</div>

        <SpendingChart transactions={transactions["b@gmail.com"]} />
        <div id="transactions" className="mt-10">Transactions</div>
        <div id="insights" className="mt-10">Insights</div>
        </div>
    </div>
  )
}

export default Dashboard