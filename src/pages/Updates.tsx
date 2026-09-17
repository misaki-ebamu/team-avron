import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { UPDATES } from '../data';
import { ArrowRight, X, Calendar, Tag } from 'lucide-react';

export default function Updates() {
  const [selectedUpdate, setSelectedUpdate] = useState<typeof UPDATES[0] | null>(null);

  return (
    <div className="w-full">
      <PageHeader 
        title="Latest Updates" 
        subtitle="Documenting our project journey and milestones."
      />

      <section className="py-24 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {UPDATES.map((update, i) => (
              <motion.div 
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col group hover:shadow-xl hover:border-teal-100 transition-all cursor-pointer"
                onClick={() => setSelectedUpdate(update)}
              >
                <div className="aspect-[16/9] relative bg-slate-100 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                  <img 
                    src={update.image} 
                    alt={update.title}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-slate-900/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {update.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-slate-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {update.date}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-teal-600 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-slate-600 mb-8 line-clamp-3">
                    {update.shortDescription}
                  </p>
                  <div className="mt-auto flex items-center text-teal-600 font-semibold group-hover:text-teal-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedUpdate && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedUpdate(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[21/9] md:aspect-[3/1] bg-slate-100 shrink-0">
                <img 
                  src={selectedUpdate.image} 
                  alt={selectedUpdate.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
                  onClick={() => setSelectedUpdate(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 md:p-12">
                <div className="flex items-center space-x-4 mb-6 text-sm text-slate-500 font-medium">
                  <span className="text-teal-600">{selectedUpdate.category}</span>
                  <span>•</span>
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{selectedUpdate.date}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                  {selectedUpdate.title}
                </h2>
                
                <div className="prose prose-lg prose-slate max-w-none mb-12 whitespace-pre-wrap">
                  {selectedUpdate.fullArticle}
                </div>
                
                <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                  <Tag className="w-5 h-5 text-slate-400 mr-2" />
                  {selectedUpdate.tags.map(tag => (
                    <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
