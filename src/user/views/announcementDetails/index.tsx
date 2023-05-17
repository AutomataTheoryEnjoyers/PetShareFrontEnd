import styled from "styled-components";
import { Announcement } from "../../../types/announcement";
import { useParams } from "react-router-dom";
import { ImageElement } from "../../../components/ImageElement";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useState } from "react";
import { useAnnouncements } from "../../../queries/announcements";

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const [isApplicable, _] = useState(true);
  const announcements = useAnnouncements(null);
  const currentAnnouncement = announcements.data?.find(
    (announcement) => announcement.id === id
  ) as Announcement;

  return (
    currentAnnouncement && (
      <AnimatedPage>
        <Container>
          <div id="image">
            <ImageElement pet={currentAnnouncement.pet} />
          </div>
          <div id="pet">
            <PetDetailsElement pet={currentAnnouncement.pet} />
          </div>
          <div id="shelter">
            <ShelterDetailsElement shelter={currentAnnouncement.pet.shelter} />
          </div>
          <div id="details">
            <AnnouncementDetailsElement announcement={currentAnnouncement} />
          </div>
          <div id="apply-button">
            <ApplyButton isApplicable={isApplicable} onClick={() => {/*adopt function*/ }}>{isApplicable ? "Adopt!" : "Withdraw"}</ApplyButton>
          </div>
        </Container>
      </AnimatedPage>
    )
  );
};

const ApplyButton = styled.div<{ isApplicable: boolean }>`
  background: ${(props) => props.isApplicable ? props.theme.colors.main : props.theme.colors.tomato};
  color: #fff;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  padding: 5px;
  font-size: 30px;
  height: 50px;
  font-weight: 600;
  letter-spacing: 5px;
  transition: 0.5s all;
  :hover {
    background: ${(props) => props.isApplicable ? props.theme.colors.darkGreen : props.theme.colors.darkTomato};
  }
`

const Container = styled.div`
  text-align: center;
  display: grid;
  gap: 10px;
  height: 100%;
  height: min(60vh, 600px);
  grid-template-areas:
    "title title title"
    "image image pet"
    "image image shelter"
    "details details details"
    "details details details"
    "user user user"
    "apply apply apply";

  grid-template-columns: 1fr 1fr 1fr;

  #title {
    grid-area: title;
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

  #apply-button{
    grid-area: apply;
  }
`;
