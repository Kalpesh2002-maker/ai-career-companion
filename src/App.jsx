import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import CoverLetterBuilder from "./pages/CoverLetterBuilder";
import Home from "./pages/Home";
import ResumeBuilder from "./pages/ResumeBuilder";

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-nav">
          <div className="nav-inner">
            <div className="brand">
              <span>AI</span> Career Companion
            </div>

            <nav className="nav-links">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Resume Builder
              </NavLink>

              <NavLink
                to="/cover-letter"
                className={({ isActive }) =>
                  "nav-link" + (isActive ? " nav-link-active" : "")
                }
              >
                Cover Letter Builder
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<ResumeBuilder />} />
            <Route path="/cover-letter" element={<CoverLetterBuilder />} />
          </Routes>
        </main>

        <footer className="footer">
          Built with React · Context API · (Mock) AI · {new Date().getFullYear()}
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;



