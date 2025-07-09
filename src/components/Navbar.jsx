import { useState } from "react";

export default function Navbar() {
  //state for mobile responsiveness
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-zinc-900 text-white sticky top-0 z-50 shadow-md overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold tracking-wide">
          Christopher McCormick
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#home" className="hover:text-zinc-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-zinc-400 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-zinc-400 transition">
            About
          </a>
          <a href="#resume" className="hover:text-zinc-400 transition">
            Resume
          </a>
          <a href="#contact" className="hover:text-zinc-400 transition">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewbox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/*mobile nav bar condenser*/}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="#home"
            className="block hover:text-zinc-400 transition text-lg p-2"
          >
            Home
          </a>
          <a
            href="#projects"
            className="block hover:text-zinc-400 transition text-lg p-2"
          >
            Projects
          </a>
          <a
            href="#about"
            className="block hover:text-zinc-400 transition text-lg p-2"
          >
            About
          </a>
          <a
            href="#resume"
            className="block hover:text-zinc-400 transition text-lg p-2"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="block hover:text-zinc-400 transition text-lg p-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
