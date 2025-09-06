// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { FaServicestack, FaInfoCircle, FaBlog, FaUserMd, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "service", icon: <FaServicestack /> },
    { name: "about", icon: <FaInfoCircle /> },
    { name: "blog", icon: <FaBlog /> },
    { name: "doctors", icon: <FaUserMd /> },
    { name: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all ${scrolled ? "bg-teal-600/90 shadow-lg" : "bg-teal-500/70"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-white font-bold text-2xl cursor-pointer">
          SQ Health<span className="text-orange-400">Care</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white items-center">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center gap-1 hover:text-orange-400 transition-colors cursor-pointer">
              <ScrollLink to={item.name} smooth={true} duration={500} className="capitalize flex items-center gap-1">
                {item.icon} {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 bg-teal-600/90 py-6 text-white">
          {navItems.map((item) => (
            <li key={item.name} className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer">
              <ScrollLink
                onClick={() => setNavOpen(false)}
                to={item.name}
                smooth={true}
                duration={500}
                className="capitalize flex items-center gap-2 text-lg"
              >
                {item.icon} {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
