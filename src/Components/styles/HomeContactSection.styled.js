import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem 1rem 0 1rem;
  gap: 0.5rem;
  position: relative;
  textarea {
    width: 80%;
  }
  span {
    position: absolute;
    top: 4.5rem;
    right: -1.5rem;
    font-size: ${({ theme }) => theme.fonts.fontLarge};
    font-weight: 600;
    color: ${({ theme }) => theme.text};
    transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    display: inline-block;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 80%;
`;
export const SendButton = styled.input`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.action};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  border-radius: 3px;
`;
