import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplet, ShieldCheck, Clock } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Leaf className="text-brand-green" size={32} />,
      title: "Fresh Ingredients",
      description: "We source our fruits from local organic farms daily to ensure maximum flavor and nutrition."
    },
    {
      icon: <Droplet className="text-brand-orange" size={32} />,
      title: "No Artificial Additives",
      description: "100% natural juices with zero preservatives, colorants, or refined sugars added."
    },
    {
      icon: <ShieldCheck className="text-brand-green" size={32} />,
      title: "Hygienic Preparation",
      description: "Our state-of-the-art kitchens maintain the highest level of cleanliness and exact food safety standards."
    },
    {
      icon: <Clock className="text-brand-orange" size={32} />,
      title: "Fast Service",
      description: "Cold-pressed and blended to order in minutes, so you never compromise between health and time."
    }
  ];

  return (
    <section className="section-padding bg-white relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-brand-green font-semibold uppercase tracking-wider text-sm mb-2 block">Why Choose Us</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">The <span className="text-brand-orange">Sofine</span> Difference</h2>
        <p className="text-gray-600 text-lg">
          We don't just blend fruits; we craft wellness in a cup. Here is why our customers keep coming back for more.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-brand-bg rounded-3xl p-8 hover:shadow-soft transition-all duration-300 border border-transparent hover:border-brand-green/20 group text-center"
          >
            <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="font-display font-bold text-xl text-brand-dark mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
