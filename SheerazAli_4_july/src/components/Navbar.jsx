import { Menu, Mic, MoonStar, Search, Sun } from "lucide-react";

import { useEffect, useState } from "react";

const Navbar = ({ toggleSidebar }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    document.body.classList["add"]("dark");
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <header className="sticky top-0  z-10 bg-white dark:bg-[#0f0f0f]">
      <nav className="flex items-center justify-between py-2 pb-5 px-4">
        <HeaderLeftSection toggleSidebar={toggleSidebar} />

        <div className="h-10 flex gap-3 w-[600px] max-lg:w-[500px] max-md:hidden">
          <form action="#" className="flex w-full">
            <input
              className="border border-neutral-300 w-full h-full rounded-l-full px-4 outline-none focus:border-blue-500 dark:bg-neutral-900 dark:border-[#303030] dark:focus:border-blue-500 dark:text-neutral-300"
              type="search"
              placeholder="Search"
              required
            />
            <button className="border border-neutral-300 px-5 border-l-0 rounded-r-full hover:bg-neutral-100 dark:border-[#303030] hover:dark:bg-neutral-700">
              <Search className="dark:text-neutral-400" />
            </button>
          </form>
          <button className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 hover:dark:bg-neutral-700">
            <Mic className="dark:text-neutral-400" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full md:hidden hover:bg-neutral-200 hover:dark:bg-neutral-700">
            <Search className="dark:text-neutral-400" />
          </button>

          <img
            className="w-8 h-8 rounded-full cursor-pointer"
            src="https://media.istockphoto.com/id/1411160666/photo/confident-female-with-bold-personality-and-cool-attitude-portrait-of-an-edgy-young-woman.jpg?s=2048x2048&w=is&k=20&c=afywu1GR6IBedQNr13XKqb0mFz9y80KY5cEmTKS9sSY="
            alt="User Image"
          />
        </div>
      </nav>
    </header>
  );
};

export const HeaderLeftSection = ({ toggleSidebar }) => {
  return (
    <div className="flex gap-4 items-center">
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-full hover:bg-neutral-200 hover:dark:bg-neutral-700"
      >
        <Menu className="dark:text-neutral-400" />
      </button>
      <a className="flex items-center gap-2" href="#">
        <img
          src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png"
          width="32"
          alt="Logo"
        ></img>

        <h2 className="text-xl font-bold dark:text-neutral-300">Youtube</h2>
      </a>
    </div>
  );
};

export default Navbar;

// https://www.citypng.com/public/uploads/preview/red-youtube-logo-symbol-701751694792489qxkccchok1.png
