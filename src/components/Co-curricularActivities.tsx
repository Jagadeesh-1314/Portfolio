
const Activities = () => {
  const activities = [
    "Volunteered at Genovate Hackathon 2024: Assisted in organizing and providing participant support.",
    "Volunteered at CODE E THON event (Bhaswara 2024): Coordinated event promotion, logistics, and participant support."
  ];

  return (
    <section className="container mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Co-curricular Activities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:-translate-y-2">
            <p className="text-lg">{activity}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
