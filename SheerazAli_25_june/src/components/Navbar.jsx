import "./style/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Sheeraz Todo App</div>
      <button className="load-button">
        {/* Load Todos Logic */}Load Todos
      </button>
    </nav>
  );
};

export default Navbar;
