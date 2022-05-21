import { Routes, Route } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { Home } from "./components/Home";

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
        <a className="navlink">
          <span className="btnName">Home</span>
        </a>
        <a className="navlink">Resume</a>
        <a className="navlink">Projects</a>
        <a className="navlink">Contact</a>
      </NavBar>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
