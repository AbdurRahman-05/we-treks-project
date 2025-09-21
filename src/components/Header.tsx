import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../images/eae1499f-5f52-4311-8a8d-5fe1923bdb0f.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/?scrollTo=about' },
    { label: 'Trekking', href: '/?scrollTo=trekking-packages' },
    { label: 'Bike Riding', href: '/?scrollTo=bike-riding-package' },
    { label: 'Tour Packages', href: '/?scrollTo=packages' },
    { label: 'Services', href: '/?scrollTo=services' },
    { label: 'Gallery', href: '/?scrollTo=gallery' },
    { label: 'Contact', href: '/?scrollTo=footer-contact' },
  ];

  

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto py-2 md:h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              style={{ height: 40, width: 40, objectFit: 'cover', borderRadius: '50%' }}
            />
            <span className="text-xl sm:text-2xl font-bold text-gray-900">We Trek India</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/membership"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Get Membership
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block py-1.5 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                onClick={() => {
                  setIsMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/membership"
              className="block w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 text-center"
              onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Get Membership
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;