import { Mail, Linkedin, Github, MapPin, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open to discussing new opportunities, collaboration, or consulting engagements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-emerald-500/10 via-slate-900/50 to-blue-500/10 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-emerald-500/20 p-4 rounded-lg">
                    <Briefcase className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Current Role</p>
                    <p className="text-white font-semibold">Sr. Full Stack Developer</p>
                    <p className="text-emerald-400 text-sm">First Horizon Bank</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/20 p-4 rounded-lg">
                    <MapPin className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Pittsburgh, PA</p>
                    <p className="text-blue-400 text-sm">Open to Remote & Relocation</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-4 rounded-lg">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-semibold">dheerajmendu111@gmail.com</p>
                    <p className="text-purple-400 text-sm">Via LinkedIn</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-amber-500/20 p-4 rounded-lg">
                    <Linkedin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/dheeraj-m-222718249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-semibold hover:text-amber-400 transition-colors"
                    >
                      dheeraj-m-222718249
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Interested In</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700 hover:border-emerald-500/50 transition-all">
                  <p className="text-emerald-400 font-semibold">C2C & W2 Roles</p>
                  <p className="text-slate-400 text-xs mt-1">Senior/Lead positions</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700 hover:border-blue-500/50 transition-all">
                  <p className="text-blue-400 font-semibold">Consulting</p>
                  <p className="text-slate-400 text-xs mt-1">Architecture & strategy</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700 hover:border-purple-500/50 transition-all">
                  <p className="text-purple-400 font-semibold">Mentorship</p>
                  <p className="text-slate-400 text-xs mt-1">Technical guidance</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg text-center border border-slate-700 hover:border-amber-500/50 transition-all">
                  <p className="text-amber-400 font-semibold">Collaboration</p>
                  <p className="text-slate-400 text-xs mt-1">Open source & projects</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://www.linkedin.com/in/dheeraj-m-222718249"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
              >
                <Linkedin size={20} />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
            <p className="text-slate-500 text-xs mt-2">
              © 2025 Dheeraj Mendu. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
