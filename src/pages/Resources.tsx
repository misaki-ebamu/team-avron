import { useState } from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { RESOURCES, ResourceItem } from '../data';
import { 
  FileText, 
  Image as ImageIcon, 
  Link as LinkIcon, 
  Download, 
  Eye, 
  Presentation, 
  FileCheck,
  FolderDown,
  Layers,
  Sparkles,
  BookOpen
} from 'lucide-react';

const CATEGORIES = [
  'All Documents',
  'Official Reports',
  'Needs Assessment',
  'Engineering Criteria',
  'Protocols & Research'
] as const;

type CategoryTab = typeof CATEGORIES[number];

const getIcon = (type: string) => {
  switch (type) {
    case 'document': return <FileText className="w-6 h-6 text-teal-600" />;
    case 'image': return <ImageIcon className="w-6 h-6 text-teal-600" />;
    case 'presentation': return <Presentation className="w-6 h-6 text-teal-600" />;
    case 'link': return <LinkIcon className="w-6 h-6 text-teal-600" />;
    default: return <FileText className="w-6 h-6 text-teal-600" />;
  }
};

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryTab>('All Documents');

  const filteredResources = selectedCategory === 'All Documents'
    ? RESOURCES
    : RESOURCES.filter(res => res.category === selectedCategory);

  const officialDocsCount = RESOURCES.filter(r => !!r.fileUrl).length;

  return (
    <div className="w-full">
      <PageHeader 
        title="Resources & Documents" 
        subtitle="Official technical reports, clinical needs assessments, project management dossiers, and engineering criteria for Team Avron."
      />

      {/* Highlights Banner */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-950/70 via-slate-900 to-slate-950 border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center space-x-2 bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-teal-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Official Project Repository</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Team Avron Project Documentation Suite
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Access and download all {officialDocsCount} primary documents submitted by Team Avron to faculty supervisors Dr. Robert Ssekitoleko and Ms. Nalwoga Racheal at Makerere University.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a 
                  href="./documents/TEAM_AVRON_MIDSEMESTER_PRESENTATION.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-sm transition-all shadow-md"
                >
                  <Presentation className="w-4 h-4" />
                  <span>Mid-Sem Slides (20s)</span>
                </a>
                <a 
                  href="./documents/TEAM_AVRON_TECHNICAL_REPORT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-teal-300 font-semibold px-4 py-2.5 rounded-xl text-sm border border-slate-700 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-teal-400" />
                  <span>Technical Report (45p)</span>
                </a>
                <a 
                  href="./documents/TEAM_AVRON_MANAGERIAL_REPORT.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-4 py-2.5 rounded-xl text-sm border border-slate-700 transition-all"
                >
                  <FolderDown className="w-4 h-4 text-teal-400" />
                  <span>Management Report (37p)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 sm:py-24 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            {CATEGORIES.map((cat) => {
              const count = cat === 'All Documents' 
                ? RESOURCES.length 
                : RESOURCES.filter(r => r.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-teal-500 text-slate-950' : 'bg-slate-200 text-slate-700'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid of Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource: ResourceItem, i: number) => {
              const downloadFileName = resource.downloadName || (resource.fileUrl ? resource.fileUrl.split('/').pop() : 'document.pdf');

              return (
                <motion.div 
                  key={resource.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`border rounded-2xl p-6 transition-all flex flex-col h-full ${
                    resource.fileUrl 
                      ? 'bg-gradient-to-br from-teal-50/40 via-white to-white border-teal-200/90 shadow-sm hover:shadow-md ring-1 ring-teal-500/10' 
                      : 'bg-slate-50/70 border-slate-100 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 rounded-xl shadow-sm shrink-0 ${resource.fileUrl ? 'bg-teal-100 text-teal-800' : 'bg-white'}`}>
                      {resource.fileUrl ? <FileCheck className="w-6 h-6 text-teal-700" /> : getIcon(resource.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        {resource.badge ? (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">
                            {resource.badge}
                          </span>
                        ) : resource.fileUrl ? (
                          <span className="text-[10px] font-bold tracking-wider uppercase text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full">
                            OFFICIAL ATTACHMENT
                          </span>
                        ) : null}

                        {resource.category && (
                          <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            {resource.category}
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-slate-900 text-lg leading-snug break-words">
                        {resource.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                        {resource.date && <span>{resource.date}</span>}
                        {resource.pages && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-slate-600">{resource.pages}</span>
                          </>
                        )}
                        {resource.fileSize && (
                          <>
                            <span>•</span>
                            <span className="font-medium text-slate-600">{resource.fileSize}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {resource.description && (
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {resource.description}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-6 border-t border-slate-100 flex gap-3">
                    {resource.fileUrl ? (
                      <>
                        <a 
                          href={resource.fileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-2 bg-white border border-teal-300 text-teal-800 px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-teal-50 transition-colors shadow-xs"
                        >
                          <Eye className="w-4 h-4 text-teal-600" />
                          <span>View PDF</span>
                        </a>
                        <a 
                          href={resource.fileUrl} 
                          download={downloadFileName}
                          className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-xs"
                        >
                          <Download className="w-4 h-4 text-teal-400" />
                          <span>Download</span>
                        </a>
                      </>
                    ) : (
                      <>
                        <button 
                          disabled
                          className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-100 border border-slate-200 text-slate-400 px-4 py-2 rounded-xl text-xs font-medium cursor-not-allowed"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>In Preparation</span>
                        </button>
                        <button 
                          disabled
                          className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-200/70 text-slate-400 px-4 py-2 rounded-xl text-xs font-medium cursor-not-allowed"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Pending</span>
                        </button>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 text-center bg-slate-50 border border-slate-200/80 rounded-2xl p-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-slate-700 font-semibold text-sm mb-1">
              <Layers className="w-4 h-4 text-teal-600" />
              <span>Academic & Clinical Integrity</span>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              All documents listed above are official project artifacts produced by Team Avron under the Department of Biomedical Sciences and Engineering, Makerere University. Files can be viewed directly in browser or downloaded for offline study.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
