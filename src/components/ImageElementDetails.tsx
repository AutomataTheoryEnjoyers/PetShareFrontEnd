import styled from "styled-components";
import { Pet } from "../types/pet";
import { placeholderUrl } from "../placeholderUrl";

type ImageProps = {
  pet: Pet;
};

export const ImageElementDetails = ({ pet }: ImageProps) => {
  const imageUrl = pet.photoUrl;
  return (
    <ImageContainer>
      <Image src={imageUrl ? imageUrl : placeholderUrl} />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 0;
  background-color: ${(props) => props.theme.colors.powderWhite};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;

const Image = styled.img`
  width: auto;
  max-width: 96%;
  max-height: 96%;
  margin: 1%;
  border-radius: 5px;
  object-fit: cover;
`;
