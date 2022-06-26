import styled from "styled-components";
import heroBg from "../../Assets/hero-bg.jpg";

export const HeroContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(
      rgba(21, 20, 20, 0.436),
      rgba(30, 29, 29, 0.633),
      rgb(0, 0, 0)
    ),
    url(${heroBg}) center center / cover;
  display: flex;
  position: relative;
  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 600;
  }
  p {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 200;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding-top: 1rem;
  position: absolute;
  bottom: 10%;

  > * {
    color: ${({ theme }) => theme.colors.light};
  }
`;
