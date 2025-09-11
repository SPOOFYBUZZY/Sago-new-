import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-16 lg:px-32 animate-fade-in-up">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-green-800 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">SAGOSERVE</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Excellence in service delivery, empowering businesses with innovative solutions 
              for the modern marketplace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#registration" className="text-gray-400 hover:text-white transition-colors duration-200">Registration</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">E-commerce Solutions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Member Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Business Automation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Analytics & Reporting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">24/7 Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-400">Jagirammapalayam Post <br />Omalur Main Road, Salem-636302</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-400">+91 9489905440, 9489905441</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-400">slm_mdsago@yahoo.co.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 SAGOSERVE. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;