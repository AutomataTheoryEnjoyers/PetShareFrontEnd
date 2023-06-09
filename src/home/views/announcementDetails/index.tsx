import styled from "styled-components";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useGetAnnouncementSingle } from "../../../queries/getAnnouncementSingle";
import { ClipLoader } from "react-spinners";

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const announcement = useGetAnnouncementSingle(id as string);

  if (announcement.isLoading) {
    return (
      <AnimatedPage>
        <CenteredBox>
          <ClipLoader />
        </CenteredBox>
      </AnimatedPage>
    );
  }





    return (
        announcement && (
            <AnimatedPage>
                <Container>
                    <div id="image">
                        <ImageElementDetails pet={announcement.data!.pet} />
                    </div>
                    <div id="pet">
                        <PetDetailsElement pet={announcement.data!.pet} />
                    </div>
                    <div id="shelter">
                        <ShelterDetailsElement shelter={announcement.data!.pet.shelter} isAdmin={ false} />
                    </div>
                    <div id="details">
                        <AnnouncementDetailsElement announcement={announcement.data!} />
                    </div>
                </Container>
            </AnimatedPage>
        )
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
    "title title title"
    "report report report"
    "image image pet"
    "image image shelter"
    "details details details"
    "details details details"
    "user user user";

  grid-template-columns: 1fr 1fr 1fr;

  #title {
    grid-area: title;
  }

  #report-button {
    grid-area: report;
    display: flex;
    justify-content: flex-end;
  }

  #image {
    grid-area: image;
  }

  #pet {
    grid-area: pet;
  }

  #shelter {
    grid-area: shelter;
  }

  #details {
    grid-area: details;
  }
`;

