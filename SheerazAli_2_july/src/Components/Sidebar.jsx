import { useState } from "react";
import NavItem from "./NavItem";
import { Home, Package, BarChart2, Settings, Sun, Moon } from "lucide-react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

export default function Sidebar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden md:h-dvh fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 p-2 rounded shadow"
        onClick={toggleSidebar}
      >
        {isOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-dvh w-64 bg-white dark:bg-[#1e293b] p-4 flex flex-col justify-between text-black dark:text-white transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex`}
      >
        <div>
          <h1 className="text-2xl font-bold mb-6 animate-fade-in">
            Sheeraz Store
          </h1>
          <nav className="space-y-2">
            <NavItem icon={Home} label="Dashboard" active />
            <NavItem icon={Package} label="Products" />
            <NavItem icon={BarChart2} label="Analytics" />
          </nav>
        </div>
        <div className="space-y-2">
          <NavItem icon={Settings} label="Settings" />
          <button
            onClick={toggleDarkMode}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm w-full transition-transform duration-300 ${
              darkMode
                ? "bg-[#3b82f6] text-white hover:bg-[#2563eb]"
                : "text-gray-600 hover:bg-gray-200 hover:text-black dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            }`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </aside>
    </>
  );
}
