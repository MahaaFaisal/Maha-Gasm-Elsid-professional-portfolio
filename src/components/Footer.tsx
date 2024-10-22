import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">&copy; 2024 Maha Gasm Elsid. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://github.com/MahaaFaisal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/mahagasmelsid/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <Linkedin size={24} />
            </a>
            <a href="./resources/Maha-Gasm-Elsid-resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
              <FileText size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;