import styled from "styled-components";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  padding-top: 40px;
  justify-content: flex-end;
  /* padding-left: 100px; */
`;

export const Home = () => {
  return (
    <div className="App">
      <NavBar>
        <a className="navlink">Home</a>
        <a className="navlink">Resume</a>
        <a className="navlink">Projects</a>
        <a className="navlink">Contact</a>
      </NavBar>
      <div className="triangle"></div>
      <header className="App-header">
        <h1>Koa Garces</h1>
        <h2>Front End Developer</h2>
        <a href="https://github.com/koagarces">Github</a>
      </header>
    </div>
  );
};
