import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { TEAM_INFO } from '../data';
import { MapPin, Mail, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="w-full">
      <PageHeader 
        title="Get In Touch" 
        subtitle="We welcome opportunities to connect and collaborate."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Whether you are a student, researcher, healthcare professional, or engineer interested in biomedical engineering solutions, we would love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Address</h3>
                      <p className="text-slate-600 mt-1">
                        {TEAM_INFO.name}<br />
                        Biomedical Engineering<br />
                        {TEAM_INFO.university}<br />
                        {TEAM_INFO.location}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-xl shrink-0">
                      <Mail className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Email</h3>
                      <a 
                        href={`mailto:${TEAM_INFO.email}`}
                        className="text-teal-600 hover:text-teal-700 mt-1 block"
                      >
                        {TEAM_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Socials */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="font-bold text-slate-900 mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a href={TEAM_INFO.socials.linkedin} className="bg-slate-50 p-4 rounded-xl text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={TEAM_INFO.socials.twitter} className="bg-slate-50 p-4 rounded-xl text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={TEAM_INFO.socials.instagram} className="bg-slate-50 p-4 rounded-xl text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-slate-900 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all bg-white resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formState !== 'idle'}
                    className="w-full inline-flex justify-center items-center px-6 py-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {formState === 'idle' && (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                    {formState === 'submitting' && (
                      <span className="animate-pulse">Sending...</span>
                    )}
                    {formState === 'success' && (
                      <span className="text-teal-400">Message Sent Successfully!</span>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
