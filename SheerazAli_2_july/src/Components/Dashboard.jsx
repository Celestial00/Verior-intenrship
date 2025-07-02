import { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import DashboardMain from "../Components/DashboardMain";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-white text-black dark:bg-[#0f172a] dark:text-white transition-colors duration-300">
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <DashboardMain />
      </div>
    </div>
  );
}
