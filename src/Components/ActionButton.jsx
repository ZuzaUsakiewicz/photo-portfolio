import { LinkButton } from "./styles/ActionButton.styled";
import { AiOutlineRight } from "react-icons/ai";

export const ActionButton = ({ text, goTo }) => {
  return (
    <LinkButton to={goTo}>
      {text} <AiOutlineRight />
    </LinkButton>
  );
};
