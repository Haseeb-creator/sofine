import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 to-brand-dark/40 z-10" />
        <img 
          src="https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery-4.0.3&auto=format&fit=crop&w=1920&q=80" 
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
            className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Freshness in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
              Every Sip.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl"
          >
            Revitalize your body with our premium selection of cold-pressed juices, power smoothies, and thick shakes made from handpicked seasonal fruits.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#menu" 
              className="px-8 py-4 bg-brand-orange hover:bg-brand-darkOrange text-white rounded-full font-medium transition-all shadow-lg hover:shadow-brand-orange/30 flex items-center justify-center gap-2 group"
            >
              View Menu
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#about" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full font-medium transition-all flex items-center justify-center border border-white/20"
            >
              Our Story
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-brand-orange/20 blur-3xl rounded-full z-0"
      />
    </section>
  );
};

export default Hero;
