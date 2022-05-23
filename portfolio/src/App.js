import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: flex-end;
  /* padding-left: 100px; */
`;

function App() {
  return (
    <div className="App">
      <NavBar>
        <Link to={"/"} className="navlink">
          <span className="btnName">Home</span>
        </Link>
        <Link to={"/about"} className="navlink">
          About
        </Link>
        <Link to={"/resume"} className="navlink">
          Resume
        </Link>
        <Link to={"/projects"} className="navlink">
          Projects
        </Link>
        <Link to={"/contact"} className="navlink">
          Contact
        </Link>
      </NavBar>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
