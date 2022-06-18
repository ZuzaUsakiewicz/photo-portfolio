import { useSearchParams } from "react-router-dom";
import { LinkToCategory } from "./styles/PhotosPage.styled";

function CategoryLink({ category, children, ...props }) {
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("category") === category;

  return (
    <LinkToCategory
      to={`/photos/?category=${category}`}
      {...props}
      style={{
        ...props.style,
        borderBottom: isActive ? "2px solid red" : "none",
      }}
    >
      {children}
    </LinkToCategory>
  );
}

export default CategoryLink;
