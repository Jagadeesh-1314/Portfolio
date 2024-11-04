
const Hobbies = () => {
  const hobbies = [
    { name: "Cricket", icon: "🏏" },
    { name: "Chess", icon: "♟️" },
    { name: "Volleyball", icon: "🏐" }
  ];

  return (
    <section className="container mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Hobbies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <div className="text-5xl mb-4">{hobby.icon}</div>
            <p className="text-lg font-semibold">{hobby.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
