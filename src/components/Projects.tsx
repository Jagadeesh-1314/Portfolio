
const Projects = () => {
  return (
    <section className="container mt-10">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">TLP Feedback Application</h3>
          <p>
            A web-based application that allows students to submit feedback on their instructors, providing valuable insights to improve teaching methods.
          </p>
        </div>
        <div className="project-card">
          <h3 className="text-2xl font-semibold mb-2">Exam Branch Portal</h3>
          <p>
            A portal that helps students easily pay their exam fees, reducing manual work by over 50%.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
