import { useUser } from "../Context/UserContext";

export default function Navbar() {
  const { GetName } = useUser();
  const name = GetName();

  return (
    <div className="flex justify-between items-center bg-yellow-400 p-3">
      <div className="text-2xl">
        <p>Logo</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="search"
          className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </div>

      {name && <div className="font-medium">👋 {name}</div>}
    </div>
  );
}
