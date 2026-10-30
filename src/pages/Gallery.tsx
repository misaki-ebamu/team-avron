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
  Sparkles,
  Layers,
  Compass,
  Cpu,
  Activity,
  Presentation,
  Upload,
  ExternalLink,
  Clock,
  Camera
} from 'lucide-react';
import { cn } from '../utils';

const CATEGORIES = [
  'All',
  'Team',
  'Research',
  'Meetings',
  'Design',
  'Prototype',
  'Testing',
  'Presentations'
] as const;

type Category = typeof CATEGORIES[number];

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as Category) || 'All';
  
  const [filter, setFilter] = useState<Category>(
    CATEGORIES.includes(initialCategory) ? initialCategory : 'All'
  );
  
  const [selectedImg, setSelectedImg] = useState<GalleryItem | null>(null);

  // Sync state with URL params
  useEffect(() => {
    const cat = searchParams.get('category') as Category;
    if (cat && CATEGORIES.includes(cat)) {
      setFilter(cat);
    }
  }, [searchParams]);

  const handleFilterChange = (cat: Category) => {
    setFilter(cat);
    setSearchParams(cat === 'All' ? {} : { category: cat });
  };

  const getFallbackImage = (currentSrc: string) => {
    if (currentSrc.includes('hmw_ideation_overview')) return './assets/aistudio/1_0a3ac266.jpeg';
    if (currentSrc.includes('hmw_ideation_drafting')) return './assets/aistudio/2_11ee4864.jpeg';
    if (currentSrc.includes('hmw_ideation_criteria')) return './assets/aistudio/3_99049ec5.jpeg';
    if (currentSrc.includes('hmw_ideation_discussion')) return './assets/aistudio/4_82381e64.jpeg';
    if (currentSrc.includes('hmw_ideation_synthesis')) return './assets/aistudio/5_8be59267.jpeg';
    if (currentSrc.includes('hmw_ideation_prioritization')) return './assets/aistudio/6_3a7afd15.jpeg';
    if (currentSrc.includes('./gallery/')) return currentSrc.replace('./gallery/', '/gallery/');
    return currentSrc;
  };

  const filteredGallery = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(img => img.category === filter);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Research':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      case 'Meetings':
        return <Users className="w-5 h-5 text-teal-400" />;
      case 'Design':
        return <Compass className="w-5 h-5 text-teal-400" />;
      case 'Prototype':
        return <Cpu className="w-5 h-5 text-teal-400" />;
      case 'Testing':
        return <Activity className="w-5 h-5 text-teal-400" />;
      case 'Presentations':
        return <Presentation className="w-5 h-5 text-teal-400" />;
      case 'Team':
        return <Users className="w-5 h-5 text-teal-400" />;
      default:
        return <Layers className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <PageHeader 
        title="Project Gallery" 
        subtitle="A visual record of our research, development, and progress."
      />

      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills (matching user screenshot) */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3 justify-center mb-10">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All' ? GALLERY.length : GALLERY.filter(i => i.category === cat).length;
              const isSelected = filter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border inline-flex items-center gap-2 shadow-sm",
                    isSelected 
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-teal-500/40" 
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span>{cat}</span>
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full font-mono font-bold",
                    isSelected ? "bg-slate-800 text-teal-300" : "bg-slate-100 text-slate-500"
                  )}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Section Informational Banners */}

          {/* ALL Selected */}
          {filter === 'All' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-slate-200 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Comprehensive Milestone Archive</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Team Avron Engineering & Clinical Media
                  </h3>
                </div>
                <div className="text-sm text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl flex items-center space-x-2">
                  <span><strong>{GALLERY.length} Total Entries</strong> across all 8 project stages</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Explore the complete timeline of Team Avron's work: verified photographic documentation from our <strong>30/10/2026 HMW Ideation Sprint</strong> at MakCHS Design Cube and <strong>Clinical Immersion Meetings</strong> (Mulago Hospital & Ruby Hospital), alongside dedicated milestone documentation slots for <strong>Design, Prototype, Testing, Presentations, and Team</strong> as we progress through development.
              </p>
            </motion.div>
          )}

          {/* RESEARCH Selected */}
          {filter === 'Research' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-teal-200/80 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>Verified Ideation Session • 30/10/2026</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    How Might We (HMW) Questions for Concept Generation
                  </h3>
                </div>
                <div className="text-sm text-slate-600 bg-teal-50/70 border border-teal-100 px-4 py-2 rounded-xl flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-teal-600 shrink-0" />
                  <span><strong>Design Cube</strong>, Makerere University College of Health Sciences</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Photographs captured on <strong>30/10/2026</strong> during Team Avron's collaborative ideation sprint at the Makerere University College of Health Sciences Design Cube. The team (Ebamu Misaki, Angel Ruth Nassanga, Mercy Nabusiita, and Hope Jibril Tusubila) mapped out <em>How Might We (HMW)</em> challenge questions on flipchart poster sheets, translating validated stakeholder problem statements into concrete engineering concepts aligned with our Criteria of Success benchmarks (0.3m–3.0m range, ≤300ms latency, and ≥120° field of coverage).
              </p>
            </motion.div>
          )}

          {/* MEETINGS Selected */}
          {filter === 'Meetings' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-slate-200/80 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Managerial Report Documentation (Figures 2, 3, & 4)</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Stakeholder Consultations & Team Meeting Records
                  </h3>
                </div>
                <div className="text-sm text-slate-500 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-700">7 Verified Records</span> documented
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                As detailed in our <strong>Project Management Report</strong>, Team Avron conducted extensive in-person field interviews at Mulago National Referral Hospital Molecular Biology Laboratories with technologist Raymond Kalema, remote clinical interviews with Ruby Hospital biomedical engineer Allan Rodin Gidoi, and held weekly sprint reviews via Google Meet alongside active project management coordination on WhatsApp.
              </p>
            </motion.div>
          )}

          {/* DESIGN Selected */}
          {filter === 'Design' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-indigo-200/80 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-indigo-700 text-xs font-bold uppercase tracking-wider bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 mb-2">
                    <Compass className="w-3.5 h-3.5 text-indigo-600" />
                    <span>CAD Schematics & Wearable Ergonomics</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Assistive Device Enclosure & Raycaster Design
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl flex items-center space-x-2">
                  <Upload className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Photo Upload Pending:</strong> Photos will be uploaded soon</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                This section documents Team Avron's mechanical CAD models, optical raycaster triangulation simulations (ensuring ≥120° coverage), and ergonomic wearable harness assemblies. Authentic photos and CAD renderings are scheduled for upload. Pre-allocated documentation slots are detailed below.
              </p>
            </motion.div>
          )}

          {/* PROTOTYPE Selected */}
          {filter === 'Prototype' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-blue-200/80 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-blue-700 text-xs font-bold uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
                    <Cpu className="w-3.5 h-3.5 text-blue-600" />
                    <span>Hardware Integration & Circuit Assembly</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Benchtop Sensors & Microcontroller Processing
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl flex items-center space-x-2">
                  <Upload className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Photo Upload Pending:</strong> Photos will be uploaded soon</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                This section contains hardware breadboard assemblies, transducer interface wiring, microcontroller signal processing firmware, and tactile haptic motor integration. Benchtop assembly photos are scheduled for upload by Team Avron.
              </p>
            </motion.div>
          )}

          {/* TESTING Selected */}
          {filter === 'Testing' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-emerald-200/80 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Validation & Engineering Benchmarks</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Detection Accuracy & Latency Verification
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl flex items-center space-x-2">
                  <Upload className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Photo Upload Pending:</strong> Photos will be uploaded soon</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Systematic validation testing verifying our Criteria of Success benchmarks: 0.3 m to 3.0 m detection range accuracy, ≤300 ms haptic alert latency, ≥120° field coverage, and ≥90% obstacle reliability under low-resource outdoor environmental conditions. Testing photos will be uploaded following upcoming trials.
              </p>
            </motion.div>
          )}

          {/* PRESENTATIONS Selected */}
          {filter === 'Presentations' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-purple-200/80 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-purple-700 text-xs font-bold uppercase tracking-wider bg-purple-50 px-3 py-1 rounded-full border border-purple-200 mb-2">
                    <Presentation className="w-3.5 h-3.5 text-purple-600" />
                    <span>Academic Reviews & Faculty Defenses</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Biomedical Engineering Design Defenses & Slide Decks
                  </h3>
                </div>
                <a
                  href="./documents/TEAM_AVRON_MIDSEMESTER_PRESENTATION.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Mid-Semester Presentation (PDF)</span>
                </a>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Documentation of Team Avron's formal defenses before project supervisors Dr. Robert Ssekitoleko and Ms. Nalwoga Racheal at Makerere University. The official 20-slide Mid-Semester Presentation deck is available for review, and defense event photographs will be uploaded here soon.
              </p>
            </motion.div>
          )}

          {/* TEAM Selected */}
          {filter === 'Team' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 md:p-8 mb-10 border border-slate-200/80 shadow-sm relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-5">
                <div>
                  <div className="inline-flex items-center space-x-1.5 text-teal-700 text-xs font-bold uppercase tracking-wider bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-2">
                    <Users className="w-3.5 h-3.5 text-teal-600" />
                    <span>Team Avron Student Researchers</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Makerere University Biomedical Engineering Studio
                  </h3>
                </div>
                <div className="text-xs sm:text-sm text-amber-700 bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-xl flex items-center space-x-2">
                  <Upload className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>Photo Upload Pending:</strong> Photos will be uploaded soon</span>
                </div>
              </div>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Portraits and lab workspace documentation of Team Avron members: Ebamu Misaki, Angel Ruth Nassanga, Mercy Nabusiita, and Hope Jibril Tusubila. Official high-resolution team photos are scheduled for upload.
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
                  {/* Image container or Placeholder Card */}
                  {img.isPlaceholder ? (
                    <div 
                      className="aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer border-b border-slate-700"
                      onClick={() => setSelectedImg(img)}
                    >
                      {/* Blueprint grid effect */}
                      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                      <div className="relative z-10 flex items-center justify-between">
                        <span className="bg-slate-800/90 border border-slate-700 text-teal-300 text-xs px-2.5 py-1 rounded-full font-medium">
                          {img.category}
                        </span>
                        <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] px-2.5 py-0.5 rounded-full font-semibold flex items-center space-x-1">
                          <Upload className="w-3 h-3 mr-1 inline" />
                          <span>Photo Slot Reserved</span>
                        </span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4">
                        <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-3 text-teal-400 group-hover:scale-110 transition-transform">
                          {getCategoryIcon(img.category)}
                        </div>
                        <h4 className="text-white font-bold text-base line-clamp-1">{img.title}</h4>
                        <p className="text-slate-400 text-xs mt-1">Photos will be uploaded soon</p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
                        <span className="inline-flex items-center space-x-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{img.date}</span>
                        </span>
                        <span className="text-teal-400 font-semibold group-hover:underline">View Slot Details →</span>
                      </div>
                    </div>
                  ) : (
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
                          const fallback = getFallbackImage(target.src);
                          if (fallback !== target.src) {
                            target.src = fallback;
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
                  )}

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
                            <strong className="text-slate-700">Participants: </strong>{img.attendees}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="pt-2 flex flex-col gap-2">
                      {img.documentUrl && (
                        <a
                          href={img.documentUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center space-x-2 px-3 py-2 text-xs font-semibold rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5 text-purple-600" />
                          <span>View Official Presentation Deck (PDF)</span>
                        </a>
                      )}

                      <button
                        onClick={() => setSelectedImg(img)}
                        className="w-full inline-flex items-center justify-center space-x-2 px-3 py-2 text-xs font-semibold rounded-xl bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-800 border border-slate-200 transition-colors"
                      >
                        {img.isPlaceholder ? (
                          <>
                            <Upload className="w-3.5 h-3.5 text-teal-600" />
                            <span>View Documentation Slot Details</span>
                          </>
                        ) : (
                          <>
                            <ZoomIn className="w-3.5 h-3.5 text-teal-600" />
                            <span>View Full Photo & Report Notes</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center text-slate-500 py-20 bg-white rounded-3xl border border-slate-200">
              <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-lg font-semibold text-slate-700">No media found in this category.</p>
              <button 
                onClick={() => handleFilterChange('All')}
                className="mt-4 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold"
              >
                Return to All Media
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox / Details Modal */}
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
              {/* Modal Visual Area */}
              {selectedImg.isPlaceholder ? (
                <div className="p-8 sm:p-12 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex flex-col items-center justify-center text-center relative">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4 text-teal-400">
                    {getCategoryIcon(selectedImg.category)}
                  </div>
                  <div className="inline-flex items-center space-x-1.5 text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    <Upload className="w-3.5 h-3.5" />
                    <span>Photo Slot Reserved for Team Avron</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white max-w-xl">
                    {selectedImg.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm max-w-md mt-2">
                    Team Avron will upload high-resolution photos and documentation for this milestone soon.
                  </p>
                </div>
              ) : (
                <div className="relative bg-black flex items-center justify-center max-h-[60vh] sm:max-h-[65vh] overflow-hidden">
                  <img 
                    src={selectedImg.url} 
                    alt={selectedImg.title} 
                    className="w-full h-full max-h-[60vh] sm:max-h-[65vh] object-contain"
                    onError={(e) => {
                      const target = e.currentTarget;
                      const fallback = getFallbackImage(target.src);
                      if (fallback !== target.src) {
                        target.src = fallback;
                      }
                    }}
                  />
                </div>
              )}

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
                      <strong className="text-slate-200">Participants: </strong>
                      <span>{selectedImg.attendees}</span>
                    </div>
                  </div>
                )}

                {selectedImg.documentUrl && (
                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href={selectedImg.documentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-colors shadow-md"
                    >
                      <FileText className="w-4 h-4" />
                      <span>Open Mid-Semester Presentation PDF (20 Slides)</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
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
