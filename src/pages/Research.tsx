import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';

const RESEARCH_STAGES = [
  {
    num: "01",
    title: "NEEDS FINDING",
    desc: "Understanding real-world healthcare challenges and identifying unmet needs."
  },
  {
    num: "02",
    title: "LITERATURE REVIEW",
    desc: "Reviewing scientific literature, existing technologies and previous approaches."
  },
  {
    num: "03",
    title: "PROBLEM DEFINITION",
    desc: "Clearly defining the problem, affected population and requirements."
  },
  {
    num: "04",
    title: "CONCEPT DEVELOPMENT",
    desc: "Exploring possible approaches and selecting an appropriate concept."
  },
  {
    num: "05",
    title: "DEVELOPMENT",
    desc: "Developing the proposed system or prototype."
  },
  {
    num: "06",
    title: "TESTING",
    desc: "Evaluating functionality, safety, usability and performance."
  },
  {
    num: "07",
    title: "EVALUATION",
    desc: "Analysing results and identifying areas for improvement."
  }
];

export default function Research() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Our Research" 
        subtitle="Our research process is guided by the identification of real healthcare needs, review of existing evidence, engineering requirements and systematic development and evaluation."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESEARCH_STAGES.map((stage, i) => (
              <motion.div 
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:bg-slate-900 hover:text-white transition-colors group cursor-default"
              >
                <div className="text-4xl font-black text-slate-200 group-hover:text-white/20 mb-6 transition-colors">
                  {stage.num}
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-wide text-slate-900 group-hover:text-white transition-colors">
                  {stage.title}
                </h3>
                <p className="text-slate-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-8 bg-teal-50 border border-teal-100 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Publications & Papers</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Future research papers, literature reviews, and related documents will be published here as the project progresses.
            </p>
            <div className="inline-flex items-center px-6 py-3 border border-dashed border-teal-300 rounded-lg text-teal-700 bg-white font-medium">
              Check back later for updates
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
