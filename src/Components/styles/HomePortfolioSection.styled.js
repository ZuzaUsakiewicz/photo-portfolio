import styled from "styled-components";
import { Link } from "react-router-dom";

export const PortfolioSectionContainer = styled.section`
  padding: 1rem 0.5rem;
  h2 {
    padding: 1rem 0 0 0.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(8, 1fr);
  min-height: 100vh;
  gap: 10px;
  padding: 1.5rem 0.5rem 0.5rem 0.5rem;
`;

export const Card = styled.div`
  background: linear-gradient(rgba(76, 70, 70, 0.393), rgba(103, 99, 99, 0.224)),
    url(${({ img }) => img}) center center / cover;
  grid-column: ${({ gridCol }) => gridCol};
  grid-row: ${({ gridRow }) => gridRow};
  position: relative;
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  font-weight: 500;
  display: grid;
  place-items: center;
  border-radius: 8px;
`;

export const CardLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
