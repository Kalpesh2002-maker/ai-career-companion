import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ResumeProvider } from "./context/ResumeContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ResumeProvider>
      <App />
    </ResumeProvider>
  </React.StrictMode>
);
