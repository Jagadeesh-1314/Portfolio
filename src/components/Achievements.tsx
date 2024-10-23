
const Achievements = () => {
  const achievements = [
    "Successfully completed Smart Coder course by Smart Interviews acquiring 1974 global rank.",
    "Participated in numerous coding contests, earning multiple merit certificates.",
    "Active member of a coding club in Geethanjali College of Engineering, coordinating various events."
  ];

  return (
    <section className="container mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <p className="text-lg">{achievement}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
