import { API_URL } from "../config";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy logic
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // Offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-soft py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          {/* Brand Logo / Text */}
          <span className={`font-display font-bold text-2xl ${isScrolled ? 'text-brand-orange' : 'text-white'}`}>
            Sofine <span className={isScrolled ? 'text-brand-green' : 'text-brand-yellow'}>Juice</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium transition-colors ${
                activeSection === link.id 
                  ? 'text-brand-orange font-bold' 
                  : isScrolled 
                    ? 'text-brand-dark hover:text-brand-green' 
                    : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" aria-label="Visit Store Contact Section" className="bg-brand-orange hover:bg-brand-darkOrange text-white px-6 py-2 rounded-full font-medium transition-colors shadow-md">
            Visit Store
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className={isScrolled ? 'text-brand-dark' : 'text-white'} /> : <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-soft py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-medium text-brand-dark hover:text-brand-green py-2 border-b border-gray-100"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" aria-label="Visit Store Contact Section" onClick={() => setIsOpen(false)} className="bg-brand-orange text-white text-center px-6 py-3 rounded-full font-medium mt-2">
            Visit Store
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
