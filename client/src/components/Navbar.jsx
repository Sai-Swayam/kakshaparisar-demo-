import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="one">
            <Link to="/">Home</Link>
          </div>
          <div className="two">
            <Link to="/register" className="links">
              Register
            </Link>
            <Link to="/login" className="links">
              Login
            </Link>
            <Link to="/notepad" className="links">
              Notepad
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
