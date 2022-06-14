import React from "react";
import { StyledMenu } from "./menuStyles";
import { bool } from "prop-types";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <span role="img" aria-label="home">
          🏘️
        </span>
        Home
      </Link>
      <Link to="/about">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        About
      </Link>
      <Link to="/projects">
        <span role="img" aria-label="projects">
          🔨
        </span>
        Projects
      </Link>
      <Link to="/contact">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        Contact
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
