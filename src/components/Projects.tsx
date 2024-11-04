import { Award, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Expense Tracker',
    description: 'A full-stack expense tracking application with charts, filters, and budget management.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    liveLink: 'https://expense-tracker-demo.netlify.app',
    github: 'https://github.com/Jagadeesh-1314/expense-tracker'
  },
  {
    title: 'Task Management System',
    description: 'Real-time collaborative task management with team features and progress tracking.',
    image: 'https://images.unsplash.com/photo-1540888892675-6c7b0f2f5657?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
    liveLink: 'https://task-manager-demo.netlify.app',
    github: 'https://github.com/Jagadeesh-1314/task-manager'
  },
  {
    title: 'Weather Dashboard',
    description: 'Dynamic weather application with 7-day forecast and location-based updates.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'OpenWeather API', 'TailwindCSS'],
    liveLink: 'https://weather-app-demo.netlify.app',
    github: 'https://github.com/Jagadeesh-1314/weather-app'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-featured online store with cart, checkout, and payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://ecommerce-demo.netlify.app',
    github: 'https://github.com/Jagadeesh-1314/ecommerce'
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-2 animate-slide-in-left">
          <Award className="w-8 h-8" />
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-effect rounded-lg overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white flex items-center justify-between">
                  {project.title}
                  <div className="flex gap-4">
                    <a href={project.github} className="text-purple-400 hover:text-purple-300 transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.liveLink} className="text-purple-400 hover:text-purple-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
