import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { GALLERY, GalleryItem } from '../data';
import { 
  X, 
  ZoomIn, 
  Calendar, 
  MapPin, 
  Users, 
  FileText, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Layers
} from 'lucide-react';
import { cn } from '../utils';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Meetings';
  
  const [filter, setFilter] = useState<string>(
    ['All', 'Meetings', 'Team', 'Research', 'Design', 'Prototype', 'Testing', 'Presentations'].includes(initialCategory)
      ? initialCategory
      : 'Meetings'
  );
  
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  // Sync state with URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && ['All', 'Meetings', 'Team', 'Research', 'Design', 'Prototype', 'Testing', 'Presentations'].includes(cat)) {
      setFilter(cat);
    }
  }, [searchParams]);

  const handleFilterChange = (cat: string) => {
    setFilter(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat });
  };

  const categories = ['Meetings', 'All', 'Team', 'Research', 'Design', 'Prototype', 'Testing', 'Presentations'];

  const filteredGallery = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  const meetingItems = GALLERY.filter(img => img.category === 'Meetings');

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <PageHeader 
        title="Project Gallery & Media" 
        subtitle="Visual documentation of Team Avron's clinical immersion, stakeholder interviews, sprint meetings, and engineering milestones."
      />

      {/* Highlights / Section Quick Navigation Banner */}
      <section className="bg-slate-900 border-b border-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Verified Documentation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Official Meetings & Field Immersion Section
              </h2>
              <p className="text-sm text-slate-300 max-w-2xl">
                Extracted directly from Section 3.3, Section 3.5, and Figures 2, 3, & 4 of the official Team Avron Project Management Report.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleFilterChange('Meetings')}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-semibold transition-all inline-flex items-center space-x-2 shadow-sm",
                  filter === 'Meetings'
                    ? "bg-teal-500 text-slate-950 font-bold ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                )}
              >
                <Users className="w-4 h-4 text-teal-300" />
                <span>Meetings Section ({meetingItems.length})</span>
              </button>

              <button
                onClick={() => handleFilterChange('All')}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-all inline-flex items-center space-x-2",
                  filter === 'All'
                    ? "bg-teal-500 text-slate-950 font-bold ring-2 ring-teal-400 ring-offset-2 ring-offset-slate-900"
                    : "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
                )}
              >
                <Layers className="w-4 h-4 text-slate-300" />
                <span>View All Media ({GALLERY.length})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2.5 justify-center mb-12">
            {categories.map((cat) => {
              const count = cat === 'All' ? GALLERY.length : GALLERY.filter(i => i.category === cat).length;
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all border inline-flex items-center gap-2",
                    isSelected 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-teal-500/50" 
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>{cat === 'Meetings' ? '🤝 Meetings' : cat}</span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-mono font-semibold",
                    isSelected ? "bg-slate-800 text-teal-300" : "bg-slate-100 text-slate-500"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Section Description Card when Meetings is selected */}
          {filter === 'Meetings' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-12 border border-slate-200/80 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Managerial Report Documentation (Figures 2, 3, & 4)</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Stakeholder Consultations & Team Meeting Records
                  </h3>
                </div>
                <div className="text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-700">{meetingItems.length} Verified Records</span> documented
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                As detailed in our <strong>Project Management Report</strong>, Team Avron conducted extensive in-person field interviews at Mulago National Referral Hospital Molecular Biology Laboratories with technologist Raymond Kalema, remote clinical interviews with Ruby Hospital biomedical engineer Allan Rodin Gidoi, and held weekly sprint reviews via Google Meet alongside active project management coordination on WhatsApp.
              </p>
            </motion.div>
          )}

          {/* Image & Detail Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredGallery.map((img) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  key={img.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  {/* Image container */}
                  <div 
                    className="aspect-[4/3] bg-slate-100 relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedImg(img)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src.includes('./gallery/')) {
                          target.src = target.src.replace('./gallery/', '/gallery/');
                        }
                      }}
                      loading="lazy"
                    />

                    {/* Category Chip */}
                    <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
                      <span className="bg-slate-900/85 backdrop-blur-md text-teal-300 border border-teal-500/30 text-xs px-2.5 py-1 rounded-full font-medium shadow-sm">
                        {img.category}
                      </span>
                      {img.badge && (
                        <span className="bg-teal-600/90 backdrop-blur-md text-white text-[11px] px-2.5 py-1 rounded-full font-semibold shadow-sm">
                          {img.badge}
                        </span>
                      )}
                    </div>

                    {/* Quick zoom icon */}
                    <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 backdrop-blur-md text-white p-2 rounded-xl shadow-lg">
                      <ZoomIn className="w-4 h-4 text-teal-300" />
                    </div>
                  </div>

                  {/* Card Content & Details (Permanently Visible) */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
                        <span className="inline-flex items-center space-x-1 bg-slate-100 px-2 py-0.5 rounded-md text-slate-700">
                          <Calendar className="w-3.5 h-3.5 text-teal-600" />
                          <span>{img.date}</span>
                        </span>
                        {img.location && (
                          <span className="inline-flex items-center space-x-1 bg-slate-100 px-2 py-0.5 rounded-md text-slate-700 truncate max-w-[200px]">
                            <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                            <span className="truncate">{img.location}</span>
                          </span>
                        )}
                      </div>

                      <h3 
                        onClick={() => setSelectedImg(img)}
                        className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors cursor-pointer leading-snug"
                      >
                        {img.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {img.description}
                      </p>
                    </div>

                    {img.attendees && (
                      <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                        <div className="flex items-start space-x-1.5">
                          <Users className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">
                            <strong className="text-slate-700">Attendees: </strong>{img.attendees}
                          </span>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={() => setSelectedImg(img)}
                      className="w-full mt-2 inline-flex items-center justify-center space-x-2 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 transition-colors"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-teal-600" />
                      <span>View Full Photo & Report Notes</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center text-slate-500 py-20 bg-white rounded-3xl border border-slate-200">
              <p className="text-lg font-semibold text-slate-700">No media available in this category.</p>
              <button 
                onClick={() => handleFilterChange('Meetings')}
                className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-medium"
              >
                Return to Meetings Section
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal with Full Details */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="fixed top-6 right-6 text-white/70 hover:text-white bg-slate-800/80 hover:bg-slate-700 p-2.5 rounded-full transition-colors z-50 border border-slate-700"
              onClick={() => setSelectedImg(null)}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div 
              className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image */}
              <div className="relative bg-black flex items-center justify-center max-h-[60vh] sm:max-h-[65vh] overflow-hidden">
                <img 
                  src={selectedImg.url} 
                  alt={selectedImg.title} 
                  className="w-full h-full max-h-[60vh] sm:max-h-[65vh] object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.includes('./gallery/')) {
                      target.src = target.src.replace('./gallery/', '/gallery/');
                    }
                  }}
                />
              </div>

              {/* Modal Metadata */}
              <div className="p-6 sm:p-8 space-y-4 text-white">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-teal-500/20 text-teal-300 border border-teal-500/40 text-xs px-3 py-1 rounded-full font-semibold">
                    {selectedImg.category}
                  </span>
                  {selectedImg.badge && (
                    <span className="bg-slate-800 text-teal-400 border border-slate-700 text-xs px-3 py-1 rounded-full font-semibold">
                      {selectedImg.badge}
                    </span>
                  )}
                  <span className="text-xs text-slate-400 inline-flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{selectedImg.date}</span>
                  </span>
                  {selectedImg.location && (
                    <span className="text-xs text-slate-400 inline-flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{selectedImg.location}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedImg.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedImg.description}
                </p>

                {selectedImg.attendees && (
                  <div className="pt-4 border-t border-slate-800 flex items-start space-x-2 text-xs sm:text-sm text-slate-400">
                    <Users className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-200">Attendees / Participants: </strong>
                      <span>{selectedImg.attendees}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
