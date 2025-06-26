import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between  text-black p-4 ">
      {/* Left - Logo */}
      <div className="text-2xl font-bold">MyLogo</div>

      {/* Right - Menu */}
      <div className="space-x-6">
        <Link to="/" className="text-[17px]">
          Home
        </Link>
        <Link to="/quiz" className="text-[17px]">
          Quiz
        </Link>
        <Link to="/cart" className="text-[17px]">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
