import { Code2, Cloud, Database, Cpu, Wrench, GitBranch, Brain, Server } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'emerald',
    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'TypeScript', 'C', 'C#', 'R', 'Shell Scripting'],
  },
  {
    title: 'Cloud Platforms',
    icon: Cloud,
    color: 'blue',
    skills: ['AWS (EC2, S3, Lambda, RDS, CloudFront)', 'Azure', 'Oracle Cloud Infrastructure', 'OpenShift'],
  },
  {
    title: 'Java Technologies',
    icon: Cpu,
    color: 'amber',
    skills: [
      'Spring Framework',
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring WebFlux',
      'Hibernate',
      'JPA',
      'Servlets',
      'JSF',
      'EJB',
      'JMS',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'purple',
    skills: [
      'PostgreSQL',
      'MySQL',
      'Oracle',
      'SQL Server',
      'MongoDB',
      'Cassandra',
      'DynamoDB',
      'Redis',
    ],
  },
  {
    title: 'Frontend Technologies',
    icon: Server,
    color: 'cyan',
    skills: [
      'React.js',
      'Angular',
      'TypeScript',
      'Redux',
      'Next.js',
      'HTML5',
      'CSS3',
      'AJAX',
      'jQuery',
      'Bootstrap',
    ],
  },
  {
    title: 'AI & Data Science',
    icon: Brain,
    color: 'pink',
    skills: [
      'LangChain',
      'OpenAI APIs',
      'TensorFlow',
      'PyTorch',
      'Keras',
      'Hugging Face Transformers',
      'NLP',
      'LLMs',
      'GPT',
      'BERT',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: Wrench,
    color: 'orange',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitHub Actions',
      'Terraform',
      'Maven',
      'Git',
      'Postman',
      'SonarQube',
      'Splunk',
    ],
  },
  {
    title: 'Message Queues & APIs',
    icon: GitBranch,
    color: 'teal',
    skills: [
      'Apache Kafka',
      'RabbitMQ',
      'AWS SQS/SNS',
      'REST APIs',
      'GraphQL',
      'SOAP',
      'Swagger',
      'OpenAPI',
    ],
  },
];

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30 hover:border-emerald-500',
    text: 'text-emerald-400',
    tagBg: 'bg-emerald-500/20',
    tagText: 'text-emerald-300',
    iconBg: 'bg-emerald-500/20',
  },
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30 hover:border-blue-500',
    text: 'text-blue-400',
    tagBg: 'bg-blue-500/20',
    tagText: 'text-blue-300',
    iconBg: 'bg-blue-500/20',
  },
  amber: {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/30 hover:border-amber-500',
    text: 'text-amber-400',
    tagBg: 'bg-amber-500/20',
    tagText: 'text-amber-300',
    iconBg: 'bg-amber-500/20',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/30 hover:border-purple-500',
    text: 'text-purple-400',
    tagBg: 'bg-purple-500/20',
    tagText: 'text-purple-300',
    iconBg: 'bg-purple-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/30 hover:border-cyan-500',
    text: 'text-cyan-400',
    tagBg: 'bg-cyan-500/20',
    tagText: 'text-cyan-300',
    iconBg: 'bg-cyan-500/20',
  },
  pink: {
    bg: 'bg-pink-500/10',
    border: 'border-pink-500/30 hover:border-pink-500',
    text: 'text-pink-400',
    tagBg: 'bg-pink-500/20',
    tagText: 'text-pink-300',
    iconBg: 'bg-pink-500/20',
  },
  orange: {
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30 hover:border-orange-500',
    text: 'text-orange-400',
    tagBg: 'bg-orange-500/20',
    tagText: 'text-orange-300',
    iconBg: 'bg-orange-500/20',
  },
  teal: {
    bg: 'bg-teal-500/10',
    border: 'border-teal-500/30 hover:border-teal-500',
    text: 'text-teal-400',
    tagBg: 'bg-teal-500/20',
    tagText: 'text-teal-300',
    iconBg: 'bg-teal-500/20',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Expertise</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Comprehensive skill set spanning cloud architecture, full-stack development, and emerging AI technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const colors = colorClasses[category.color as keyof typeof colorClasses];
            const Icon = category.icon;

            return (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border ${colors.border} p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:scale-[1.02]`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`${colors.iconBg} p-3 rounded-lg`}>
                    <Icon className={colors.text} size={24} />
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text}`}>{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`${colors.tagBg} ${colors.tagText} px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700 p-8">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Methodologies & Servers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-emerald-400 font-semibold mb-3">Development Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {['Agile', 'Waterfall', 'TDD', 'OOAD', 'Microservices', 'DevOps'].map((item) => (
                  <span
                    key={item}
                    className="bg-emerald-500/20 text-emerald-300 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-blue-400 font-semibold mb-3">Application Servers</h4>
              <div className="flex flex-wrap gap-2">
                {['Apache Tomcat', 'JBoss', 'WebLogic', 'WebSphere', 'Nginx'].map((item) => (
                  <span
                    key={item}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1.5 rounded-lg text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
