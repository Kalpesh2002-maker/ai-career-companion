import { useState } from "react";
import CoverLetterForm from "../components/CoverLetter/CoverLetterForm";
import CoverLetterPreview from "../components/CoverLetter/CoverLetterPreview";

export default function CoverLetterBuilder() {
  const [generatedLetter, setGeneratedLetter] = useState("");

  return (
    <div className="two-column">
      <section className="card">
        <h2>Cover Letter Builder</h2>
        <p className="muted">
          Paste a job description and let the app draft a tailored cover letter.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <CoverLetterForm setGeneratedLetter={setGeneratedLetter} />
        </div>
      </section>

      <section className="card preview-card">
        <CoverLetterPreview generatedLetter={generatedLetter} />
      </section>
    </div>
  );
}


