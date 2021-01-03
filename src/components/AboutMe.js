import React from "react";
import profilePic from "../images/profile_pic.jpg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ContainerStyle } from "./Navbar";

export default function AboutMe() {
  return (
    <IntroStyle className="intro">
      <ContainerStyle>
        <div>
          <h1>About Me</h1>
          <h2>
            <span>🖐</span>I'm Rahul Bohara
          </h2>
          <p>FullStack Python & Javascript Developer.</p>
          <div className="social-links">
            <a href="" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <a href="" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div>
          <img src={profilePic} alt="profile picture" />
        </div>
      </ContainerStyle>
    </IntroStyle>
  );
}

const IntroStyle = styled(motion.section)`
  margin-top: 100px;
  font-family: "Merienda", cursive;
  h1 {
    background-color: orangered;
    color: white;
    padding: 5px;
    transform: rotate(-2deg);
    margin-bottom: 30px;
  }
  img {
    width: 500px;
    object-fit: cover;
    height: 100%;
    border-radius: 15px;
  }
  a {
    text-decoration: none;
    font-size: 25px;
    color: black;
  }
  a:hover {
    background-color: orangered;
    color: white;
    transform: scale(1.5, 1.5);
  }
  a:first-child {
    padding-right: 15px;
  }
`;
