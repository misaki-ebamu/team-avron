import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { RESOURCES } from '../data';
import { FileText, Image as ImageIcon, Link as LinkIcon, Download, Eye, Presentation, FileCheck } from 'lucide-react';

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
  return (
    <div className="w-full">
      <PageHeader 
        title="Resources & Documents" 
        subtitle="Official project specifications, research literature, technical criteria, and engineering presentations."
      />

      <section className="py-24 bg-white min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((resource, i) => (
              <motion.div 
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border rounded-2xl p-6 transition-all flex flex-col h-full ${
                  resource.fileUrl 
                    ? 'bg-gradient-to-br from-teal-50/50 to-white border-teal-200 shadow-md ring-1 ring-teal-500/20' 
                    : 'bg-slate-50 border-slate-100 hover:shadow-md'
                }`}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-xl shadow-sm shrink-0 ${resource.fileUrl ? 'bg-teal-100' : 'bg-white'}`}>
                    {resource.fileUrl ? <FileCheck className="w-6 h-6 text-teal-700" /> : getIcon(resource.type)}
                  </div>
                  <div>
                    {resource.fileUrl && (
                      <span className="inline-block text-[11px] font-bold text-teal-700 bg-teal-100 px-2 py-0.5 rounded-full mb-1">
                        OFFICIAL ATTACHMENT
                      </span>
                    )}
                    <h3 className="font-bold text-slate-900 text-lg leading-snug">{resource.title}</h3>
                    {resource.date && (
                      <p className="text-xs text-slate-400 mt-1">{resource.date}</p>
                    )}
                  </div>
                </div>

                {resource.description && (
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {resource.description}
                  </p>
                )}
                
                <div className="mt-auto pt-6 border-t border-slate-200/80 flex gap-3">
                  {resource.fileUrl ? (
                    <>
                      <a 
                        href={resource.fileUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-white border border-teal-300 text-teal-800 px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-teal-50 transition-colors shadow-sm"
                      >
                        <Eye className="w-4 h-4 text-teal-600" />
                        <span>View PDF</span>
                      </a>
                      <a 
                        href={resource.fileUrl} 
                        download="TEAM_AVRON_CRITERIA_OF_SUCCESS.pdf"
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm"
                      >
                        <Download className="w-4 h-4 text-teal-400" />
                        <span>Download</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <button 
                        disabled
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-100 border border-slate-200 text-slate-400 px-4 py-2 rounded-lg text-xs font-medium cursor-not-allowed"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>In Preparation</span>
                      </button>
                      <button 
                        disabled
                        className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-200 text-slate-400 px-4 py-2 rounded-lg text-xs font-medium cursor-not-allowed"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Pending</span>
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm">
              All official research files, CAD schematics, risk files (ISO 14971), and milestone presentations are curated by Team Avron.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
