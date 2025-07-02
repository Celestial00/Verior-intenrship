export default function DashboardMain() {
  return (
    <main className="p-6 animate-fade-in bg-white text-black dark:bg-[#0f172a] dark:text-white">
      <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        Here’s your analytic details
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
     
        <div className="bg-gray-100 dark:bg-[#1e293b] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Product List</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-gray-300 dark:border-gray-600 pb-2">
              T-shirt <span>$20</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 dark:border-gray-600 pb-2">
              Sneakers <span>$80</span>
            </li>
            <li className="flex justify-between border-b border-gray-300 dark:border-gray-600 pb-2">
              Watch <span>$120</span>
            </li>
            <li className="flex justify-between">Backpack <span>$40</span></li>
          </ul>
        </div>

        <div className="bg-gray-100 dark:bg-[#1e293b] p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
          <div className="w-full h-40 bg-gray-200 dark:bg-[#334155] rounded flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
            [Chart Placeholder]
          </div>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-[#1e293b] p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <li>You added a new product "Headphones" - $60</li>
          <li>Customer John Doe placed an order</li>
          <li>Weekly report has been generated</li>
        </ul>
      </div>
    </main>
  );
}
