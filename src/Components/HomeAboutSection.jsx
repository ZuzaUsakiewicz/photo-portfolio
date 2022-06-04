import {
  AboutContainer,
  Photo,
  Text,
} from "../Components/styles/HomeAboutSection.styled";

export const HomeAboutSection = () => {
  return (
    <AboutContainer>
      <Photo>
        <span>About Me</span>
      </Photo>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias
        error nulla odit unde ex a rerum deserunt dolore aperiam quaerat itaque
        fugiat, corporis, delectus nemo aliquid illo deleniti aliquam. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Facere alias error
        nulla odit unde ex a rerum deserunt dolore aperiam quaerat itaque
        fugiat, corporis, delectus nemo aliquid illo deleniti aliquam.
        <span>- John Doe</span>
      </Text>
    </AboutContainer>
  );
};
