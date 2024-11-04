import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/90"></div>
      
      <div className="max-w-4xl w-full space-y-8 relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Jagadeesh Chandra Thatikonda
          </h1>
          <h2 className="text-3xl text-gray-300 mt-4 animate-slide-in-left animate-delay-200">
            Full Stack Developer
          </h2>
          <p className="text-xl text-gray-400 mt-6 max-w-2xl animate-slide-in-right animate-delay-300">
            Crafting elegant solutions to complex problems with modern technologies and creative thinking.
          </p>
        </div>
        
        <div className="flex gap-6 text-gray-400 animate-fade-in animate-delay-300">
          <a href="mailto:aryathatikonda13@gmail.com" className="hover:text-white transition-colors transform hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/jagadeesh-chandra-5517b02b4/" className="hover:text-white transition-colors transform hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/Jagadeesh-1314" className="hover:text-white transition-colors transform hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
        </div>

        <div className="pt-12 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </div>
    </header>
  );
}