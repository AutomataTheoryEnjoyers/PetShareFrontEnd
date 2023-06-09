import styled from "styled-components";
import { useMyPets } from "../../queries/myPets";
import { Pet } from "../../../types/pet";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";

export const PetDetails = () => {
  const { id } = useParams();

  const pets = useMyPets();
  const currentPet = pets.data?.find((pet) => pet.id === id) as Pet;
  console.log(currentPet);

  return (
    currentPet && (
      <AnimatedPage>
        <Container>
          <div id="image">
            <ImageElementDetails pet={currentPet} />
          </div>
          <div id="shelter">
            {currentPet.shelter && (
              <ShelterDetailsElement shelter={currentPet.shelter} />
            )}
          </div>
          <div id="details">
            <PetDetailsElement pet={currentPet} />
          </div>
        </Container>
      </AnimatedPage>
    )
  );
};

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-areas:
    "image image details"
    "image image details"
    "image image details"
    "shelter shelter shelter"
    "shelter shelter shelter"
    "shelter shelter shelter";

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

  #title {
    grid-area: title;
  }

  #image {
    grid-area: image;
  }

  #shelter {
    grid-area: shelter;
  }

  #details {
    grid-area: details;
  }
`;
