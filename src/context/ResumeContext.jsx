import { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export function ResumeProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    title: "",
    email: "",
    phone: "",
    location: "",
  });

  const [experiences, setExperiences] = useState([]);

  const value = {
    personalInfo,
    experiences,

    updatePersonalInfo: (updates) =>
      setPersonalInfo((prev) => ({ ...prev, ...updates })),

    addExperience: (exp) =>
      setExperiences((prev) => [
        ...prev,
        { id: Date.now(), ...exp }, // simple id
      ]),

    removeExperience: (id) =>
      setExperiences((prev) => prev.filter((e) => e.id !== id)),

    updateExperience: (id, updates) =>
      setExperiences((prev) =>
        prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
      ),
  };

  return (
    <ResumeContext.Provider value={value}>
      {children}
    </ResumeContext.Provider>
  );
}

export function useResume() {
  const ctx = useContext(ResumeContext);
  if (!ctx) {
    throw new Error("useResume must be used inside ResumeProvider");
  }
  return ctx;
}
