import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { TEAM_MEMBERS, GALLERY } from '../data';
import { Linkedin, Mail, GraduationCap } from 'lucide-react';

export default function Team() {
  const meetingsCount = GALLERY.filter(item => item.category === 'Meetings' && !item.isPlaceholder).length;

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

                  <div className="mt-8 flex items-center gap-3">
                    {member.linkedin && member.linkedin !== '#' ? (
                      <a 
                        href={member.linkedin.startsWith('http') ? member.linkedin : `https://${member.linkedin}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-blue-50 text-[#0077b5] hover:bg-[#0077b5] hover:text-white transition-all border border-blue-200 shadow-sm font-medium text-sm group"
                        title={`View ${member.name}'s LinkedIn Profile`}
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                        <span>LinkedIn</span>
                      </a>
                    ) : (
                      <span 
                        className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-slate-100 text-slate-400 border border-slate-200 text-sm font-medium cursor-not-allowed"
                        title="LinkedIn Profile coming soon"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </span>
                    )}

                    <button 
                      onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${member.email}`, '_blank', 'noopener,noreferrer')}
                      className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-slate-50 text-slate-700 hover:bg-slate-900 hover:text-white transition-all border border-slate-200 text-sm font-medium cursor-pointer shadow-sm"
                      title="Send Email via Gmail"
                      aria-label={`Send email to ${member.name}`}
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick link to Team Meetings in Gallery */}
          <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/20 px-3 py-1 rounded-full border border-teal-500/30">
                Official Clinical & Team Meetings
              </span>
              <h3 className="text-2xl font-bold text-white">See Team Avron in Action</h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Explore our stakeholder interview meetings with Mulago Hospital laboratory technologists, virtual meetings with Ruby Hospital biomedical engineers, and weekly team sprints.
              </p>
            </div>
            <a
              href="#/gallery?category=Meetings"
              className="shrink-0 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition-all shadow-lg inline-flex items-center space-x-2"
            >
              <span>View Meetings Gallery ({meetingsCount} Photos)</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
