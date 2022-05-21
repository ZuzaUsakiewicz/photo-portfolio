import React from "react";
import { LogoIcon } from "./styles/Logo.styled";
import { GiAbstract046 } from "react-icons/gi";

export const Logo = ({ size, top, bottom, left, right }) => {
  return (
    <LogoIcon size={size} top={top} bottom={bottom} left={left} right={right}>
      <GiAbstract046 />
    </LogoIcon>
  );
};
