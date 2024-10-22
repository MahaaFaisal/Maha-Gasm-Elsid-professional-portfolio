import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white py-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Maha Gasm Elsid</h1>
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <span>&#10005;</span> // Close icon (you can use an icon library instead)
          ) : (
            <span>&#9776;</span> // Hamburger icon
          )}
        </button>
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:relative bg-white w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {['About', 'Qualifications', 'Skills', 'Experience', 'Projects', 'Achievements', 'Reflections'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
                  onClick={() => setIsOpen(false)} // Close the menu on item click
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
