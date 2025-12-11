import { useResume } from "../../context/ResumeContext";
import ExperienceSection from "./ExperienceSection";

const fieldWrapper = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "12px",
};

export default function ResumeForm() {
  const { personalInfo, updatePersonalInfo } = useResume();

  function handleChange(e) {
    const { name, value } = e.target;
    updatePersonalInfo({ [name]: value });
  }

  return (
    <>
      {/* White inner panel for personal info */}
      <div className="form-panel" style={{ marginBottom: "20px" }}>
        <h3 style={{ marginBottom: "12px" }}>Personal Information</h3>

        <div style={{ display: "grid", gap: "0.75rem" }}>
          <label style={fieldWrapper}>
            Full Name
            <input
              type="text"
              name="fullName"
              value={personalInfo.fullName}
              onChange={handleChange}
              placeholder="e.g. Kalpesh Doshi"
            />
          </label>

          <label style={fieldWrapper}>
            Professional Title
            <input
              type="text"
              name="title"
              value={personalInfo.title}
              onChange={handleChange}
              placeholder="e.g. Java / MERN Developer"
            />
          </label>

          <label style={fieldWrapper}>
            Email
            <input
              type="email"
              name="email"
              value={personalInfo.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </label>

          <label style={fieldWrapper}>
            Phone
            <input
              type="text"
              name="phone"
              value={personalInfo.phone}
              onChange={handleChange}
              placeholder="+91XXXXXXXXXX"
            />
          </label>

          <label style={fieldWrapper}>
            Location
            <input
              type="text"
              name="location"
              value={personalInfo.location}
              onChange={handleChange}
              placeholder="City, Country"
            />
          </label>
        </div>
      </div>

      {/* Experience form (we'll also make this a white panel) */}
      <ExperienceSection />
    </>
  );
}
