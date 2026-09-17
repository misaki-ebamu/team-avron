import { Link } from 'react-router-dom';
import { TEAM_INFO } from '../data';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group inline-flex">
              <Logo variant="light" />
            </Link>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              {TEAM_INFO.tagline}
              <br />
              "{TEAM_INFO.supportingStatement}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-300">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About</Link>
              <Link to="/project" className="text-gray-400 hover:text-white transition-colors text-sm">Project</Link>
              <Link to="/research" className="text-gray-400 hover:text-white transition-colors text-sm">Research</Link>
              <Link to="/progress" className="text-gray-400 hover:text-white transition-colors text-sm">Progress</Link>
              <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm">Gallery</Link>
              <Link to="/team" className="text-gray-400 hover:text-white transition-colors text-sm">Team</Link>
              <Link to="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</Link>
              <Link to="/updates" className="text-gray-400 hover:text-white transition-colors text-sm">Updates</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4 text-gray-300">
              Institution
            </h3>
            <address className="text-gray-400 not-italic text-sm space-y-1">
              <p>{TEAM_INFO.university}</p>
              <p>{TEAM_INFO.location}</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 {TEAM_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
