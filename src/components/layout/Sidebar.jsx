import { useNavigate } from "react-router-dom";
import {
  Home,
  Wallet,
  BarChart3,
  LogOut
} from "lucide-react";

export default function Sidebar({ setUser, isOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
  };

  const links = [
    { name: "Home", icon: Home, id: "home" },
    { name: "Balances", icon: Wallet, id: "balance" },
    { name: "Transactions", icon: BarChart3, id: "transaction" },
    { name: "Insights", icon: BarChart3, id: "insights" },
  ];

  return (
      <div
        className={`
          flex flex-col justify-between
        bg-slate-800 text-white z-40
          transition-all duration-300
          
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
          
          w-16 md:w-48
          px-2 py-6
        `}
      >
        <nav className="space-y-6 mt-10">
          {links.map((link, index) => {
            const Icon = link.icon;

            return (
              <button
              key={index}
              onClick={() => handleScroll(link.id)}
              className="w-full flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-slate-700 transition text-left"
            >
              <Icon size={20} />
              <span className="hidden md:inline text-sm font-medium">
                {link.name}
              </span>
            </button>
            );
          })}
        </nav>

        <div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-red-500/20 text-red-400 w-full transition"
          >
            <LogOut size={20} />

            <span className="hidden md:inline text-sm font-medium">
              Logout
            </span>
          </button>
        </div>
      </div>
  );
}