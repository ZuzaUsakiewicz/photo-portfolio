import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  z-index: 999;
  padding: 40px 20px 20px;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  position: relative;
`;

export const ModalButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 2vh;
  right: 3.3vw;
  font-size: 2.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.light};
`;
