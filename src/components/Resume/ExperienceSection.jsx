import { useState } from "react";
import { useResume } from "../../context/ResumeContext";
import { generateExperienceBullets } from "../../services/aiService";

const fieldWrapper = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "8px",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

export default function ExperienceSection() {
  const { experiences, addExperience, removeExperience } = useResume();
  const [form, setForm] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    techStack: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleGenerate() {
    if (!form.role || !form.company) return;
    try {
      setLoading(true);
      const bullets = await generateExperienceBullets({
        role: form.role,
        company: form.company,
        techStack: form.techStack,
      });
      setForm((prev) => ({
        ...prev,
        description: "• " + bullets.join("\n• "),
      }));
    } finally {
      setLoading(false);
    }
  }

  function handleAddExperience() {
    if (!form.role || !form.company) return;
    addExperience(form);
    setForm({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      techStack: "",
      description: "",
    });
  }

  return (
    <div
      style={{
        marginTop: "24px",
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #ddd",
        background: "#ffffff",
      }}
    >
      <h2 style={{ marginBottom: "12px" }}>Experience</h2>

      {/* Add new experience */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px 16px",
          marginBottom: "12px",
        }}
      >
        <label style={fieldWrapper}>
          Role
          <input
            style={inputStyle}
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Java Developer"
          />
        </label>

        <label style={fieldWrapper}>
          Company
          <input
            style={inputStyle}
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company Name"
          />
        </label>

        <label style={fieldWrapper}>
          Start Date
          <input
            style={inputStyle}
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            placeholder="Jan 2024"
          />
        </label>

        <label style={fieldWrapper}>
          End Date
          <input
            style={inputStyle}
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            placeholder="Present"
          />
        </label>

        <label style={{ ...fieldWrapper, gridColumn: "1 / 3" }}>
          Tech Stack
          <input
            style={inputStyle}
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            placeholder="React, Java, Spring Boot"
          />
        </label>

        <label style={{ ...fieldWrapper, gridColumn: "1 / 3" }}>
          Description
          <textarea
            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe your responsibilities and impact..."
          />
        </label>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
        <button
          type="button"
          onClick={handleGenerate}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "✨ Generate bullet points"}
        </button>

        <button
          type="button"
          onClick={handleAddExperience}
          style={{
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          ➕ Add Experience
        </button>
      </div>

      {/* List of added experiences */}
      {experiences.length > 0 && (
        <div>
          <h3 style={{ marginBottom: "8px" }}>Added Experiences</h3>
          {experiences.map((exp) => (
            <div
              key={exp.id}
              style={{
                padding: "10px",
                marginBottom: "8px",
                borderRadius: "6px",
                border: "1px solid #eee",
                background: "#f9fafb",
              }}
            >
              <strong>
                {exp.role} @ {exp.company}
              </strong>
              <div style={{ fontSize: "0.9rem", color: "#555" }}>
                {exp.startDate} - {exp.endDate || "Present"}
              </div>
              {exp.techStack && (
                <div style={{ fontSize: "0.9rem", marginTop: "4px" }}>
                  Tech: {exp.techStack}
                </div>
              )}
              {exp.description && (
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    marginTop: "6px",
                    fontSize: "0.9rem",
                  }}
                >
                  {exp.description}
                </pre>
              )}
              <button
                type="button"
                onClick={() => removeExperience(exp.id)}
                style={{
                  marginTop: "6px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                🗑 Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
