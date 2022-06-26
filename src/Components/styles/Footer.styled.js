import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  gap: 1rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  > * {
    color: ${({ theme }) => theme.text};
  }
`;
