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
  padding: 10px;
  background-color: ${(props) => props.theme.colors.powderWhite};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: auto;
  max-width: 95%;
  max-height: 95%;
  margin: 2%;
  border-radius: 5px;
`;
