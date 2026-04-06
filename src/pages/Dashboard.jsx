import BalanceChart from "../components/dashboard/BalanceChart";
import SpendingChart from "../components/dashboard/PieChart";
import Transactions from "../components/transactions/Transactions";
import Sidebar from "../components/layout/Sidebar";
import RoleSwitcher from "../components/layout/RoleSwitcher";
import Insights from "../components/insights/Insights";
import Home from "../components/dashboard/Home";

import { transactions } from "../data/userData";

const Dashboard = ({ setUser, isOpen }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userTransactions = transactions[user?.email] || [];

  return (
    <div className="flex h-screen bg-slate-900 text-white w-full mt-12 mb-20 pb-12 fixed">

      <Sidebar setUser={setUser} isOpen={isOpen} />

      <div className="flex-1 overflow-y-auto p-6 space-y-12">

        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold"> Hi {user?.name || ''}👋</h1>
          <RoleSwitcher />
        </div>

        <div id="home"></div>
        <Home transactions={userTransactions} />

        <div className="grid grid-cols-1 gap-6">

          <div className="lg:col-span-2" id="balance" >
              <BalanceChart transactions={userTransactions} />
          </div>
          <div>
              <SpendingChart transactions={userTransactions} />
          </div>
        </div>

        <div id="transaction">
          <Transactions transactions={userTransactions} />
        </div>

        <div id="insights">
          <Insights transactions={userTransactions} />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;