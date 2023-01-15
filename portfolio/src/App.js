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
    /* padding: 10% 0 0 10%; */
    pointer-events: none;
    opacity: 0;
  }
`;

const SideBar = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  /* padding-left: 10px; */
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 10%;
  margin: 2% 0 2% 0;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 40px;
    padding-left: 0;
    margin-top: 10%;
  }
`;
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div className="topLinksBox">
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
      </div>
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
