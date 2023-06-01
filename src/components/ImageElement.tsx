import styled from "styled-components";
import { Pet } from "../types/pet";

const placeholderUrl =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus-tuna-sounds-images.voicemod.net%2F8b2da0e8-5f18-4c46-b436-a80629388aa0-1662350742067.jpg&f=1&nofb=1&ipt=56ff424dfc11ad96ed521268ede16776efc3d3ec8c1133b0d0ef15ae352e6d55&ipo=images";

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
