import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { GALLERY } from '../data';
import { X, ZoomIn } from 'lucide-react';
import { cn } from '../utils';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState<typeof GALLERY[0] | null>(null);

  const categories = ['All', 'Team', 'Research', 'Meetings', 'Design', 'Prototype', 'Testing', 'Presentations'];

  const filteredGallery = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  return (
    <div className="w-full">
      <PageHeader 
        title="Project Gallery" 
        subtitle="A visual record of our research, development, and progress."
      />

      <section className="py-24 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors border",
                  filter === cat 
                    ? "bg-slate-900 text-white border-slate-900" 
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={img.id}
                  className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-100 relative aspect-[4/3]"
                  onClick={() => setSelectedImg(img)}
                >
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                    <ZoomIn className="w-6 h-6 text-white mb-2" />
                    <h3 className="text-white font-bold text-lg">{img.title}</h3>
                    <p className="text-gray-300 text-sm">{img.date}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center text-slate-500 py-20">
              No images available in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImg(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div 
              className="max-w-5xl w-full flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.url} 
                alt={selectedImg.title} 
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
              <div className="text-white mt-6 bg-slate-800/50 p-6 rounded-xl backdrop-blur-md">
                <h3 className="text-2xl font-bold mb-2">{selectedImg.title}</h3>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                  <span className="bg-slate-700 px-2 py-1 rounded-md">{selectedImg.category}</span>
                  <span>{selectedImg.date}</span>
                </div>
                <p className="text-gray-300">{selectedImg.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
