import { API_URL } from "../config";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Fresh Juices');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Still safe to hardcode categories for tab filtering for now
  const categories = [
    'Fresh Juices',
    'Milkshakes',
    'Smoothies',
    'Seasonal Specials'
  ];

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/menu`);
        setMenuItems(data);
      } catch (err) {
        console.error('Error fetching menu items', err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const filteredItems = menuItems.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="section-padding bg-brand-bg relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <span className="text-brand-orange font-semibold uppercase tracking-wider text-sm mb-2 block">Our Menu</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Taste the <span className="text-brand-green">Freshness</span></h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 relative z-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === cat 
                ? 'bg-brand-dark text-white shadow-md' 
                : 'bg-white text-gray-500 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {loading ? (
            <div className="col-span-full flex justify-center py-20">
              <div className="w-12 h-12 rounded-full border-4 border-brand-green/20 border-t-brand-green animate-spin"></div>
            </div>
          ) : (
            filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-soft transition-shadow border border-gray-100 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img loading="lazy" 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-brand-orange text-white text-sm font-bold px-3 py-1 rounded-full shadow-md">
                    {item.price}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-2">{item.name}</h3>
                  <p className="text-gray-500 text-sm mb-4 flex-1">{item.description}</p>
                  <button className="w-full py-3 rounded-xl border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors">
                    Add to Order
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
