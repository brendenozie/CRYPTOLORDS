import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { NavLink } from "react-router-dom";
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
    { href: "#packages", label: "Home" },
    { href: "#merchandise", label: "Market" },
    { href: "#packages", label: "Join" },
  ];

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMobileNav}>
          CRYPTOLORDS
        </NavLink>
        <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <AnchorLink href={link.href} onClick={closeMobileNav}>
                {link.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
        
        <div className="nav-actions">
          {/* <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button> */}
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
