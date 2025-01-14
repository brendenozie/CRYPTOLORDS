import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import throttle from "lodash.throttle";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 150);
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const toggleMobileNav = () => setMobileOpen(!mobileOpen);
  const closeMobileNav = () => setMobileOpen(false);
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  const links = [
    { to: "/#packages", label: "Home" },
    { to: "/#merchandise", label: "Market" },
    { to: "/#packages", label: "Join" },
  ];

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMobileNav}>
          CRYPTOLORDS
        </NavLink>
        <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} onClick={closeMobileNav}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <div
            className="hamburger-menu"
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
          >
            <i
              className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`}
              aria-expanded={mobileOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
