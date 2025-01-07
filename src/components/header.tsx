import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Innovation</h1>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-white w-full lg:w-auto left-0 top-16 lg:top-auto shadow-lg lg:shadow-none`}
        >
          <a
            href="#home"
            className="block lg:inline-block py-2 px-4 text-gray-700 hover:text-blue-600"
          >
            Home
          </a>
          <a
            href="#about"
            className="block lg:inline-block py-2 px-4 text-gray-700 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#contact"
            className="block lg:inline-block py-2 px-4 text-gray-700 hover:text-blue-600"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
