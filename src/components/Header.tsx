
const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-10 text-white text-center shadow-lg border-b-8 border-purple-700">
      <h1 className="text-5xl font-bold mb-2 animate-bounce">Jagadeesh Chandra Thatikonda</h1>
      <p className="text-xl">Computer Science Engineering Student | Full Stack Developer</p>
      <div className="mt-6">
        <a 
          href="https://linkedin.com/in/jagadeesh-chandra-5517b02b4" 
          className="btn btn-light mx-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/Jagadeesh-1314" 
          className="btn btn-dark mx-2"
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
