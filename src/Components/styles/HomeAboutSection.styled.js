import styled from "styled-components";
import Photographer from "../../Assets/photographer.jpg";

export const AboutContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Photo = styled.div`
  background: linear-gradient(rgba(71, 69, 69, 0.621), rgba(29, 28, 28, 0.838)),
    url(${Photographer}) center center / cover;
  height: 50vh;
  position: relative;
  border-radius: 8px 8px 0 0;
  span {
    position: absolute;
    top: 4rem;
    right: -1rem;
    font-size: ${({ theme }) => theme.fonts.fontLarge};
    font-weight: 600;
    color: ${({ theme }) => theme.colors.light};
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    display: inline-block;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.text};
  padding: 1rem;
  position: relative;
  text-align: justify;
  span {
    position: absolute;
    right: 2rem;
    bottom: -2rem;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fonts.fontMedium};
    color: ${({ theme }) => theme.colors.action};
  }
`;
