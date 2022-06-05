import { HeroContainer, IconsContainer } from "./styles/HomeHeroSection.styled";
import { Link } from "react-router-dom";
import { Container } from "./styles/Container.styled";
import { ActionButton } from "./ActionButton";
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoYoutube,
} from "react-icons/io5";

export const HomeHeroSection = () => {
  return (
    <HeroContainer>
      <Container>
        <h1>Photography, the greatest act of Passion</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam,
          voluptate?
        </p>
        <ActionButton goTo="about" text="my work" />
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
      </Container>
    </HeroContainer>
  );
};
