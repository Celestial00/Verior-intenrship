export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 dark:bg-[#1e293b] dark:border-gray-700 animate-fade-in">
      <input
        type="text"
        placeholder="Search campaign, customer, etc..."
        className="w-1/2 px-4 py-2 rounded-lg md:block hidden bg-gray-100 text-sm text-gray-800 placeholder-gray-400 focus:outline-none transition duration-300 focus:ring focus:ring-[#3b82f6] dark:bg-[#334155] dark:text-white dark:placeholder-gray-400"
      />
      <div className=" md:flex  items-center  hidden gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-9 h-9 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </header>
  );
}
