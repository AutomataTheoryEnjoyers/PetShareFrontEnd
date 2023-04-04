import styled from "styled-components";
import { Announcement } from "../../../types/announcement";
import { useParams } from "react-router-dom";
import { ImageElement } from "../../../components/ImageElement";
import { ShelterDetailsElement } from "../../../components/shelterDetails";
import { AnnouncementDetailsElement } from "../../../components/announcementDetails";
import { PetDetailsElement } from "../../../components/petDetailsElement";
import { useAnnouncements } from "../../queries/announcements";


export const AnnouncementDetails = () => {
  const { id } = useParams()

  const announcements = useAnnouncements();
  const currentAnnouncement = (id == null) ? announcements.data[0] : announcements.data.find((announcement) => announcement.id === id) as Announcement;

  return <Container>
    <div id="image"><ImageElement announcement={currentAnnouncement} /></div>
    <div id="pet"><PetDetailsElement announcement={currentAnnouncement} /></div>
    <div id="shelter"><ShelterDetailsElement announcement={currentAnnouncement} /></div>
    <div id="details"><AnnouncementDetailsElement announcement={currentAnnouncement} /></div>
  </Container>
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

  #title{
    grid-area: title;
  }

  #image{
    grid-area: image;
  }

  #pet{
    grid-area: pet;
  }

  #shelter{
    grid-area: shelter;
  }

  #details{
    grid-area: details
  }
`
