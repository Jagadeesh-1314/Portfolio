const About = () => {
  return (
    <section className="container mt-10">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">About Me</h2>
      <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-purple-50 shadow-xl rounded-xl p-10 md:p-14 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          I am a highly motivated fourth-year B.Tech student majoring in Computer Science with a passion for programming and software development. 
          I am proficient in C, C++, Java, Python, React, Express.js, and more. I am always eager to learn new technologies and to contribute positively to a dynamic environment.
        </p>
      </div>
    </section>
  );
};

export default About;
