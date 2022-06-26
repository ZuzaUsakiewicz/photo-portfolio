import { HomeAboutSection } from "../Components/HomeAboutSection";
import { HomeHeroSection } from "../Components/HomeHeroSection";
import { HomeMyEquipment } from "../Components/HomeMyEquipment";
import { HomePortfolioSection } from "../Components/HomePortfolioSection";
import { HomeContactSection } from "../Components/HomeContactSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomePortfolioSection />
      <HomeAboutSection />
      <HomeMyEquipment />
      <HomeContactSection />
    </>
  );
};

export default Home;
