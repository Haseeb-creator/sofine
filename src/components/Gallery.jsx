import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    "https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery",
    "https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery",
    "https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery",
    "https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery",
    "https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery",
    "https://placehold.co/600x400/FFF8E1/FF8A00?text=Brand+Imagery"
  ];

  return (
    <section id="gallery" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 text-center mb-12">
        <span className="text-brand-yellow font-semibold uppercase tracking-wider text-sm mb-2 block">Our Gallery</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Served with <span className="text-brand-orange">Style</span></h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-0 w-full overflow-hidden">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square md:aspect-[4/3] w-full overflow-hidden group outline-none"
          >
            <img 
              src={src} 
              alt={`Gallery image ${index + 1}`} 
              className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-brand-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl md:text-2xl tracking-wide">
                Sofine <span className="text-brand-dark">Vibes</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
