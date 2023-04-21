import styled from "styled-components";
import { Announcement } from "../types/announcement";

type ImageProps = {
  announcement: Announcement;
};

export const ImageElement = ({ announcement }: ImageProps) => {
  const imageUrl = announcement.pet.photo;
  return (
    <ImageContainer>
      <Image src={imageUrl} />
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
`;

const Image = styled.img`
  width: auto;
  max-width: 96%;
  max-height: 96%;
  margin: 1%;
  border-radius: 5px;
  object-fit: cover;
`;
