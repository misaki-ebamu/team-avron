import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Microscope, Dna, Activity, ArrowRight } from 'lucide-react';
import { TEAM_INFO } from '../data';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[90vh] flex items-center pt-16 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=2000" 
            alt="Biomedical engineering laboratory" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center space-x-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm font-medium tracking-wide mb-6 border border-teal-500/30">
              <Microscope className="w-4 h-4" />
              <span>{TEAM_INFO.name}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Biomedical Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Research & Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              {TEAM_INFO.supportingStatement}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/project" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-gray-50 transition-colors"
              >
                Explore Our Project
              </Link>
              <Link 
                to="/team" 
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-light">
              "Team Avron is a team of four Biomedical Engineering students at Makerere University committed to identifying healthcare challenges and developing practical, evidence-based solutions through research, engineering and collaboration."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all group"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Microscope className="w-7 h-7 text-teal-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">RESEARCH</h3>
              <p className="text-slate-600 leading-relaxed">
                Investigating real-world healthcare challenges through evidence-based research.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all group"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Dna className="w-7 h-7 text-teal-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">ENGINEERING</h3>
              <p className="text-slate-600 leading-relaxed">
                Applying biomedical engineering principles to develop practical solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg hover:border-teal-100 transition-all group"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors">
                <Activity className="w-7 h-7 text-teal-700 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-wide">IMPACT</h3>
              <p className="text-slate-600 leading-relaxed">
                Working toward solutions that can improve healthcare delivery and human wellbeing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Interested in our work?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We welcome opportunities to connect and collaborate with students, researchers, healthcare professionals, engineers and organisations.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors text-lg"
          >
            <span>Work With Team Avron</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
