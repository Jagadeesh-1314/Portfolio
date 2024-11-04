import { User, Code, Briefcase, Phone, Mail, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <Hero />

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 animate-slide-in-left">
            <User className="w-8 h-8" />
            About Me
          </h2>
          
          <div className="bg-gray-800/30 p-8 rounded-lg backdrop-blur-sm animate-scale-in">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Full Stack Developer with a keen eye for detail and a drive for creating exceptional user experiences. 
              With expertise in modern web technologies and a problem-solving mindset, I transform complex requirements into elegant solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 animate-slide-in-left">
            <Code className="w-8 h-8" />
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'JavaScript/TypeScript', level: '95%' },
              { name: 'React.js', level: '90%' },
              { name: 'Node.js', level: '85%' },
              { name: 'Python', level: '80%' },
              { name: 'SQL', level: '85%' },
              { name: 'MongoDB', level: '80%' },
              { name: 'HTML/CSS', level: '90%' },
              { name: 'Git', level: '85%' },
              { name: 'AWS', level: '75%' }
            ].map((skill, index) => (
              <div 
                key={skill.name} 
                className="glass-effect p-6 rounded-lg hover:bg-gray-700/50 transition-all transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-gray-300 font-semibold">{skill.name}</p>
                <div className="mt-2 bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 animate-slide-in-left">
            <Briefcase className="w-8 h-8" />
            Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Senior Full Stack Developer',
                company: 'Tech Innovations Inc.',
                period: '2022 - Present',
                description: 'Led development of scalable web applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.'
              },
              {
                title: 'Full Stack Developer',
                company: 'Digital Solutions Ltd.',
                period: '2020 - 2022',
                description: 'Developed and maintained multiple client projects. Implemented responsive designs and optimized application performance.'
              }
            ].map((exp, index) => (
              <div 
                key={exp.title}
                className="bg-gray-800/30 p-8 rounded-lg hover:bg-gray-800/40 transition-all transform hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-purple-400 mt-1">{exp.company}</p>
                <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                <p className="text-gray-400 mt-4">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Projects />

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 animate-slide-in-left">
            <Phone className="w-8 h-8" />
            Get in Touch
          </h2>

          <div className="glass-effect p-8 rounded-lg animate-scale-in">
            <p className="text-gray-300 text-lg mb-6">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <a 
                href="mailto:aryathatikonda13@gmail.com"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Mail className="w-5 h-5" />
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/jagadeesh-chandra-5517b02b4/"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
