import styled from "styled-components";

export const LogoIcon = styled.div`
  font-size: ${({ size }) => (size ? size : 1)}rem;
  color: black;
  position: relative;
  top: ${({ top }) => (top ? top : 0)}rem;
  left: ${({ left }) => (left ? left : 0)}rem;
  bottom: ${({ bottom }) => (bottom ? bottom : 0)}rem;
  right: ${({ right }) => (right ? right : 0)}rem;
  @media ${({ theme }) => theme.devices.laptop} {
    font-size: ${({ size }) => (size ? size * 1.5 : 1)}rem;
  }
`;
