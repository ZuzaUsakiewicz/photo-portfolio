import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.light};
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: ${({ theme }) => theme.colors.action};
`;
