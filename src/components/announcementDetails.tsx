import styled from "styled-components"
import { Announcement } from "../types/announcement";
import { useMyAnnouncements } from "../shelter/queries/myAnnouncements";
import { useMyPets } from "../shelter/queries/myPets";

type Props = {
  announcement: Announcement
}

export const ImageElement = ({ announcement }: Props) => {
  return <ImageContainer>
    <Image src="https://preview.redd.it/9vpjwej8sopa1.png?width=640&crop=smart&auto=webp&v=enabled&s=89d8d1904862a0d40e86817306404d89a71d9cc6" />
  </ImageContainer>
}

export const PetDetailsElement = ({ announcement }: Props) => {
  const pet = announcement.pet;
  return <PetDetailsContainer>
    <Title>{pet.name}</Title>
    <Header>{pet.species}</Header>
    <Header>{pet.breed}</Header>
    <Header>{pet.birthday.toDateString()}</Header>
    <DescriptionText>{pet.description}</DescriptionText>
  </PetDetailsContainer>
}

const IdContainerElement = ({ announcement }: Props) => {

}

export const AnnouncementDetailsElement = ({ announcement }: Props) => {
  return <AnnouncementDetailsContainer>
    <AnnouncementDetailsContainer_Dates>
      <AnnouncementDetailsContainer_Dates_Left>
        <Header>Created: {announcement.creationDate.toDateString()}</Header>
        <Header>Last Update: {announcement.lastUpdateDate.toDateString()}</Header>
      </AnnouncementDetailsContainer_Dates_Left>
      <AnnouncementDetailsContainer_Dates_Right>
        <Header>Status: {announcement.status}</Header>
        {announcement.closingDate != null && <Header>Closing date: {announcement.closingDate.toDateString()}</Header>}
      </AnnouncementDetailsContainer_Dates_Right>
    </AnnouncementDetailsContainer_Dates>
    <Title>{announcement.title && announcement.title}</Title>
    <DescriptionText>{announcement.description && announcement.description}</DescriptionText>
    <BottomContainer>
      <IdContainer>ID: {announcement.id}</IdContainer>
    </BottomContainer>
  </AnnouncementDetailsContainer>
}

const Title = styled.h1`
  margin: 0;
  padding: 5px;
  font-size: 25px;
`

const Header = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 15px;
`

const Image = styled.img`
  width: auto;
  height: 95%;
  border-radius: 10px;
`

const DescriptionText = styled.p`
  margin: 0;
  padding: 5px;
  font-size: 15px;
`

const PetDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const AnnouncementDetailsContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 12px;
  padding-bottom: 20px;
  background-color: white;
  position: relative;
  text-align: left;
`
const AnnouncementDetailsContainer_Dates = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const AnnouncementDetailsContainer_Dates_Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const AnnouncementDetailsContainer_Dates_Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const BottomContainer = styled.div`
  border-top: 2px solid black;
`

const IdContainer = styled.div`
  padding: 5px;
  float: left;
  font-size: 10px;
`

const ImageContainer = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

