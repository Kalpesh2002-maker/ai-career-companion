import { useState } from "react";
import { useResume } from "../../context/ResumeContext";
import { generateCoverLetter } from "../../services/aiService";

export default function CoverLetterForm({ setGeneratedLetter }) {
  const { personalInfo } = useResume();

  const [form, setForm] = useState({
    jobTitle: "",
    company: "",
    jobDescription: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleGenerate() {
    if (!form.jobTitle || !form.company) {
      alert("Please fill job title and company.");
      return;
    }

    setLoading(true);
    const letter = await generateCoverLetter({
      fullName: personalInfo.fullName || "Your Name",
      title: personalInfo.title || "Your Title",
      jobTitle: form.jobTitle,
      company: form.company,
      jobDescription: form.jobDescription || "",
    });
    setGeneratedLetter(letter);
    setLoading(false);
  }

  return (
    // White panel styled via .form-panel in CSS
    <div className="form-panel">
      <h3 style={{ marginBottom: "12px" }}>Cover Letter Details</h3>

      <div style={{ display: "grid", gap: "0.75rem" }}>
        <label>
          Job Title
          <input
            name="jobTitle"
            value={form.jobTitle}
            onChange={handleChange}
            placeholder="e.g. Java Developer"
          />
        </label>

        <label>
          Company Name
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="e.g. TCS"
          />
        </label>

        <label>
          Job Description (Paste from LinkedIn)
          <textarea
            name="jobDescription"
            value={form.jobDescription}
            onChange={handleChange}
            placeholder="Paste job description here..."
            style={{ minHeight: "110px" }}
          />
        </label>
      </div>

      <button onClick={handleGenerate} style={{ marginTop: "14px" }}>
        {loading ? "Generating..." : "✨ Generate Cover Letter"}
      </button>
    </div>
  );
}
