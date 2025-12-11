import PreviewResume from "../components/Resume/PreviewResume";
import ResumeForm from "../components/Resume/ResumeForm";

export default function ResumeBuilder() {
  return (
    <div className="two-column">
      <section className="card">
        <h2>Resume Builder</h2>
        <p className="muted">
          Fill in your details and generate strong experience bullet points.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <ResumeForm />
        </div>
      </section>

      <section className="card preview-card">
        <PreviewResume />
      </section>
    </div>
  );
}

