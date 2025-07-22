import { useState, useEffect } from "react";
import "./Navbar.scss";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? "active" : "hidden"}`}>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="logo-text">MR INDIAN HACKER</div>
        <div className="menu">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/experiments" onClick={() => setIsOpen(false)}>Experiments</Link>
            </li>
            <li>
              <Link to="/connect" onClick={() => setIsOpen(false)}>Connect</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

