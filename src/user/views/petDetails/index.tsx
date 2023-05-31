import styled from "styled-components";
import { usePets } from "../../queries/pets";
import { Pet } from "../../../types/pet";
import { useParams } from "react-router-dom";
import { ImageElement } from "../../../components/ImageElement";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";


export const PetDetails = () => {
    const { id } = useParams();

    const pets = usePets();
    const currentPet = pets.data?.find(
        (pet) => pet.id === id
    ) as Pet;

    return (
        currentPet && (
            <AnimatedPage>
                <Container>
                    <div id="image">
                        <ImageElement pet={currentPet} />
                    </div>
                    <div id="shelter">
                        <ShelterDetailsElement shelter={currentPet.shelter} />
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
