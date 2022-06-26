import styled from "styled-components";

export const Btn = styled.button`
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.toggleBorder};
  border: none;
  border-radius: 2%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
`;
