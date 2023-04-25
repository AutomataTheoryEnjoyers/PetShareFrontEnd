import styled from "styled-components";
import { Announcement } from "../../../types/announcement";
import { useParams } from "react-router-dom";
import { ImageElement } from "../../../components/ImageElement";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { useAnnouncements } from "../../queries/announcements";
import { AnimatedPage } from "../../../components/animatedPage";

export const AnnouncementDetails = () => {
  const { id } = useParams();

  const announcements = useAnnouncements();
  const currentAnnouncement = announcements.data?.find(
    (announcement) => announcement.id === id
  ) as Announcement;

  return (
    currentAnnouncement && (
      <AnimatedPage>
        <Container>
          <div id="image">
            <ImageElement announcement={currentAnnouncement} />
          </div>
          <div id="pet">
            <PetDetailsElement announcement={currentAnnouncement} />
          </div>
          <div id="shelter">
            <ShelterDetailsElement announcement={currentAnnouncement} />
          </div>
          <div id="details">
            <AnnouncementDetailsElement announcement={currentAnnouncement} />
          </div>
          <div id="apply-button">
            <ApplyButton onClick={() => {/*adopt function*/ }}>Adopt!</ApplyButton>
          </div>
        </Container>
      </AnimatedPage>
    )
  );
};

const ApplyButton = styled.div`
  background: ${(props) => props.theme.colors.main};
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
    background: ${(props) => props.theme.colors.darkGreen};
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
