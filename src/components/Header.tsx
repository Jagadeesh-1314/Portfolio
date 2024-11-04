
const Header = () => {
  return (
    <header>
      <h1 className="text-5xl font-bold mb-2 animate-bounce">Jagadeesh Chandra Thatikonda</h1>
      <p className="text-xl">Computer Science Engineering Student | Full Stack Developer</p>
      <div className="mt-6">
        <a
          href="https://linkedin.com/in/jagadeesh-chandra-5517b02b4"
          className="btn btn-linkedin mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i> LinkedIn
        </a>
        <a
          href="https://github.com/Jagadeesh-1314"
          className="btn btn-github mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> GitHub
        </a>
        <a
          href="mailto:aryathatikonda13@gmail.com"
          className="btn btn-gmail mx-2"
        >
          <i className="fas fa-envelope"></i> Gmail
        </a>
      </div>
    </header>
  );
};

export default Header;
