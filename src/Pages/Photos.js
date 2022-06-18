import { Outlet } from "react-router-dom";
import {
  PhotosPageContainer,
  PortfolioNavigation,
  AllPhotosLink,
} from "../Components/styles/PhotosPage.styled";
import { categories } from "../photos";
import CategoryLink from "../Components/CategoryLink";

const Photos = () => {
  return (
    <PhotosPageContainer>
      <h2>Portfolio</h2>
      <PortfolioNavigation>
        <ul>
          <li>
            <AllPhotosLink to="/photos">all photos</AllPhotosLink>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <CategoryLink category={category}>{category}</CategoryLink>
            </li>
          ))}
        </ul>
      </PortfolioNavigation>
      <Outlet />
    </PhotosPageContainer>
  );
};

export default Photos;
