import styled from "styled-components";

export const EquipmentContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 30vh;
  gap: 2rem;
  padding: 1rem;
  h2 {
    color: ${({ theme }) => theme.text};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  p {
    text-align: justify;
  }
`;
