import { useState } from "react";
import styled from "styled-components";
import { postAnnouncement } from "../../mutations/postAnnouncement";
import { useMyAnnouncements } from "../../queries/myAnnouncements";
import { useMyApplications } from "../../queries/myApplications";
import { ImageElement, PetDetailsElement, AnnouncementDetailsElement, ApplicationListElement, ShelterDetailsElement } from "../../../components/announcementDetails";

export const AnnouncementDetails = () => {
  const announcements = useMyAnnouncements();
  const currentAnnouncement = announcements.data[0];
  const applications = useMyApplications();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [petID, setPetID] = useState(announcements.data ? announcements.data[0].id : "");

  const handleSubmit = () => {
    postAnnouncement({
      Description: description,
      Title: title,
      IDPet: petID
    })
  }

  return <Container>
    <div id="image"><ImageElement announcement={currentAnnouncement} /></div>
    <div id="pet"><PetDetailsElement announcement={currentAnnouncement} /></div>
    <div id="shelter"><ShelterDetailsElement announcement={currentAnnouncement} /></div>
    <div id="details"><AnnouncementDetailsElement announcement={currentAnnouncement} /></div>
    <div id="userlist"><ApplicationListElement announcement={currentAnnouncement} applications={applications.data} /></div>
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

  #title{
    grid-area: title;
  }

  #image{
    grid-area: image;
    height: 500px;
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

  #userlist{
    grid-area: user;
  }
`