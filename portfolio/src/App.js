import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Resume } from "./components/Resume";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { FcDocument } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { SiLinkedin } from "react-icons/si";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: flex-end;
  /* padding-left: 100px; */
`;

const SideBar = styled.div`
  width: 10px;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 10px;
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
        <Link to={"/projects"} className="navlink">
          Projects
        </Link>
        <Link to={"/contact"} className="navlink">
          Contact
        </Link>
      </NavBar>
      <SideBar>
        <a
          href="https://drive.google.com/file/d/1KTeXJM76vxS3M981IpoVIbSEHRmenBAX/view?usp=sharing"
          className="navlink"
          target="_blank"
          rel="noreferrer"
        >
          <FcDocument />
        </a>
        <a
          href="https://github.com/koagarces"
          className="navlink"
          target="_blank"
          rel="noreferrer"
        >
          <GrGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/koa-garces/"
          className="navlink"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin />
        </a>
      </SideBar>

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
