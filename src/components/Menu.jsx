import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('Fresh Juices');

  const categories = [
    'Fresh Juices',
    'Milkshakes',
    'Smoothies',
    'Seasonal Specials'
  ];

  const menuItems = [
    {
      id: 1,
      category: 'Fresh Juices',
      name: 'Citrus Sunrise',
      description: 'Orange, Carrot, Ginger, and a hint of Lemon.',
      price: '$5.50',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 2,
      category: 'Fresh Juices',
      name: 'Green Detox',
      description: 'Kale, Spinach, Green Apple, Celery, and Cucumber.',
      price: '$6.00',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 3,
      category: 'Fresh Juices',
      name: 'Beet It Up',
      description: 'Beetroot, Carrot, Apple, and Lemon.',
      price: '$5.50',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 4,
      category: 'Milkshakes',
      name: 'Classic Vanilla Bean',
      description: 'Real vanilla bean ice cream blended with organic milk.',
      price: '$6.50',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 5,
      category: 'Milkshakes',
      name: 'Oreo Overload',
      description: 'Crushed Oreos, chocolate syrup, and vanilla ice cream.',
      price: '$7.00',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 6,
      category: 'Smoothies',
      name: 'Tropical Mango',
      description: 'Mango, Pineapple, Banana, and Coconut Water.',
      price: '$6.75',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 7,
      category: 'Smoothies',
      name: 'Berry Blast',
      description: 'Strawberries, Blueberries, Raspberries, and Almond Milk.',
      price: '$7.25',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    },
    {
      id: 8,
      category: 'Seasonal Specials',
      name: 'Watermelon Breeze',
      description: 'Pure watermelon juice fresh mint leaves. (Summer only)',
      price: '$5.00',
      image: 'https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery'
    }
  ];

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
          {filteredItems.map((item) => (
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
                <img 
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
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Menu;
