import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  max-width: ${({ theme }) => theme.widths.maxWidth1200};
  position: fixed;
  width: 100vw;
  display: flex;
  height: 8vh;
  /* background-color: rgb(0, 0, 0, 0.2); */
  margin: 0 auto;
  z-index: 50;
  @media only screen and (min-width: 1400px) {
    width: ${({ theme }) => theme.widths.maxWidth1200};
  }
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  z-index: 100;
  font-size: ${({ theme }) => theme.fonts.fontLarge};
  font-weight: 100;
`;

export const NavbarLinksList = styled.ul`
  max-width: ${({ theme }) => theme.widths.maxWidth1200};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.74);
  transform: ${({ menu }) => (menu ? "translateY(-100%)" : "translateY(0)")};
  opacity: ${({ menu }) => (menu ? 0 : 1)};
  transition: transform 0.5s ease-in-out, opacity 0.7s ease-in;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: ${({ menu }) => (menu ? 0 : 1)};
    background-color: #141515;
    transform: ${({ menu }) => (menu ? "translateY(-100%)" : "translateY(0)")};
    transition: transform 0.7s ease-in-out, opacity 0.9s ease-in;
  }
`;

export const Hamburger = styled.button`
  position: absolute;
  top: 2.5vh;
  right: 1rem;
  border: none;
  z-index: 100;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3vh;
  width: 2rem;
  div {
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.action};
    transition: transform 0.4s ease-in-out, opacity 0.2s ease-in,
      background-color 0.8s ease-in;
    &:nth-child(2) {
      opacity: ${({ menu }) => (menu ? 1 : 0)};
    }
    &:nth-child(1) {
      transform: ${({ menu }) =>
        menu ? "rotate(0)" : "rotate(45deg) translate(0.4rem, 0.3rem)"};
    }
    &:nth-child(3) {
      transform: ${({ menu }) =>
        menu ? "rotate(0)" : "rotate(-45deg) translate(0.3rem, -0.3rem)"};
    }
  }
`;
