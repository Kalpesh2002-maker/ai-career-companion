// src/services/aiService.js

// Fake AI for experience bullet points
export async function generateExperienceBullets({ role, company, techStack }) {
  const techText = techStack ? ` using ${techStack}` : "";

  return [
    `Collaborated as a ${role} at ${company} to build scalable features${techText}.`,
    `Improved code quality by writing clean, modular, and well-tested components.`,
    `Worked closely with cross-functional teams to deliver business requirements on time.`,
  ];
}

// Fake AI for cover letter generation
export async function generateCoverLetter({
  fullName,
  title,
  jobTitle,
  company,
  jobDescription,
}) {
  return `
Dear Hiring Manager,

I am writing to express my interest in the position of ${jobTitle} at ${company}. With my experience as a ${title}, I have developed strong skills that align closely with the role's requirements.

${jobDescription || ""}

I am confident that my experience, dedication, and willingness to learn will allow me to contribute effectively to your team. I would welcome the opportunity to discuss how I can support ${company}'s goals.

Thank you for considering my application.

Sincerely,
${fullName}
`;
}
