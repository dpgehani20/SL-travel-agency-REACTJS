import React from "react";
import { Nav, NavIcon, NavLink, Bars } from "./Navbarelements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Aitken SL</NavLink>
        <NavIcon onClick={toggle}>
          <p>Let's go</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
