'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || 'Not specified',
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_gc831ko", // 🔹 Replace with your EmailJS Service ID
        "template_381wtw2", // 🔹 Replace with your EmailJS Template ID
        templateParams,
        "qo6SLdXEADDbP3U52" // 🔹 Replace with your EmailJS Public Key
      );


      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <motion.div whileHover={{ x: 10 }} className="flex items-start space-x-4">
                    <div className="bg-[#b49559] p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        LGF Left side, D--768, opp. market no-2, Block D, Chittaranjan Park,  New Delhi 110019
                      </p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-start space-x-4">
                    <div className="bg-[#b49559] p-3 rounded-full flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9717505326</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-start space-x-4">
                    <div className="bg-[#b49559] p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                      <p className="text-gray-600">info@physiopilates.com</p>
                    </div>
                  </motion.div>

                  <motion.div whileHover={{ x: 10 }} className="flex items-start space-x-4">
                    <div className="bg-[#b49559] p-3 rounded-full flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Opening Hours</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Monday - Friday: 8:00 AM - 7:00 PM<br />
                        Saturday: 9:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b49559] focus:border-transparent transition-all"
                        placeholder="Full Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b49559] focus:border-transparent transition-all"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b49559] focus:border-transparent transition-all"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b49559] focus:border-transparent transition-all"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="Physiotherapy">Physiotherapy</option>
                        <option value="Pilates">Pilates</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Specialized Treatments">Specialized Treatments</option>
                        <option value="Teacher Training">Teacher Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b49559] focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your needs or questions..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || submitted}
                    className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                      submitted
                        ? 'bg-green-600'
                        : isSubmitting
                        ? 'bg-gray-400'
                        : 'bg-[#b49559] hover:bg-[#5CE2E7] shadow-lg'
                    }`}
                  >
                    {submitted ? (
                      <span>Message Sent Successfully!</span>
                    ) : isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-100">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.0833915716107!2d77.25058727528544!3d28.537213075717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce160878060fd%3A0xe2cc42b4d14c2664!2sPhysio%20Pilates!5e0!3m2!1sen!2sin!4v1762837395251!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>
    </div>
  );
}
