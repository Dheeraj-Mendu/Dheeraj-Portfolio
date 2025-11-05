import { Building2, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'First Horizon Bank',
    location: 'Memphis, TN',
    role: 'Sr. Full Stack Java Developer',
    period: 'Dec 2023 - Present',
    description: 'Spearheaded architectural redesign of comprehensive online banking platform, driving innovation and improving customer engagement across millions of daily transactions.',
    highlights: [
      'Redesigned online banking platform with cloud-native microservices (Java 17, Spring Boot) on AWS, achieving 99.99% uptime',
      'Engineered secure REST/GraphQL APIs with OAuth 2.0, JWT, and Okta OIDC for seamless fintech integrations',
      'Built event-driven pipelines with RabbitMQ, AWS SQS/SNS for real-time transaction processing',
      'Optimized data layers with PostgreSQL, MongoDB, Redis - reducing latency by 60%',
      'Implemented IaC using Terraform and CloudFormation for compliant provisioning',
      'Enhanced observability with OpenTelemetry, AWS X-Ray, reducing incident response time by 50%',
    ],
    tech: ['Java 17', 'Spring Boot', 'React', 'AWS', 'PostgreSQL', 'MongoDB', 'Terraform', 'GraphQL'],
    color: 'emerald',
  },
  {
    company: 'Health Catalyst Inc',
    location: 'Columbus, OH',
    role: 'Sr. Java/J2EE Developer',
    period: 'Dec 2022 - Nov 2023',
    description: 'Developed federal healthcare data management system facilitating secure integration of patient records, insurance claims, and compliance reporting across agencies.',
    highlights: [
      'Architected cloud-native microservices with Java 11, Spring Boot on AWS ECS and Fargate',
      'Built secure REST/SOAP APIs ensuring strict HIPAA and HITECH compliance',
      'Implemented event-driven pipelines with Apache Kafka, reducing latency by 30%',
      'Containerized deployments from legacy JBoss to Docker microservices on AWS Fargate',
      'Created AI-powered NLP chatbot using LangChain and OpenAI APIs for healthcare data queries',
      'Enhanced observability with Splunk, Prometheus, Grafana - reducing MTTR by 40%',
    ],
    tech: ['Java 11', 'Spring Boot', 'Apache Kafka', 'AWS', 'React', 'PostgreSQL', 'Docker', 'LangChain'],
    color: 'blue',
  },
  {
    company: 'Cognizant',
    location: 'India',
    role: 'IT Developer II (Java)',
    period: 'April 2020 - Aug 2022',
    description: 'Designed scalable ERP solution for manufacturing domain optimizing production planning, inventory control, and vendor lifecycle management.',
    highlights: [
      'Engineered modular ERP platform using Java 8, Spring Boot, improving efficiency by 35%',
      'Developed reactive APIs with Spring WebFlux and RabbitMQ for real-time telemetry',
      'Integrated Oracle CPQ Cloud, Oracle ERP, and Salesforce via REST/SOAP services',
      'Deployed microservices on Azure Kubernetes Service (AKS) using Helm and Terraform',
      'Optimized SQL performance in Oracle and MySQL, reducing report latency by 50%',
      'Built LangChain + OpenAI chatbot for vendor queries and order tracking',
    ],
    tech: ['Java 8', 'Spring Boot', 'Angular', 'Azure', 'Oracle', 'Kubernetes', 'RabbitMQ'],
    color: 'amber',
  },
  {
    company: 'Mastercard',
    location: 'India',
    role: 'Software Developer',
    period: 'Jan 2018 - Mar 2020',
    description: 'Contributed to Smart Data, a global expense management and analytics platform for commercial clients with intelligent tracking and predictive insights.',
    highlights: [
      'Developed multi-tenant Smart Data platform using Java 11, Spring Boot on Azure',
      'Built secure transaction pipelines with Apache Kafka and RabbitMQ for millions of events',
      'Implemented predictive analytics with Python (Pandas, NumPy) reducing fraud investigation by 40%',
      'Containerized workloads on Azure AKS using Helm and Terraform',
      'Optimized PostgreSQL, MongoDB, Redis - cutting query latency by 45%',
      'Migrated legacy Java EE services to Spring Boot microservices',
    ],
    tech: ['Java 11', 'Spring Boot', 'React', 'Azure', 'PostgreSQL', 'Python', 'Kafka'],
    color: 'purple',
  },
];

const colorClasses = {
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-500',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    tagBg: 'bg-emerald-500/20',
    tagText: 'text-emerald-300',
  },
  blue: {
    border: 'border-blue-500/30 hover:border-blue-500',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
    tagBg: 'bg-blue-500/20',
    tagText: 'text-blue-300',
  },
  amber: {
    border: 'border-amber-500/30 hover:border-amber-500',
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    tagBg: 'bg-amber-500/20',
    tagText: 'text-amber-300',
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-500',
    bg: 'bg-purple-500/10',
    text: 'text-purple-400',
    tagBg: 'bg-purple-500/20',
    tagText: 'text-purple-300',
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            8 years of building enterprise-grade solutions across fintech, healthcare, and global platforms
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl border ${colors.border} p-8 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <Building2 className={colors.text} size={24} />
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <p className={`text-xl font-semibold ${colors.text} mb-2`}>{exp.role}</p>
                    <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  <div className="grid gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <ChevronRight className={`${colors.text} flex-shrink-0 mt-1`} size={16} />
                        <p className="text-slate-300 text-sm leading-relaxed">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`${colors.tagBg} ${colors.tagText} px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
