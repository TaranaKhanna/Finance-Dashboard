export default function Sidebar() {
  return (
    <div className="w-60 bg-slate-800 mt-15 text-white py-6 px-2 rounded-xl fixed left-0 h-screen">
      <nav className="space-y-4">
        <a href="#summary" className="block hover:text-blue-400">Home</a>
        <a href="#charts" className="block hover:text-blue-400">Balances</a>
        <a href="#transactions" className="block hover:text-blue-400">Transactions</a>
        <a href="#insights" className="block hover:text-blue-400">Insights</a>
      </nav>
    </div>
  );
}