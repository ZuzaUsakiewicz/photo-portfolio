import { useSearchParams } from "react-router-dom";
import { filterByCategory, PHOTOS } from "../photos";
import React, { useMemo, useState } from "react";
import Modal from "./Modal";
import { MainContainer, PhotoGridContainer } from "./styles/PhotoGrid.styled";

export const PhotoGrid = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");
  const [isOpen, setIsOpen] = useState(false);
  const [isPhoto, setIsPhoto] = useState([]);

  const photos = useMemo(() => {
    if (!category) return PHOTOS;
    return filterByCategory(category);
  }, [category]);

  const handlePhotoModal = (photo) => {
    const filteredPhoto = PHOTOS.filter((item) => item.id === photo.id);
    setIsPhoto(filteredPhoto);
    setIsOpen(true);
  };

  return (
    <MainContainer>
      <PhotoGridContainer>
        {photos.map((photo) => {
          let name = `${photo.category} ${photo.name} `;

          return (
            <React.Fragment key={photo.id}>
              <div style={{ position: "relative" }}>
                <img
                  width={200}
                  height={200}
                  src={photo.imageUrl}
                  alt={name}
                  onClick={() => handlePhotoModal(photo)}
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "auto",
                    aspectRatio: "1 / 1",
                  }}
                />
              </div>

              <Modal
                handleClose={() => setIsOpen(false)}
                isOpen={isOpen}
                isPhoto={isPhoto}
              >
                {isPhoto.map((item) => (
                  <div style={{ position: "absolute" }} key={item.id}>
                    <img
                      src={item.imageUrl}
                      alt={name}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "1 / 1",
                      }}
                    />
                    <p>{item.name}</p>
                  </div>
                ))}
              </Modal>
            </React.Fragment>
          );
        })}
      </PhotoGridContainer>
    </MainContainer>
  );
};
