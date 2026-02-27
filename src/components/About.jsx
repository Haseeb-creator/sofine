import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-2 gap-4 h-[500px]"
        >
          <div className="flex flex-col gap-4 pt-10">
            <img loading="lazy" 
              src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Pouring fresh juice" 
              className="w-full h-48 object-cover rounded-2xl shadow-soft"
            />
            <img loading="lazy" 
              src="https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Fresh fruits" 
              className="w-full h-64 object-cover rounded-2xl shadow-soft"
            />
          </div>
          <div className="flex flex-col gap-4">
            <img loading="lazy" 
              src="https://images.pexels.com/photos/4328273/pexels-photo-4328273.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Smoothie bowl" 
              className="w-full h-64 object-cover rounded-2xl shadow-soft"
            />
            <div className="w-full h-48 bg-brand-lightYellow rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-soft border border-brand-yellow/20">
              <span className="text-4xl font-display font-bold text-brand-orange mb-2">100%</span>
              <span className="text-brand-dark font-medium">Natural Ingredients</span>
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-2">
            <span className="text-brand-green font-semibold uppercase tracking-wider text-sm">About The Brand</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pure Goodness in Every Drop.</h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Welcome to Sofine Juice Center, where passion for health meets the love for extraordinary taste. We believe that what you put into your body matters, which is why we’re obsessed with freshness, hygiene, and uncompromising quality.
          </p>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Every beverage we craft is a testament to our commitment to nature. From locally sourced, farm-fresh fruits to our rigorous hygiene protocols, we ensure that every sip you take is packed with vital nutrients and incredible flavor. No artificial additives, no refined sugars—just pure, unadulterated goodness.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8 border-t border-gray-100 pt-8">
            <div>
              <h4 className="font-display text-xl font-bold text-brand-dark mb-2 border-l-4 border-brand-orange pl-3">Our Mission</h4>
              <p className="text-gray-600 text-sm">To provide accessible, delicious, and deeply nourishing beverages that inspire healthier communities.</p>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-brand-dark mb-2 border-l-4 border-brand-green pl-3">Our Vision</h4>
              <p className="text-gray-600 text-sm">To be the most trusted name in natural refreshment, redefining the standard for juice bars globally.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
