import { API_URL } from "../config";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';
import axios from 'axios';

const Hero = () => {
  const [content, setContent] = useState({
    title: 'Freshness in \nEvery Sip.',
    subtitle: 'Revitalize your body with our premium selection of organic juices, crafted daily from the finest locally-sourced fruits.'
  });

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/api/content/hero`);
        if (data && data.title) {
          setContent(data);
        }
      } catch (err) {
        console.log("Using default hero content");
      }
    };
    fetchContent();
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-brand-dark/40 z-10" />
        <img 
          src={content.backgroundImage || "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=1920"} 
          alt="Fresh Juice Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-20">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-4"
          >
            <Leaf className="text-brand-green" size={24} />
            <span className="text-brand-yellow font-medium tracking-wider uppercase text-sm">100% Organic & Natural</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 whitespace-pre-line"
          >
            {content.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed"
          >
            {content.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="bg-brand-orange hover:bg-brand-darkOrange text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-orange/50 flex items-center justify-center gap-2 group">
              Order Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center">
              View Menu
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 flex items-center gap-4 text-white/80"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Customer" 
                  className="w-10 h-10 rounded-full border-2 border-brand-dark"
                />
              ))}
            </div>
            <div className="text-sm">
              <p><span className="font-bold text-brand-yellow">500+</span> Happy Customers</p>
              <div className="flex text-brand-orange mt-1">
                {'★'.repeat(5)}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
