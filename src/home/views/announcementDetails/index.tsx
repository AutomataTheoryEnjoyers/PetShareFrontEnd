import styled from "styled-components";
import { Announcement } from "../../../types/announcement";
import { useParams } from "react-router-dom";
import { ImageElementDetails } from "../../../components/ImageElementDetails";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { AnimatedPage } from "../../../components/animatedPage";
import { useAnnouncements } from "../../../queries/announcements";

export const AnnouncementDetails = () => {
  const { id } = useParams();
  const announcements = useAnnouncements(null);
  const currentAnnouncement = announcements.data?.find(
    (announcement) => announcement.id === id
  ) as Announcement;

  return (
    currentAnnouncement && (
      <AnimatedPage>
        <Container>
          <div id="image">
            <ImageElementDetails pet={currentAnnouncement.pet} />
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
                  <div id="report-button">
                      <ReportButton>
                          Report Announcement
                      </ReportButton>

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
    "user user user"
    "report report report
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


















































































































































































































































";

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

  #apply-button {
    grid-area: report;
  }
`;
const ReportButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    color: white;
    font-weight: bold;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color: red;
        
    padding: 12px 24px; /* Increase the padding to make the buttons bigger */
    font-size: 16px; /* Increase the font size */
`;
