import styled from "styled-components";
import { Pet } from "../types/pet";

const placeholderUrl =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images";

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
