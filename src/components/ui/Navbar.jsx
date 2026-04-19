import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useThemeStore } from "../../store/useThemeStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const { darkMode, toggleTheme } = useThemeStore();

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Courses", id: "courses" },
    { name: "Contact", id: "contact" },
  ];

  // 🔥 ACTIVE LINK ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          const offsetHeight = section.offsetHeight;

          if (
            window.scrollY >= offsetTop &&
            window.scrollY < offsetTop + offsetHeight
          ) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔥 SMOOTH SCROLL
  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-700">

      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Akz IT
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleScrollTo(link.id)}
                className={`relative transition ${
                  active === link.id
                    ? "text-indigo-500"
                    : "hover:text-indigo-500"
                }`}
              >
                {link.name}

                {/* 🔥 ACTIVE UNDERLINE */}
                {active === link.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-indigo-500 rounded"></span>
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* THEME */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-700 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* MOBILE BTN */}
          <button
            className="md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* 🔥 MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg shadow-md md:hidden">
          <ul className="flex flex-col p-4 gap-4">

            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScrollTo(link.id)}
                  className={`w-full text-left py-2 border-b border-gray-200 dark:border-slate-700 ${
                    active === link.id ? "text-indigo-500 font-medium" : ""
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;