// React default import not required with new JSX transform
import { useState } from 'react';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

type NavClassFn = (props: { isActive: boolean }) => string;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#2E7D32] shadow-lg transition-all duration-300 h-16">
      <nav className="container mx-auto px-4 md:px-8 lg:px-16 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Left: logo */}
          <div className="flex items-center h-full">
            <img src="/logo.png" alt="SAGOSERVE Logo" className="w-28 md:w-36 h-10 object-contain" />
          </div>

          {/* Right: search + desktop nav + socials + mobile button */}
          <div className="flex items-center space-x-4 flex-1 justify-end">
            {/* Search (icon first) */}
            <div className="relative flex items-center">
              <button
                className="search-icon flex items-center justify-center w-8 h-8 bg-white bg-opacity-10 rounded-md text-white"
                onClick={() => setSearchOpen(v => !v)}
                aria-label="Open search"
              >
                <Search size={14} />
              </button>
              <input
                id="nav-search-input"
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`transition-all duration-300 ease-in-out ml-2 px-2 py-1 rounded-md text-gray-800 ${searchOpen ? 'w-36 md:w-44 opacity-100' : 'w-0 opacity-0 overflow-hidden'}`}
              />
            </div>

            {/* Desktop Navigation (on the right) */}
            <div className="hidden md:flex items-center space-x-4 md:space-x-12">
              <NavLink to="/" className={( ({ isActive }) => `text-white text-sm md:text-base transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn} end>Home</NavLink>
              <NavLink to="/about" className={( ({ isActive }) => `text-white transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn}>About Us</NavLink>
              <NavLink to="/product" className={( ({ isActive }) => `text-white transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn}>Products</NavLink>

              <div className="relative group">
                <NavLink to="/services" className={( ({ isActive }) => `text-white transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn}>Services</NavLink>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block">
                  <NavLink to="/services#members" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Members</NavLink>
                  <NavLink to="/services#merchants" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Merchants</NavLink>
                  <NavLink to="/services#tender" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tender</NavLink>
                  <NavLink to="/services#laboratory" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Laboratory</NavLink>
                  <NavLink to="/services#warehouse" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Warehouse</NavLink>
                </div>
              </div>

              <NavLink to="/auction" className={( ({ isActive }) => `text-white text-sm md:text-base transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn}>E-Auction</NavLink>
              <NavLink to="/registration" className={( ({ isActive }) => `text-white text-sm md:text-base transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn}>Registration</NavLink>

              <div className="relative inline-flex items-center ml-3">
                <NavLink to="/contact" className={( ({ isActive }) => `text-white transition-colors duration-200 ${isActive ? 'text-blue-200' : 'hover:text-blue-200'}`) as NavClassFn}>Contact</NavLink>

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setContactOpen(v => !v); }}
                  aria-label="Toggle contact dropdown"
                  aria-expanded={contactOpen}
                  className="ml-3 p-1 text-white rounded hover:bg-white hover:bg-opacity-10 transition-colors"
                >
                  <ChevronDown size={14} className={`transform transition-transform duration-200 ${contactOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <div
                  className={`absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg z-50 transform transition-all duration-200 origin-top-right ${contactOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                >
                  <NavLink to="/news" className="block px-4 py-2 text-gray-800 hover:bg-[#2E7D32] hover:text-white transition-colors">News & Announcement</NavLink>
                  <NavLink to="/resources" className="block px-4 py-2 text-gray-800 hover:bg-[#2E7D32] hover:text-white transition-colors">Resources / Downloads</NavLink>
                </div>
              </div>
            </div>

            {/* Socials (desktop) */}
            <div className="hidden md:flex space-x-2">
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200"><i className="fab fa-facebook"></i></a>
            </div>

            {/* Mobile burger */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <NavLink to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Home</NavLink>
                <NavLink to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">About Us</NavLink>
                <NavLink to="/products" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Products</NavLink>
                <NavLink to="/services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Services</NavLink>
                <NavLink to="/auction" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">E-Auction</NavLink>
                <NavLink to="/gallery" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Gallery</NavLink>
                <div className="relative">
                  <button onClick={() => setContactOpen(v => !v)} className="w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200">Contact</button>
                  {contactOpen && (
                    <div className="mt-2 ml-2 pl-2 border-l border-gray-200">
                      <NavLink to="/news" className="block text-gray-700 hover:bg-[#2E7D32] hover:text-white px-3 py-1 rounded">News & Announcement</NavLink>
                      <NavLink to="/resources" className="block text-gray-700 hover:bg-[#2E7D32] hover:text-white px-3 py-1 rounded">Resources / Downloads</NavLink>
                    </div>
                  )}
                </div>
                <NavLink to="/registration" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">Registration</NavLink>
                <div className="mt-2">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 rounded-md text-gray-800"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;