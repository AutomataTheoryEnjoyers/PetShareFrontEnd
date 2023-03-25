import { useState } from "react";
import styled from "styled-components";
import { postAnnouncement } from "../../mutations/postAnnouncement";
import { useMyAnnouncements } from "../../queries/myAnnouncements";
import { ImageElement, PetDetailsElement, AnnouncementDetailsElement } from "../../../components/announcementDetails";

export const AnnouncementDetails = () => {
  const { data } = useMyAnnouncements();
  const currentAnnouncement = data[0];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [petID, setPetID] = useState(data ? data[0].id : "");

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
  "image image pet"
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

  #details{
    grid-area: details
  }

`