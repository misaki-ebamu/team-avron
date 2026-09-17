import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { PROJECT_JOURNEY, PROJECT_DETAILS } from '../data';
import { cn } from '../utils';

export default function Progress() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Project Progress" 
        subtitle="Tracking our journey from idea to solution."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Dashboard Summary */}
          <div className="mb-24 bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-xl">
            <h2 className="text-2xl font-bold mb-8">Progress Dashboard</h2>
            
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <span className="text-lg font-medium text-slate-300">Overall Progress</span>
                <span className="text-4xl font-bold text-teal-400">{PROJECT_DETAILS.overallProgress}%</span>
              </div>
              <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-1000"
                  style={{ width: `${PROJECT_DETAILS.overallProgress}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {Object.entries(PROJECT_DETAILS.stages).map(([key, status]) => (
                <div key={key} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                  <div className="text-sm text-slate-400 uppercase tracking-wider mb-2 font-medium">
                    {key}
                  </div>
                  <div className={cn(
                    "text-xs font-bold px-2 py-1 rounded-md inline-block",
                    status === 'COMPLETED' ? "bg-teal-500/20 text-teal-300" :
                    status === 'IN PROGRESS' ? "bg-amber-500/20 text-amber-300" :
                    "bg-slate-700 text-slate-400"
                  )}>
                    {status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-16 text-center">Our Project Journey</h2>
            
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
              {PROJECT_JOURNEY.map((stage, i) => (
                <motion.div 
                  key={stage.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "relative pl-8 md:pl-0 w-full md:w-1/2 md:pr-12",
                    i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:pl-12 md:left-1/2"
                  )}
                >
                  <div className={cn(
                    "absolute top-0 w-6 h-6 rounded-full border-4 border-white shadow-sm",
                    "-left-[13px]",
                    "md:left-auto",
                    i % 2 === 0 ? "md:-right-[13px]" : "md:-left-[13px]",
                    stage.status === 'COMPLETED' ? "bg-teal-500" :
                    stage.status === 'IN PROGRESS' ? "bg-amber-500" :
                    "bg-slate-300"
                  )} />
                  
                  <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-sm font-bold text-teal-600 mb-2">{stage.date}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{stage.title}</h3>
                    <div className={cn(
                      "text-xs font-bold px-2 py-1 rounded-md inline-block",
                      stage.status === 'COMPLETED' ? "bg-teal-100 text-teal-700" :
                      stage.status === 'IN PROGRESS' ? "bg-amber-100 text-amber-700" :
                      "bg-slate-200 text-slate-600"
                    )}>
                      {stage.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
