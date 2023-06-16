import styled from "styled-components";
import { Pet } from "../../../types/pet";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useMyPetSingle } from "../../queries/myPetSingle";
import { ClipLoader } from "react-spinners";

export const PetDetails = () => {
  const { id } = useParams();

  const pet = useMyPetSingle(id as string);
  console.log(pet);

  if (pet.isLoading) {
    return (
      <AnimatedPage>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }

  return (
    <AnimatedPage>
      <Container>
        <div id="image">
          <ImageElementDetails pet={pet.data as Pet} />
        </div>
        <div id="shelter">
          {pet.data?.shelter && (
                      <ShelterDetailsElement shelter={pet.data?.shelter} isAdmin={false} />
          )}
        </div>
        <div id="details">
          <PetDetailsElement pet={pet.data as Pet} />
        </div>
      </Container>
    </AnimatedPage>
  );
};

const CenteredBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-items: center;
`;

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-areas:
    "image image details"
    "shelter shelter shelter";

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: max(60vh, auto) auto;

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
