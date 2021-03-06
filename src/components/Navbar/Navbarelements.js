import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaAvianex } from "react-icons/fa";

export const Nav = styled.nav`
  background: transperent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  font-style: italic;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  p {
    transform: translate(-165%, 100%);
    font-weight: bold;
  }
`;

export const Bars = styled(FaAvianex)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
