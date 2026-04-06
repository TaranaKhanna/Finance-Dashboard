import { BadgeIndianRupee, Menu, X } from "lucide-react";

const Header = ({ user, isOpen, setIsOpen }) => {
  const firstChar = user?.name?.charAt(0).toUpperCase() || user?.email?.charAt(0).toUpperCase();

  return (
    <div className="flex justify-between items-center px-6 md:px-10 py-3 
      bg-slate-900 text-white border-b border-slate-700 
      fixed top-0 left-0 w-full z-50">

      <div className="flex items-center gap-2">
         <button
          className="md:hidden bg-slate-800 p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <BadgeIndianRupee className="text-green-400" size={24} />
        <h2 className="text-lg md:text-xl font-semibold tracking-wide">
          FinTech
        </h2>
      </div>

      <div className="w-9 h-9 flex items-center justify-center 
        rounded-full bg-blue-500 font-semibold text-sm">
        {firstChar}
      </div>

    </div>
  );
};

export default Header;