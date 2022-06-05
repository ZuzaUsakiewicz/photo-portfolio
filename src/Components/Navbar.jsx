import { Logo } from "./Logo";
import {
  NavbarContainer,
  StyledNavLink,
  Hamburger,
  NavbarLinksList,
} from "./styles/Navbar.styled";
import { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMenu((prev) => !prev);
    window.scrollTo(0, 0);
  };

  return (
    <NavbarContainer>
      <StyledNavLink to="/">
        <Logo size={1.5} top={0.5} left={1} />
      </StyledNavLink>
      <Hamburger onClick={toggleMenu} menu={menu}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <NavbarLinksList onClick={closeMenu} menu={menu}>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/photos">Photos</StyledNavLink>
      </NavbarLinksList>
    </NavbarContainer>
  );
};
