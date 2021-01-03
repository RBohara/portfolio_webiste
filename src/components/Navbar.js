import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <NavStyle className="nav">
        <ContainerStyle>
          <h1>
            Rahul <span>Bohara</span>
          </h1>
          <LinkStyle>
            <li>
              <AnchorStyle href="#">About Me</AnchorStyle>
            </li>
            <li>
              <AnchorStyle href="#">Projects</AnchorStyle>
            </li>
            <li>
              <AnchorStyle href="#">Blog</AnchorStyle>
            </li>
          </LinkStyle>
        </ContainerStyle>
      </NavStyle>
    </>
  );
};

const ContainerStyle = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  transition: all 0.3s ease-in-out;
`;

const NavStyle = styled(motion.nav)`
  font-family: "Merienda", cursive;
  text-transform: uppercase;
  background-color: #222;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  h1 {
    color: orangered;
  }
`;

const LinkStyle = styled(motion.ul)`
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
`;

const AnchorStyle = styled(motion.a)`
  color: #fff;
  text-decoration: none;
  padding: 7px 15px;
  transition: all 0.3s ease-in-out;
`;

export { ContainerStyle, Navbar };
