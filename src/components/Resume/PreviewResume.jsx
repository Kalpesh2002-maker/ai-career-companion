import { useResume } from "../../context/ResumeContext";

export default function PreviewResume() {
  const { personalInfo, experiences } = useResume();

  return (
    <div className="preview-content">
      <header className="preview-header">
        <h1 className="preview-name">{personalInfo.fullName || "Your Name"}</h1>
        <h3 className="preview-title">{personalInfo.title || "Your Title"}</h3>

        <p className="preview-meta">
          {personalInfo.email || "you@example.com"} •{" "}
          {personalInfo.phone || "Phone"} •{" "}
          {personalInfo.location || "Location"}
        </p>

        <hr className="preview-sep" />
      </header>

      <main className="preview-body">
        {experiences.length > 0 ? (
          <>
            <h2 className="preview-section">Experience</h2>
            {experiences.map((exp) => (
              <article key={exp.id} className="preview-exp">
                <strong className="preview-exp-role">
                  {exp.role} @ {exp.company}
                </strong>

                <div className="preview-exp-meta">
                  {exp.startDate} – {exp.endDate || "Present"}
                </div>

                {exp.techStack && (
                  <div className="preview-exp-tech">Tech: {exp.techStack}</div>
                )}

                {exp.description && (
                  <pre className="preview-exp-desc">{exp.description}</pre>
                )}
              </article>
            ))}
          </>
        ) : (
          <p className="preview-empty">Add your experience on the left to see it here.</p>
        )}
      </main>
    </div>
  );
}
