export default function NavItem({ icon: Icon, label, active }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 transform hover:scale-105 ${
        active
          ? "bg-[#3b82f6] text-white"
          : "text-gray-400 hover:bg-gray-700 hover:text-white"
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </a>
  );
}
