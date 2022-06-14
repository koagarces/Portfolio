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
import Burger from "./components/Burger/Burger";
import Menu from "./components/Menu/Menu";
import { useState } from "react";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: flex-end;
  /* padding-left: 100px; */
  @media (max-width: 500px) {
    width: 90%;
    padding: 10% 0 5% 10%;
    pointer-events: none;
    opacity: 0;
  }
`;

const SideBar = styled.div`
  width: 10px;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-left: 10px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50px;
    height: 40px;
    padding-left: 25%;
    margin-top: 0;
  }
`;
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
      <NavBar className="navbar">
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

      <SideBar className="sidebar ">
        <a
          href="https://drive.google.com/file/d/1KTeXJM76vxS3M981IpoVIbSEHRmenBAX/view?usp=sharing"
          className="navlink"
          target="_blank"
          rel="noreferrer"
        >
          <FcDocument className="iconPicture" />
        </a>
        <a
          href="https://github.com/koagarces"
          className="navlink"
          target="_blank"
          rel="noreferrer"
        >
          <GrGithub className="iconPicture" />
        </a>
        <a
          href="https://www.linkedin.com/in/koa-garces/"
          className="navlink"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin className="iconPicture" />
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
