import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
        >
          <div className="bg-brand-gold text-black p-1.5 rounded-md group-hover:rotate-12 transition-transform duration-300">
            <Camera size={24} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-serif font-bold text-white tracking-wide">
            Beyond Ordinary <span className="text-brand-gold">Films</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium tracking-widest text-gray-300 hover:text-brand-gold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-brand-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-card border-t border-gray-800 p-6 flex flex-col gap-4 shadow-2xl md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-medium text-gray-200 hover:text-brand-gold block py-2 border-b border-gray-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;