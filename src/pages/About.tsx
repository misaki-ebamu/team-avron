import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { TEAM_MEMBERS } from '../data';
import { Target, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Who We Are" 
        subtitle="Team Avron is a team of four Biomedical Engineering students working together on our final-year project. Our work combines healthcare needs, scientific research and engineering to develop practical solutions to real-world problems."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Target className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To identify meaningful healthcare challenges and develop practical, evidence-based biomedical engineering solutions through research, teamwork and responsible innovation.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-100"
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Lightbulb className="w-8 h-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To contribute to a future where biomedical engineering solutions are accessible, practical and capable of improving healthcare.
              </p>
            </motion.div>
          </div>

          {/* Team Preview */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Team</h2>
            <p className="text-lg text-slate-600">The minds behind the project.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden group hover:shadow-xl hover:border-teal-100 transition-all"
              >
                <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                  <img 
                    src={member.photoUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-teal-600 mb-2">{member.title}</p>
                  <p className="text-sm text-slate-500">Role: {member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
