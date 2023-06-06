import styled from "styled-components";
import { Pet } from "../types/pet";
import { placeholderUrl } from "../placeholderUrl";

type ImageProps = {
  pet: Pet;
};

export const ImageElement = ({ pet }: ImageProps) => {
  const imageUrl = pet.photoUrl;
  return <Image src={imageUrl ? imageUrl : placeholderUrl} />;
};

const Image = styled.img`
  width: 150px;
  border-radius: 5px;
  margin-right: 15px;
  object-fit: cover;
`;
