import { Code2, Database, Cloud, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-slate-950 to-blue-900/20" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full text-emerald-400 text-sm font-medium mb-4">
            <Sparkles size={16} />
            <span>Senior Full Stack Software Engineer</span>
          </div>
<div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 md:p-12">
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6 font-bold text-white leading-tight ">
            Dheeraj Mendu
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            8 Years of Enterprise Engineering Excellence
          </p>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Architecting scalable cloud-native solutions across fintech, healthcare, and enterprise systems.
            Specialized in microservices, AWS/Azure infrastructure, and full-stack development.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <div className="flex items-center space-x-2 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700 hover:border-emerald-500/50 transition-all">
              <Code2 className="text-emerald-400" size={20} />
              <span className="text-slate-200 font-medium">Java • JavaScript • Python</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all">
              <Cloud className="text-blue-400" size={20} />
              <span className="text-slate-200 font-medium">AWS • Azure • Kubernetes</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-800/50 px-6 py-3 rounded-lg border border-slate-700 hover:border-amber-500/50 transition-all">
              <Database className="text-amber-400" size={20} />
              <span className="text-slate-200 font-medium">PostgreSQL • MongoDB • Redis</span>
</div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 pt-8">
            <a
              href="https://www.linkedin.com/in/dheeraj-m-222718249"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              Connect on LinkedIn
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-all border border-slate-700 hover:border-emerald-500/50"
            >
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <div className="text-4xl font-bold text-emerald-400 mb-2">8+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <div className="text-4xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-slate-400 text-sm">Major Companies</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-amber-500/50 transition-all">
              <div className="text-4xl font-bold text-amber-400 mb-2">8+</div>
              <div className="text-slate-400 text-sm">Certifications</div>
            </div>
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <div className="text-4xl font-bold text-purple-400 mb-2">M.S.</div>
              <div className="text-slate-400 text-sm">Missouri S&T</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
