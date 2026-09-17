import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { TEAM_MEMBERS } from '../data';
import { Linkedin, Mail } from 'lucide-react';

export default function Team() {
  return (
    <div className="w-full">
      <PageHeader 
        title="Meet the Team" 
        subtitle="The biomedical engineering students behind Team Avron."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-12 items-start"
              >
                {/* Photo */}
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 relative">
                    <img 
                      src={member.photoUrl} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="w-full md:w-2/3 flex flex-col justify-center py-4">
                  <h2 className="text-4xl font-bold text-slate-900 mb-2">{member.name}</h2>
                  <p className="text-xl text-teal-600 font-medium mb-1">{member.title}</p>
                  <p className="text-lg text-slate-500 font-medium mb-8">Role: {member.role}</p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Bio</h3>
                      <p className="text-slate-600 leading-relaxed">{member.bio}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Interests</h3>
                        <p className="text-slate-600 leading-relaxed">{member.interests}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Responsibilities</h3>
                        <p className="text-slate-600 leading-relaxed">{member.responsibilities}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex gap-4">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.parent.location.href = `mailto:${member.email}`;
                      }}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-50 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors border border-slate-200"
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
