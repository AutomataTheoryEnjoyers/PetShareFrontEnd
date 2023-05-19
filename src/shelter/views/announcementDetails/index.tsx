import styled from "styled-components";
import { useMyApplications } from "../../queries/myApplications";
import { Announcement } from "../../../types/announcement";
import { useParams } from "react-router-dom";
import { ImageElement } from "../../../components/ImageElement";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { ApplicationApplyList } from "../../../components/applicationApplyList";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAnnouncements } from "../../../queries/announcements";

export const AnnouncementDetails = () => {
  const { id } = useParams();

  const announcements = useAnnouncements(null);
  const currentAnnouncement = announcements.data?.find(
    (announcement) => announcement.id === id
  ) as Announcement;
  const applications = useMyApplications();

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
            <AnnouncementDetailsElement
              announcement={currentAnnouncement}
              isShelter={true}
            />
          </div>
          <div id="userlist">
            <ApplicationApplyList
              announcement={currentAnnouncement}
              applications={applications.data}
            />
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
    "title title title"
    "image image pet"
    "image image shelter"
    "details details details"
    "details details details"
    "user user user";

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

  #userlist {
    grid-area: user;
  }
`;
