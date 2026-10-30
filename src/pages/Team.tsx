import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { TEAM_MEMBERS } from '../data';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Team() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Meet the Team" 
        subtitle="The biomedical engineering students behind Team Avron at Makerere University."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {TEAM_MEMBERS.map((member) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 items-start"
              >
                {/* Photo */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 relative shadow-md">
                    <img 
                      src={member.photoUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-2/3 flex flex-col justify-center py-4">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                      {member.role}
                    </span>
                    <span className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-600" />
                      <span>Reg: {member.regNumber}</span>
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{member.name}</h2>
                  <p className="text-lg text-teal-600 font-medium mb-8">{member.title}</p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Bio</h3>
                      <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Interests</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{member.interests}</p>
                      </div>
                      <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">Responsibilities</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{member.responsibilities}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200"
                      title="LinkedIn Profile"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button 
                      onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`, '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200 cursor-pointer"
                      title="Send Email"
                      aria-label={`Send email to ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
