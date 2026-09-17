import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PROJECT_DETAILS } from '../data';
import { AlertCircle, HeartPulse, Cpu, CheckCircle2 } from 'lucide-react';

export default function Project() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Our Final-Year Project" 
        subtitle={PROJECT_DETAILS.title}
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="bg-red-50 p-4 rounded-2xl shrink-0">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Problem</h2>
              <div className="prose prose-lg text-slate-600">
                <p>{PROJECT_DETAILS.problem}</p>
              </div>
            </div>
          </motion.div>

          {/* Need */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="bg-amber-50 p-4 rounded-2xl shrink-0">
              <HeartPulse className="w-8 h-8 text-amber-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">The Need</h2>
              <div className="prose prose-lg text-slate-600">
                <p>{PROJECT_DETAILS.need}</p>
              </div>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="bg-teal-50 p-4 rounded-2xl shrink-0">
              <Cpu className="w-8 h-8 text-teal-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Proposed Solution</h2>
              <div className="prose prose-lg text-slate-600">
                <p>{PROJECT_DETAILS.proposedSolution}</p>
              </div>
            </div>
          </motion.div>

          {/* Objectives */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Objectives</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECT_DETAILS.objectives.map((objective, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                  <div className="bg-teal-50 p-1 rounded-full shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{objective}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Visual Process Flow: From Idea to Solution */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">From Idea to Solution</h2>
            <p className="text-slate-400">Our systematic approach from concept to evaluation.</p>
          </div>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">
              {[
                { num: "01", title: "IDENTIFY", desc: "Understand the healthcare challenge." },
                { num: "02", title: "RESEARCH", desc: "Study existing evidence and solutions." },
                { num: "03", title: "DEFINE", desc: "Establish requirements and constraints." },
                { num: "04", title: "DEVELOP", desc: "Create the proposed solution." },
                { num: "05", title: "TEST", desc: "Evaluate performance and functionality." },
                { num: "06", title: "IMPROVE", desc: "Use findings to refine the solution." }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center w-full max-w-[200px] text-center">
                  <div className="bg-slate-800 border border-teal-500/30 text-teal-400 w-16 h-16 rounded-full flex items-center justify-center text-xl font-black mb-4 relative z-10 shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                    {step.num}
                  </div>
                  <h3 className="font-bold tracking-wider mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
