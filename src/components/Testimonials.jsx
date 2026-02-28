import { API_URL } from "../config";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      role: "Fitness Instructor",
      text: "The Green Detox is my daily go-to after a morning workout. It's genuinely the freshest, most vibrant juice I've ever had in this city!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=47"
    },
    {
      id: 2,
      name: "David Chen",
      role: "Regular Customer",
      text: "I love the vibe of Sofine. The staff is always smiling, and their seasonal Watermelon Breeze is the perfect summer cooldown. Highly recommend!",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      id: 3,
      name: "Emily Roberts",
      role: "Food Blogger",
      text: "Finally, a juice place that doesn't sneak in artificial syrups! The Tropical Mango smoothie is a masterpiece. Pure, thick, and delicious.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=5"
    }
  ];

  return (
    <section className="section-padding bg-brand-bg relative overflow-hidden">
      <div className="absolute -left-32 -top-32 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl z-0" />

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-brand-orange font-semibold uppercase tracking-wider text-sm mb-2 block">Testimonials</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Loved by <span className="text-brand-green">Our Community</span></h2>
        <p className="text-gray-600 text-lg">
          Don't just take our word for it. Hear what our amazing customers have to say about their Sofine experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-soft transition-shadow relative mt-10"
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 right-8 w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center shadow-md text-white">
              <Quote size={20} fill="currentColor" />
            </div>

            {/* Avatar */}
            <div className="absolute -top-10 left-8">
              <img loading="lazy" 
                src={review.image} 
                alt={review.name} 
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            </div>

            <div className="pt-12 mb-6">
              <div className="flex gap-1 mb-4 text-brand-yellow">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 italic leading-relaxed text-sm md:text-base">
                "{review.text}"
              </p>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h4 className="font-display font-bold text-brand-dark">{review.name}</h4>
              <p className="text-brand-green text-sm font-medium">{review.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
