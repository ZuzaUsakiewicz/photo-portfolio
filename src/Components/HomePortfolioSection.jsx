import {
  PortfolioSectionContainer,
  GridContainer,
  Card,
  CardLink,
} from "./styles/HomePortfolioSection.styled";
import Bird from "../Assets/bird.jpg";
import Architecture from "../Assets/architecture.jpg";
import Travel from "../Assets/travel.jpg";
import Mountains from "../Assets/mountain.jpg";

export const HomePortfolioSection = () => {
  const topAfterRedirect = () => {
    window.scrollTo(0, 0);
  };

  const cards = [
    {
      name: "birds",
      link: "/photos/?category=birds",
      img: Bird,
      gridCol: "1 / 3",
      gridRow: "1 / 4",
    },
    {
      name: "architecture",
      link: "/photos/?category=architecture",
      img: Architecture,
      gridCol: "3 / 5",
      gridRow: "2 / 5",
    },
    {
      name: "travel",
      link: "/photos/?category=travel",
      img: Travel,
      gridCol: "1 / 3",
      gridRow: "4 / 7",
    },
    {
      name: "mountains",
      link: "/photos/?category=mountains",
      img: Mountains,
      gridCol: "3 / 5",
      gridRow: "5 / 8",
    },
  ];

  return (
    <PortfolioSectionContainer>
      <h2>Portfolio</h2>
      <GridContainer>
        {cards.map((card) => (
          <Card
            key={card.name}
            img={card.img}
            gridCol={card.gridCol}
            gridRow={card.gridRow}
          >
            <span>{card.name}</span>
            <CardLink to={card.link} onClick={topAfterRedirect} />
          </Card>
        ))}
      </GridContainer>
    </PortfolioSectionContainer>
  );
};
