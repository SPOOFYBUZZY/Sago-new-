import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2E7D32] shadow-lg transition-all duration-300 animate-fade-in-down">
      <nav className="container mx-auto px-6 md:px-16 lg:px-32 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/public/logo.png" alt="SAGOSERVE Logo" className="w-35 h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-200 transition-colors duration-200">Home</a>
            <a href="#about" className="text-white hover:text-blue-200 transition-colors duration-200">About Us</a>
            <div className="relative group">
              <a href="#services" className="text-white hover:text-blue-200 transition-colors duration-200">Services</a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                <a href="#members" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Members</a>
                <a href="#merchants" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Merchants</a>
                <a href="#tender" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tender</a>
                <a href="#laboratory" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Laboratory</a>
                <a href="#warehouse" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Warehouse</a>
              </div>
            </div>
            <a href="#about-sago" className="text-white hover:text-blue-200 transition-colors duration-200">About Sago</a>
            <div className="relative group">
              <a href="#management" className="text-white hover:text-blue-200 transition-colors duration-200">Management</a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                <a href="#managing-director" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Managing Director</a>
              </div>
            </div>
            <a href="#gallery" className="text-white hover:text-blue-200 transition-colors duration-200">Gallery</a>
            <a href="#contact" className="text-white hover:text-blue-200 transition-colors duration-200">Contact</a>
            <a href="#registration" className="text-white hover:text-blue-200 transition-colors duration-200">Registration</a>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fab fa-facebook"></i></a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About Us</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</a>
                <a href="#about-sago" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About Sago</a>
                <a href="#management" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Management</a>
                <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Gallery</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</a>
                <a href="#registration" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Registration</a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;