import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PROJECT_DETAILS, CRITERIA_OF_SUCCESS } from '../data';
import { 
  AlertCircle, 
  HeartPulse, 
  Cpu, 
  CheckCircle2, 
  Target, 
  ShieldCheck, 
  BatteryCharging, 
  Clock, 
  Radar, 
  SlidersHorizontal, 
  Waves, 
  CloudRain, 
  Download, 
  ExternalLink,
  FileCheck,
  BookOpen
} from 'lucide-react';

const getCriterionIcon = (id: number) => {
  switch (id) {
    case 1: return <Radar className="w-5 h-5 text-teal-600" />;
    case 2: return <SlidersHorizontal className="w-5 h-5 text-teal-600" />;
    case 3: return <Clock className="w-5 h-5 text-teal-600" />;
    case 4: return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    case 5: return <Radar className="w-5 h-5 text-teal-600" />;
    case 6: return <BatteryCharging className="w-5 h-5 text-cyan-600" />;
    case 7: return <CheckCircle2 className="w-5 h-5 text-indigo-600" />;
    case 8: return <CloudRain className="w-5 h-5 text-blue-600" />;
    case 9: return <Waves className="w-5 h-5 text-purple-600" />;
    case 10: return <AlertCircle className="w-5 h-5 text-rose-600" />;
    default: return <Target className="w-5 h-5 text-teal-600" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Performance':
      return 'bg-teal-50 text-teal-700 border-teal-200';
    case 'Safety':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'Usability':
      return 'bg-indigo-50 text-indigo-700 border-indigo-200';
    case 'Durability':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
};

export default function Project() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Our Final-Year Project" 
        subtitle={PROJECT_DETAILS.title}
      />

      {/* Need Statement Hero Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center space-x-3 text-teal-400 font-semibold text-sm tracking-wider uppercase">
                <HeartPulse className="w-5 h-5 text-teal-400" />
                <span>Core Need Statement</span>
              </div>
              <span className="text-xs text-teal-300 bg-teal-950/80 border border-teal-800/60 px-3 py-1 rounded-full font-medium">
                Supervised by {PROJECT_DETAILS.supervisors}
              </span>
            </div>
            
            <blockquote className="text-2xl sm:text-3xl font-light text-slate-100 leading-relaxed italic border-l-4 border-teal-400 pl-6 my-4">
              "{PROJECT_DETAILS.need}"
            </blockquote>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <p className="text-sm text-slate-400">
                Department: <span className="text-slate-200 font-medium">{PROJECT_DETAILS.department}, {PROJECT_DETAILS.institution}</span>
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href={PROJECT_DETAILS.technicalReportPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-teal-300 border border-teal-500/40 font-semibold px-4 py-2 rounded-xl text-sm transition-all shadow-sm"
                >
                  <BookOpen className="w-4 h-4 text-teal-400" />
                  <span>Technical Report (45p)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <a 
                  href={PROJECT_DETAILS.documentPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold px-4 py-2 rounded-xl text-sm transition-all shadow-sm"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Criteria of Success</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
                <Link
                  to="/resources"
                  className="inline-flex items-center space-x-1 text-slate-400 hover:text-teal-300 text-xs font-semibold px-2 py-2 transition-colors"
                >
                  <span>All Documents →</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem, Need & Proposed Solution Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start"
          >
            <div className="bg-red-50 p-4 rounded-2xl shrink-0 border border-red-100">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                  Challenge
                </span>
                <h2 className="text-3xl font-bold text-slate-900">The Problem</h2>
              </div>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p>{PROJECT_DETAILS.problem}</p>
              </div>

              {/* Problem Breakdown Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Cane Range Limitations</h4>
                  <p className="text-xs text-slate-600">Standard white canes only scan ground terrain within reach; head-level branches, signs, and hanging wires go undetected.</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Low-Resource Environments</h4>
                  <p className="text-xs text-slate-600">Unpaved roads, open trenches, sudden drops, loud ambient noise, and harsh sunlight overwhelm simple obstacle detection aids.</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Dynamic Moving Hazards</h4>
                  <p className="text-xs text-slate-600">Approaching vehicles, cyclists, and pedestrians move too rapidly for conventional physical sweeps to prevent sudden collisions.</p>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Lack of Distinct Feedback</h4>
                  <p className="text-xs text-slate-600">Existing generic buzzers cause cognitive overload; users require distinct differentiation between drop-offs, head hazards, and proximity bands.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Proposed Solution */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-start pt-6 border-t border-slate-100"
          >
            <div className="bg-teal-50 p-4 rounded-2xl shrink-0 border border-teal-100">
              <Cpu className="w-8 h-8 text-teal-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                  Engineering Innovation
                </span>
                <h2 className="text-3xl font-bold text-slate-900">Our Proposed Solution</h2>
              </div>
              <div className="prose prose-lg text-slate-600 leading-relaxed">
                <p>{PROJECT_DETAILS.proposedSolution}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 10 Criteria of Success Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-teal-200">
              <Target className="w-3.5 h-3.5 text-teal-700" />
              <span>Engineering Benchmarks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              10 Criteria of Success
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Every design decision in our biomedical engineering project is measured against these 10 rigorous, documented criteria of success.
            </p>
          </div>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CRITERIA_OF_SUCCESS.map((crit) => (
              <motion.div
                key={crit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-teal-50 group-hover:border-teal-200 transition-colors">
                        {getCriterionIcon(crit.id)}
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Criterion {crit.id.toString().padStart(2, '0')}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900 leading-tight">
                          {crit.title}
                        </h3>
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border shrink-0 ${getCategoryColor(crit.category)}`}>
                      {crit.category}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {crit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target Metric</span>
                  <span className="text-base font-extrabold text-teal-700 bg-teal-50 px-3 py-1 rounded-lg border border-teal-100">
                    {crit.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* PDF Download Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <FileCheck className="w-4 h-4" />
                <span>Official Documentation</span>
              </div>
              <h3 className="text-2xl font-bold">Team Avron Criteria of Success Specification</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Download the official PDF document outlining the need statement, engineering benchmarks, test protocols, and team details.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a 
                href={PROJECT_DETAILS.documentPdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-3 rounded-xl text-sm transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open PDF Document</span>
              </a>
              <a 
                href={PROJECT_DETAILS.documentPdfUrl} 
                download="TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf"
                className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white font-medium px-5 py-3 rounded-xl text-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Objectives</h2>
            <p className="text-slate-600">The specific technical milestones our team is systematically executing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECT_DETAILS.objectives.map((objective, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start space-x-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="bg-teal-100 p-2 rounded-xl shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-700 uppercase tracking-wider block mb-1">
                    Objective {i + 1}
                  </span>
                  <p className="text-slate-700 font-medium text-sm leading-relaxed">{objective}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Process Flow: From Idea to Solution */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">From Idea to Solution</h2>
            <p className="text-slate-400">Our systematic biomedical engineering approach from concept to clinical evaluation.</p>
          </div>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-700 -translate-y-1/2" />
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 relative z-10">
              {[
                { num: "01", title: "IDENTIFY", desc: "Define unmet mobility need & outdoor hazard barriers." },
                { num: "02", title: "RESEARCH", desc: "Analyze sensor technologies, cane sweep limits & literature." },
                { num: "03", title: "DEFINE", desc: "Establish the 10 measurable criteria of success & ISO 14971 risks." },
                { num: "04", title: "DEVELOP", desc: "Build multi-sensor detection, low-latency firmware & haptics." },
                { num: "05", title: "TEST", desc: "Validate ≥90% reliability, latency, IP54 seal & SUS ≥70." },
                { num: "06", title: "IMPROVE", desc: "Refine user-tested prototype for independent mobility." }
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
