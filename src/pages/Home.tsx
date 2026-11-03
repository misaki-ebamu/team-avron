import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Microscope, Dna, Activity, ArrowRight, HeartPulse, Target, ShieldCheck, Clock, Radar, ExternalLink, Camera, Sparkles } from 'lucide-react';
import { TEAM_INFO, PROJECT_DETAILS, CRITERIA_OF_SUCCESS, GALLERY } from '../data';

export default function Home() {
  const researchCount = GALLERY.filter(i => i.category === 'Research' && !i.isPlaceholder).length;
  const meetingsCount = GALLERY.filter(i => i.category === 'Meetings' && !i.isPlaceholder).length;
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
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-slate-900 bg-white hover:bg-gray-50 transition-colors shadow-lg"
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
                Investigating real-world healthcare challenges through evidence-based research and hazard characterization.
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
                Applying biomedical engineering principles, embedded systems, and ISO 14971 standards to develop practical solutions.
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
                Empowering independent mobility for visually impaired individuals through reliable, accessible assistive technologies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Project Showcase Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Project Overview & Need */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center space-x-2 bg-teal-500/20 text-teal-300 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-500/30">
                <Target className="w-4 h-4 text-teal-400" />
                <span>Final-Year Biomedical Engineering Project</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {PROJECT_DETAILS.title}
              </h2>

              <div className="bg-slate-800/80 border border-teal-500/30 rounded-2xl p-6 relative backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-teal-400 font-semibold text-xs tracking-wider uppercase mb-2">
                  <HeartPulse className="w-4 h-4" />
                  <span>The Need</span>
                </div>
                <blockquote className="text-lg sm:text-xl text-slate-100 italic font-light leading-relaxed">
                  "{PROJECT_DETAILS.need}"
                </blockquote>
              </div>

              <p className="text-slate-300 leading-relaxed text-base">
                Navigating low-resource outdoor environments poses serious risks of collisions and injury for visually impaired individuals. Our project integrates multi-sensor hazard detection, low-latency firmware, and distinct haptic/audio cues to restore safe, independent mobility.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link 
                  to="/project" 
                  className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg"
                >
                  <span>Explore Project & 10 Success Criteria</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href={PROJECT_DETAILS.documentPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-3.5 rounded-xl border border-slate-700 transition-all"
                >
                  <span>Official Specification PDF</span>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Right Column: Key Criteria Preview */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-white">Target Metrics at a Glance</h3>
                  <span className="text-xs font-bold text-teal-400 bg-teal-950/60 border border-teal-800 px-2.5 py-1 rounded-full">
                    10 Criteria
                  </span>
                </div>

                <div className="space-y-3.5">
                  {[
                    { icon: <Radar className="w-4 h-4 text-teal-400" />, label: "Detection Reliability", val: "≥ 90%" },
                    { icon: <Clock className="w-4 h-4 text-teal-400" />, label: "Response Latency", val: "≤ 300 ms" },
                    { icon: <Radar className="w-4 h-4 text-teal-400" />, label: "Detection Range", val: "0.3 m – 3.0 m" },
                    { icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />, label: "Safety Management", val: "ISO 14971" },
                    { icon: <Target className="w-4 h-4 text-indigo-400" />, label: "System Usability Score", val: "SUS ≥ 70" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-700/60">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-slate-800">
                          {item.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-200">{item.label}</span>
                      </div>
                      <span className="text-sm font-bold text-teal-300 bg-teal-950/80 px-2.5 py-1 rounded-md border border-teal-800/60">
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link 
                    to="/project" 
                    className="text-xs font-bold uppercase tracking-wider text-teal-400 hover:text-teal-300 flex items-center justify-center space-x-1.5 py-2"
                  >
                    <span>View all 10 success criteria in full</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery & Meetings Preview Banner */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/30">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Project Gallery & Field Records</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Field Research, Ideation & Clinical Immersion
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Browse verified photographic records from our 30/10/2026 HMW Ideation Session at the MakCHS Design Cube, clinical interviews at Mulago Molecular Biology Labs, and weekly sprint meetings documented in our Managerial Report.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/gallery?category=Research"
                  className="px-5 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg inline-flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>HMW Ideation ({researchCount} Photos)</span>
                </Link>
                <Link
                  to="/gallery?category=Meetings"
                  className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all inline-flex items-center space-x-2"
                >
                  <span>Meetings ({meetingsCount} Records)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
