import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const milestones = [
    {
      year: "2015",
      title: "The Humble Beginning",
      description: "Started as a small cart in the local market by two health enthusiasts who couldn't find a genuinely fresh juice without added sugar in the city."
    },
    {
      year: "2017",
      title: "Opening the First Store",
      description: "Driven by overwhelming community love, Sofine Juice Center opened its first physical outlet, introducing signature smoothies and hygiene standards."
    },
    {
      year: "2020",
      title: "Community Connection",
      description: "During challenging times, we launched immune-boosting detox blends and initiated local farm partnerships to sustain pure ingredient sourcing."
    },
    {
      year: "2024",
      title: "Expanding the Vision",
      description: "Now serving across multiple locations with a loyal following, continually innovating our menu while staying true to our core of 100% natural, hygienic preparation."
    }
  ];

  return (
    <section id="history" className="section-padding bg-brand-lightYellow relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <span className="text-brand-orange font-semibold uppercase tracking-wider text-sm mb-2 block">Our Journey</span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Roots of <span className="text-brand-green">Sofine</span></h2>
        <p className="text-gray-600 text-lg">
          From a simple idea to a beloved community brand, explore the timeline of our growth, driven by an unwavering commitment to health and taste.
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Timeline Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 bg-brand-orange/30 -translate-x-1/2 rounded-full" />

        <div className="flex flex-col gap-12">
          {milestones.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-brand-orange shadow-[0_0_0_4px_#FFF8E1] -translate-x-1/2 mt-2 md:mt-0 z-10" />

              {/* Content Box */}
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pl-10 text-left' : 'md:pr-10 md:text-right'}`}>
                <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:border-brand-orange/30 transition-colors group">
                  <span className="text-brand-orange font-bold text-xl mb-1 block">{item.year}</span>
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3 pt-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
