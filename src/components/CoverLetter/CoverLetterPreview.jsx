export default function CoverLetterPreview({ generatedLetter }) {
  function copyText() {
    navigator.clipboard.writeText(generatedLetter);
    alert("Copied to clipboard!");
  }

  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "0.75rem",
        border: "1px solid #111827",
        background: "transparent", // use dark card background
        minHeight: "260px",
      }}
    >
      <h2 style={{ marginBottom: "0.75rem" }}>Preview</h2>

      {generatedLetter ? (
        <>
          <pre
            style={{
              whiteSpace: "pre-wrap",
              marginTop: "0.25rem",
              fontSize: "0.95rem",
              lineHeight: 1.6,
            }}
          >
            {generatedLetter}
          </pre>

          <button
            onClick={copyText}
            style={{
              marginTop: "0.9rem",
            }}
          >
            📋 Copy Cover Letter
          </button>
        </>
      ) : (
        <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
          Your AI-generated cover letter will appear here.
        </p>
      )}
    </div>
  );
}
