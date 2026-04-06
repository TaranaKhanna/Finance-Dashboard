import { useState } from "react";
import {
  Home,
  Wallet,
  ArrowLeftRight,
  BarChart3,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", icon: Home, href: "#summary" },
    { name: "Balances", icon: Wallet, href: "#charts" },
    { name: "Transactions", icon: ArrowLeftRight, href: "#transactions" },
    { name: "Insights", icon: BarChart3, href: "#insights" },
  ];

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-800 p-2 rounded-lg text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div
        className={`
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
              <a
                key={index}
                href={link.href}
                className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-slate-700 transition"
              >
                <Icon size={20} />

                {/* 🔹 Hide text on small screens */}
                <span className="hidden md:inline text-sm font-medium">
                  {link.name}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}