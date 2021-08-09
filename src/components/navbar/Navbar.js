import { Link } from "react-router-dom";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <h1>UMRS</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
