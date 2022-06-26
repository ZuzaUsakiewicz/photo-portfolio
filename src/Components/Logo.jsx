import React from "react";
import { LogoIcon } from "./styles/Logo.styled";
import { MdOutlinePanoramaPhotosphere } from "react-icons/md";

export const Logo = ({ size, top, bottom, left, right }) => {
  return (
    <LogoIcon size={size} top={top} bottom={bottom} left={left} right={right}>
      <MdOutlinePanoramaPhotosphere />
    </LogoIcon>
  );
};
