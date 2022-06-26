import styled from "styled-components";
import { Link } from "react-router-dom";

export const PhotosPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  padding: 3rem 0.5rem 0 0.5rem;
`;

export const PortfolioNavigation = styled.nav`
  padding: 1rem 0.5rem 1.5rem 0.5rem;
  ul {
    display: flex;
    justify-content: space-between;
    gap: 0.6rem;
    li {
      list-style-type: none;
    }
  }
`;

export const LinkToCategory = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;

export const AllPhotosLink = styled(LinkToCategory)`
  font-weight: 700;
  text-transform: uppercase;
`;
