import BalanceChart from "../components/dashboard/BalanceChart";
import SpendingChart from "../components/dashboard/PieChart";
import Transactions from "../components/transactions/Transactions";
import Sidebar from "../components/layout/Sidebar";
import RoleSwitcher from "../components/layout/RoleSwitcher";

import { transactions } from "../data/userData";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userTransactions = transactions[user?.email] || [];

  return (
    <div className="flex h-screen bg-slate-900 text-white w-full my-16">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <RoleSwitcher />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Line Chart */}
          <div className="lg:col-span-2">
            <BalanceChart transactions={userTransactions} />
          </div>

          {/* Pie Chart */}
          <div>
            <SpendingChart transactions={userTransactions} />
          </div>
        </div>

        {/* Transactions Section */}
        <Transactions transactions={userTransactions} />

      </div>
    </div>
  );
};

export default Dashboard;