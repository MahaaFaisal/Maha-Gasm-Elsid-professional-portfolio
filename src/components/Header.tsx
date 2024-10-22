import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Maha Gasm Elsid</h1>
        <nav>
          <ul className="flex space-x-6">
            {['About', 'Qualifications', 'Skills', 'Experience', 'Projects', 'Achievements', 'Reflections'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
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