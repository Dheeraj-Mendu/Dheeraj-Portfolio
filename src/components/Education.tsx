import { GraduationCap, Award, BookOpen } from 'lucide-react';

const education = [
  {
    degree: "Master's in Information Science & Technology",
    institution: 'Missouri University of Science & Technology',
    location: 'Missouri, USA',
    icon: GraduationCap,
    color: 'emerald',
  },
  {
    degree: "Bachelor's of Technology in Computer Science & Engineering",
    institution: 'Gokaraju Rangaraju Institute of Engineering & Technology',
    location: 'India',
    icon: GraduationCap,
    color: 'blue',
  },
];

const certifications = [
  {
    title: 'AWS Certified Developer Associate',
    issuer: 'Amazon Web Services',
    category: 'Cloud',
    color: 'amber',
  },
  {
    title: 'Oracle Certified Generative AI Professional',
    issuer: 'Oracle',
    category: 'AI/ML',
    color: 'emerald',
  },
  {
    title: 'Oracle Certified Java Explorer',
    issuer: 'Oracle',
    category: 'Programming',
    color: 'blue',
  },
  {
    title: 'Goldman Sachs Certified Software Engineering Program',
    issuer: 'Goldman Sachs',
    category: 'Engineering',
    color: 'purple',
  },
  {
    title: 'Data Science for Engineers',
    issuer: 'NPTEL - IIT India',
    category: 'Data Science',
    color: 'cyan',
  },
  {
    title: 'User-Centric Human-Computer Interaction',
    issuer: 'NPTEL - IIT India',
    category: 'UX Design',
    color: 'pink',
  },
  {
    title: 'Entrepreneurship & Innovation: Web Development',
    issuer: 'Moreton Bay Regional Council',
    category: 'Professional',
    color: 'orange',
  },
];

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30 hover:border-emerald-500',
    text: 'text-emerald-400',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30 hover:border-blue-500',
    text: 'text-blue-400',
    badge: 'bg-blue-500/20 text-blue-300',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30 hover:border-amber-500',
    text: 'text-amber-400',
    badge: 'bg-amber-500/20 text-amber-300',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30 hover:border-purple-500',
    text: 'text-purple-400',
    badge: 'bg-purple-500/20 text-purple-300',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30 hover:border-cyan-500',
    text: 'text-cyan-400',
    badge: 'bg-cyan-500/20 text-cyan-300',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30 hover:border-pink-500',
    text: 'text-pink-400',
    badge: 'bg-pink-500/20 text-pink-300',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30 hover:border-orange-500',
    text: 'text-orange-400',
    badge: 'bg-orange-500/20 text-orange-300',
  },
};

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education & Certifications</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Advanced degrees and industry-recognized certifications validating expertise across multiple domains
          </p>
        </div>
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <BookOpen className="text-emerald-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Academic Background</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => {
              const colors = colorClasses[edu.color as keyof typeof colorClasses];
              const Icon = edu.icon;

              return (
                <div
                  key={index}
                  className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${colors.bg} p-3 rounded-lg`}>
                      <Icon className={colors.text} size={28} />
                    </div>
                    <div>
                      <h4 className={`text-lg font-bold ${colors.text} mb-2`}>{edu.degree}</h4>
                      <p className="text-white font-semibold mb-1">{edu.institution}</p>
                      <p className="text-slate-400 text-sm">{edu.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center space-x-3 mb-8">
            <Award className="text-amber-400" size={28} />
            <h3 className="text-2xl font-bold text-white">Professional Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const colors = colorClasses[cert.color as keyof typeof colorClasses];

              return (
                <div
                  key={index}
                  className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]`}
                >
                  <div className="mb-4">
                    <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-medium`}>
                      {cert.category}
                    </span>
                  </div>
                  <h4 className="text-white font-bold mb-2 leading-tight">{cert.title}</h4>
                  <p className={`${colors.text} text-sm font-medium`}>{cert.issuer}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-xl border border-slate-700 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning Commitment</h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Dedicated to staying at the forefront of technology through ongoing certifications in cloud computing,
            AI/ML, and enterprise software engineering. Committed to professional development and adopting emerging
            technologies to deliver cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
