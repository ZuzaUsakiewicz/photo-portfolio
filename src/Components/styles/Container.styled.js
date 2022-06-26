import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: ${({ theme }) => theme.widths.maxWidth};
  width: 100vw;
`;
