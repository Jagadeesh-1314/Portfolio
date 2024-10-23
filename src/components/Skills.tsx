
const Skills = () => {
  const skills = [
    { name: 'C', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'MySQL', level: 85 },
  ];

  return (
    <section className="skills-grid bg-gradient-to-r from-gray-100 to-blue-100 mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <h3 className="skill-text">{skill.name}</h3>
            <div className="skill-bar">
              <div 
                className="skill-bar-fill bg-blue-500" 
                style={{ width: `${skill.level}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
