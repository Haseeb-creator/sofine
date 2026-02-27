import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1 border-r-none md:border-r border-white/10 pr-4">
          <h2 className="font-display font-bold text-3xl mb-4 text-brand-orange">Sofine <span className="text-brand-green">Juice</span></h2>
          <p className="text-gray-400 mb-6 font-medium">Freshness in Every Sip. Premium juices, smoothies, and shakes made with 100% real ingredients.</p>
          <div className="flex gap-4">
            <a href="#" className="bg-white/10 hover:bg-brand-orange transition-colors p-2 rounded-full"><Facebook size={20} /></a>
            <a href="#" className="bg-white/10 hover:bg-brand-orange transition-colors p-2 rounded-full"><Instagram size={20} /></a>
            <a href="#" className="bg-white/10 hover:bg-brand-orange transition-colors p-2 rounded-full"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-4 text-white">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><a href="#home" className="hover:text-brand-yellow transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-brand-yellow transition-colors">About Us</a></li>
            <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Juice Menu</a></li>
            <li><a href="#gallery" className="hover:text-brand-yellow transition-colors">Gallery</a></li>
            <li><a href="#contact" className="hover:text-brand-yellow transition-colors">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-4 text-white">Our Menu</h3>
          <ul className="flex flex-col gap-3 text-gray-400">
            <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Fresh Juices</a></li>
            <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Power Smoothies</a></li>
            <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Milkshakes</a></li>
            <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Seasonal Specials</a></li>
            <li><a href="#menu" className="hover:text-brand-yellow transition-colors">Detox Blends</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-lg mb-4 text-white">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li className="flex gap-3 items-start">
              <MapPin className="text-brand-orange shrink-0 mt-1" size={20} />
              <span>123 Fresh Avenue, Health District<br />Cityville, ST 12345</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-brand-orange shrink-0" size={20} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="text-brand-orange shrink-0" size={20} />
              <span>hello@sofinejuice.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sofine Juice Center. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
