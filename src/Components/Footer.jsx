import React from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { FooterContainer, IconsContainer } from "./styles/Footer.styled";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo size={1} />
      <span>Copyright 2022 John Doe / Code by Z</span>
      <IconsContainer>
        <Link to="/">
          <IoLogoInstagram />
        </Link>
        <Link to="/">
          <IoLogoFacebook />
        </Link>
        <Link to="/">
          <IoLogoYoutube />
        </Link>
      </IconsContainer>
    </FooterContainer>
  );
};
