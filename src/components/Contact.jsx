import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This is a placeholder form submission.');
    setFormData({name: '', email: '', message: ''});
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-green font-semibold uppercase tracking-wider text-sm mb-2 block">Reach Out</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Keep in <span className="text-brand-orange">Touch</span></h2>
          <p className="text-gray-600 text-lg">
            Have questions about our sourcing, want to cater an event, or just want to say hi? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-brand-lightYellow rounded-3xl p-8 border border-brand-yellow/20">
              <h3 className="font-display font-bold text-2xl mb-6 text-brand-dark">Visit Our Store</h3>
              
              <ul className="flex flex-col gap-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-brand-orange" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">123 Fresh Avenue, Health District<br />Cityville, ST 12345</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="text-brand-green" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Opening Hours</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">Mon-Fri: 7:00 AM - 9:00 PM<br />Sat-Sun: 8:00 AM - 10:00 PM</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="text-brand-orange" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark mb-1">Phone</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">+1 (555) 123-4567</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Google Map Dummy Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.064500995251!2d-122.41940028468205!3d37.77492997975887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050f14!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1659999999999!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
          >
            <h3 className="font-display font-bold text-2xl mb-8 text-brand-dark">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Your Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-darkOrange text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
