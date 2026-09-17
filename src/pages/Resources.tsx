import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { RESOURCES } from '../data';
import { FileText, Image as ImageIcon, Link as LinkIcon, Download, Eye, Presentation } from 'lucide-react';

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
        title="Resources" 
        subtitle="Project documents, literature, reports, and presentations."
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
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm">
                    {getIcon(resource.type)}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{resource.title}</h3>
                </div>
                
                <div className="mt-auto pt-6 border-t border-slate-200 flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center space-x-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-colors">
                    <Eye className="w-4 h-4" />
                    <span>View</span>
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 text-sm">
              Note: Actual files will be uploaded and linked as the project progresses.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
